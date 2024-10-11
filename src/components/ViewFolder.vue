<template>
  <div>
    <div v-if="contents.length > 0" class="grid grid-cols-6 gap-4">
      <UCard v-for="content in contents" :key="content.id" 
        :ui="{
          ring: '',
          body: {
            background: 'bg-white',
            padding: 'px-2 py-4 sm:p-4',
          },
        }"
        class="cursor-pointer"
      >
        <UnoIcon
          :class="[content.children ? 'i-mdi-folder' : 'i-mdi-file-document-outline']" 
        />
        {{ content.name }}
      </UCard>
    </div>
    <div v-else-if="contents.length < 1 && selectedFolder">
      <h2 class="text-xl text-gray-800 font-semibold">
        {{ props.selectedFolder?.name }} is empty.
      </h2>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  selectedFolder: Object,
});

const contents = computed(() => props.selectedFolder?.children || []);
</script>
