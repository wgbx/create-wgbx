import chalk from "chalk"

export const templateNameQuestion = [
  {
    name: "name",
    initial: "vue3-project",
    when: answers => answers,
    type: "text",
    message: "请输入项目名称:",
  },
]

export const templateQuestion = {
  name: "features",
  message: "请选择要创建的项目模板",
  type: "select",
  choices: [
    {
      name: "base-pc",
      value: "pc模板",
      description: "基于vite构建的vue3基础项目pc版本",
    },
    {
      name: "base-m",
      value: "m模板",
      description: "基于vite构建的vue3基础项目m版本",
    },
    {
      name: "rollup-compile",
      value: "rollup编译库包",
      description: "基于rollup构建的包版本",
    },
  ],
}

export const duplicateNameQuestion = [
  {
    type: "select",
    name: "duplicateName",
    message: "当前目录已存在，请选择",
    choices: [
      { title: "覆盖文件", value: "overWrite" },
      { title: "重命名文件", value: "rename" },
    ],
  },
]

export const reNameQuestion = [
  {
    name: "newName",
    type: "text",
    message: "目录名称为:",
  },
]

export const cancel = {
  onCancel: () => {
    console.log(chalk.red("✖ 用户已取消创建模板"))
  },
}
