<template>
    <v-dialog v-bind:v-model="isOpen" max-width="500">
      <v-card rounded="lg">
        <v-card-title class="d-flex justify-space-between align-center">
          <div class="text-h5 text-medium-emphasis ps-2">{{ title }}</div>
          <v-btn @click="handleClose" icon="mdi-close" variant="text"></v-btn>
        </v-card-title>
        <v-divider
          class="mb-4 border-2 border-solid border-b-gray-600"
        ></v-divider>
  
        <slot></slot>
      </v-card>
    </v-dialog>
  </template>
  
  <script setup>
  const props = defineProps({
    isOpen: {
      type: Boolean,
      default: false,
    },
    title: String,
  });
  
  const emit = defineEmits(['close']);
  
  const handleClose = () => {
    emit('close');
    isOpen = false;
  };
  </script>
  