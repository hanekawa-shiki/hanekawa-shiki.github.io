---
article: false
---
# 第三方UI库

## antd

这里只介绍下[antd](https://ant-design.gitee.io/index-cn)的安装使用

```md
1.安装依赖：yarn add react-app-rewired customize-cra babel-plugin-import less less-loader
2.修改package.json
    ....
      "scripts": {
        "start": "react-app-rewired start",
        "build": "react-app-rewired build",
        "test": "react-app-rewired test",
        "eject": "react-scripts eject"
      },
    ....
3.根目录下创建config-overrides.js
    //配置具体的修改规则
    const { override, fixBabelImports,addLessLoader} = require('customize-cra');
    module.exports = override(
      fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      }),
      addLessLoader({
        lessOptions:{
          javascriptEnabled: true,
          modifyVars: { '@primary-color': 'green' },
        }
      }),
    );
4.备注：不用在组件里亲自引入样式了，即：import 'antd/dist/antd.css'应该删掉
```