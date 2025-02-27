#!/usr/bin/env node

const program = require('commander')
const { version } = require('../package.json')
const { green, red } = require('chalk')
const cimi = require('../lib/index')

program
  .version(version, '-v, --version')
  .option('patch', 'patch your new npm package')
  .option('minor', 'minor your new npm package')
  .option('major', 'major your new npm package')
  .option('patchBeta', 'patch your new beta npm package')
  .option('minorBeta', 'minor your new beta npm package')
  .option('majorBeta', 'major your new beta npm package')
  .on('--help', () => {
    console.log('\n  Tip:\n')
    console.log(
      '    You should run this script in the root directory of you project or run by npm scripts.'
    )
    console.log('\n  Examples:\n')
    console.log(`    ${green('$')} cimi patch [branch] (default: master)`)
    console.log(`    ${green('$')} cimi minor [branch] (default: master)`)
    console.log(`    ${green('$')} cimi major [branch] (default: master)`)
    console.log(`    ${green('$')} cimi patch--beta [branch] (default: master)`)
    console.log(`    ${green('$')} cimi minor--beta [branch] (default: master)`)
    console.log(`    ${green('$')} cimi major--beta [branch] (default: master)`)
    console.log('')
  })
  .parse(process.argv)

cimi(program).catch((err) => {
  console.error(`${red(err)}`)
  process.exit(1)
})
