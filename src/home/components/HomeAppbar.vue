<script setup lang="ts">
interface Emits {
  (e: 'toggle'): void;
}

const emits = defineEmits<Emits>();
</script>

<template>
  <v-app-bar title="Application bar" border elevation="0" class="bg-primary">
    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="emits('toggle')" />
    </template>
    <template v-slot:append>
      <v-btn icon="mdi-heart"></v-btn>

      <v-btn icon="mdi-magnify"></v-btn>

      <v-btn icon="mdi-dots-vertical"></v-btn>
    </template>
  </v-app-bar>
</template>

<style lang="scss" scoped></style>
