const { pinyin } = require('pinyin-pro');
const one = require("./three.json")
const fs = require("fs")

const loop = (dataList) => {
  const list = []
  for (let index = 0; index < dataList.length; index++) {
    const item = dataList[index];
    const [first] = item.topic
    let value = typeof first === "string" ? first : first.children
    // const py = pinyin(value[0], { pattern: 'initial', type: 'array' })
    const sortValue = `${value[0]}`.toLowerCase();
    item.sortValue = sortValue
    list.push(item)
  }
  fs.writeFileSync("./one2.json", JSON.stringify(list, null, 2), { flag: "w+", encoding: "utf8" })
}
loop(one)