<script setup lang="ts"></script>

<template>
  <div class="flex min-h-screen w-full flex-col items-center">
    <nav class="flex h-22 w-full items-center justify-center bg-black">
      <NuxtLink to="/">Home</NuxtLink>
    </nav>
    <main class="h-full w-full max-w-screen-md px-2 py-4 xs:px-4">
      <slot></slot>
    </main>
    <footer class="p-4 text-center text-sm font-medium sm:text-base">
      Created by dodgewhale
    </footer>
  </div>
</template>
