<template>
  <nav class="w-1/4 bg-white border-2 p-4">
    <FolderTree :folders="folders" @select-folder="selectFolder" />
  </nav>

  <main class="bg-slate-200 w-full p-4 text-center text-gray-800">
    <UContainer>
      <SubFolderView :selectedFolder="selectedFolder" />
      <!-- <UCard
        class="w-full" :ui="{
          base: 'rounded',
          ring: '',
          background: 'bg-white',
          divide: 'divide-y divide-gray-200',
          header: { 
            background: 'bg-white',
            padding: 'px-4 py-5' 
          },
          body: { background: 'bg-white', padding: '', base: 'divide-y divide-gray-200' },
          footer: { padding: 'p-4' },
        }"
      >
        <template #header>
          <h3 class="text-left">{{ selectedFolder?.name || 'No Folder Selected' }}</h3>
        </template>

        <UTable :rows="[]" />
      </UCard> -->
    </UContainer>
  </main>
</template>

<script setup lang="ts">
const folders = ref([]);
const selectedFolder = ref(null);

const fetchFolders = async () => {
  try {
    const response = await $fetch('http://localhost:8080/folders');
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
  