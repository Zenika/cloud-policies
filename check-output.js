const assert = require("assert");
process.argv
  .slice(2)
  .map(file => [file, require(file)])
  .forEach(([file, resources]) =>
    assert(
      resources.length === 0,
      "policy filter found matching resource: " + file
    )
  );
