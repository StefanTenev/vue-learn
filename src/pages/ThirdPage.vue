<script setup>
import {ref, reactive, computed, shallowReactive} from 'vue'

const eventHandler = (event) => {
    // event is a native DOM element
    if(event){
        alert(event.target.tagName)
    }
}
const textRef = ref('')
const textHandler = (event) => {
    textRef.value = event.target.value
}


/* event modifiers code */
const alertMeParent = () => {
    alert('PARENT alert')
}
const alertMeChild = () => {
    alert('CHILD alert')
}

</script>

<template>
<div>
    <h2>Method Handlers</h2>
    <button @click="eventHandler">click </button>
    <div>
        <!-- v-model combines a funciton such as the textHandler - on input, with the given ref - so we don't even need our own method -->
        <label>changes on any input
            <input v-model="textRef" type="text" />
        </label>
    </div>
    <div>
        <label>changes when data is entered
            <input @change="textHandler" type="text" />
        </label>
    </div>
    <h2>{{ textRef }}</h2>
</div>
    <div class="flex-container">
        <div>
                <h4>Event Modifiers</h4>
            <h5>Note that methods can be chained and will be executed int he order in which they have been chained</h5>
            <div class="flex-container">
                <h4>With stop vs without stop - the event will trigger on the modified element and not propagate to its parents</h4>
                <div class="button-parent" @click="alertMeParent">
                    parent
                    <button @click.stop="alertMeChild">with .stop (on child)</button>
                </div>
            </div>
            <div class="flex-container">
                <h4>With self vs without self - event will trigger if the interaction is directly and only on itself - not its children</h4>
                <div class="button-parent" @click.self="alertMeParent">
                    parent
                    <button @click="alertMeChild">with .self (on parent)</button>
                </div>
            </div>
            <div class="flex-container">
                <h4> .once - only ever triggering the event once for that element trigger</h4>
                <div class="button-parent" @click="alertMeParent">
                    parent
                    <button @click.once="alertMeChild">WITH .once (on child)</button>
                </div>
            </div>
            <div class="flex-container">
                <h4> .capture - change event propagation to use event capturing instead fo event bubbling - i.e. changes the order of propagation to handle the event from when it is captured and before it reaches the target element</h4>
                <div class="button-parent" @click.capture="alertMeParent">
                    parent
                    <button @click="alertMeChild">WITH .capture (on parent)</button>
                </div>
            </div>
            <div class="flex-container">
                <h4> .passive - used to block the preventDefault() being called in the event handler, thus informing the browser that it can optimise the event handling</h4>
                <h4>usually used for scroll events and for mobile touch screens performance - read more on it</h4>
            </div>
            <div>
                <a href="https://vuejs.org/guide/essentials/event-handling.html" target="_blank">link (scroll to bottom) for system key modifiers / mouse button modifiers</a>
            </div>
        </div>
        <div>
            ELEMENT WITHOUT MODIFIERS:
            <div class="button-parent" @click="alertMeParent">
                parent
                <button @click="alertMeChild">WITHOUT MODIFIERS</button>
            </div>
        </div>
    </div>
</template>

<style scpoed>
    .button-parent{
        background-color: red;
        padding: 1rem;
    }
</style>