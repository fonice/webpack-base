超轻量化前端模板框架，可打包，可热刷新试，集成EJS，SASS, eslint

## How to use

First, install

```bash
npm i
```

因为webpack 4 的问题，` extract-text-webpack-plugin ` 要这样安装

```bash
npm i -D extract-text-webpack-plugin@next
```

**生成静态文件，打包**
```bash
npm run bulid
```
<br>

**运行调试**
```bash
npm run dev
```
运行完指令 默认访问地址：`http://192.168.0.88:1388/`
如需要更改在 ` bulid/webpack.config.client.js `

<br><br>

**检测代码**
```bash
npm run lint
```

**修复代码**
```bash
npm run lint-fix
```
