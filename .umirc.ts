import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig =  {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/leave', component: '../pages/leave/index' },
        { path: '/diary', component: '../pages/diary/index' }
      ]
    }
  ],
  proxy: {
    '/api': {
      target: 'http://localhost:8000',
      pathRewrite: { '^/api': '' },
      changeOrigin: true
    }
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: { webpackChunkName: true },
      title: '亚宁 · 奋力前行',
      dll: true,
      metas: [{ charset: 'utf-8' }],
      links: [
        { rel: 'ICON', href: '/logo.png' },
        { rel: 'stylesheet', href: 'https://cdn.bootcss.com/animate.css/3.5.2/animate.min.css'  }
      ],
      // scripts: [
      //   { src: 'https://cdn.bootcss.com/wow/1.1.2/wow.js' }
      // ],
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
      locale: {
        default: 'en-US',
        baseNavigator: true, 
        antd: true 
      }
    }],
  ],
}

export default config;
