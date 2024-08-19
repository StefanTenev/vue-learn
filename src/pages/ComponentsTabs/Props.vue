<script setup>
import {ref, reactive, computed, shallowReactive, watch} from 'vue'
import ChildComponent1 from '../../components/componentsEssentials/Props/ChildComponent1.vue';

const propsValues = {
    color: {
        default: 'black',
        options: ['red', 'green']
    },
    size: {
        default: 'medium',
        options: ['small', 'large']
    },
    font: {
        default: 'arial',
        options: ['monospace', 'verdana']
    }
}

const propsObject = reactive({
    color: propsValues.color.default,
    size: propsValues.size.default,
    font: propsValues.font.default,
    title: 'My Component Title',
    withParagraph: true
})

const selectedProp = ref('color')


watch(propsObject, (newVal, oldVal) => {
    console.log(newVal)
})



</script>
<template>
    <h2>Props</h2>
    <h4>We can pass data (AKA props) to our child components, this data can also be manipulated within the parent and change accordingly in the child</h4>
    <br>
    <h4>Note that props are a form of a single way data flow (from parent to child), props should not be mutated within the child</h4>
    <h4>That said, object/array properties can be mutated in children (as objects/arrays are passed by reference) - however this can create unpredicted outcomes and ti si to be avoided</h4>
    <h4>In most cases - the child should emit and event which will perform the mutation int he partent</h4>
    <br>
    <h4>In the case in which we really desire to mutate props in the child - we need to set up either a ref or a computed callback with with prop vlaue and then alter those accordingly</h4>
    <br>
    <h4>For prop types - read <a href="https://vuejs.org/guide/components/props.html#prop-validation" target="__blank">here</a> (scroll done)</h4>
    <div class="boxed">
        <label>
            Component title:
            <input type="text" v-model="propsObject.title"/>
        </label>
    </div>
    <div class="boxed">
        <label>
        Select prop to edit
        <select v-model="selectedProp">
            <option v-for="(prop, key) in propsValues">{{ key }}</option>
        </select>
        </label>
        <label>
            Select prop value
            <select v-model="propsObject[selectedProp]">
                <option selected :value="propsValues[selectedProp].default">{{ propsValues[selectedProp].default }}</option>
                <option v-for="(item, index) in propsValues[selectedProp].options">{{ item }}</option>
            </select>
        </label>
    </div>
    <div class="boxed">
        <label>
            With paragraph:
            <input selected type="radio" :value="true" v-model="propsObject.withParagraph" />
        </label>
        <label>
            Without paragraph:
            <input selected type="radio" :value="false" v-model="propsObject.withParagraph" />
        </label>
    </div>
    <!-- Note how we have assigned all of the props from the propsObject simultaneously -->
     <!-- that said, usually the convention is to give props in kebab-case -->
    <ChildComponent1 v-bind="propsObject"/>
</template>

<style scoped>
    .boxed{
        border: 1px solid black;
        width: 60%;
        margin: 0.5rem auto;
        padding: 0.5rem;
    }
</style>

