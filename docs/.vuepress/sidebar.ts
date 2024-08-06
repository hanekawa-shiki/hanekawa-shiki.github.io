import { sidebar } from 'vuepress-theme-hope';

export default sidebar({
  '/document/node-doc/': 'structure',
  '/ECMAScript/': [
    'tools',
    'function',
    'sync',
    // 'iterator',
    // 'metaprogramming',
  ],
  '/framework_front/vue3/': [
    '1.vue3',
    '2.create',
    '3.compositionApi',
    '4.otherApi',
    '5.compare',
    '6.newComponents',
    '7.others',
    '8.skill'
  ],
  '/framework_front/react/': [
    '1.react',
    '2.basic_use',
    '3.router',
    '4.redux',
    '5.other_options',
    '6.ui_library',
  ],
  '/website_build/': [
    'environment_windows',
    'environment_server',
    'pm2&bash',
    'giuhub_actions'
  ],
  '/rust/': [
    'RADME',
    'setting',
    'basicSyntax',
    'ownership'
  ],
  '/workRecord/': 'structure',
  '/mobile/': [
    'adaptation'
  ],
  '/css/': [
    'animation-border'
  ],
  '/lib/': [
    'index'
  ],
})
