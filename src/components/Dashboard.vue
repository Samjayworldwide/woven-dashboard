<script>
import Header from "./Header.vue";
import SideBar from "./SideBar.vue";
import MainPage from "./MainPage.vue";

export default {
  components: {
    Header,
    SideBar,
    MainPage,
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
  <div class="dashboard-background">
    <Header @toggle-sidebar="toggleSidebar" />
    <div class="dashboard-content">
      <SideBar v-if="isSidebarVisible" class="sidebar" />
      <MainPage class="main-page" />
    </div>
  </div>
</template>

<style>
.dashboard-background {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.dashboard-content {
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

.dashboard-background > TransactionDetailsHeader {
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
