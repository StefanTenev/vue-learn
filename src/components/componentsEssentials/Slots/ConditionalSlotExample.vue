<template>
    <div v-if="$slots.X" class="slot-box">
        Conditional named slot box X
        <!-- example name -->
        <slot name="X"> 
            <!-- We can set default/fallback content within our slot in case we do not provide any content when using it -->
            Default/fallback content
        </slot>
    </div>
    <div v-else-if="$slots.Y" class="slot-box">
        Conditional named slot box Y
        <slot name="Y" class="slot-box"> 
            <!-- We can set default/fallback content within our slot in case we do not provide any content when using it -->
            Default/fallback content
        </slot>
    </div>
    <div v-else="$slots.Z" class="slot-box">
        Conditional named slot box Z
        <slot name="Z">
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
