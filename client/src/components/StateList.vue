<template>
    <div id="state-list">
        <div class="d-flex flex-wrap justify-content-around">
            <div class="p=2" v-for="state in states" v-bind:key="state.name">
                <State 
                    v-bind:state="state"
                    v-on:isVisited="updateVisited"
                ></State>
            </div>
        </div>
    </div>
</template>

<script>

import State from '@/components/State'

export default {
    name: 'StateList',
    components: {
        State
    },
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
        updateVisited(stateName, stateVisited) {
            this.$stateService.setVisited(stateName, stateVisited).then(data => {
                this.getAll()
            })
        }
    },
}
</script>

<style>

</style>