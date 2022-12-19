<script setup lang="ts">
const bookStore = useBooks()
const { data: books } = bookStore.useFind({ query: {}, onServer: true })
const addTag = async (text: any) => {
  const { Tag } = useTags()
  const newTag = new Tag({
    text: text.value,
    bgColor: 'bg-gray-100',
    textColor: 'text-gray-800',
  })

  await newTag.save()
  addSnack({
    type: 'success',
    title: 'Tag Added',
    msg: 'Tag has been added',
  })
  text.value = ''
}

const { tagStore } = useTags()
const { data: tags } = tagStore.useFind({ query: {}, onServer: true })
</script>

<template>
  <div class="mx-auto w-full md:w-1/2 mt-16">
    <div class="px-8">
      <div class="text-lg border-b mb-4 pt-2">
        Read
      </div>
      <div class="text-gray-600">
        <div v-for="book of books" :key="book.id" class="text-base">
          <router-link as="a" class="text-blue-500" :to="`/${book.name}/1`">
            - {{ book.name }}
          </router-link>
        </div>
      </div>

      <div class="text-lg border-b mb-4 mt-16">
        Create Tags
      </div>

      <div class="flex gap-4">
        <TextFieldAdd
          value=""
          type="text"
          label="Tag name"
          name="name"
          hide-details
          @submit="addTag"
        />
      </div>

      <div class="text-base border-b mb-4 mt-16">
        Current tags
      </div>

      <div v-for="tag of tags" :key="tag.id">
        - {{ tag.text }}
      </div>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: empty
</route>
