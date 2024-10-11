<script>
import Toggle from "@vueform/toggle";

export default {
  components: {
    Toggle,
  },
  data() {
    return {
      value: true,
    };
  },
};
</script>

<template>
  <header class="bg-white p-4">
    <nav class="flex justify-between items-center">
      <div class="flex items-center">
        <button @click="$emit('toggle-sidebar')" class="toggle-btn mr-2">
          ☰
        </button>
        <h1 class="text-black font-bold text-2xl">Dashboard</h1>
      </div>

      <div class="flex items-center space-x-2">
        <Toggle v-model="value" />
        <h5 class="text-black text-xl">
          {{ value ? "Live mode" : "Offline mode" }}
        </h5>
      </div>
    </nav>
  </header>
</template>

<style>
.transaction-header {
  width: 100%;
}

.toggle-btn {
  background: none;
  border: none;
  font-size: 30px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .transaction-header {
    padding: 2rem 1rem;
  }
}
</style>
