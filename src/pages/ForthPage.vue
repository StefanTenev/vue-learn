<script setup>
import {ref, reactive, computed, shallowReactive} from 'vue'

// v-model example related code
const textRef = ref('')
const textRefVModelExample = ref('')

// checkbox lists example related code
const checkboxArrRef = ref([])

// select inputs example related code
const optionsRef = ref([
    {text: 'select 1', value: '1'},
    {text: 'select 2', value: '2'},
    {text: 'select 3', value: '3'},
])
const selectedOption = ref('Please select an option')

// dynamic value radio boxes code
const myRadioValue = ref('')

const dynamicValue1 = ref('Selected Radio 1')
const dynamicValue2 = ref('Selected Radio 2')

// dynamic value check boxes code
const mCheckBoxValue = ref('')

// v-model modifiers code
const myLazyValue = ref('')

const myNonNumberValue = ref()
const incrementedNonNumberValue = computed(() => {
    return myNonNumberValue.value + 1
})
const myNumberValue = ref()
const incrementedNumberValue = computed(() => {
    return myNumberValue.value + 1
})

const myTrimmedValue = ref('')

const myRadioChoice = ref('trimmed')

</script>

<template >
    <h2>Form input bindings</h2>
    <div class="section-container">
        <h3>Presenting input, with v-model and without - v-model follows the same code, but simplifies the pattern</h3>
        <div>
            <label>
                Example without v-model:
                <input type="text" :value="textRef" @input="(event) => textRef = event.target.value" />
                <h4> INPUT TEXT: {{ textRef }}</h4>
            </label>
            
                <label>
                Example with v-model:
                <input type="text" v-model="textRefVModelExample" />
                <h4> INPUT TEXT: {{ textRefVModelExample }}</h4>
            </label>
        </div>
    </div>
    <div class="section-container">
        <h3>v-model can also be used with: </h3>
            <p>* checkboxes & radio buttons (both with inbuilt checked property and change as event)</p>
            <p>* select (both with inbuilt value property and change as event)</p>
    </div>
    <h4>V-model will always ignore the default attributes found on any form elements.</h4>
    <h4>It will always treat the current bound JavaScript state as the source of truth. You should declare the initial value on the JavaScript side</h4>
    <div class="section-container">
        <h3>We can also bind multiple checkboxes to an array or set value</h3>
        <div>
            <label>
                <input value="A" type="checkbox" v-model="checkboxArrRef">
                checkbox A
            </label>
            <label>
                <input value="B" type="checkbox" v-model="checkboxArrRef">
                checkbox B
            </label>
            <label>
                <input value="C" type="checkbox" v-model="checkboxArrRef">
                checkbox C
            </label>
        </div>
        <p>Array: {{ checkboxArrRef }}</p>
    </div>
    <div class="section-container">
        <h3>for selects, we can have the configuration in an object.</h3>
        <p>Also: If the initial value of your v-model expression does not match any of the options, the <strong>select</strong> element will render in an "unselected" state. On iOS this will cause the user not being able to select the first item because iOS does not fire a change event in this case. It is therefore recommended to provide a disabled option with an empty value, as demonstrated in the example above.</p>
        <div>
            <select v-model="selectedOption">
                <option disabled value="Select an option">Select an option</option>
                <option v-for="option in optionsRef" :value="option.value">
                    {{ option.text }}
                </option>
            </select>
        </div>
        <p>Selected: {{ selectedOption }}</p>
    </div>
    <div class="section-container">
        <h3>You can have dynamic values for radio/checkboxes, instead of the usual static string values</h3>
        <div>
            <label>change the value for radio 1<input type="text" v-model="dynamicValue1"/></label>
            <label>
                radio 1
                <input type="radio" v-model="myRadioValue" :value="dynamicValue1" />
            </label>
        </div>
        <div>
            <label>change the value for radio 2<input type="text" v-model="dynamicValue2"/></label>
            <label>
                radio 2
            <input type="radio" v-model="myRadioValue" :value="dynamicValue2" />
        </label>
        </div>
        <h4>The value received from the radio selection: {{ myRadioValue }}</h4>
    </div>
    <div class="section-container">
        <h3>Dynamic values for checkboxes (using the vue-specific true/false-value)</h3>
        <h5>Usually, checkboxes only have a value of true/false - with true/false-value, however, we can customise these values</h5>
        <input type="checkbox" v-model="mCheckBoxValue" true-value="I AM TRUE!" false-value="I AM FALSE!">
        <h4> the value returned by my checkbox (instead of just true/false): {{ mCheckBoxValue }}</h4>
        <p>note that forms don't record values of unchecked boxes - so this might not guarantee the value in the data reception</p>
    </div>

    <div class="section-container"> 
        <h4>v-model modifiers</h4>
        <div class="inner-section-container">
            <h4>.lazy - only tracks onchange data, instead of oninput - thus the ref will only be updated upon entering the data</h4>
            <input type="text" v-model.lazy="myLazyValue">
            <p>Input value: {{ myLazyValue }}</p>
        </div>
        <div class="inner-section-container">
            <h3>.number - coerces data into number</h3>
            <div>
                <label>
                .number input
                <input type="text" v-model.number="myNumberValue">
            </label>
            <p> <u>computed prop incrementing the input - fully adds 1 to the number</u>: <strong>{{ incrementedNumberValue }}</strong></p>
            </div>
            <div>
                <label>
                NON .number input
                <input type="text" v-model="myNonNumberValue">
            </label>
            <p> <u>computed prop incrementing the input -just contatenates 1 as a string</u>: <strong>{{ incrementedNonNumberValue }}</strong></p>
            </div>
        </div>
        <div class="inner-section-container">
            <h4>.trim - trims white spaces</h4>
            <label>
                .trim input
                <input type="radio" v-model="myRadioChoice" value="trimmed"
            </label>
            <label>
                NON .trim input
                <input type="radio" v-model="myRadioChoice" value="not-trimmed"
            </label>
            <input v-if="myRadioChoice === 'trimmed'" type="text" v-model.trim="myTrimmedValue" />
            <input v-else type="text" v-model="myTrimmedValue" />
            <p>my my total input = INPUT START:{{ myTrimmedValue }}:INPUT END</p>
        </div>
    </div>
</template>

<style scoped>
    p, h4{
        margin: 0;
    }

    .section-container{
        border: 5px solid red;
        margin: 1rem 0;
    }
    .inner-section-container{
        border: 1px solid gray;
    }
    div {
        font-size: 0.8rem
    }
</style>