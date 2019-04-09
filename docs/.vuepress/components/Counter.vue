<template>
    <div class="counter">
        <p class="counter-count">{{ count }}</p>
        <button class="counter-button" @click="count++">Add</button>
    </div>
</template>

<script>
export default {
    name: 'Counter',
    data() {
        return {
            count: 0
        }
    }
}
</script>

<style>
.counter {
    background-color: #41B883;
    border: 2px solid #35495E;
    color: #fff;
    text-align: center;
    padding: 30px 0;
    margin-bottom: 30px;
}

.counter-button {
    border-radius: 50%;
    width: 100px;
    height: 100px;
    font-size: 1.2rem;
    font-weight: bold;
    border: 2px solid #ccc;
}

.counter-count {
    margin-top: 0;
    margin-bottom: 30px;
    padding: 0;
    line-height: 1;
    font-size: 6rem;
    font-weight: bold;
}
</style>
