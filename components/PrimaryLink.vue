<script setup lang="ts">
import primaryClasses from './classes/primaryButton';
</script>

<template>
  <NuxtLink tabindex="0" :class="primaryClasses()">
    <slot></slot>
  </NuxtLink>
</template>
