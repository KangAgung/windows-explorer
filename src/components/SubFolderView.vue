<template>
  <div class="sub-folder-view">
    <h3 v-if="selectedFolder">Subfolders of {{ selectedFolder.name }}</h3>
    <ul v-if="subfolders.length > 0">
      <li v-for="subfolder in subfolders" :key="subfolder.id">
        {{ subfolder.name }}
      </li>
    </ul>
    <p v-else>No subfolders found.</p>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// Define props for the selected folder and subfolders
const props = defineProps({
  selectedFolder: Object,
});
const subfolders = computed(() => props.selectedFolder?.children || []);
</script>

<style scoped>
.sub-folder-view ul {
  list-style: none;
  padding-left: 0;
}
.sub-folder-view li {
  margin: 5px 0;
  padding: 5px;
  background-color: #f0f0f0;
}
</style>
