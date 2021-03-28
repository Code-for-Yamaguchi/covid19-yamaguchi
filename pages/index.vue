<template>
  <div class="MainPage">
    <div class="Header mb-3">
      <page-header :icon="headerItem.icon">{{ headerItem.title }}</page-header>
      <div class="UpdatedAt">
        <span>{{ $t('最終更新') }}</span>
        <time :datetime="updatedAt">{{ headerItem.date }}</time>
      </div>
      <div
        v-show="!['ja', 'ja-basic'].includes($i18n.locale)"
        class="Annotation"
      >
        <span>{{ $t('注釈') }}</span>
      </div>
    </div>
    <whats-new class="mb-4" :items="newsItems" />
    <static-info
      class="mb-4"
      :url-not-use="localePath('/flow')"
      url="https://www.pref.yamaguchi.lg.jp/cms/a10000/korona2020/202004240002.html"
      :text="$t('自分や家族の症状に不安や心配があればまずは電話相談をどうぞ')"
    />
    <card-row class="DataBlock">
      <!-- 陽性患者数 -->
      <confirmed-cases-number-card />
      <!-- 陽性患者の属性 -->
      <confirmed-cases-attributes-card />
      <!-- 検査実施状況 -->
      <!-- tested-cases-details-card / -->
      <!-- 検査実施件数 -->
      <tested-number-card />
      <!-- 検査陽性者の状況 -->
      <confirmed-cases-details-card />
      <!-- 陽性患者数（検査結果判明日別） -->
      <!-- positive-number-by-diagnosed-date-card / -->
      <!-- 区市町村別患者数 -->
      <!-- confirmed-cases-by-municipalities-card / -->
      <!-- 陽性率グラフ-->
      <!-- positive-rate-card / -->
      <!-- v-col class="DesktopSpacer" / -->
      <!-- 検査実施人数 -->
      <!-- inspection-persons-number-card / -->

      <!-- 新型コロナコールセンター相談件数 -->
      <!-- telephone-advisory-reports-number-card / -->
      <!-- 新型コロナ受診相談窓口相談件数 -->
      <consultation-desk-reports-number-card />
      <!-- 都営地下鉄の利用者数の推移 -->
      <!-- metro-card / -->
      <!-- 都庁来庁者数の推移 -->
      <!-- agency-card / -->
      <yamaguchi-map-card />
    </card-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import PageHeader from '@/components/PageHeader.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import StaticInfo from '@/components/StaticInfo.vue'
import CardRow from '@/components/cards/CardRow.vue'
// import Data from '@/data/data.json'
// import News from '@/data/news.json'
import PatientsCnt from '@/data/patients_cnt.json'
import Patients from '@/data/patients.json'
import Inspections from '@/data/inspections.json'
import Hospitalizations from '@/data/hospitalizations.json'
import Querents from '@/data/querents.json'
import MapUpdate from '@/data/map_update.json'
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import ConfirmedCasesAttributesCard from '@/components/cards/ConfirmedCasesAttributesCard.vue'
// import ConfirmedCasesByMunicipalitiesCard from '@/components/cards/ConfirmedCasesByMunicipalitiesCard.vue'
import TestedNumberCard from '@/components/cards/TestedNumberCard.vue'
// import TestedCasesDetailsCard from '@/components/cards/TestedCasesDetailsCard.vue'
// import InspectionPersonsNumberCard from '@/components/cards/InspectionPersonsNumberCard.vue'
// import TestedNumberCard from '@/components/cards/TestedNumberCard.vue'
// import TelephoneAdvisoryReportsNumberCard from '@/components/cards/TelephoneAdvisoryReportsNumberCard.vue'
import ConsultationDeskReportsNumberCard from '@/components/cards/ConsultationDeskReportsNumberCard.vue'
// import PositiveRateCard from '~/components/cards/PositiveRateCard.vue'
// import MetroCard from '@/components/cards/MetroCard.vue'
// import AgencyCard from '@/components/cards/AgencyCard.vue'
// import PositiveNumberByDiagnosedDateCard from '@/components/cards/PositiveNumberByDiagnosedDateCard.vue'
import YamaguchiMapCard from '@/components/cards/YamaguchiMapCard.vue'
// import { convertDatetimeToISO8601Format } from '@/utils/formatDate'

export default Vue.extend({
  components: {
    // PositiveRateCard,
    PageHeader,
    WhatsNew,
    StaticInfo,
    CardRow,
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    ConfirmedCasesAttributesCard,
    // ConfirmedCasesByMunicipalitiesCard,
    // TestedCasesDetailsCard,
    TestedNumberCard,
    // InspectionPersonsNumberCard,
    // TestedNumberCard,
    // TelephoneAdvisoryReportsNumberCard,
    ConsultationDeskReportsNumberCard,
    // MetroCard,
    // AgencyCard,
    // PositiveNumberByDiagnosedDateCard
    YamaguchiMapCard
  },
  data() {
    const LastUpdate = this.$store.state.data.lastupdate
    const News = this.$store.state.data.news

    const data = {
      PatientsCnt,
      Patients,
      Inspections,
      Hospitalizations,
      Querents,
      MapUpdate,
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: this.$t('山口県内の最新感染動向'),
        date: LastUpdate
      },
      newsItems: News.newsItems
      // displayForTokyo: false
    }
    return data
  },
  head(): MetaInfo {
    return {
      title: this.$t('山口県内の最新感染動向') as string,
      __dangerouslyDisableSanitizers: ['script'],
      script: [
        {
          innerHTML: `{
            "@context": "http://schema.org",
            "@type": "Article",
            "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": "https://yamaguchi.stopcovid19.jp/"
            },
            "headline": "【山口県】山口県内の最新感染動向 | 新型コロナウイルス感染症対策サイト",
            "datePublished": "2020-03-22 00:00:00+0900",
            "dateModified": "2020-06-22 23:45:00+0000",
            "author": {
                "@type": "Person",
                "name": "【山口県】新型コロナウィルス感染症対策サイト運営管理人"
            },
            "description": "当サイトは新型コロナウイルス感染症（COVID-19）に関する最新情報を提供するために、山口県内外の有志が開設したものです。",
            "image": {
                "@type": "ImageObject",
                "url": "https://yamaguchi.stopcovid19.jp/logo.png",
                "width": 110,
                "height": 31
            },
            "publisher": {
                "@type": "Organization",
                "name": "【山口県】新型コロナウィルス感染症対策サイト運営管理人",
                "logo": {
                    "@type": "ImageObject",
                    "url": "https://yamaguchi.stopcovid19.jp/logo.png",
                    "width": 110,
                    "height": 31
                }
            }
          }`,
          type: 'application/ld+json'
        }
      ]
    }
  }
})
</script>

<style lang="scss" scoped>
.MainPage {
  .Header {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    @include lessThan($small) {
      flex-direction: column;
      align-items: baseline;
    }
  }

  .UpdatedAt {
    @include font-size(14);

    color: $gray-3;
    margin-bottom: 0.2rem;
  }

  .Annotation {
    @include font-size(12);

    color: $gray-3;
    @include largerThan($small) {
      margin: 0 0 0 auto;
    }
  }
  .DataBlock {
    margin: 20px -8px;

    .DataCard {
      @include largerThan($medium) {
        padding: 10px;
      }

      @include lessThan($small) {
        padding: 4px 8px;
      }
    }

    .DesktopSpacer {
      padding: 0;
      @media screen and (min-width: 960px) {
        padding: 10px;
      }
    }
  }
}
</style>
