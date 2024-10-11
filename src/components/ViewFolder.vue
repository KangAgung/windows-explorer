<template>
  <div class="flex flex-col gap-y-4">
    <div v-if="selectedFolder" class="flex justify-end px-6">
      <UButton 
        icon="i-mdi-plus"
        size="xl"
        label="Add"
        color="gray"
        variant="solid"
        @click="isOpen = true"
      />

      <UModal v-model="isOpen"
        :ui="{
          width: 'w-full sm:max-w-lg',
        }"
      >
        <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100' }">
          <template #header>
            <div class="flex items-center justify-between">
              <h3 class="text-base font-semibold text-gray-900">
                Add New Folder
              </h3>
              <UButton
                color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                @click="isOpen = false"
              />
            </div>
          </template>

          <UForm :state="dataForm" class="space-y-4" @submit="onSubmit">
            <UFormGroup required label="Name" name="name">
              <UInput v-model="dataForm.name" placeholder="Please type folder name" />
            </UFormGroup>

            <div class="text-right !mt-8">
              <UButton type="submit" color="gray">
                <UnoIcon class="i-mdi-content-save" /> Save
              </UButton>
            </div>
          </UForm>
        </UCard>
      </UModal>
    </div>
    <div v-if="contents.length > 0" class="grid grid-cols-6 gap-4">
      <UCard v-for="content in contents" :key="content.id" 
        :ui="{
          body: {
            padding: 'px-2 py-4 sm:p-4',
          },
        }"
        class="cursor-pointer"
        @click="openFolder(content)"
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

const emit = defineEmits(['select-folder']);

const openFolder = (folder) => {
  if (folder.children === null) {
    return;
  }

  emit('select-folder', folder);
};

const config = useRuntimeConfig()

const isOpen = ref(false)

const dataForm = reactive({
  name: null,
})

const onSubmit = async (event) => {
  try {
    const param = {
      name: event.data.name,
      parentId: +props.selectedFolder?.id,
    }

    const response = await $fetch(`${config.public.apiEndpoint}/folders`,{
      method: 'POST',
      body: param
    });

    props?.selectedFolder?.children?.push(response.data);

    isOpen.value = false;
    dataForm.name = null;
  } catch (error) {
    console.error('Error adding folders', error);
  }
}
</script>
