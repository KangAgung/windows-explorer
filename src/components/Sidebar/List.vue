<template>
  <li>
    <UButton
      color="gray"
      variant="link"
      icon="i-mdi-chevron-right"
      @click="onSelectFolder(folder)"
    />
    <Sidebar
      v-for="(item, index) in folders.children"
      :key="index"
      :item="item"
    />
  </li>
</template>

<script lang="ts" setup>
const props = defineProps({
  folders: [],
  onSelectFolder: Function,
});
</script>