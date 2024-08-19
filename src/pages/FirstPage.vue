<script setup>
import {ref, reactive, computed, shallowReactive} from 'vue'

// ref for storing reactive data/state -> wrapped value is returned within the .value prop of a ref object
const someValue = ref(false)

const handleSomeValue = () => {
    someValue.value = !someValue.value
}
const refTest = ref(1)
const refObjectTest = {id: ref(1)}

let id = refObjectTest.id

const handleSomeValue2 = () => {
    id.value++
    console.log(id)
}

const attributesObject = {
    id: 'binded-id',
    class: 'binded-class',
    style: 'color: green; background: orange; width: 200px',
    
}
const shallowReactive1 = shallowReactive([])

const refRef = ref(1)
const computedRef = ref(1)
const methodRef = ref(1)

const computedFunction = computed(()=> {
    shallowReactive1.push('C')
    return computedRef.value +1
    
})
const someConsoleMethod = () => {
    console.log('clicked method')
}
const methodFunction = () => {
    shallowReactive1.push('m')
    return methodRef.value + 1 
}
</script>

<template>
    <h1>Hello</h1>
        <button 
            
            :disabled="someValue"
        >
            Some Button
        </button>
        <button 
            @click="handleSomeValue"
            v-bind="attributesObject"
        >
            {{someValue ? 'Enable' : 'Disable'}} Button
        </button>
        <h2 @click="handleSomeValue2">{{ id + 2 }}</h2>

        <div >
            <p>Note when rendering data from a method - that method triggers on any state change, whereas, when rendering data from a computed property - that computed property function only gets triggerred when its dependency data is affected</p>
            <p><strong>'m'</strong> will be added every time the method function is ran and <strong>'C'</strong> every time the computed function will me run</p>
            <strong>note - the experiment button has the same method (adding m) run on click, but this method doesn't trigger on any state change (only triggers on the event, still it in itself changes the state for the transpilated method data to trigger)</strong>
            <div class="flex-container">
                <button @click="refRef++">Change any stage</button>
                <button @click="computedRef++">Change computed state</button>
                <button @click="methodRef++">Change method state</button>
                <button @click="methodFunction">experiment</button>
            </div>
            <h3>Some other data: {{ refRef }}</h3>
            <h3>Computed data: {{ computedFunction }}</h3>
            <h3>Method data: {{ methodFunction() }}</h3>
            
        </div>
        <div class="flex-container">
            <h4 v-for="item in shallowReactive1"> {{ item }}</h4>
        </div>
</template>