<script setup>
import {ref, reactive, computed, shallowReactive} from 'vue'

const isClassActive = ref(false)
const isClassActive2 = ref(false)

const handleClass1Activation = (e) => {
    isClassActive.value = !isClassActive.value
}

const handleClass2Activation = (e) => {
    isClassActive2.value = !isClassActive2.value
}

// the computed property returns an object, the computed keeps track of the reactive values
const classObject = computed(() => ({
    'my-class-name': isClassActive.value,
    'my-class-name2': isClassActive2.value
}))

/* conditional rendering code */
const myCondition = ref(0)

/* list rendering code */
const myList = reactive([1, 2, 3])
const addToList = () => {
    myList.push(myList[myList.length - 1] + 1)
}

const myObject = reactive({
    item1: 1,
    item2: 2,
    item3: 3
})

const keyNumber = computed(() => {
    return Object.keys(myObject).length
})

const addToObject = (propNumber) => {
    const propertyName = 'item'+ propNumber + 1
    myObject[propertyName] = propNumber + 1
}

</script>

<template>
<div class="page2">
    <div class="flex-container">
        <p> note that static (non-toggeable classes) can live alongside the toggeable classes</p>
        <button @click="handleClass1Activation">Activate Class 1</button>
        <button @click="handleClass2Activation">Activate Class 2</button>
        <h3
        class="static-class"
        :class="{'my-class-name': isClassActive, 'my-class-name2': isClassActive2}"
        >
            LOL
        </h3>
    </div>
    <div class="flex-container">
        <p>Same problem, but with a more powerful solution, with a computed prop and using arrays to list all the classes we need</p>
        <button @click="handleClass1Activation">Activate Class 1</button>
        <button @click="handleClass2Activation">Activate Class 2</button>
        <h3
        :class="[classObject, 'static-class']"
        >
            LOL
        </h3>
    </div>

    <div class="flex-container">
        <h4>V-if/-else-if/else example: </h4>
        <label>Select myCondition
            <select v-model="myCondition">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="5">5</option>
            </select>
        </label>
        <p v-if="myCondition == 1">Condition = 1</p>
        <p v-else-if="myCondition == 2">Condition = 2</p>
        <p v-else>Condition = 5</p>
        <h3>V-show (keeping the element but disabling its visibility): </h3>
        <p v-show="myCondition == 1"> Condition = 1</p>
    </div>
    <h2>List Rendering</h2>
    <h4>Note that vue can detect when an array is mutated, therefore be aware of the type of methods used and how are they used:</h4>
    <h4>I.e. whether if we use methods such as push, sort, splice, etc, or methods such as concat, slice, filter, etc</h4>
    <h4>Be careful when using mutating methods, even in computed properties and create copies where needed</h4>
    <div class="flex-container">
        <h4>V-for list example with an ARRAY:</h4>
        <button @click="addToList">Add item</button>
        <!-- using in/of has no significance -->
        <p v-for="(item, index) in myList" :key="item">item: {{ item }}</p>
        
    </div>
    <div class="flex-container">
        <h4>V-for list example with an OBJECT:</h4>
        <button @click="addToObject(keyNumber)">Add item</button>
        <!-- using in/of has no significance -->
        <p v-for="(item, key) in myObject" :key="item">item: {{ item }}</p>
        <h3>{{ keyNumber }}</h3>
    </div>

    <!-- Try not to use V-if and V-for together, such as <li v-for="item in items" v-if="item">{{ item }}</li>, as V-if has a higher precedence and none of the items will render-->
    <!-- instead - wrap the conditional items in a list (this also shows using a list in a range): -->
    <div class="flex-container">
        <h4>V-for with V-if example</h4>
        <template v-for="n in 10">
        <p v-if="n % 2 == 0"> {{ n }}</p>
        </template>
    </div>
</div>
</template>

<style scoped>
    .page2{
        font-size: 0.7rem;
    }
    .static-class {
        color: red
    }
    .my-class-name{
        background-color: blueviolet
    }
    .my-class-name2{
        text-decoration: line-through;
    }

    .class-name3{
        font-size: 100px;
    }
    .class-name4{
        border: 1px solid black;
    }
    p{
        margin: 0;
        padding: 0;
    }
    h4{
        margin: 0;
    }

</style>