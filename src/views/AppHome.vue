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
    <AppBanner title='Home Page'></AppBanner>
    <ProjectList></ProjectList>
</template>


<style lang="scss" scoped>

</style>