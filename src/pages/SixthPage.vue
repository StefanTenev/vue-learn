<script setup>
import {ref, reactive, watch, computed, shallowReactive, onMounted, watchEffect} from 'vue'

const myDomNode = ref(null)

/*
 * Wait for the mounting of myDomNode and then focus (it will initiallu be null and then the node when it mounts) 
 */
watchEffect(()=> {
    if(myDomNode.value){
        myDomNode.value.focus()
    }
})



</script>

<template>
    <h2>Template Refs</h2>
    <div class="section-container">
        <h4>You can assign refs to dom elements in order to get the nodes themselves</h4>
        <input ref="myDomNode" type="text" />
        <p>The above input's node is taken and programatically focused on</p>
    </div>
</template>

<style>
    .my-h1{
        color: red;
    }
</style>