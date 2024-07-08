---
article: false
---
# `github actions`是什么

[官网文档](https://docs.github.com/en/actions)

::: info 官网介绍

GitHub Actions 是一个持续集成和持续交付 (CI/CD) 平台，可用于自动执行构建、测试和部署管道。 您可以创建工作流程来构建和测试存储库的每个拉取请求，或将合并的拉取请求部署到生产环境。

GitHub Actions 不仅仅是 DevOps，还允许您在存储库中发生其他事件时运行工作流程。 例如，您可以运行工作流程，以便在有人在您的存储库中创建新问题时自动添加相应的标签。

GitHub 提供 Linux、Windows 和 macOS 虚拟机来运行工作流程，或者您可以在自己的数据中心或云基础架构中托管自己的自托管运行器。

:::

可以简单理解:对于我们此次用于自动化部署来说,`github actions`就是一台配置强大的`Liunx`服务器!

## 简单使用

在`git`项目目录下新建`.github/workflows`文件,新建`deploy-docs.yml`配置文件

具体配置可以根据以下文件进行修改

```yml
name: 部署文档

on:
  push:
    branches:
      # 确保这是你正在使用的分支名称
      - master

jobs:
  deploy-gh-pages:
    name: Deploy Gh Pages
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
          # 如果你文档需要 Git 子模块，取消注释下一行
          # submodules: true
      - uses: pnpm/action-setup@v2.2.2
        with:
          version: 7


      - name: Set Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16.x
          cache: 'pnpm'

      - name: Install Dependencies
        run: pnpm install

      - name: Build
        env:
          NODE_OPTIONS: --max_old_space_size=4096
        run: pnpm run build

      - name: Deploy Dist
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          # 这是文档部署到的分支名称
          branch: gh-pages
          folder: dist
```