import fs from 'fs-extra'
import path from 'path'
import prompts from 'prompts'
import { fileURLToPath } from 'node:url'
import ora from 'ora'
import chalk from 'chalk'
import { templateQuestion, duplicateNameQuestion, reNameQuestion, templateNameQuestion, cancel } from './question.js'

const isHasSameDirectory = projectName => {
  const targetDir = path.join(process.cwd(), projectName)
  return fs.existsSync(targetDir)
}

const downloadTemplate = async projectName => {
  const spinner = ora("模版下载中 ...")
  const { features } = await prompts(templateQuestion, cancel)
  if (features) {
    const { name } = templateQuestion.choices.find(item => item.value === features)
    const link = path.resolve(fileURLToPath(import.meta.url), '../..', `template/${name}`)
    spinner.start()
    fs.copySync(link, `${process.cwd()}/${projectName}`)
    spinner.succeed()
    console.info(chalk.green('下载模板成功~\n'))
    console.info(`cd ${projectName}`)
    console.info('npm install')
    console.info('npm run dev\n')
    spinner.stop()
  }
}

export const getTemplateName = async () => {
  try {
    const { name } = await prompts(templateNameQuestion, cancel)
    if (name) {
      checkUserDirectory(name)
    }
  } catch (err) {
    console.log('err:', err)
  }
}

export const checkUserDirectory = async name => {
  if (isHasSameDirectory(name)) {
    const { duplicateName } = await prompts(duplicateNameQuestion, cancel)
    if (duplicateName === 'overWrite') {
      const targetDir = path.join(process.cwd(), name)
      const spinner = ora(`正在删除 ${chalk.cyan(targetDir)}...`)
      spinner.start()
      try {
        await fs.remove(targetDir)
        spinner.succeed()
      } catch {
        spinner.fail()
      } finally {
        spinner.stop()
      }
      downloadTemplate(name)
    }
    if (duplicateName === 'rename') {
      const { newName } = await prompts(reNameQuestion, cancel)
      checkUserDirectory(newName)
    }
  } else {
    downloadTemplate(name)
  }
}
