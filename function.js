let count = 0;
let str = "i am shubham";
let vowel = (str) => {
  for (const key of str) {
    if (
      key === "i" ||
      key === "e" ||
      key === "o" ||
      key === "u" ||
      key === "a"
    ) {
      count++;
    }
  }
  console.log(count);
};

vowel(str);
