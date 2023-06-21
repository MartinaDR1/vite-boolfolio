<script>
import AppBanner from '../components/AppBanner.vue';
import AppJumbotron from '../components/AppJumbotron.vue';
    export default {
        name:'AppContacts',

        components:{
    AppBanner,
    AppJumbotron
}
    }
</script>

<template>
    <div class="ms_container home">
        <AppBanner title="Home"></AppBanner>
        <AppJumbotron></AppJumbotron>
    </div>
</template>


<style lang="scss" scoped>

</style>