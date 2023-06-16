<script>
import axios from 'axios';
export default {
  data() {
    return {
      project: null,
      results: null,
      base_API: "http://127.0.0.1:8000/api/projects/",
    }
  },
  mounted() {
    const url = this.base_API + this.$route.params.slug
    axios
    .get(url)
    .then(response => {
      if(response.data.success) {
        this.project = response.data.result
      } else {
        this.$router.push({
          name: 'project-not-found',
          params: {pathMatch: this.$route.path.substring(1).split('/')}})
      }
    })
    .catch(error => {
      console.error(error)
    })
  }
};
</script>
<template>
  <div class="container" v-if="project">
    <div class="row my-5">
        <div class="col-8">
            <img :src="'http://127.0.0.1:8000/'+ 'storage/' + project.project_image" alt="" height="350"> 
        </div>
        <div class="col-4">
            <h1>{{ project.title }}</h1>
        </div>
    </div>
  </div>
</template> 

<style lang="scss" scoped>
@use '../styles/general.scss';
</style>