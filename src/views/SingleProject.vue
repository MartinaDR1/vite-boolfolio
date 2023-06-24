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
  <div class="ms_container" v-if="project">
    <div class="row text-center py-3">
      <div class="col-12">
        <img :src="'http://127.0.0.1:8000/'+ 'storage/' + project.project_image" alt="" height="350"> 
      </div>
      <div class="col-12">
        <h1>{{ project.title }}</h1>
        <div class="badge text-bg-dark" v-for="technology in project.technologies">
          <small>
            {{ technology.name }}
          </small>
        </div>
        <p>{{ project.description }}</p>
        <ul class="d-flex justify-content-around list-unstyled">
          <li>
            <strong>Start: </strong>
            {{project.start_date}}
          </li>      
          <li v-if="project.end_date == null">
            <strong>End: </strong>
            <i class="fa-solid fa-spinner fa-spin"></i>
          </li>        
          <li v-else>
            <strong>End: </strong>
            {{project.end_date}}</li>     
        </ul>

        <a name="" id="" class="btn btn-dark" :href="project.project_source_code" role="button">Code</a>
      </div>
    </div>
  </div>
</template> 

<style lang="scss" scoped>
@use '../styles/general.scss';

.ms_container{
  overflow-x: hidden;
}

.btn:hover{
  background-color: #ebcb9d;
}
</style>