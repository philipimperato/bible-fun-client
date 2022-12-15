<script setup lang="ts">
import type { PropType } from 'vue'
import * as Yup from 'yup'
import type { Verse } from '~/models/verse'

const props = defineProps({
  verse: Object as PropType<Verse>,
  isActive: {
    type: Boolean,
    defaultValue: false,
  },
})
const { open, close } = useModal()
const isActive = toRef(props, 'isActive')
const verse = toRef(props, 'verse')

const { Note } = useNoteStore()

const noteSchema = Yup.object({
  note: Yup.string().min(1).max(300),
})

const addNote = async (formData: any): Promise<void> => {
  const newNote = new Note({
    verseId: verse.value?.id,
    ...formData,
  })

  try {
    await newNote.save()
    close()

    addSnack({
      type: 'success',
      title: 'Saved',
      msg: 'Note saved.',
    })
  }
  catch (e: any) {
    addSnack({
      type: 'error',
      title: 'Error: ',
      msg: e.msg || e.Message,
    })
  }
}
// const activeAction = ref('note')
</script>

<template>
  <div class="p-4 py-6">
    <div><span class="text-gray-500 text-base">{{ verse?.verse }}</span> {{ verse?.verseText }}</div>
    <!-- <div v-if="isActive">
      <div>
        <div class="inline-block border-b-2 border-blue-200 text-blue-800 text-xs ml-1 mt-4">
          John 14:2
        </div>

        <div class="inline-block border-b-2 border-blue-200 text-blue-800 text-xs ml-2 mt-4">
          Matthew 3:30
        </div>

        <div class="inline-block border-b-2 border-blue-200 text-blue-800 text-xs ml-2 mt-4">
          Revelations 11:9
        </div>
      </div>
      <div class="rounded-md bg-blue-200 h-5 pt-0.5 text-blue-700 text-xs inline-block px-4 mt-2">
        Salvation
      </div>
      <div class="rounded-md bg-red-200 h-5 pt-0.5 text-red-700 text-xs inline-block px-4 ml-2">
        God's love
      </div>
      <div class="rounded-md bg-yellow-100 h-5 pt-0.5 text-yellow-700 text-xs inline-block px-4 ml-2">
        Hopeful
      </div>
    </div> -->

    <!-- <div v-if="!isActive" class="inline-flex items-center text-xs text-gray-400">
      <div>
        2 Notes
      </div>
      <div class="px-1">
        -
      </div>
      <div>
        3 Tags
      </div>
      <div class="px-1">
        -
      </div>
      <div>
        3 References
      </div>
    </div> -->
  </div>

  <div v-if="isActive">
    <div class="border-y p-2 border-gray-300 flex justify-around items-center">
      <material-symbols:comment-bank-rounded class="h-6 w-6 text-gray-600" aria-hidden="true" @click.stop="open" />
      <mdi-link class="h-8 w-8 text-gray-600" />
      <mdi-tag class="h-6 w-6 text-gray-600" />
    </div>

    <FormDialog :schema="noteSchema" :submit="addNote">
      <template #title="{ meta }">
        <div class="flex items-center justify-between">
          <div class="pr-4">
            Add a Note
          </div>
          <button
            :disabled="!meta.valid"
            class="btn btn-primary py-1 w-16 rounded-full"
          >
            Save
          </button>
        </div>
      </template>

      <template #content>
        <div class="px-4 mb-2">
          <TextArea label="" value="" name="note" hide-details />
        </div>
      </template>
    </FormDialog>

    <div class="text-center text-xs italic text-gray-400 my-4">
      No notes
    </div>

    <!-- <div class="p-4 bg-gray-100">
      <div class="px-2">
        <div class="text-sm text-gray-400">
          10.20.2022
        </div>
        <div class="text-sm text-gray-600">
          In other parts of scripture David talks about how God is always going to hear and respond to a cry.
          This shows that David is processing what he is feeling and not just what he knows. Does it truly believe?
          Maybe; in this moment he needs to express it to God.
        </div>

        <div class="w-8/12 mx-auto py-5">
          <div class="h-0.5 bg-gray-200"></div>
        </div>

        <div class="text-sm text-gray-400">
          10.24.2022
        </div>
        <div class="text-sm text-gray-600">
          Do you cry to the Lord or are you too proud? What is it that is stopping you from crying out? Do you
          believe He is a good God and would answer? Do you believe He cares?
        </div>
      </div>
    </div> -->

    <!-- <div v-if="activeAction === 'note'" class="pt-2 py-2">
      <TextArea name="Note" label="" hide-details />
    </div> -->
  </div>
</template>

<route lang="yaml">
meta:
  layout: empty
</route>
