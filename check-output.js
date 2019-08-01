const fs = require("fs");
const path = require("path");

const matchingResources = process.argv
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
  .filter(([file, resources]) => resources.length == 0)
  .map(([file, resources]) => file);

if (matchingResources.length > 0) {
  console.error(`There is some problems with resources present in the following files ${matchingResources.join(", ")}`)
  return process.exit(1);
}
