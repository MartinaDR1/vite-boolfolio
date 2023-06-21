<script>
export default {

};
</script>
<template>
    <div class="container">
        <div class="jumbo">
            <div class="avatar">
                <div class="avatar-image">
                    <img src="../../public/avatar.jpg" alt="" height="150">
                </div>
            </div>
        </div>
        <hr class="line">
        <div class="text text-center py-4">
            <h1 class="text-uppercase">Jr full stack web developer</h1>
            <a name="" id="" class="btn btn-light text-decoration-none my-3" href="/projects" role="button">Scopri di più</a>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/general.scss';
    .jumbo{
        height: 20rem;
        display: flex;
        justify-content: center;
    }
    .avatar{
        margin-top: 4rem;
    }
    .avatar-image {
        border: 3px solid;
        border-image: linear-gradient(to right, #FAC8CD, #cf80a4, #6adac7) 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .line {
        border: none;
        border-top: 2px solid black;
        width: 60%;
        margin: auto;
        margin-top: -3rem;
    }
</style>

