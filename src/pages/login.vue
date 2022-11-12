<script setup lang="ts">
import { Form } from 'vee-validate'
import * as Yup from 'yup'
import { useRouter } from 'vue-router'
import { useAuth } from '~/store/auth'
import { addSnack } from '~/store/notifications'

const isForgotEmailOpen = ref(false)

const loginSchema = Yup.object({
  Email: Yup.string().email().required(),
  Password: Yup.string().min(5).required(),
})

const router = useRouter()

const login = async (formData: any) => {
  const auth = useAuth()
  const { Email: email, Password: password } = formData

  try {
    await auth.authenticate({
      strategy: 'local',
      email,
      password,
    })
    router.push('/dashboard')
  }
  catch (e: any) {
    addSnack({
      type: 'error',
      title: 'Invalid Login',
      msg: 'Your email or password was incorrect',
    })
  }
}

const sendEmail = () => {
  console.log('Email sent')
}
</script>

<template>
  <div class="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
        Sign in to your account
      </h2>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <Form
          v-slot="{ meta }"
          :validation-schema="loginSchema"
          @submit="login"
        >
          <div>
            <TextField name="Email" label="Email" />
          </div>

          <div>
            <TextField name="Password" label="Password" type="password" />
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500">
              <label for="remember-me" class="ml-2 block text-sm text-gray-900">Remember me</label>
            </div>

            <div class="text-sm">
              <a href="#" class="font-medium text-indigo-600 hover:text-indigo-500" @click="isForgotEmailOpen = true">
                Forgot your password?
              </a>
            </div>
          </div>

          <div class="mt-2">
            <button
              type="submit"
              :class="meta.valid ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-300'"
              :disabled="!meta.valid"
              class="btn btn-primary w-full text-sm py-2 px-4"
            >
              Sign in
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>

  <BaseDialog :open="isForgotEmailOpen" @close="isForgotEmailOpen = false">
    <template #title>
      <div class="text-lg font-medium leading-6 text-gray-900">
        Reset Password
      </div>
    </template>

    <template #description>
      <p class="text-sm text-gray-500 mb-2">
        An email will be send to the email provided below
      </p>
      <TextField name="Email" label="Email" />
    </template>

    <template #actions>
      <button
        type="button"
        class="btn btn-warning px-4 py-2 text-base"
        @click="sendEmail"
      >
        Send Email
      </button>
      <button
        type="button"
        class="btn btn-secondary px-4 py-2 text-base"
        @click="isForgotEmailOpen = false"
      >
        Cancel
      </button>
    </template>
  </BaseDialog>
</template>

<route lang="yaml">
meta:
  layout: empty
</route>
