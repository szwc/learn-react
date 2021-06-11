// 不适应路由

import React from 'react'
import ReactDom from 'react-dom'
// import App from './views/router-base'  // 基础用法 嵌套路由
// import AuthExample from './views/redirect.jsx' // 重定向
import RouteConfigExample from './views/routerConfig.jsx' // 路由配置例子
ReactDom.render(
  <RouteConfigExample/>,
  document.getElementById('root')
)


