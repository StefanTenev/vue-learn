<script setup>
import {ref, reactive, computed, shallowReactive, watch} from 'vue'

const form = reactive({
    radio: '',
})

const choice = ref(false)
const imageLink = ref(false)
const isLoaded = ref(false)

const handleSubmit = () => {
    if(form.radio === 'cat' || form.radio === 'dog'){
        choice.value = form.radio 
    }
}

/* the watcher keeps track of choice - if it changes - the watcher is executed */

/* note that for reactive props (props of objects), we cannot watch them directly, but need to use a getter insted, e.g.:

watch(() => reactiveObj.value, (value) => {...})

*/
watch(choice, async(newChoice, oldChoice) => {
    try{
        isLoaded.value = false
        // tempImageLink to temporarily store the link before mimicing an image
        let response, data, tempImageLink;
        // if the new value of choice == dog - fetch the dog api - else if cat - fetch the cat api
        if(newChoice === 'dog'){
            response = await fetch('https://dog.ceo/api/breeds/image/random')
        }else if(newChoice === 'cat'){
            response = await fetch('https://api.thecatapi.com/v1/images/search')
        }
        
        // assign data to the parsed response
        data = await response.json()

        // check if the response was successful
        if(response && response.ok){
            tempImageLink = newChoice === 'dog' ? data.message : data[0].url
            
            // create an image and load it to mimic a load - only then do we change the imageLink value
            // this will allow for imageLink to not be given a value prematurely and so not have the 
            // image load prematurely - giving a slight glimpse of the alt text
            const img = new Image()
            img.src = tempImageLink
            img.onload = () => {
                imageLink.value = tempImageLink
                isLoaded.value = true
            }
        }else{
            console.log('Failed to fetch: ' + response?.status)
        }
        
    }
    catch (err){
        console.log('Error when trying to fetch the image: ' + err)
    }
})

const watchedRef = ref(false)
const watchedReactiveProp = reactive({
    prop1: false
})

const flipWatchedRef = () => {
    watchedRef.value = !watchedRef.value
}

const flipWatchedReactive = () => {
    watchedReactiveProp.prop1 = !watchedReactiveProp.prop1
}

/* 
    watcher for multiple properties - e.g. a ref and a reactive prop (note we can only use getters for reactive props) 
    calling a watcher on the whole object - will make the watcher trigger on the changes of any property
    Note that calling on the whole object can be expensive- use with caution
*/
watch(
    [watchedRef, () => watchedReactiveProp.prop1],
    ([newWatchedRef, newWatchedReactive], [oldWatchedRef, oldWatchedReactive]) => {
        // log the ref values
        console.log(`New ref: ${newWatchedRef}; old ref: ${oldWatchedRef}`)

        // log the reactive values
        console.log(`New reavtive: ${newWatchedReactive}; old reavtive: ${oldWatchedReactive}`)

    }
)

</script>


<template>
    <h2>Watchers</h2>
    <div class="section-container">
        <h3>WATCHERS EXAMPLE</h3>
        <form @submit.prevent="handleSubmit">
            <h3>Which image would you like to load?</h3>
            <div>
                <label>
                Cat Image
                <input type="radio" value="cat" v-model="form.radio">
            </label>
            <label>
                Dog Image
                <input type="radio" value="dog" v-model="form.radio">
            </label>
            </div>
            <button type="submit">Submit</button>
        </form>
        <img 
            class='image' 
            v-if="isLoaded" 
            :src="imageLink" 
            :alt="choice === 'cat' ? 'Image of a cat' : 'Image of a dog'"
        />
        <h1 v-else-if="choice">LOADING!!!</h1>
        <h4>Image of a {{ choice }}</h4>
    </div>
    <div class="section-container">
        <h3>MUTPLE WATCHER VALUES EXAMPLE</h3>
        <p>Open console - watched will trigger when any of the values is changed</p>
        <p>ref value: {{ watchedRef }} ; reactive prop value : {{ watchedReactiveProp.prop1 }}</p>
        <button @click="flipWatchedRef">FLIP REF</button>
        <button @click="flipWatchedReactive">FLIP REACTIVE PROP</button>

        <h3>Calling a watcher on the whole object - will make the watcher trigger on the changes of any property</h3>
        <h3>Note that calling on the whole object can be expensive- use with caution</h3>
    </div>
</template>

<style>
    .image{
        width: 15rem;
        height: 15rem;
        object-fit: contain;
    }
</style>