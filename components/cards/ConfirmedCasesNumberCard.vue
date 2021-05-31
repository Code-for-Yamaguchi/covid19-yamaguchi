<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('陽性患者数')"
      :title-id="'number-of-confirmed-cases'"
      :chart-id="'time-bar-chart-patients'"
      :chart-data="patientsGraph"
      :date="PatientsCnt.last_update"
      :unit="$t('人')"
      :by-date="true"
      :url="'https://yamaguchi-opendata.jp/ckan/dataset/350001-covid19'"
    >
      <template v-slot:description>
        <ul>
          <li>
            {{ $t('（注）') }}
          </li>
          <li>
            {{ $t('・山口県公式サイトにて公表された日を基準とする') }}
          </li>
          <li>
            {{ $t('・医療機関等が行った検査も含む') }}
          </li>
          <li>
            {{ $t('・土曜日、日曜日、祝日は更新しない') }}
          </li>
        </ul>
      </template>
    </time-bar-chart>
  </v-col>
</template>

<script>
// import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart
  },
  data() {
    const PatientsCnt = this.$store.state.data.patientscnt
    // 感染者数グラフ
    const patientsGraph = formatGraph(PatientsCnt.data)

    const data = {
      PatientsCnt,
      patientsGraph
    }
    return data
  }
}
</script>
