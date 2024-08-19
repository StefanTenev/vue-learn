
<!-- 
    realistically, this is a redundant example, 
    but just follows the rest of the example pattern while still showing the ability to pass data to parent 
-->
<script setup>
import { ref } from 'vue';

const slotComponentData = ref('X')
const selectOptions = [
    {value: 'X'},
    {value: 'Y'},
    {value: 'Z'},
]
</script>

<template>
    <div class="slot-box">
        <label>
            Change data (IN CHILD!)
            <select v-model="slotComponentData">
                <option v-for="option in selectOptions" :value="option.value" :key="option.value">{{ option.value }}</option>
            </select>
        </label>
        Scoped slot
        <!-- example name -->
        <slot :data="slotComponentData"> 
            <!-- We can set default/fallback content within our slot in case we do not provide any content when using it -->
            Default/fallback content
        </slot>
    </div>
</template>

<style scoped>
    .slot-box{
        width: 20rem;
        border: 1px solid black;
        margin: 0 auto;
        padding: 1rem;
    }
</style>
