const fs = require("fs")
const path = require("path")
const { pinyin } = require('pinyin-pro');

// const contentString = fs.readFileSync("./txt.txt", { encoding: "utf8" })

const contentString = `
1. When did most people from India arrive in London?
A The 1950s and 60s.
B The 1950s.
C The 1960s.
2. How often does a typical family have a curry?
A Two times.
B Every two weeks.
C Two weeks.
3. Where do many Polish people live?
A The east of the city.
B Catholic churches.
C The Hammersmith area.
4. Why do Polish people come to London?
A They can earn three times as much money in the UK.
B Unemployment remains high in the UK.
C They are growing rapidly.
5. What kind of traditional West Africa foods do markets sell?
A Ghana and Nigeria.
B Languages, music and culture.
C Yams and different types of rice.
`

const list = contentString.split("\n")
const newData = [];

let newItem = {
  sort: 0,
  title: [],
  options: undefined,
}
let count = 110;
let is = undefined
let isCount = 0

for (let index = 0; index < list.length; index++) {
  const itemStr = list[index];
  if (/^[0-9]{1,3}\./.test(itemStr)) {
    is = undefined
    isCount = 0
    const title = itemStr.replace(/^[0-9]{1,3}\./, '').trim()
    if (/A$/.test(title)) {
      is = 1
    }
    if (/B$/.test(title)) {
      is = 2
    }
    if (/C$/.test(title)) {
      is = 3
    }
    if (/D$/.test(title)) {
      is = 4
    }
    const [first] = title
    let sortValue;
    if (/[a-zA-Z]/.test(first)) {
      sortValue = first
    } else {
      const py = pinyin(first, { pattern: 'initial', type: 'array' })
      sortValue = py?.[0]?.[0] || first[0]
    }
    count++;
    newItem = { sort: count, sortValue: sortValue.toLowerCase(), title: [title.replace(/(A|B|C|D)$/, '').trim()], options: [] }
    newData.push(newItem)
  } else {
    // 判断是否是A开头的
    const str = itemStr.trim()
    if (/^([A-D]?.\.|[A-D]?.\、)/.test(str)) {
      // 判断是否是A开头的
      const str = itemStr.trim()
      if (/^([A-D]?.\.|[A-D]?.\、)/.test(str)) {
        const list = itemStr.split(/[A-D]\./).map((ite) => {
          const strTrim = ite.trim();
          if (strTrim) {
            const item = { label: strTrim.replace(/\t/, '').trim() }
            isCount++;
            if (isCount === is) {
              item.is = true
            }
            return item
          }
          return ""
        }).filter(Boolean)
        console.log("list", list)
        newItem.options.push(...list)
      }
    } else {
      if (itemStr.trim()) {
        if (/^答案/.test(itemStr.trim())) {

        } else {
          newItem.title.push(itemStr.trim())
        }
      }
    }
  }
}

fs.writeFileSync('data2.json', JSON.stringify(newData, null, 2), { encoding: "utf8", flag: "w+" })