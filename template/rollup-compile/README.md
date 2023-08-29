<h1 align="center">unused-assets-webpack-plugin</h1>
<p align="center">查找项目中是否存在是否未使用的资源</p>

## 配置项

| **配置项名称** | **是否必须** | **含义**           | **默认值** | **类型**  |
| -------------- | ------------ | --------           | ---------- | --------  |
| `path`    | 否           | 查找的资源路径 | ./src        | `string`  |
| `output`    | 否           | 输出的文件路径 | ./unused-files.json   |`string` |
| `exclude`    | 否           | 排除的文件类型 | []      | `string[]` |

## 安装

```bash
npm install unused-assets-webpack-plugin -D
// or
pnpm add unused-assets-webpack-plugin -D
```

## 用法

- vue.config.js

```js
const UnusedAssetsWebpackPlugin = require('unused-assets-webpack-plugin')

module.exports = {
  configureWebpack: {
    plugins: [new UnusedAssetsWebpackPlugin()]
  }
}
```
