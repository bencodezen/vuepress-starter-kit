<template>
    <div>
        <p>{{ count }}</p>
        <button @click="count++">Increment</button>
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

</style>
