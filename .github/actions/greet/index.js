const core = require("@actions/core");
// const github = require("@actions/github");

const name = core.getInput("name", { required: true });

core.info(`inputted text: ${name}`);
core.setOutput("greet", `Hello ${name}`);
