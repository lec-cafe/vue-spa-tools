<template>
    <div>
        <h2>event list</h2>
        <p>
            <a @click="prev">prev</a>

            - {{page}} -

            <a @click="next">next</a>
        </p>
        <ul>
            <li v-for="event in events">
                <router-link :to="`/detail/${event.event_id}`">{{event.title}}</router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "event-list",
        data () {
            return {
                page: 1
            }
        },
        computed:{
            events(){
                return this.$store.state.events.slice(this.page*10-10,this.page*10)
            }
        },
        methods:{
            next(){
                if(this.page < this.$store.state.events.length / 10){
                    this.page++;
                }
            },
            prev(){
                if(this.page > 1){
                    this.page--;
                }
            }
        }

    }
</script>

<style>
</style>
