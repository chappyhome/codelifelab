import { withSidebar } from '../../dist/index.js';
import packageJson from '../../package.json' with { type: 'json' };
import { defineConfig, UserConfig } from 'vitepress';
import { withI18n } from 'vitepress-i18n';
import type { VitePressI18nOptions } from 'vitepress-i18n/types';
import type { VitePressSidebarOptions } from '../../dist/types.js';

const defaultLocale: string = 'en';
const supportLocales: string[] = [defaultLocale, 'zhHans'];
const editLinkPattern = `${packageJson.repository.url}/edit/main/docs/:path`;

const commonSidebarConfig: VitePressSidebarOptions = {
  debugPrint: true,
  manualSortFileNameByPriority: ['introduction.md', 'guide', 'advanced-usage'],
  collapsed: false,
  capitalizeFirst: true,
  useTitleFromFileHeading: true,
  useTitleFromFrontmatter: true,
  useFolderTitleFromIndexFile: true,
  frontmatterOrderDefaultValue: 9,
  sortMenusByFrontmatterOrder: true
};

const vitePressSidebarConfig = [
  ...supportLocales.map((lang) => {
    return {
      ...commonSidebarConfig,
      documentRootPath: `/docs/${lang}`,
      resolvePath: defaultLocale === lang ? '/' : `/${lang}/`,
      ...(defaultLocale === lang ? {} : { basePath: `/${lang}/` })
    };
  })
];

const vitePressI18nConfig: VitePressI18nOptions = {
  locales: supportLocales,
  debugPrint: true,
  rootLocale: defaultLocale,
  searchProvider: 'local',
  description: {
    en: 'A platform for Python beginners to learn programming through fun projects. It provides a friendly and engaging learning experience.',
    zhHans: '一个专为 Python 初学者设计的趣味编程学习平台，通过生活化的小项目带你轻松入门编程。'
  },
  themeConfig: {
    en: {
      nav: [
        {
          text: 'Fun Learning',
          link: '/guide/getting-started'
        },
        {
          text: 'Options',
          link: '/guide/options'
        }
      ]
    },
    zhHans: {
      nav: [
        {
          text: '趣味学习',
          link: '/zhHans/python/getting-started'
        },
        {
          text: '选项',
          link: '/zhHans/python/options'
        }
      ]
    }
  }
};

// Ref: https://vitepress.dev/reference/site-config
const vitePressConfig: UserConfig = {
  title: 'Python生活实验室',
  lastUpdated: true,
  outDir: '../docs-dist',
  cleanUrls: true,
  metaChunk: true,
  rewrites: {
    'en/:rest*': ':rest*'
  },
  head: [
    ['link', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/logo-32.png' }],
    ['link', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/logo-16.png' }],
    ['link', { rel: 'shortcut icon', href: '/favicon.ico' }]
  ],
  sitemap: {
    hostname: packageJson.homepage
  },
  themeConfig: {
    logo: { src: '/logo-32.png', width: 24, height: 24 },
    editLink: {
      pattern: editLinkPattern
    },
    socialLinks: [{ icon: 'github', link: packageJson.repository.url.replace('.git', '') }],
    footer: {
      message: 'Released under the MIT License',
      copyright: '© <a href="https://gitee.com/xhwtt/my-blog">CDGet</a>'
    }
  }
};

export default defineConfig(
  withSidebar(withI18n(vitePressConfig, vitePressI18nConfig), vitePressSidebarConfig)
);
