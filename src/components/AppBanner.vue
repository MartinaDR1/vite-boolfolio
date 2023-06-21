<script>
    export default {
        name: 'AppBanner',

        props:{
            title: String
        }
    }
</script>

<template>
    <div class="py-2">
        <div class="container text-center">
            <h3>{{ title }}</h3>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
</style>