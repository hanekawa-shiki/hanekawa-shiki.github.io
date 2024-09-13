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
    '8.skill',
    'different_between_2&3'
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
    'giuhub_actions',
    'domainNameSSL'
  ],
  '/docker/' : [
    'index',
    'install',
    'commomCmds',
    'dockerImages',
    'volume',
    'dockerFileAnalyze'
  ],
  '/rust/': [
    'index',
    'setting',
    'basicSyntax',
    'ownership'
  ],
  '/workRecord/': 'structure',
  '/mobile/': [
    'adaptation'
  ],
  '/css/': [
    'base_concepts'
  ],
  '/lib/': [
    'index'
  ],
  '/tips/': [
    'animation-border',
    'view-transitions'
  ]
})
