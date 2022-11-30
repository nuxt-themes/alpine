<script setup lang="ts">
import type { PropType } from 'vue'
import type { Field, ContactField } from '../types/contact'

const props = defineProps({
  sendButton: {
    type: String,
    default: 'Send message'
  },
  email: {
    type: String,
    required: true
  },
  subject: {
    type: String,
    default: 'Contact from Alpine Theme !'
  },
  fields: {
    type: Array as PropType<Field[]>,
    default: () => [
      {
        type: 'text',
        model: 'name',
        name: 'Name',
        placeholder: 'Your name',
        required: true,
        layout: 'default'
      },
      {
        type: 'email',
        model: 'email',
        name: 'Email',
        placeholder: 'Your email',
        required: true,
        layout: 'default'
      },
      {
        type: 'text',
        model: 'text',
        name: 'Subject',
        required: false,
        layout: 'default'
      },
      {
        type: 'textarea',
        model: 'message',
        name: 'Message',
        placeholder: 'Your message',
        required: true,
        layout: 'big'
      }
    ] /* ,
    validator: (fields: Field[]) => {
      for (const field of fields) {
        if (!field.name) {
          return false
        }
        if (!field.required) {
          return false
        }
        if (!field.layout) {
          return false
        }
      }
      return true
    } */
  }
})

const form = reactive(props.fields.map(v => ({ ...v, data: '' })))

const onSend = async () => {
  const formatedData: ContactField[] = []
  await form.forEach((field) => {
    const data: ContactField = {
      name: field.name,
      data: field.data
    }
    formatedData.push(data)
  })
  // eslint-disable-next-line no-console
  console.log(formatedData)
}

</script>

<template>
  <div class="contact-form">
    <div class="inputs">
      <Input
        v-for="(field, index) in form"
        :key="index"
        v-model="field.data"
        :field="field"
      />
    </div>
    <div>
      <Button :on-click="() => onSend()">
        {{ sendButton }}
      </Button>
    </div>
  </div>
</template>

<style scoped lang="ts">
css({
  '.contact-form': {
    '.inputs': {
      display: 'grid',
      gridAutoFlow: 'row',
      gridTemplateColumns: 'repeat(1, minmax(0, 1fr))',
      gap: '{space.8}',
      marginBottom: '{space.8}',
      maxWidth: '{size.md}'
    }
  }
})
</style>
