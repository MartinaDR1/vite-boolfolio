<template>
    <header>
        <nav class="nav justify-content-center ">
          <a class="nav-link active" href="/" aria-current="page">Home</a>
          <a class="nav-link" href="/about">About</a>
          <a class="nav-link" href="/contacts">Contacts</a>
        </nav>
    </header>
</template>

<script>
    export default {
        name:'AppHeader'
    }
</script>

<style lang="scss" scoped>
@use '../styles/general.scss';
</style>
