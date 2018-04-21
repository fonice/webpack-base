const layout = require('./template.ejs')
const header = require('./head/header.ejs') // 页头的模板

/* 整理渲染公共部分所用到的模板变量 */

const pf = {
  pageTitle: ''
}
const moduleExports = {
  pageTitle: '这是头部',
  headerJS: '',
  headerCSS: '',
  header: '',
  content: '',
  footer: '',
  footerJS: '',
  /* 处理各个页面传入而又需要在公共区域用到的参数 */
  // init() {
  //     // pf.pageTitle = this.tit+pageTitle // 比如说页面名称，会在<title>或面包屑里用到
  //
  //     //console.log('pf.pageTitle'+pf.pageTitle)
  //
  //     return this
  // },
  /* 整合各公共组件和页面实际内容，最后生成完整的HTML文档 */
  run (content) {
    const componentRenderData = pf
    const renderData = {
      pageTitle: this.pageTitle,
      headerJS: this.headerJS,
      headerCSS: this.headerCSS,
      header: header(componentRenderData),
      content: this.content,
      footer: this.footer,
      footerJS: this.footerJS
    }
    return layout(renderData)
  }
}

module.exports = moduleExports
