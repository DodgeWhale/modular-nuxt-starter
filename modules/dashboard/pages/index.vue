<script setup lang="ts">
async function start(): Promise<void> {
}
</script>

<template>
  <div class="flex justify-center">
    <PrimaryLink to="/categories" data-testid="get-started" @click="start"> Get started </PrimaryLink>
  </div>
</template>
