<script setup lang="ts">
import type { PropType } from 'vue'
import type { Field } from '../../types/contact'
const alpine = useAppConfig().alpine

const { FORMSPREE_URL } = useRuntimeConfig().public

if (!FORMSPREE_URL) {
  console.warn('No FORMSPREE_URL provided')
}

const status = ref()

const props = defineProps({
  submitButtonText: {
    type: String,
    default: 'Send message'
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
    ]
  }
})

const form = reactive(props.fields.map(v => ({ ...v, data: '' })))

const onSend = async (e: any) => {
  e.preventDefault()
  const data = new FormData(e.target)

  status.value = 'Sending...'

  fetch(e.target.action, {
    method: e.target.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      status.value = alpine.form.successMessage
      e.target.reset()
    } else {
      // Handle errors from API
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          status.value = data["errors"][0].message
          console.error(data["errors"].map((error: any) => error["message"]).join(", "))
          setTimeout(() => {
            status.value = 'Send message'
          }, 2000)
        } else {
          console.error("There was a problem submitting your form")
        }
      })
    }
  }).catch(() => {
    // Catch all other errors
    console.error("There was a problem submitting your form")
  })
}

</script>

<template>
  <form class="contact-form" method="POST" :action="FORMSPREE_URL" @submit="onSend">
    <div class="inputs">
      <Input v-for="(field, index) in form" :key="index" v-model="field.data" :field="field" />
    </div>
    <div>
      <Button type="submit" :disabled="!FORMSPREE_URL">
        {{ status ? status : submitButtonText }}
      </Button>
    </div>
  </form>
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
