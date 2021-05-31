<template>
  <v-col cols="12" md="6" class="DataCard">
    <svg-card
      :title="$t('検査陽性者の状況')"
      :title-id="'details-of-confirmed-cases'"
      :date="Hospitalizations.last_update"
      :url="'https://yamaguchi-opendata.jp/ckan/dataset/350001-covid19'"
    >
      <confirmed-cases-details-table
        :aria-label="$t('検査陽性者の状況')"
        v-bind="confirmedCases"
      />
    </svg-card>
  </v-col>
</template>

<script>
// import dayjs from 'dayjs'
// import Data from '@/data/data.json'
import formatConfirmedCases from '@/utils/formatConfirmedCases'
import SvgCard from '@/components/SvgCard.vue'
import ConfirmedCasesDetailsTable from '@/components/ConfirmedCasesDetailsTable.vue'
// import OpenDataLink from '@/components/OpenDataLink.vue'

export default {
  components: {
    SvgCard,
    ConfirmedCasesDetailsTable
    // OpenDataLink
  },
  data() {
    const Hospitalizations = this.$store.state.data.hospitalizations
    // 検査陽性者の状況
    const confirmedCases = formatConfirmedCases(Hospitalizations.data[0])

    // const updatedAt = dayjs(Data.main_summary.children[0].date).format(
    //  'YYYY/MM/DD HH:mm'
    // )

    const data = {
      Hospitalizations,
      confirmedCases
      // updatedAt
    }
    return data
  }
}
</script>
