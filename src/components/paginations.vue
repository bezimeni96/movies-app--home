<template>
  <div>
    <button class="btn" v-if="canGoToPreviousPage" @click="currentPageChanged(-1)">Previous page</button>
    <span>Current page: {{ currentPage }}</span>
    <button class="btn" v-if="canGoToNextPage" @click="currentPageChanged(1)">Next page</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: "pagination",

  props: {
    numOfItems: Number,
  },

  computed: {
    ...mapGetters([
      'currentPage',
      'PAGE_SIZE'
    ]),

    canGoToPreviousPage() {
      return this.currentPage > 1;
    },

    canGoToNextPage() {
      return this.currentPage * this.PAGE_SIZE < this.numOfItems;
    }
  },

  methods: {
    ...mapMutations([
      'setCurrentPage'
    ]),

    currentPageChanged(step) {
      const goToPage = this.currentPage + step;
      this.$emit('current-page-changed', goToPage);
    }
  }
}
</script>

<style scoped>

</style>