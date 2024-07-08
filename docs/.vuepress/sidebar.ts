import { sidebar } from 'vuepress-theme-hope';

export default sidebar({
  '/document/node-doc/': 'structure',
  '/ECMAScript/': 'structure',
  '/framework_front/vue3/': 'structure',
  '/framework_front/react/': 'structure',
  '/website_build/': [
    '0.environment_windows',
    '1.environment_server',
    '2.pm2&bash',
    '3.giuhub_actions'
  ],
  '/rust/': 'structure',
  '/workRecord/': 'structure'
})
