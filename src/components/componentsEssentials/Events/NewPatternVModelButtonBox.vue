<script setup>
import { ref, reactive, computed, shallowReactive  } from 'vue'

//define props
const props = defineProps({
    title: String
})

const model = defineModel()

// function update(e) {
// model.value = e.target.value
// }

// const emit = defineEmits(['update:modelValue'])

// const innerData = ref('')
// const updateModelValue = (e) => {
//     emit('update:modelValue', e.target.value)
// } 


</script>
<template >
    <div class="component">
        <h3> {{ title }}</h3>
        <label>
            Give the event an argument:
            <input type="text" v-model="model"/>
        </label>
    <div class="button-container">
        <button >Emit event in parent</button>
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