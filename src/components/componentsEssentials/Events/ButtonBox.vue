<script setup>
import {ref, reactive, computed, shallowReactive,  } from 'vue'

//define props
const props = defineProps({
    title: {
        type: String,
        default: 'My Component Title'
    }
})

const emitEventArgument = ref('')

const emit = defineEmits(['changeSomeState', 'update:modelValue'])

/* note how we can have an event and another parameter in the main handling function */

// REMEMBER THAT THE EVENT HERE IS THE BUTTON CLICK - NOT THE INPUT!
const emitChangeSomeState = (e, parameter1) => {
    // but also can choose to have our arguments directly given to our emit, 
    // thus, these functions are still not fully dependent on eachother, and the order of the parameters/arguments doesn't have to be the same
    emit('changeSomeState', emitEventArgument.value, e)
}


</script>
<template >
    <div class="component">
        <h3>Title: My Emitting component</h3>
        <label>
            Give the event an argument:
            <input type="text" v-model="emitEventArgument" />
        </label>
    <div class="button-container">
        <button @click="emitChangeSomeState">Emit event in parent</button>
    </div>
    </div>
</template>

<style scoped>
    .button-container{
        width: 15rem;
        height: 15rem;
        color: red;
        margin: 0 auto;

    }
    .component{
        border: 1px solid black
    }
</style>