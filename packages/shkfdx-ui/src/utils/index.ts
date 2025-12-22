
export const letterEnum: Record<string, string> = {
  "0": "A",
  "1": "B",
  "2": "C",
  "3": "D",
  "4": "E",
  "5": "F",
  "6": "G",
  "7": "H",
  "8": "I",
  "9": "J",
  "10": "K",
  "11": "L",
  "12": "M",
  "13": "N",
  "14": "O",
  "15": "P",
  "16": "Q",
  "17": "R",
  "18": "S",
  "19": "T",
  "20": "U",
  "21": "V",
  "22": "W",
  "23": "X",
  "24": "Y",
  "25": "Z",
}

export function randomArray<T = any>(array: T[]) {
  const newList = [...array]
  const sort = localStorage.getItem("sort") !== "false"
  if (sort) {
    for (let i = newList.length - 1; i > 0; i--) {
      // 生成一个0到i之间的随机整数
      const j = Math.floor(Math.random() * (i + 1));
      // 交换元素 array[i] 和 array[j]
      [newList[i], newList[j]] = [newList[j], newList[i]];
    }
  }
  return newList;
}
