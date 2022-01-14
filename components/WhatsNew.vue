<template>
  <div class="WhatsNew">
    <div class="WhatsNew-heading">
      <h3 class="WhatsNew-title">
        <v-icon size="2.4rem" class="WhatsNew-title-icon">
          mdi-information
        </v-icon>
        {{ $t('最新のお知らせ') }}
      </h3>
      <div class="WhatsNew-option">
        <div v-if="stateOfEmergency">
          <span class="WhatsNew-link-to-emergency-page">
            <external-link
              url="https://www.pref.yamaguchi.lg.jp/cms/a10900/corona/202005050001.html"
            >
              <v-icon size="2rem" class="WhatsNew-link-to-emergency-page-icon">
                mdi-bullhorn
              </v-icon>
              {{ $t('山口県緊急事態措置について') }}
            </external-link>
          </span>
        </div>
        <div v-else-if="stopEmergency">
          <span class="WhatsNew-link-to-end-of-emergency-page">
            <external-link
              url="https://www.pref.yamaguchi.lg.jp/cms/a10900/corona/202005150001.html"
            >
              <v-icon size="2rem" class="WhatsNew-link-to-emergency-page-icon">
                mdi-bullhorn
              </v-icon>
              {{ $t('山口県緊急事態措置の解除について') }}
            </external-link>
          </span>
        </div>
        <div v-if="stateOfConcentratedTerms">
          <span class="WhatsNew-link-to-emergency-page">
            <external-link
              url="https://www.pref.yamaguchi.lg.jp/cms/a10000/korona2020/202004240002.html"
            >
              <v-icon size="2rem" class="WhatsNew-link-to-emergency-page-icon">
                mdi-bullhorn
              </v-icon>
              {{ $t('山口県感染拡大防止集中対策について') }}
            </external-link>
          </span>
        </div>
        <div v-if="stateOfTwitter">
          <span class="WhatsNew-link-to-twitter">
            <external-link url="https://twitter.com/CoronaYamaguchi">
              <v-icon size="2rem" class="TwitterIcon">
                mdi-twitter
              </v-icon>
              {{ $t('最新情報はこちら') }}
            </external-link>
          </span>
        </div>
      </div>
    </div>
    <ul class="WhatsNew-list">
      <li v-for="(item, i) in items" :key="i" class="WhatsNew-list-item">
        <a
          class="WhatsNew-list-item-anchor"
          :href="item.url"
          target="_blank"
          rel="noopener noreferrer"
        >
          <time
            class="WhatsNew-list-item-anchor-time px-2"
            :datetime="formattedDate(item.date)"
          >
            {{ formattedDateForDisplay(item.date) }}
          </time>
          <span class="WhatsNew-list-item-anchor-link">
            {{ item.text }}
            <v-icon
              v-if="!isInternalLink(item.url)"
              class="WhatsNew-item-ExternalLinkIcon"
              size="1.2rem"
            >
              mdi-open-in-new
            </v-icon>
          </span>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ExternalLink from '@/components/ExternalLink.vue'

import {
  convertDateByCountryPreferTimeFormat,
  convertDateToISO8601Format
} from '@/utils/formatDate'

export default Vue.extend({
  components: { ExternalLink },
  props: {
    items: {
      type: Array,
      required: true
    }
  },
  data() {
    // HACK: 各種イベントフラグ
    const stateOfEmergency = false
    const stateOfConcentratedTerms = true
    const stateOfTwitter = true
    const data = {
      stateOfEmergency,
      stateOfConcentratedTerms,
      stateOfTwitter
    }
    return data
  },
  methods: {
    isInternalLink(path: string): boolean {
      return !/^https?:\/\//.test(path)
    },
    formattedDate(dateString: string) {
      return convertDateToISO8601Format(dateString)
    },
    formattedDateForDisplay(dateString: string) {
      return convertDateByCountryPreferTimeFormat(dateString, this.$i18n.locale)
    }
  }
})
</script>

<style lang="scss">
.WhatsNew {
  @include card-container();

  padding: 10px;
  margin-bottom: 20px;

  .WhatsNew-heading {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    margin-bottom: 12px;

    .WhatsNew-title {
      display: flex;
      align-items: center;
      color: $gray-2;
      @include card-h2();
      &-icon {
        margin: 3px;
      }
    }

    .WhatsNew-option {
      display: flex;
      flex-wrap: wrap;
    }

    .WhatsNew-link-to-end-of-emergency-page {
      background-color: $gray-4;
      border: 2px solid $gray-4;
      color: $gray-1;
      border-radius: 4px;
      padding: 4px 8px;
      display: inline-flex;
      @include font-size(16);
      &:hover {
        background-color: $white;
        border-radius: 4px;
      }

      .ExternalLink {
        color: $gray-2 !important;
        text-decoration: none;
        margin: -10px;
        padding: 10px;
      }

      > span {
        @include button-text('sm');
      }

      @include lessThan($small) {
        margin-top: 4px;
      }
    }

    .WhatsNew-link-to-emergency-page {
      background-color: $emergency;
      // background-color: $gray-4;
      border: 2px solid $emergency;
      margin-right: 10px; //HACK: 他のバナーと横に並べる場合
      //border: 2px solid $gray-4;
      color: $gray-1;
      border-radius: 4px;
      padding: 4px 8px;
      display: inline-flex;
      @include font-size(16);
      &:hover {
        background-color: $white;
        border-radius: 4px;
      }

      .ExternalLink {
        color: $gray-2 !important;
        text-decoration: none;
        margin: -10px;
        padding: 10px;
      }

      > span {
        @include button-text('sm');
      }

      @include lessThan($small) {
        margin-top: 4px;
      }
    }
    .WhatsNew-link-to-twitter {
      * {
        //border: medium solid black;
        //align-self: center;
      }
      .TwitterIcon {
        color: $white !important;
      }
      background-color: $twitter;
      border: 2px solid $twitter;
      border-radius: 4px;
      padding: 4px 8px;
      display: inline-flex;
      @include font-size(16);
      &:hover {
        background-color: $white;
        border-radius: 4px;
      }
      .ExternalLinkIcon {
        color: $white !important;
      }
      .ExternalLink {
        color: $white !important;
        text-decoration: none;
        margin: -10px;
        padding: 10px;
        &:hover {
          color: $twitter-gray !important;
          .TwitterIcon {
            color: $twitter-gray !important;
          }
          .ExternalLinkIcon {
            color: $gray-2 !important;
          }
        }
      }

      > span {
        @include button-text('sm');
      }

      @include lessThan($small) {
        margin-top: 4px;
      }
    }
  }

  .WhatsNew-list {
    padding-left: 0;
    list-style-type: none;

    &-item {
      &-anchor {
        text-decoration: none;
        margin: 5px;
        @include font-size(14);

        @include lessThan($medium) {
          display: flex;
          flex-wrap: wrap;
        }

        &-time {
          flex: 0 0 90px;

          @include lessThan($medium) {
            flex: 0 0 100%;
          }

          color: $gray-1;
        }

        &-link {
          flex: 0 1 auto;

          @include text-link();

          @include lessThan($medium) {
            padding-left: 8px;
          }
        }

        &-ExternalLinkIcon {
          margin-left: 2px;
          color: $gray-3 !important;
        }
      }
    }
  }
}
</style>
