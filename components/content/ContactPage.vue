<template>
  <div>
    <div class="grid grid-flow-row grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-6 md:gap-y-9">
      <Input
        v-for="(field, index) in form"
        :key="index"
        v-model="field.data"
        :field="field"
        class="md:max-w-md lg:max-w-full"
        :class="{ '!max-w-full lg:col-span-2': field.layout === 'big' }"
      />
    </div>
    <div class="mt-8">
      <Button :on-click="() => onSend()">
        {{ sendButton }}
      </Button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue'
import type { Field, ContactField } from '~/types/contact'

const props = defineProps({
  sendButton: {
    type: String,
    default: 'Send message' // if empty, send button will be disabled.
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
