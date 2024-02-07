<script setup lang="ts">
import secondaryClasses from './classes/secondaryButton';
</script>

<template>
  <button type="button" role="button" tabindex="0" :class="secondaryClasses()">
    <slot></slot>
  </button>
</template>
