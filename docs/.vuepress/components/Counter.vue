<template>
  <div class="counter">
    <p class="counter-count">{{ count }}</p>
    <div class="counter-actions">
      <button class="counter-button" @click="increment">Add</button>
      <button class="counter-button" @click="decrement">Subtract</button>
      <button class="counter-button" @click="reset">Reset</button>
    </div>
    <div>
      <label for="change-amount" class="counter-label">Change Amount:</label>
      <input type="number" v-model.number="amount" class="counter-input" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  data() {
    return {
      count: 0,
      amount: 1
    }
  },
  methods: {
    increment() {
      this.count += this.amount
    },
    decrement() {
      this.count -= this.amount
    },
    reset() {
      this.count = 0
    }
  }
}
</script>

<style>
.counter {
  background-color: #41b883;
  border: 8px solid #35495e;
  color: #fff;
  text-align: center;
  padding: 30px 0;
  margin-bottom: 30px;
}

.counter-actions {
  margin-bottom: 30px;
}

.counter-button {
  border-radius: 50%;
  width: 100px;
  height: 100px;
  margin-right: 15px;
  font-size: 1.2rem;
  font-weight: bold;
  border: 2px solid #ccc;
}

.counter-button:last-child {
  margin-right: 0;
}

.counter-count {
  margin-top: 0;
  margin-bottom: 30px;
  padding: 0;
  line-height: 1;
  font-size: 6rem;
  font-weight: bold;
}

.counter-input {
  font-size: 1.2rem;
  padding: 10px;
}

.counter-label {
  font-size: 1.2rem;
  font-weight: bold;
  margin-right: 10px;
}
</style>
