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
        props:["id"],
        data () {
            return {}
        },
        computed:{
            event(){
                for(event of this.$parent.events){
                    if(event.event_id == this.id){
                        return event
                    }
                }
            }
        },

    }
</script>

<style>
</style>
