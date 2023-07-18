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

<template>
  <div>
    <label :for="field.name">
      {{ field.label }}
    </label>
    <input
      v-if="field.type !== 'textarea'"
      :id="field.name"
      :name="field.name"
      :value="modelValue"
      :type="field.type ? field.type : 'text'"
      :placeholder="field.placeholder ? field.placeholder : ''"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <textarea
      v-else
      :id="field.name"
      :name="field.name"
      :value="modelValue"
      :type="field.type ? field.type : 'text'"
      :placeholder="field.placeholder ? field.placeholder : ''"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style scoped lang="ts">
css({
  div: {
    label: {
      display: 'block',
      fontSize: '{text.base.fontSize}',
      lineHeight: '{text.base.lineHeight}',
      fontWeight: '{fontWeight.semibold}',
      marginBottom: '{space.2}',
      cursor: 'pointer',
    },
    'input, textarea': {
      backgroundColor: 'transparent',
      outline: 'none',
      border: '1px solid {color.gray.300}',
      borderRadius: '{radii.sm}',
      padding: '{space.2} {space.4}',
      width: '100%',
      caretColor: '{color.gray.500}',
      '&:focus': {
        borderColor: '{color.gray.700}'
      },
      '@dark': {
        borderColor: '{color.gray.700}',
        '&:focus': {
          borderColor: '{color.gray.400}'
        },
      }
    },
    textarea: {
      resize: 'none',
      height: '{space.48}'
    }
  }
})
</style>
