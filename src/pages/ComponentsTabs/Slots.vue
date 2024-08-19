<script setup>
import {ref, reactive, computed, shallowReactive} from 'vue'
import SlotExample from '../../components/componentsEssentials/Slots/SlotExample.vue'
import SlottedComponent from '../../components/componentsEssentials/Slots/SlottedComponent.vue';

</script>
<template>
    <h2>Components essentials - Slots</h2>
    <SlotExample >
        <h3 class="slotted-component">My slotted html</h3>
    </SlotExample>
    <SlotExample>
        <SlottedComponent class="slotted-component"/>
    </SlotExample>
</template>

<style scoped>
    .slotted-component{
        border: 1px solid black;
        width: 80%;
        margin: 0 auto;
    }
</style>

