# 微光北下移动端基础框架

### 项目说明

脚手架为微光北下移动端定制，项目运行时已部署 eslint 丶 prettier 丶 vite，开箱即用，开发时已安装 vue-router 丶 pinia

### 启动

安装依赖

```bash
$ pnpm install
```

启动服务

```bash
$ pnpm dev
```

### 技术栈

vite 丶 vue-router 丶 router 丶 pinia

### 目录说明

```
.
├── public              此目录下所有文件会被 copy 到输出路径
├── .commitlintrc.js 		git commit提交格式文档
├── .editorconfig				编码样式
├── .eslintrc.js				eslint配置
├── .gitlab-ci				  gitlab配置
├── .prettierrc.js			prettier配置
├── vite.config				  vite配置
└── src
    ├── api		          接口
    ├── assets				  资源
    ├── components			组件
    ├── icons			      图标
    ├── layout			    页面布局
    ├── router			    路由
    ├── store			      pinia
    ├── styles			    样式
    ├── utils			      方法
    ├── views			      页面
```

### 提交说明

git commit 阶段会运行 husky 脚本，会执行以下操作

1.针对改动的文件执行 prettier 格式化

2.对提交的 commit 信息进行格式校验
