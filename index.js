#!/usr/bin/env node

const program = require('commander');
const user = require('./github/user');
const orgs = require('./github/orgs');
const auth = require('./github/auth');
const team = require('./github/team');

program
  .version('0.0.1')
  .description('tegtig system');

program
  .command('user <name>')
  .alias('u')
  .description('Get user')
  .action(username => user.getUser(username));

program
  .command('uid <name>')
  .description('Get user identifier')
  .action(username => user.getUserIdentifier(username));

program
  .command('org <org>')
  .alias('o')
  .description('Get organization')
  .action(org => orgs.getOrg(org));

program
  .command('teamusers <org> <team_slug>')
  .alias('tu')
  .description('Get team users')
  .action((org, team_slug) => team.getTeamMembers(org, team_slug));

program
  .command('var')
  .description('Get env variables')
  .action(username => auth.getVariables(username));

program.parse(process.argv);
