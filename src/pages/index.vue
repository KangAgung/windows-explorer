<template>
  <nav class="w-1/4 bg-white border-2 p-4">
    <TreeList :folders="folders" @select-folder="selectFolder" />
  </nav>

  <main class="bg-slate-200 w-full p-4 text-center text-gray-800">
    <ViewFolder :selectedFolder="selectedFolder" @select-folder="selectFolder" />
  </main>
</template>

<script setup lang="ts">
const folders = ref([]);
const selectedFolder = ref(null);

const config = useRuntimeConfig()

const fetchFolders = async () => {
  try {
    const response = await $fetch(`${config.public.apiEndpoint}/folders`);
    folders.value = response.data;
  } catch (error) {
    console.error('Error fetching folders', error);
  }
};

const selectFolder = (folder) => {
  selectedFolder.value = folder;
};

onBeforeMount(() => {
  fetchFolders();
});
</script>
  