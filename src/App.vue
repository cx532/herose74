<template>
  <div id="app">
    <!-- 使用appHeader -->
    <app-header></app-header>
    <div class="container-fluid">
      <div class="row">
        <!-- Appsidebar -->
        <app-sidebar></app-sidebar>

        <!-- 主内容区域 -->
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppSidebar from "./components/AppSidebar.vue";

export default {
  name: "app",
  components: {
   AppHeader,
   AppSidebar
  }
};
</script>

<style>

</style>
