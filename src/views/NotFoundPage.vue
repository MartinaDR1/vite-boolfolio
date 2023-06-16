<script>
export default {
    name: "Non Found",
    data() {
        return {}
    }
}
</script>

<template>
    <div>
        <h1>Not Found 404</h1>

        <router-link :to="{ name: 'home' }">
            Home
        </router-link>
    </div>
</template>

<style lang="scss" scoped></style>