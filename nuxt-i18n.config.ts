import { NuxtVueI18n } from 'nuxt-i18n/types'

const options: NuxtVueI18n.Options.AllOptionsInterface = {
  strategy: 'prefix_except_default',
  detectBrowserLanguage: false,
  defaultLocale: 'ja',
  vueI18n: {
    fallbackLocale: 'ja',
    formatFallbackMessages: true,
    dateTimeFormats: {
      ja: {
        dateTime: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: false
        },
        date: {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        },
        dateWithoutYear: {
          month: 'short',
          day: 'numeric'
        }
      },
      en: {
        dateTime: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: false
        },
        date: {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        },
        dateWithoutYear: {
          month: 'short',
          day: 'numeric'
        }
      }
    }
  },
  // vueI18nLoader: true,
  lazy: true,
  langDir: 'assets/locales/',
  locales: [
    {
      code: 'ja',
      name: '日本語',
      iso: 'ja-JP',
      file: 'ja.json',
      description: 'Japanese'
    },
    {
      code: 'en',
      name: 'English',
      iso: 'en-US',
      file: 'en.json',
      description: 'English'
    }
  ],
  seo: false
}

export default options
