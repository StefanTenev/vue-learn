<script setup>
import {ref, reactive, computed, shallowReactive} from 'vue'
import Component1 from '../../components/componentsEssentials/DynamicComponents/Component1.vue';
import Component2 from '../../components/componentsEssentials/DynamicComponents/Component2.vue';

const componentSelect = ref(-1)
const components = [
    Component1,
    Component2
]

const example = `<ul>
        <li is="vue:my-elemnt-name"></li>
    </ul>`

const componentOptions = [
    {
        value: 0,
        text: 'Component 1'
    },
    {
        value: 1,
        text: 'Component 2'
    },
]
</script>
<template>
    <select v-model="componentSelect">
        <option selected disabled value="">Please select a component</option>
        <option v-for="option in componentOptions" :value="option.value">{{ option.text }}</option>
    </select>

    <!-- placeholder for a component -->
    <component :is="components[componentSelect]"></component>
    <p>The 'component' element allows to have a placeholder for a component, with the is property holding the value of the component</p>
    <p>Read more on whether if that value cna be the text value of the component: https://vuejs.org/guide/essentials/component-basics.html</p>

    <h2>IMPORTANT:</h2>
    <h4>The is property is also useful when trying to have lists or table rows of components within lits/tables</h4>
    <h4>html ul/ol/table/select tags can only contain html specific elements such as li/tr/option, however, using an is property - we can insert our element into the subelements</h4>
    <h3>For example: {{ example }}</h3>
    <h4>Note the usage - as the "vue:" preposition is necessary</h4>

</template>

<style scpoed>
    h4{
        margin: 0;
    }
</style>

