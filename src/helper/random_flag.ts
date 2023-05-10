interface IChoice {
  [key: string]: string[];
}

const CHOICE: IChoice = {
  A: ["a", "4", "@", "A"],
  B: ["b", "8", "B"],
  C: ["c", "C"],
  D: ["d", "D"],
  E: ["e", "3", "E"],
  F: ["f", "F"],
  G: ["g", "6", "9", "G"],
  H: ["h", "H"],
  I: ["i", "1", "I", "!"],
  J: ["j", "J"],
  K: ["k", "K"],
  L: ["l", "1", "L"],
  M: ["m", "M"],
  N: ["n", "N"],
  O: ["o", "0", "O"],
  P: ["p", "P"],
  Q: ["q", "Q"],
  R: ["r", "R"],
  S: ["s", "5", "$", "S"],
  T: ["t", "7", "T"],
  U: ["u", "U"],
  V: ["v", "V"],
  W: ["w", "W"],
  X: ["x", "X"],
  Y: ["y", "Y"],
  Z: ["z", "2", "Z"],
};

const Random_flag = (str: string) => {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const char: string = str[i].toUpperCase();

    if (char === " ") {
      result += "_";
    } else if (CHOICE[char] === undefined) {
      result += char;
    } else {
      const random = Math.floor(Math.random() * CHOICE[char].length);
      result += CHOICE[char][random];
    }
  }

  return result;
};

export default Random_flag;
