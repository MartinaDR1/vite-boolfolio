<script>
import axios from 'axios'

export default {
        name: 'ProjectList',

        data() {
        return {
            base_API: 'http://127.0.0.1:8000/',
            projects_path: 'api/projects',
            projects: [],
        }
    },
    methods: {
        getProjects(url) {
            axios
            .get(url)
            .then(response => {
                this.projects = response.data.projects
                console.log(this.projects);
            })
            .catch(error => {
                console.error(error)
            })
        },
        truncateText(text) {
            if (text.length > 100) {
                return text.slice(0, 100) + '...'
            }
            return text
        },
        prevPage(path) {
            this.getProjects(path)
        },
        nextPage(path) {
            this.getProjects(path)
        },
    },
    mounted() {
        const url = this.base_API + this.projects_path
        console.log(url);
        this.getProjects(url)
    }
    }
</script>

<template>
    <div class="container">
        <div class="row row-cols-sm-1 row-cols-md-3 row-cols-xl-4">
            <div class="card" v-for="project in projects">
                <img class="card-img-top" :src="base_API + storage / + project.project_image" alt="Title">
                <div class="card-body">
                    <h4 class="card-title">{{ project.title }}</h4>
                    <p class="card-text">{{ truncateText(project.description) }}</p>
                </div>
            </div>
        </div>
    </div>

    <div class="container">
        <nav aria-label="Page navigation">
            <ul class="pagination">
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Previous" v-if="projects.prev_page_url"
                        @click="prevPage(projects.prev_page_url)">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item">
                    <a class="page-link" href="#" aria-label="Next" v-if="projects.next_page_url"
                        @click="nextPage(projects.next_page_url)">Next</a>
                </li>
            </ul>
        </nav>
    </div>
</template>


<style lang="scss" scoped>

</style>