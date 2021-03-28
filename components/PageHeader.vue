<template>
  <div class="header">
    <h2 class="pageTitle">
      <v-icon v-if="icon" size="4rem" class="mr-2">
        {{ icon }}
      </v-icon>
      <slot />
    </h2>
    <div class="date">
      <!-- <span>{{ $t('新型コロナウイルス感染症が心配なときに') }} </span> -->
      <time :datetime="formattedDate">{{ date }}</time>
    </div>
    <!--<div v-if="!['ja', 'ja-basic'].includes($i18n.locale)" class="annotation">
      <span>{{ $t('注釈') }} </span>
    </div>-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    icon: {
      type: String
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
}
.pageTitle {
  @include font-size(30);
  color: $gray-2;
  display: flex;
  align-items: center;
  line-height: 1.35;
  font-weight: normal;
  margin: 0 0.5em 0 0;
  @include lessThan($small) {
    @include font-size(20);
  }
}
.date {
  font-size: 30px;
  color: #4d4d4d;
  display: flex;
  font-weight: 400;
  margin: 0.6em 0 0;
}
.annotation {
  font-size: 0.75rem;
  color: $gray-3;
}
@include largerThan($small) {
  .annotation {
    margin: 0 0 1em auto;
  }
}
</style>
