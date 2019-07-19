const assert = require("assert");
process.argv
  .slice(2)
  .map(file => require(file))
  .forEach(resources => assert(resources.length === 0));
