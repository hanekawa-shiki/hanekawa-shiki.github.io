import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress';
import theme from './theme';

export default defineUserConfig({
  bundler: viteBundler({
    viteOptions: {},
    vuePluginOptions: {},
  }),
  lang: 'zh-CN',
  title: 'hanekawa-shiki',
  description: '前端博客',
  base: '/',
  shouldPrefetch: false,
  port: 9999, // port 指定 dev server 的端口 默认值: 8080
  // open: true,
  dest: 'dist',
  head: [['meta', { name: 'keywords', content: 'JavaScript,HTML,CSS' }]], // head 额外的需要被注入到当前页面的 HTML<head> 中的标签
  theme
});
