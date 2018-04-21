import Layer from '../../layout/layer/layer.js'
import Head from '../../layout/head/head.js'

var l = new Layer()
var h = new Head()
const div = document.createElement('div')
div.innerHTML = l.tpl
document.body.appendChild(div)
div.innerHTML = h.tpl({ name: '111111', iVal: 8 })
document.body.appendChild(div)
// document.body.appendChild(l.tpl)
