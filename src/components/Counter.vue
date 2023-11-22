<script setup>
import { useCounter } from '/src/stores/Counter.js'
const counter = useCounter();
</script>

<template>
    <div class="container">
        <h1>{{counter.showCount}}</h1>
        <div>
            <button @click="counter.increment">Increase</button>
            <button @click="counter.decrease">Decrease</button>
        </div>
    </div>
</template>

<style scoped>
.container {
    max-width: 70%;
    width: 100%;
    background-color: rgb(167, 159, 179);
    padding: 24px 0;
    margin-top: 10vh;
    display: flex;
    flex-direction: column;
}

h1 {
    font-size: 2em;
    margin: auto;
}

button {
    background-color: rgb(68, 36, 184);
    font-size: 1em;
    font-weight: bold;
    border: none;
    cursor: pointer;
    padding: 8px;
    margin: 8px;
}
</style>