const assert = require("assert");
const fs = require("fs");
const path = require("path");

process.argv
  .slice(2)
  .map(folder => path.join(__dirname, folder))
  .flatMap(folder =>
    fs.readdirSync(folder).map(file => path.join(folder, file))
  )
  .flatMap(folder =>
    fs.readdirSync(folder).map(file => path.join(folder, file))
  )
  .map(file => [
    file,
    JSON.parse(fs.readFileSync(path.join(file + "/resources.json").toString()))
  ])
  .forEach(([file, resources]) =>
    assert(
      resources.length === 0,
      "policy filter found matching resource: " + path.relative(__dirname, file)
    )
  );