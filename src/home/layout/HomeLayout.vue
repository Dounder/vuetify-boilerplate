<script setup lang="ts">
import { ref } from 'vue';
import { HomeAppbar, HomeDrawer } from '../components';

const drawer = ref(true);
</script>

<template>
  <v-layout class="rounded rounded-md">
    <HomeAppbar @toggle="drawer = !drawer" />

    <HomeDrawer :drawer="drawer" />

    <v-main class="d-flex justify-center align-center">
      <router-view />
    </v-main>
  </v-layout>
</template>

<style lang="scss" scoped></style>
