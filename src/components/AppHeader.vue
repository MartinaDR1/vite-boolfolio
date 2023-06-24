<script>
    export default {
        name:'AppHeader',
    }
</script>

<template>
    <header>
        <nav class="nav justify-content-center">
          <a class="nav-link" href="/" aria-current="page"><strong>Home</strong></a>
          <a class="nav-link" href="/projects"><strong>My Projects</strong></a>
          <a class="nav-link" href="/contacts"><strong>Contacts</strong></a>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss';

nav{
    color: white;
}

nav a:hover{
    background-color: #ebcb9d;
}
</style>
