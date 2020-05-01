<template>
    <div id="state-list">
        <p v-for="state in states" 
            v-bind:key="state.name">
            {{ state.name }}
        </p>
    </div>
</template>

<script>
export default {
    name: 'StateList',
    data() {
        return {
            states: [],
        }
    },
    mounted() {
        this.getAll()
    },
    methods: {
        getAll() {
            this.$stateService.getAll().then( data => {
                this.states = data
            })
        },
    },
}
</script>

<style>

</style>