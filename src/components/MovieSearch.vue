<template>
<div class="md-form mt-0">
  <input class="form-control" type="text" placeholder="Search" aria-label="Search" v-model="searchInput">
</div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: "MovieSearch",

  data() {
    return {
      searchInput: ''
    }
  },

  computed: {
    ...mapGetters([
      'searchText'
    ])
  },

  methods: {
    ...mapMutations([
      'setSearchText',
      'setCurrentPage'
    ])
  },

  created() {
    this.searchInput = this.searchText; 
  },

  watch: {
    searchInput: function(newQuestion) {
      this.setSearchText(newQuestion);
      this.setCurrentPage(1);
    }
  }
}
</script>

<style scoped>

</style>