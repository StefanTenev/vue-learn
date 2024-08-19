<script setup>
import {ref, reactive, computed, shallowReactive} from 'vue'
import ButtonBox from '../../components/componentsEssentials/Events/ButtonBox.vue';



</script>
<template>
    <h2>Component Registration</h2>
    <p>In order to be used, components have to be imported locally, but they can also be registered globally, in the main file.</p>
    <p>Doing so, allows to use a compoment anywhere within the app, without a local import, here is an example of a global component being used</p>
    <MyGlobalComponent1 />
    <div>
        <p>Note that:</p>
    <ul>
        <li>Global registration prevents build systems from removing unsued components (AKA 'tree-shaking') - so global components will always be included, even if unused</li>
        <li>When registering components locally, it can be easy to see which components depened/work with/on which; and figure out parent-child relationships. in larger apps, global components can make these relationships less clear</li>
    </ul>
    </div>
</template>

<style scope>
    ul{
        text-align: left !important;
    }
    p{
        margin: 0;
    }
</style>