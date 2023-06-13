<script>
import axios from 'axios'

    export default {
        data(){
            return{
                base_API:'http://127.0.0.1:8000/',
                projects_path: 'api/projects',
                projects:[],
            }
        },      
        methods: {
            getProjects(url){
                axios
                .get (url)
                .then (response=> {
                    this.projects= response.data.projects
                    console.log(this.projects);
                })
                .catch(error=>{
                    console.error(error)
                })
            }
        },
        mounted(){
            const url= this.base_API + this.projects_path
            console.log(url);
            this.getProjects(url)
        }
    }
</script>

<template>
   <div class="container">
        <div class="row row-cols-sm-1 row-cols-md-3 row-cols-xl-4">
            <div class="card" v-for="project in projects">
                <img class="card-img-top" :src="base_API + storage/ + project.project_image" alt="Title">
                <div class="card-body">
                    <h4 class="card-title">{{project.title }}</h4>
                    <p class="card-text">{{project.description }}</p>
                </div>
            </div>
        </div>
   </div>
</template>


<style lang="scss" scoped>
@use './styles/general.scss';
</style>