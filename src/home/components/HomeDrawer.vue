<script setup lang="ts">
import { watch } from 'vue';
import { ref } from 'vue';

interface Props {
  drawer: boolean;
}

const props = defineProps<Props>();
const drawer = ref(props.drawer);

watch(
  () => props.drawer,
  (value) => {
    drawer.value = value;
  }
);
</script>

<template>
  <v-navigation-drawer v-model="drawer">
    <v-list>
      <v-list-item title="Navigation drawer"></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style lang="scss" scoped></style>
