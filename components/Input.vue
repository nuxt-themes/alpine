<template>
  <div>
    <h4 class="text-md mb-3 mt-0">
      {{ field.name }}
    </h4>
    <input
      v-if="field.layout !== 'big'"
      class="text-input h-10"
      :value="modelValue"
      :type="field.type ? field.type : 'text'"
      :placeholder="field.placeholder ? field.placeholder : ''"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <textarea
      v-else
      class="text-input resize-none h-56"
      :value="modelValue"
      :type="field.type ? field.type : 'text'"
      :placeholder="field.placeholder ? field.placeholder : ''"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Field } from '../types/contact'

defineEmits(['update:modelValue'])

defineProps({
  modelValue: {
    type: String,
    required: true
  },
  field: {
    type: Object as PropType<Field>,
    required: true,
    validator: (value: Field) => {
      if (!value.name) {
        return false
      }
      return true
    }
  }
})

</script>

<style scoped>
.text-input {
  @apply bg-transparent w-full p-4 outline outline-1 outline-primary-300 caret-primary-900 focus:outline-primary-900 dark:caret-primary-200 accent-primary-900 dark:accent-primary-200 rounded-lg;
}
</style>
