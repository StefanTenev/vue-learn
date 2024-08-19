<script setup>
import {ref, reactive, computed, shallowReactive} from 'vue'


</script>
<template>
    <div class="slot-box">
        MySlotBox
        <slot/>
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
