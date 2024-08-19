<script setup>
import { ref } from 'vue';
import SlotExample from '../../components/componentsEssentials/Slots/SlotExample.vue'
import SlottedComponent from '../../components/componentsEssentials/Slots/SlottedComponent.vue'
import NamedSlotExampleVue from '../../components/componentsEssentials/Slots/NamedSlotExample.vue.vue';
import ConditionalSlotExample from '../../components/componentsEssentials/Slots/ConditionalSlotExample.vue';
import ScopedSlotExample from '../../components/componentsEssentials/Slots/ScopedSlotExample.vue'

const setConditionalSlot = ref('X')

const selectOptions = [
    {value: 'X'},
    {value: 'Y'},
    {value: 'Z'},
]
</script>
<template>
    <h2>Components essentials - Slots</h2>
    <p>Slots allow to have 'parameratised html' components - in a sense, components which own a placeholder, into which, any other component can be passed</p>
    <p>Slots can have some default content given to them, in case none is passed</p>
    <p>We can also have <strong>named slots</strong>, which provide the ability to pass multiple, different contents, to our slot-containing component, while naming the slots "puts" the content in the correct, correspondingly named slot</p>
    <SlotExample >
        <h3 class="slotted-component">My slotted html</h3>
    </SlotExample>
    <SlotExample>
        <SlottedComponent class="slotted-component"/>
    </SlotExample>

    <!-- NAMED COMPONENT EXAMPLE -->

    <!-- to pass content to a named slot - a template is needed with a v-slot='slotName' -->
    <NamedSlotExampleVue>
        <template v-slot:X>
            <h3 class="slotted-component">Content X</h3>
        </template>
        <!-- shorthand v-slot syntax -->
        <template #Y>
            <h3 class="slotted-component">Content Y</h3>
        </template>
        <template #Z>
            <h3 class="slotted-component">Content Z</h3>
        </template>
    </NamedSlotExampleVue>

    <p>By passing the correct items to the correct (named) slot - each content can go to the correct 'location' in the child component containing slots</p>
    <p>Note that a slot without a name - has the implicit name of 'default' - hence, any non-named content passed to a component containing slots, will go the the unnamed or default slot (given that there is one)</p>
    <h3>We can also have conditional slots, by accessing the $slots object and combining it with a v-if:</h3>
    <label>
        Select slot to conditionally set as active (IN PARENT!)
        <select v-model="setConditionalSlot">
            <option v-for="option in selectOptions" :value="option.value" :key="option.value">{{ option.value }}</option>
        </select>
    </label>
    <ConditionalSlotExample>
        <!-- This also shows an example of dynamic slot names - almost like a template literal for slot names (can be used with both longhand and shorthand)-->
        <template #[setConditionalSlot] >
            <h3 class="slotted-component">Conditional Content {{setConditionalSlot}}</h3>
        </template>
    </ConditionalSlotExample>
    <h3>Finally, while the parent usually provides slot content, the child can pass data up, allowing the slot to access data from both the child and parent:</h3>
    <!-- we are using the unnamed (default) slot, so use the default named template -->
    <!-- the comppnent doesn't really have any other slots so we could use the base component name and give it v-slot='data' instead as well-->
    <ScopedSlotExample>
        <!-- the slotProps will become and object holding all of the props (you can name the object as you wish)-->
        <template #default="slotProps"> 
            <h3 class="slotted-component">Scoped slot content: {{slotProps.data}}</h3>
        </template>
    </ScopedSlotExample>
    <p>The example is redundant (both in the display here and in the code), but it just follows the example pattern so far to show the vue features</p>
</template>

<style scoped>
    .slotted-component{
        border: 1px solid black;
        width: 80%;
        margin: 0 auto;
    }
</style>

