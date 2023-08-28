#! /usr/bin/env node
import { program } from 'commander'
import chalk from 'chalk'
import { checkUserDirectory, getTemplateName } from '../libs/utils.js'

program.on('command:*', ([cmd]) => {
  if (cmd) {
    checkUserDirectory(cmd)
  }
})

if (!process.argv.slice(2).length) {
  console.log(chalk.cyan('欢迎使用微光北下前端构建工具'))
  getTemplateName()
}

program.parse(process.argv)
