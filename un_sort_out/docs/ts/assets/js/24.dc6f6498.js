(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{230:function(t,s,a){"use strict";a.r(s);var n=a(2),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"ts-axios-编译与发布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ts-axios-编译与发布","aria-hidden":"true"}},[t._v("#")]),t._v(" ts-axios 编译与发布")]),t._v(" "),a("h2",{attrs:{id:"需求分析"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需求分析","aria-hidden":"true"}},[t._v("#")]),t._v(" 需求分析")]),t._v(" "),a("p",[t._v("前面的章节我们完成 "),a("code",[t._v("ts-axios")]),t._v(" 库的代码编写和单元测试。这一章我们希望把代码部署发布到公共 "),a("code",[t._v("npm")]),t._v(" 上，供别人下载使用。但是并不是所有人都会使用 TypeScript 开发，仍然有大量的 JavaScript 用户，它们是不能直接引用 TypeScript 代码的，因此我们需要先对源码做编译和打包，然后再发布。")]),t._v(" "),a("p",[t._v("由于我们会把包发布到公共的 npm 源，如果你还没有 "),a("code",[t._v("npm")]),t._v(" 账号，那么需要先去"),a("a",{attrs:{href:"https://www.npmjs.com/signup",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网注册"),a("OutboundLink")],1),t._v("。注册完成后，可以去终端执行 "),a("code",[t._v("npm login")]),t._v(" 登录。这个步骤非常重要，决定你最终能否发布成功。")]),t._v(" "),a("h2",{attrs:{id:"编译和打包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编译和打包","aria-hidden":"true"}},[t._v("#")]),t._v(" 编译和打包")]),t._v(" "),a("p",[t._v("我们会利用 "),a("a",{attrs:{href:"https://github.com/rollup/rollup",target:"_blank",rel:"noopener noreferrer"}},[t._v("rollup"),a("OutboundLink")],1),t._v(" 来打包我们的 "),a("code",[t._v("ts-axios")]),t._v(" 库，它是一个非常著名的编译打包工具，Vue.js 也是利用 rollup 编译打包的。相比 webpack，它非常适合去编译和打包一些 JS 库。")]),t._v(" "),a("p",[t._v("由于使用 "),a("code",[t._v("typescript-library-starter")]),t._v(" 初始化我们的项目，我们已经拥有了 rollup 打包的相关配置和相关插件的安装，接下来我们就来对生成的 "),a("code",[t._v("rollup.config.ts")]),t._v(" 做小小的修改。")]),t._v(" "),a("h3",{attrs:{id:"修改-rollup-config-ts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-rollup-config-ts","aria-hidden":"true"}},[t._v("#")]),t._v(" 修改 rollup.config.ts")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" resolve "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rollup-plugin-node-resolve'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" commonjs "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rollup-plugin-commonjs'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" sourceMaps "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rollup-plugin-sourcemaps'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" camelCase "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'lodash.camelcase'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" typescript "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rollup-plugin-typescript2'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" json "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'rollup-plugin-json'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" pkg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./package.json'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" libraryName "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'axios'")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`src/index.ts`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  output"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pkg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("main"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("camelCase")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("libraryName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'umd'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sourcemap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" file"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" pkg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" format"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'es'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" sourcemap"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')")]),t._v("\n  external"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  watch"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    include"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'src/**'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Allow json resolution")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" Compile TypeScript files\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("typescript")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" useTsconfigDeclarationDir"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" Allow bundling cjs "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("modules")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("unlike webpack"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" rollup doesn't understand cjs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("commonjs")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" Allow node_modules resolution"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" so you can use "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'external'")]),t._v(" to control\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" which external modules to include "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the bundle\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" https"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("github"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("rollup"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("rollup"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("plugin"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("node"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("resolve#usage\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("resolve")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" Resolve source maps to the original source\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sourceMaps")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("注意要修改的地方，把 "),a("code",[t._v("libraryName")]),t._v(" 修改为 "),a("code",[t._v("axios")]),t._v("，"),a("code",[t._v("input")]),t._v(" 修改为 "),a("code",[t._v("src/index.ts")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("rollup")]),t._v(" 的配置很简单，我们简单地过一下。")]),t._v(" "),a("ul",[a("li",[t._v("input")])]),t._v(" "),a("p",[t._v("表示打包入口文件。")]),t._v(" "),a("ul",[a("li",[t._v("output")])]),t._v(" "),a("p",[t._v("表示输出的目标文件，它是一个对象数组，我们可以指定输出的格式，比如 "),a("code",[t._v("umd")]),t._v(" 格式、"),a("code",[t._v("es")]),t._v(" 模式等。")]),t._v(" "),a("ul",[a("li",[t._v("external")])]),t._v(" "),a("p",[t._v("声明它的外部依赖，可以不被打包进去。")]),t._v(" "),a("ul",[a("li",[t._v("watch")])]),t._v(" "),a("p",[t._v("监听文件的变化，重新编译，只有在编译的时候开启 "),a("code",[t._v("--watch")]),t._v(" 才生效。")]),t._v(" "),a("ul",[a("li",[t._v("plugins")])]),t._v(" "),a("p",[t._v("编译过程中使用的插件，其中 "),a("code",[t._v("rollup-plugin-typescript2")]),t._v(" 就是用来编译 TypeScript 文件，"),a("code",[t._v("useTsconfigDeclarationDir")]),t._v(" 表示使用 "),a("code",[t._v("tsconfig.json")]),t._v(" 文件中定义的 "),a("code",[t._v("declarationDir")]),t._v("。其它插件感兴趣的同学可以自己去查阅文档。")]),t._v(" "),a("h3",{attrs:{id:"修改-package-json"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-package-json","aria-hidden":"true"}},[t._v("#")]),t._v(" 修改 package.json")]),t._v(" "),a("p",[t._v("由于我们已经在 "),a("code",[t._v("rollup.config.ts")]),t._v(" 中修改了 "),a("code",[t._v("libraryName")]),t._v(" 为 "),a("code",[t._v("axios")]),t._v("， 那么在 "),a("code",[t._v("package.json")]),t._v(" 文件中你需要做相关的修改：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"main"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist/axios.umd.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist/axios.es5.js"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"typings"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"dist/types/index.d.ts"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("然后我们在控制台执行 "),a("code",[t._v("npm run build")]),t._v("，会编译输出 "),a("code",[t._v("dist")]),t._v(" 目录，其中 "),a("code",[t._v("lib")]),t._v(" 目录是单个 "),a("code",[t._v(".ts")]),t._v(" 文件编译后的 "),a("code",[t._v(".js")]),t._v(" 文件。"),a("code",[t._v("types")]),t._v(" 目录是所有 "),a("code",[t._v(".ts")]),t._v(" 文件编译后生产的 "),a("code",[t._v(".d.ts")]),t._v(" 声明文件。"),a("code",[t._v("axios.es5.js")]),t._v(" 是编译后生成的 es 模式的入口文件，用在 "),a("code",[t._v("package.json")]),t._v(" 的 "),a("code",[t._v("module")]),t._v(" 字段，"),a("code",[t._v("axios.umd.js")]),t._v(" 文件是编译后生成的 "),a("code",[t._v("umd")]),t._v(" 模式的入口文件，用在 "),a("code",[t._v("package.json")]),t._v(" 的 "),a("code",[t._v("main")]),t._v(" 字段。")]),t._v(" "),a("h2",{attrs:{id:"自动化部署"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自动化部署","aria-hidden":"true"}},[t._v("#")]),t._v(" 自动化部署")]),t._v(" "),a("p",[t._v("由于 "),a("code",[t._v("semantic-release")]),t._v(" 插件过于黑盒也略微重量，我还是决定教同学们自己编写自动化部署脚本，这样更灵活，意义也更大，因为大部分场景是用不到那么多 feature 的。")]),t._v(" "),a("h3",{attrs:{id:"修改-package-json-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-package-json-2","aria-hidden":"true"}},[t._v("#")]),t._v(" 修改 package.json")]),t._v(" "),a("p",[t._v("发布到 npm 之前你需要为你的包命名，由于 "),a("code",[t._v("ts-axios")]),t._v(" 这个名字已经被占用了，我使用了 "),a("code",[t._v("ts-axios-new")]),t._v(" 这个名称，当然你学到这里，就需要起一个新名字了。可以使用 "),a("code",[t._v("npm view [<@scope>/]<pkg>[@<version>]")]),t._v(" 的方式去搜索一个包名是否已经存在，比如你搜索 "),a("code",[t._v("npm view ts-axios-new")]),t._v(" 会发现这个包已经存在，返回这个包相关信息。如果你搜索 "),a("code",[t._v("npm view xxxx")]),t._v(" 返回错误 404 的话，那么你就可以使用 "),a("code",[t._v("xxxx")]),t._v(" 这个包名了。")]),t._v(" "),a("p",[t._v("如果你想让你发布的包关联你的仓库地址，可以配置 "),a("code",[t._v("repository")]),t._v(" 的 "),a("code",[t._v("url")]),t._v(" 字段。")]),t._v(" "),a("p",[t._v("另外我们增加 2 个 npm scripts：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"prepub"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"npm run test:prod && npm run build"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pub"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"sh release.sh"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("当我们运行 "),a("code",[t._v("npm run pub")]),t._v(" 的时候，会优先执行 "),a("code",[t._v("prepub")]),t._v(" 脚本，在 "),a("code",[t._v("prepub")]),t._v(" 中我们运行了 "),a("code",[t._v("test:prod")]),t._v(" 和 "),a("code",[t._v("build")]),t._v(" 2 个脚本。"),a("code",[t._v("&&")]),t._v(" 符号表示前面一个命令执行成功后才会执行后面的任务。")]),t._v(" "),a("p",[a("code",[t._v("npm run test:prod")]),t._v(" 实际上运行了 "),a("code",[t._v("npm run lint && npm run test -- --no-cache")]),t._v("。 先运行 "),a("code",[t._v("lint")]),t._v(" 去校验我们的源码和测试文件是否遵循 "),a("code",[t._v("tslint")]),t._v(" 规范，再运行 "),a("code",[t._v("test")]),t._v(" 去跑测试。")]),t._v(" "),a("p",[a("code",[t._v("npm run build")]),t._v(" 实际上运行了 "),a("code",[t._v("tsc --module commonjs")]),t._v("、"),a("code",[t._v("rollup -c rollup.config.ts")]),t._v(" 和 "),a("code",[t._v("typedoc --out docs --target es6 --theme minimal --mode file src")]),t._v("。先运行 "),a("code",[t._v("tsc")]),t._v(" 去编译我们的 "),a("code",[t._v("TypeScript")]),t._v(" 文件，"),a("code",[t._v("dist/lib")]),t._v(" 和 "),a("code",[t._v("dist/types")]),t._v(" 下的文件就是该命令产生的，然后运行 "),a("code",[t._v("rollup")]),t._v(" 去构建 "),a("code",[t._v("axios.umd.js")]),t._v(" 及 "),a("code",[t._v("axios.es.js")]),t._v("，最后运行 "),a("code",[t._v("typedoc")]),t._v(" 去构建项目的文档。")]),t._v(" "),a("p",[t._v("运行完 "),a("code",[t._v("prepub")]),t._v(" 后就会再运行 "),a("code",[t._v("pub")]),t._v(" 命令，实际上执行了 "),a("code",[t._v("sh release.sh")]),t._v(" 命令，但是目前我们没有这个脚本，接下来我们就需要来编写部署脚本 "),a("code",[t._v("release.sh")]),t._v("。")]),t._v(" "),a("h3",{attrs:{id:"编写部署脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#编写部署脚本","aria-hidden":"true"}},[t._v("#")]),t._v(" 编写部署脚本")]),t._v(" "),a("p",[a("code",[t._v("release.sh")]),t._v("：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/env sh")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" -e\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Enter release version: "')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),t._v(" VERSION\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("read")]),t._v(" -p "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Releasing '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VERSION")]),t._v(' - are you sure? (y/n)"')]),t._v(" -n 1 -r\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# (optional) move to a new line")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$REPLY")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("~ ^"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("Yy"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("then")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Releasing '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VERSION")]),t._v(' ..."')]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# commit")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" add -A\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" commit -m "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[build] '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VERSION")]),t._v('"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" version "),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VERSION")]),t._v(" --message "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[release] '),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$VERSION")]),t._v('"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" push origin master\n\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# publish")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" publish\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("fi")]),t._v("\n")])])]),a("p",[t._v("部署脚本是 shell 脚本，shell 脚本就是封装了多行控制台命令，来逐行解释他们的含义。")]),t._v(" "),a("p",[a("code",[t._v("#!/usr/bin/env sh")]),t._v(" 用来表示它是一个 shell 脚本。")]),t._v(" "),a("p",[a("code",[t._v("set -e")]),t._v(" 告诉脚本如果执行结果不为 true 则退出。")]),t._v(" "),a("p",[a("code",[t._v('echo "Enter release version: "')]),t._v(" 在控制台输出 "),a("code",[t._v("Enter release version:")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("read VERSION")]),t._v(" 表示从标准输入读取值，并赋值给 $VERSION 变量。")]),t._v(" "),a("p",[a("code",[t._v('read -p "Releasing $VERSION - are you sure? (y/n)" -n 1 -r')]),t._v("，其中 "),a("code",[t._v("read -p")]),t._v(" 表示给出提示符，后面接着 "),a("code",[t._v("Releasing $VERSION - are you sure? (y/n)")]),t._v(" 提示符；"),a("code",[t._v("-n 1")]),t._v(" 表示限定最多可以有 1 个字符可以作为有效读入；"),a("code",[t._v("-r")]),t._v(" 表示禁止反斜线的转义功能。因为我们的 read 并没有指定变量名，那么默认这个输入读取值会赋值给 "),a("code",[t._v("$REPLY")]),t._v(" 变量。")]),t._v(" "),a("p",[a("code",[t._v("echo")]),t._v(" 输出空值表示跳到一个新行，"),a("code",[t._v("#")]),t._v(" 在 shell 脚本中表示注释。")]),t._v(" "),a("p",[a("code",[t._v("if [[ $REPLY =~ ^[Yy]$ ]]")]),t._v(" 表示 shell 脚本中的流程控制语句，判断 "),a("code",[t._v("$REPLY")]),t._v(" 是不是大小写的 "),a("code",[t._v("y")]),t._v("，如果满足，则走到后面的 "),a("code",[t._v("then")]),t._v(" 逻辑。")]),t._v(" "),a("p",[a("code",[t._v('echo "Releasing $VERSION ..."')]),t._v("  在控制台输出 "),a("code",[t._v("Releasing $VERSION ...")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("git add -A")]),t._v(" 表示把代码所有变化提交到暂存区。")]),t._v(" "),a("p",[a("code",[t._v('git commit -m "[build] $VERSION"')]),t._v(" 表示提交代码，提交注释是 "),a("code",[t._v("[build] $VERSION")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v('npm version $VERSION --message "[release] $VERSION"')]),t._v(" 是修改 "),a("code",[t._v("package.json")]),t._v(" 中的 "),a("code",[t._v("version")]),t._v(" 字段到 "),a("code",[t._v("$VERSION")]),t._v("，并且提交一条修改记录，提交注释是 "),a("code",[t._v("[release] $VERSION")]),t._v("。")]),t._v(" "),a("p",[a("code",[t._v("git push origin master")]),t._v(" 是把代码发布到主干分支。")]),t._v(" "),a("p",[a("code",[t._v("npm publish")]),t._v(" 是把仓库发布到 "),a("code",[t._v("npm")]),t._v(" 上，我们会把 "),a("code",[t._v("dist")]),t._v(" 目录下的代码都发布到 "),a("code",[t._v("npm")]),t._v(" 上，因为我们在 "),a("code",[t._v("package.json")]),t._v(" 中配置的是 "),a("code",[t._v("files")]),t._v(" 是 "),a("code",[t._v('["dist"]')]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"运行部署脚本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#运行部署脚本","aria-hidden":"true"}},[t._v("#")]),t._v(" 运行部署脚本")]),t._v(" "),a("p",[t._v("接下来我们就运行 "),a("code",[t._v("npm run pub")]),t._v(" 脚本部署，我们会发现在 "),a("code",[t._v("npm run prepub")]),t._v(" 阶段，在执行 "),a("code",[t._v("tslint --project tsconfig.json -t codeFrame 'src/**/*.ts' 'test/**/*.ts'")]),t._v(" 的时候失败了，原因是我们有代码不符合 lint 规范。原来是 "),a("code",[t._v("core/xhr.ts")]),t._v(" 文件中 "),a("code",[t._v("processCancel")]),t._v(" 函数中对 "),a("code",[t._v("promise")]),t._v(" 的处理，我们没有对异常情况处理，所以我们要给它加上 "),a("code",[t._v("catch")]),t._v(" 的逻辑：")]),t._v(" "),a("div",{staticClass:"language-typescript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("processCancel")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cancelToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    cancelToken"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("promise\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("then")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reason "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        request"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("abort")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reject")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reason"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("catch")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/* istanbul ignore next */")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do nothing")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("由于我们不会走到 "),a("code",[t._v("catch")]),t._v(" 逻辑，所以我们给它添加一个注释 "),a("code",[t._v("/* istanbul ignore next */")]),t._v(" 忽略该代码分支的测试。")]),t._v(" "),a("p",[t._v("然后我们再重新运行 "),a("code",[t._v("npm run pub")]),t._v(" 逻辑，它会先执行 "),a("code",[t._v("test")]),t._v("，然后运行 "),a("code",[t._v("build")]),t._v(" 编译代码，再执行 "),a("code",[t._v("release.sh")]),t._v(" 脚本。我们输入了要发布的版本，它就可以完成了整个代码的发布流程。")]),t._v(" "),a("p",[t._v("通过编写部署脚本的一行命令发布的方式，不仅可以用在这种 JS 库，也可以用于我们平时项目开发中，可以大大帮助我们提高生产率，也是前端工程化中必不可少的一个环节，希望同学们都能学会并掌握它。")]),t._v(" "),a("p",[t._v("至此我们完成了项目的部署和发布，我们也可以在 "),a("code",[t._v("npm")]),t._v(" 官网上看到我们发布的包，下一节课我们来创建一个实际项目，来引用我们开发的 "),a("code",[t._v("ts-axios")]),t._v(" 库。")])])},[],!1,null,null,null);s.default=e.exports}}]);