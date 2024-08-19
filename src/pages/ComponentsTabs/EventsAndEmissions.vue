<script setup>
import { ref } from 'vue'
import ButtonBox from '../../components/componentsEssentials/Events/ButtonBox.vue'
import VModelButtonBox from '../../components/componentsEssentials/Events/VModelButtonBox.vue';
import NewPatternVModelButtonBox from '../../components/componentsEssentials/Events/NewPatternVModelButtonBox.vue';

const someData = ref('')
// here, the parameters need to be in the same order as those passed in the emit event (in the child)
const eventToPassForEmission1 = (emitEventArgument, e) => {
    someData.value = emitEventArgument  
    // example to show access to event
    console.log(e)
}

// data for the old pattern custom v-model example
const someData2 = ref('')

// data for the new pattern custom v-model example
const someData3 = ref('')
</script>

<template>
    <h2>Components essentials - Emitting Events</h2>
    <div class="grid-container">
        <ButtonBox @changeSomeState="eventToPassForEmission1" title="Simple emit example"/> 
        <h2>Data: {{someData}}</h2>
        <VModelButtonBox v-model="someData2" title="Custom v-model (old pattern) example"/>
        <h2>Data: {{someData2}}</h2>
        <NewPatternVModelButtonBox v-model="someData3" title="Custom v-model (new pattern) example" />
        <h2>Data: {{someData3}}</h2>
    </div>
</template>

<style scoped>
    .component{
        border: 1px solid black;
        padding: 1rem;
    }
</style>