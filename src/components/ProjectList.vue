<script>
import axios from 'axios'
import AppLoading from './AppLoading.vue'
export default {
    name: 'ProjectList',

    data() {
        return {
            base_API: 'http://127.0.0.1:8000/',
            projects_path: 'api/projects',
            projects: [],
            loading: true,
        }
    },
    components: {
        AppLoading
    },
    methods: {
        getProjects(url) {
            axios
                .get(url)
                .then(response => {
                    this.projects = response.data.projects
                    this.loading = false
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
        }
    },
    mounted() {
        const url = this.base_API + this.projects_path
        console.log(url);
        this.getProjects(url)
    }
}
</script>

<template>
    <section class="projects" v-if="projects && !loading">
        <div class="container py-4">
            <div class="row row-cols-xs-1 row-cols-md-2 g-4">
                <div class="col" v-for="project in projects">
                    <div class="card shadow">
                        <img class="card-img-top" :src="base_API + 'storage/' + project.project_image" alt="Title">
                        <div class="image-overlay">
                            <h4 class="d-flex align-items-center justify-content-center border_card">{{ project.title }}</h4>
                        </div>
                        <div class="card-info">
                            <div class="row border_card_lg">
                                <div class="col-12">
                                    <div class="text">
                                        <h5 class="card-title py-2 pb-4">{{ project.title }}</h5>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="badge text-bg-light" v-for="technology in project.technologies">
                                       <small>
                                           {{ technology.name }}
                                       </small>
                                    </div>
                                </div>
                                <div class="col-12">
                                    <router-link :to="{ name: 'single-project', params: { slug: project.slug } }"
                                        class="nav-link pt-5">
                                        <button type="button" class="btn btn-outline-light">
                                            Info 
                                        </button>
                                    </router-link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

        <div class="container text-center">
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
    </section>
    <div v-else>
        <AppLoading></AppLoading>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/general.scss';
.card {
    position: relative;
}

.card-img-top {
    width: 100%;
    border-radius: 10px;
}

.image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
}

h4 {
    z-index: 1;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-weight: lighter;
}

.card:hover .image-overlay {
    opacity: 0;
    transition: 0.7s;
}

.card-info {
    display: none;
    color: white;
}

.card:hover .border_card {
    height: 95%;
    width: 95%;
    transition: all 0.7s ease-in-out;
}

.card:hover .card-info {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 95%;
    height: 95%;
    border-radius: 10px;
}

.badge{
    border-radius: 80px;
    margin-right: 5px;
}

</style>