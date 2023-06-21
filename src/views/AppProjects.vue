<script>
import AppBanner from '../components/AppBanner.vue';
import ProjectList from '../components/ProjectList.vue';
    export default {
        name:'AppHome',

        components:{
            AppBanner,
            ProjectList
        }
    }
</script>

<template>
    <div class="ms_container projects">
        <AppBanner title='My Projects'></AppBanner>
        <ProjectList></ProjectList>
    </div>
</template>


<style lang="scss" scoped>

</style>