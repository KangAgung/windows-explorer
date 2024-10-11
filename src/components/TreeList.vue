<template>
  <ul>
    <li v-for="folder in folders" :key="folder.id">
      <div 
        class="py-2 text-gray-800 font-semibold w-full cursor-pointer"
        :class="[folder.children ? 'hover:bg-slate-200' : '']"
        @click="toggleFolder(folder)"
      >
        <UnoIcon
          :class="[
            folder.isExpanded ? 'rotate-90' : 'rotate-0', 
            folder.children ? 'i-mdi-chevron-right' : ''
          ]" 
        />
        <UnoIcon
          :class="[folder.children ? 'i-mdi-folder' : 'i-mdi-file-document-outline']" 
        />
        {{ folder.name }}
      </div>
      <TreeList
        v-if="folder.isExpanded && folder.children?.length > 0"
        :folders="folder.children"
        @select-folder="$emit('select-folder', $event)"
        class="pl-4"
      />
    </li>
  </ul>
</template>

<script setup>
defineProps({
  folders: Array,
});

const emit = defineEmits(['select-folder']);

const toggleFolder = (folder) => {
  if (folder.children === null) {
    return;
  }
  if (!folder.hasOwnProperty('isExpanded')) {
    folder.isExpanded = false;
  }
  folder.isExpanded = !folder.isExpanded;
  emit('select-folder', folder);
};
</script>

<style scoped>
</style>
