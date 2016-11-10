<template>
    <div>
        <h1>Lec Cafe Event Guide</h1>
        <p>
            <router-link to="/guide">GUIDE</router-link>
            <router-link to="/list">LIST</router-link>
            <router-link to="/detail">LATEST</router-link>
        </p>
    </div>
</template>

<script>
    export default {
        name: "app-header",
        data () {
            return {}
        }
    }
</script>

<style>
    .router-link-active{
        color: #307f5b;
        font-weight: bold;
    }
</style>
