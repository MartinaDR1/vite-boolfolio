<script>
import AppHeader from './components/AppHeader.vue';
export default {
    components :{
        AppHeader
    }
}
</script>

<template>
    <div class="bg">
        <AppHeader></AppHeader>
        <router-view></router-view>
    </div>
</template>


<style lang="scss" scoped>
@use './styles/general.scss';

.bg {
    background-image: url(../../public/sfondo.jpg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position:center top 70%;
    background-clip: content-box;
    height: calc(100vh - 16px);
    overflow:hidden;
}

</style>