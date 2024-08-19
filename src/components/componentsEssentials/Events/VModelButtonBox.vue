<script setup>
//define props
const props = defineProps({
    title: String,
    modelValue: String,
})

const emit = defineEmits(['update:modelValue'])

// function can be inline, but have seaprated it for clarity
const updateModelValue = (e) => {
    emit('update:modelValue', e.target.value)
}
</script>

<template>
    <div class="component">
        <h3>{{ title }}</h3>
        <label>
            Give the event an argument:
            <input type="text" :value="modelValue" @input="updateModelValue"/>
        </label>
    </div>
</template>