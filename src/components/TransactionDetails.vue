<script>
import TransactionDetailsHeader from "./TransactionDetailsHeader.vue";
import SideBar from "./SideBar.vue";
import TransactionDetailsMainPage from "./TransactionDetailsMainPage.vue";

export default {
  components: {
    TransactionDetailsHeader,
    SideBar,
    TransactionDetailsMainPage,
  },

  data() {
    return {
      isSidebarVisible: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarVisible = !this.isSidebarVisible;
    },
  },
};
</script>

<template>
  <div class="transaction-background">
    <TransactionDetailsHeader @toggle-sidebar="toggleSidebar" />

    <div class="transaction-content">
      <SideBar v-if="isSidebarVisible" class="sidebar" />
      <TransactionDetailsMainPage class="main-page" />
    </div>
  </div>
</template>

<style>
.transaction-background {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.transaction-content {
  display: flex;
  flex: 1;
}

.sidebar {
  width: 20%;
  transition: transform 0.3s ease;
}

.main-page {
  flex: 1;
  padding: 20px;
  overflow-y: auto;
}

.transaction-background > TransactionDetailsHeader {
  padding: 10px;
}

@media (max-width: 1024px) {
  .sidebar {
    width: 250px;
  }
}

@media (max-width: 768px) {
  .sidebar {
    width: 250px;
  }

  .main-page {
    padding: 10px;
  }
}

@media (max-width: 480px) {
  .sidebar {
    width: 100%;
  }
}
</style>
