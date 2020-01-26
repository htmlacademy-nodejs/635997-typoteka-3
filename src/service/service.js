'use strict';

const {Cli} = require(`./cli`);
const {
  DEFAULT_COMMAND,
  USER_ARGV_INDEX,
  ExitCode
} = require(`../constants`);

const userArguments = process.argv.slice(USER_ARGV_INDEX);
const [userCommand] = userArguments;

if (userArguments.length === 0 || !Cli[userCommand]) {
  Cli[DEFAULT_COMMAND].run();
  process.exit(ExitCode.success);
}

// eslint-disable-next-line radix
if (Number.parseInt(userArguments[1]) >= 1000) {
  console.error(`Не больше 1000 публикаций`);
  process.exit(ExitCode.error);
}

Cli[userCommand].run(userArguments.slice(1));
