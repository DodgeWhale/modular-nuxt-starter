<script setup lang="ts">
import secondaryClasses from './classes/secondaryButton';
</script>

<template>
  <NuxtLink tabindex="0" :class="secondaryClasses()">
    <slot></slot>
  </NuxtLink>
</template>
