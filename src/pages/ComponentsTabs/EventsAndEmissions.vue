<script setup>
import {ref, reactive, computed, shallowReactive} from 'vue'
// import ButtonBox from '../../components/componentsEssentials/Events/ButtonBox.vue';
import VModelButtonBox from '../../components/componentsEssentials/Events/VModelButtonBox.vue';
import NewPatternVModelButtonBox from '../../components/componentsEssentials/Events/NewPatternVModelButtonBox.vue';


const componentTitle = ref('Component Title Received Through Props')

const someData = ref('')
// here, the parameters need to be in the same order as those passed in the emit event (in the child)
const eventToPassForEmission1 = (emitEventArgument, e) => {
    someData.value = 'Event emitted! - state in parent changed through an interaction with child ' + '| ARGUMENT: ' + emitEventArgument  
    console.log(e)
}

const someData2 = ref('')
const eventToPassForEmission2 = (newValue) => {
    someData2.value = newValue
}

const someData3 = ref('')
// const eventToPassForEmission3 = (newValue) => {
//     someData3.value = newValue
// }

</script>
<template>
    <h2>Components essentials - Emitting Events</h2>
    <div class="grid-container">
        <!-- <ButtonBox @changeSomeState="eventToPassForEmission1" :title="componentTitle"/> -->

        <VModelButtonBox v-model="someData2" title="My Vmodel emit example"/>
        <h2>{{someData2}}</h2>
        <NewPatternVModelButtonBox v-model="someData3" title="new pattern example" />
        <h2>{{someData3}}</h2>

        <!-- <ButtonBox @changeSomeState="eventToPassForEmission3" title="Static Title"/> -->
        <div>
            <label>
                My Component Title:
                <input type="text" v-model="componentTitle" />
            </label>
        </div>
    </div>
</template>

<style scope>

</style>