<template>
    <div>
        <h2>event detail</h2>
        <div v-if="event">
            <img src="" alt="">
            <p>{{event.title}}</p>
            <p><a :href="event.event_url">{{event.event_url}}</a></p>
            <p>{{event.started_at.substr(0,10)}}</p>
            <p>@{{event.place}}</p>
            <p>{{event.address}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "event-detail",
        data () {
            return {
                id: null
            }
        },
        watch:{
            "$route" (to,from){
                this.id = to.params.id
            }
        },
        computed:{
            event(){
                for(event of this.$parent.events){
                    if(event.event_id == this.id){
                        return event
                    }
                }
                return this.$parent.events[0]
            }
        },
        created(){
            this.id = this.$route.params.id
        }

    }
</script>

<style>
</style>
