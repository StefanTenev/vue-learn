<script setup>
import {ref, reactive, computed, shallowReactive,  } from 'vue'

const props = defineProps({
    color: {
        /* we can also have multiple types - for example: [String, Boolean] */
        type: String,
        default: 'black'
    },
    title: {
        type: String,
        default: 'My Component Title'
    },
    size : {
        type: String, 
        default: 'medium'
    },
    font: {
        type: String,
        default: 'arial'
    },
    withParagraph: {
        type: Boolean,
        // example showing a prop which is required by parent (a required prop would not need a default state...)
        required: true
    }
})

</script>
<template >
    <div class="box">
        <h2 :class="[props.color, props.size, props.font]">{{ props.title }}</h2>
        <p v-if="props.withParagraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h3>Current props:</h3>
        <p v-for="(prop, key) in props">{{ key }} : {{ prop }}</p>
    </div>
</template>

<style scoped>
    .box{
        border: 1px solid black;
        width: 90%;
        margin: 1rem auto;
    }

    /* Colors */
    .red{
        color: red;
    }
    .green{
        color: green;
    }
    .black{
        color: black
    }

    /* Sizes */
    .small{
        font-size: small;
    }
    .medium{
        font-size: medium;
    }
    .large{
        font-size: large;
    }

    /* Fonts */
    .verdana{
        font-family: Verdana, Geneva, Tahoma, sans-serif
    }
    .monospace{
        font-family: monospace
    }
    .arial{
        font-family: Arial, Helvetica, sans-serif;
    }

</style>