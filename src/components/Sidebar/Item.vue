<template>
  <li>
    <UButton
      color="gray"
      variant="link"
      icon="i-mdi-chevron-right"
    />
    <NuxtLink
      :to="item.to ?? '#'"
      class="flex cursor-pointer text-xs items-center px-2 transition-all duration-150"
      :class="[componentClass, isDropdownActive ? 'bg-white dark:bg-slate-500 dark:text-gray-300 text-ut-asideBlue hover:text-ut-asideBlue rounded-l-full' : 'text-white hover:text-ut-bgYellow', isPortal ? 'bg-ut-primaryBlue rounded-full' : '', item.isLogout ? 'mr-2.5' : '']"
      @click.stop="menuClick"
    >
      <UnoIcon class="mr-2" :class="item.icon" />
      <span
        class="grow text-ellipsis line-clamp-1"
        :class="[{ 'pr-12': !hasDropdown }]"
      >{{ item.label }}</span>
      <UnoIcon
        v-if="hasDropdown"
        class="i-mdi-chevron-right flex-none transition-all duration-150"
        :class="[isDropdownActive ? ' rotate-90' : 'rotate-0']"
      />
    </NuxtLink>
    <SidebarList
      v-if="hasDropdown"
      :menu="item.menu"
      class="aside-menu-dropdown" :class="[isDropdownActive ? 'block dark:bg-slate-800/50' : 'hidden']"
    />
  </li>
</template>

<script lang="ts" setup>
  const props = defineProps({
    item: {
      type: Object,
      required: true,
    },
    isDropdownList: Boolean,
  })

  const emit = defineEmits(['menuClick'])

  const isDropdownActive = ref(false)

  const componentClass = computed(() => [
    props.isDropdownList ? 'py-2 pl-6' : 'py-2',
  ])

  const hasDropdown = computed(() => !!props.item.menu && props.item.menu.length > 0)

  const menuClick = (event: Event) => {
    emit('menuClick', event, props.item)

    if (hasDropdown.value)
      isDropdownActive.value = !isDropdownActive.value
  }
</script>