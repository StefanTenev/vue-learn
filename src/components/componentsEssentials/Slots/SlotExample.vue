<script setup>
import {ref, reactive, computed, shallowReactive} from 'vue'


</script>
<template>
    <div class="slot-box">
        MySlotBox
        <slot>
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
