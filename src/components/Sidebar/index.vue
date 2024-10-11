<template>
  <aside
    id="aside"
    class="py-2 lg:pl-2 w-60 fixed flex z-40 top-0 h-screen transition-position overflow-hidden"
  >
    <div class="aside flex-1 flex flex-col overflow-hiddenlg:rounded-2xl">
      <div
        class="flex-1 overflow-y-auto overflow-x-hidden"
      >
        <SidebarList :folders="folders" @select-folder="selectFolder" />
      </div>
    </div>
  </aside>
  <!-- <div>
    <ul>
      <SidebarList :folders="folders" @select-folder="selectFolder" />
      <li 
        class="py-2 text-gray-800 font-semibold w-full flex cursor-pointer" 
        v-for="folder in folders" :key="folder.id" @click="onSelectFolder(folder)">
        <div>
          <UnoIcon class="i-mdi-chevron-right flex-none" />
          <span class="grow">{{ folder.name }}</span>
        </div>
      </li>
    </ul>
  </div> -->
</template>

<script lang="ts" setup>

defineProps({
  folders: {
    type: Array,
    required: true,
  },
})

const emit = defineEmits(['selectFolder'])

const selectFolder = (event: any, item: any) => {
  emit('selectFolder', event, item)
}
</script>