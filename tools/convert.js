const utils = require("./utils");
const fse = require("fs-extra");

Promise.all([
  fse.copy("../.next", "output/.next"),
  fse.copy("../app", "output/app"),
  fse.copy("../src", "output/src"),
  fse.copy("../.env", "output/.env"),
  fse.copy("../.gitignore", "output/.gitignore"),
  fse.copy("../public", "output/public"),
  fse.copy("../sanity", "output/sanity"),
  fse.copy("../package.json", "output/package.json"),
  fse.copy("../README.md", "output/README.md"),
  fse.copy("../sanity.cli.ts", "output/sanity.cli.ts"),
  fse.copy("../sanity.config.ts", "output/sanity.config.ts"),
])
  .then(() => {
    utils.createJsConfig("output/jsconfig.json");

    const allFiles = utils.buildTree("output/src");
    utils.transformTsToJs(allFiles);
  })
  .catch((err) => console.log(err));
