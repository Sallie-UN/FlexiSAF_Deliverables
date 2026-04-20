const wordsArr = [
  "frontend",
  "development",
  "coding",
  "interface",
  "pixel",
  "responsive",
  "browser",
  "grid",
  "flexbox",
  "dynamic",
  "logic",
  "deployment",
  "curriculum",
  "beginner",
  "mastery",
];

const generateBtn = document.getElementById("generateBtn");
const output = document.getElementById("output");
const copyBtn = document.getElementById("copyBtn");

function getRandomWord() {
  return wordsArr[Math.floor(Math.random() * wordsArr.length)];
}

function generateSentence() {
  let sentence = [];
  let length = Math.floor(Math.random() * 5) + 5;
  for (let i = 0; i < length; i++) {
    sentence.push(getRandomWord());
  }
  let str = sentence.join(" ");
  return str.charAt(0).toUpperCase() + str.slice(1) + ".";
}

generateBtn.addEventListener("click", () => {
  const type = document.getElementById("type").value;
  const count = document.getElementById("count").value;
  let result = [];

  if (type === "words") {
    for (let i = 0; i < count; i++) result.push(getRandomWord());
    output.innerText = result.join(", ");
  } else if (type === "sentences") {
    for (let i = 0; i < count; i++) result.push(generateSentence());
    output.innerText = result.join(" ");
  } else {
    for (let i = 0; i < count; i++) {
      let p = [];
      for (let j = 0; j < 4; j++) p.push(generateSentence());
      result.push(p.join(" "));
    }
    output.innerText = result.join("\n\n");
  }
});

// Copy Functionality
copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(output.innerText);
  alert("Copied to clipboard!");
});
