<template>
  <div class="Parent">
    <page-header class="mb-3">
      {{ $t('新型コロナウイルス感染症対応についてのお願い') }}
    </page-header>
    <static-card>
      <h3>
        <external-link
          url="https://www.pref.yamaguchi.lg.jp/cms/a10000/korona2020/202005280004.html#1"
          :icon-size="24"
          >{{ $t('児童生徒・保護者の皆さまへ（山口県）') }}
        </external-link>
      </h3>
    </static-card>
    <static-card>
      <h3>
        <external-link
          url="https://www.mext.go.jp/a_menu/coronavirus/index.html"
          :icon-size="24"
          >{{
            $t(
              '新型コロナウイルスに関連した感染症対策に関する対応について（文部科学省）'
            )
          }}
        </external-link>
      </h3>
    </static-card>
    <static-card>
      <h3>{{ $t('学習支援コンテンツ') }}</h3>
      <ul>
        <li>
          <external-link
            url="https://www.mext.go.jp/a_menu/ikusei/gakusyushien/index_00001.htm"
            :icon-size="16"
            >{{ $t('学習支援コンテンツポータルサイト（文部科学省）') }}
          </external-link>
        </li>
        <li>
          <external-link
            url="https://www.learning-innovation.go.jp/covid_19/page/5/"
            :icon-size="16"
            >{{ $t('学びを止めない未来の教室（経済産業省）') }}
          </external-link>
        </li>
        <li>
          <external-link
            url="https://www.pref.yamaguchi.lg.jp/cms/a50900/index/yamaguchi.html"
            :icon-size="16"
            >{{ $t('やまぐち学習支援プログラム（やまぐちっ子the Movie追加）') }}
          </external-link>
        </li>
        <li>
          <external-link
            url="http://shien.ysn21.jp/contents/student/gakusyu/index.html"
            :icon-size="16"
            >{{ $t('学習コンテンツ（やまぐち総合教育支援サイト）') }}
          </external-link>
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('感染予防・健康管理') }}</h3>
      <ul>
        <li>
          {{
            $t(
              '不特定多数の人の集まる場所等への外出を避け、基本的に自宅で過ごしてください。'
            )
          }}
        </li>
        <li>
          {{ $t('手洗い、咳エチケット等により、感染予防に努めてください。')
          }}<br />
          <external-link
            url="https://www.pref.yamaguchi.lg.jp/cmsdata/1/4/2/142f5b06182fae366ce6e7bb2bf3d871.pdf"
            :icon-size="16"
            >{{ $t('【参考】「基本は手洗い。」リーフレット') }}
          </external-link>
          <br />
          <external-link
            url="https://tokyodouga.jp/lViN9C_BS-0.html"
            :icon-size="16"
            >{{ $t('【参考】感染症予防のための正しい手洗い方法（動画）') }}
          </external-link>
        </li>
        <li>
          {{
            $t(
              '規則正しい生活を心がけ、日常の健康管理に十分気を付けてください。'
            )
          }}
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('感染症を疑う場合の対応') }}</h3>
      <ul>
        <li>
          {{
            $t(
              '息苦しさ（呼吸困難）、強いだるさ（倦怠感）、高熱等の強い症状がある場合、または発熱や咳などの比較的軽い風邪の症状が続いている場合は、各保健所にご相談ください。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '各保健所の電話番号等については「新型コロナウイルスに関連する各種相談窓口について」をご確認ください。'
            )
          }}
        </li>
        <external-link
          url="https://www.pref.yamaguchi.lg.jp/cms/a15200/kansensyou/ncorona.html#10"
          :icon-size="16"
          >{{ $t('「新型コロナウイルスに関連する各種相談窓口について」') }}
        </external-link>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('子育て中の保護者及び子どものための相談窓口について') }}</h3>
      <ul>
        <li>
          <external-link
            url="https://www.pref.yamaguchi.lg.jp/cmsdata/6/9/1/6919f905dd62276886c5647ec3d44f17.pdf"
            :icon-size="16"
            >{{ $t('子育て中の保護者のための相談窓口一覧（チラシ）') }}
          </external-link>
        </li>
        <li>
          <external-link
            url="https://www.pref.yamaguchi.lg.jp/cmsdata/a/9/2/a92e8ea17c49a05ef2671a1c36581eb9.pdf"
            :icon-size="16"
            >{{ $t('子どものための相談窓口一覧（チラシ）') }}
          </external-link>
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('その他') }}</h3>
      <p>{{ $t('詳細は、各学校からのお知らせ等をご確認ください。') }}</p>
    </static-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import StaticCard from '@/components/StaticCard.vue'
import PageHeader from '@/components/PageHeader.vue'
import ExternalLink from '@/components/ExternalLink.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard,
    ExternalLink
  },
  head(): MetaInfo {
    return {
      title: this.$t('お子様をお持ちの皆様へ') as string
    }
  }
})
</script>
