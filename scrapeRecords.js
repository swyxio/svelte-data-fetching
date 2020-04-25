const fs = require("fs");
const path = require("path");

const dir = fs.readdirSync(path.resolve("./records"));
let data = dir
  .map((file) => {
    const obj = JSON.parse(fs.readFileSync(path.resolve("./records/" + file)));
    obj.file = file;
    return obj;
  })
  .filter((a) => a.authors.includes("Stan Lee"))
  .sort((b, a) => a.ranking.storyCount - b.ranking.storyCount);

fs.writeFileSync("records.json", JSON.stringify(data));
