const fs = require("fs")
const path = require("path")

const contentString = fs.readFileSync("./txt.txt", { encoding: "utf8" })
const list = contentString.split("\n")
const newData = [];

let newItem = {
  sort: 0,
  title: [],
  options: undefined,
}
let count = 0;

for (let index = 0; index < list.length; index++) {
  const itemStr = list[index];
  if (/^[0-9]{1,3}\./.test(itemStr)) {
    const title = itemStr.replace(/^[0-9]{1,3}\./, '').trim().replace(/(A|B|C|D)$/, '').trim()
    count++;
    newItem = { id: count, topic: [title] }
    newData.push(newItem)
  } else {
    // 判断是否是A开头的
    const str = itemStr.trim()
    if (/^A/.test(str)) {
      const list = itemStr.split(/[A-Z] /).map((ite) => {
        const strTrim = ite.trim();
        if (strTrim) {
          return { label: strTrim.replace(/\t/, '').trim() }
        }
        return ""
      }).filter(Boolean)
      newItem.options = list;
    } else {
      newItem.title.push(itemStr.trim())
    }
  }
}

fs.writeFileSync('data2.json', JSON.stringify(newData, null, 2), { encoding: "utf8", flag: "w+" })