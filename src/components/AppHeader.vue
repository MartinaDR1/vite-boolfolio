<script>
    export default {
        name:'AppHeader'
    }
</script>

<template>
    <header>
        <nav class="nav justify-content-center ">
          <a class="nav-link" href="/" aria-current="page">Home</a>
          <a class="nav-link" href="/projects">My Projects</a>
          <a class="nav-link" href="/contacts">Contacts</a>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';
</style>
