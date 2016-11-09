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
                <a :href="event.event_url">{{event.title}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "event-list",
        props:["page"],
        data () {
            return {}
        },
        computed:{
            events(){
                return this.$parent.events.slice(this.page*10-10,this.page*10)
            }
        },
        methods:{
            next(){
                if(this.page < this.$parent.events.length / 10){
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
