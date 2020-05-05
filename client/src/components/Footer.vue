<template>
    <div class="footer">
        <div class="m-2">
            <span class="p-3">
                <router-link to="/">Home</router-link>        
            </span>
            <span class="p-3">
                <router-link to="/about">About this site</router-link>
            </span>
        </div>

        <p class="text-right p-2">Header photo by <a href="https://unsplash.com/@delfidelarua7?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">delfi de la Rua</a> on Unsplash</p>

    </div>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>

</style>