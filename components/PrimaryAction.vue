<script setup lang="ts">
import { ButtonHTMLAttributes } from 'vue';
import primaryClasses from './classes/primaryButton';

type PrimaryActionProps = {
  type?: ButtonHTMLAttributes['type'];
};

withDefaults(defineProps<PrimaryActionProps>(), {
  type: 'button',
});
</script>

<template>
  <button :type="type" role="button" tabindex="0" :class="primaryClasses()">
    <slot></slot>
  </button>
</template>
