const program = require('commander');
const { getUser } = require('./gbuser');

program
  .version('0.0.1')
  .description('tegtig system');

program
  .command('user <name>')
  .alias('u')
  .description('Get user')
  .action(username => getUser(username));

program.parse(process.argv);
