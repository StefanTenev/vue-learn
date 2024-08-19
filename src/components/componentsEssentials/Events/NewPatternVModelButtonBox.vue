<script setup>
//define props
const props = defineProps({
    title: String
})

const model = defineModel()
</script>

<template >
    <div class="component">
        <h3> {{ title }}</h3>
        <label>
            Give the event an argument:
            <input type="text" v-model="model"/>
        </label>
    </div>
</template>