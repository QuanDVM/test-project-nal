<template>
  <div
    :class="[
      'upload',
      { 'is-readonly': inputDisabled, 'is-disabled': disabled },
    ]"
    @click="selectFile"
  >
    <div
      class="upload__content"
      @drop.stop.prevent="onDrop"
      @dragover.stop.prevent
      @dragenter.stop.prevent="onDragEnter"
      @dragleave.stop.prevent="onDragLeave"
    >
      <slot>
        <div
          :class="[
            'upload__dropzone',
            { 'is-dragging': !inputDisabled && isDragging },
          ]"
        >
          <v-icon large>mdi-file</v-icon>
        </div>
      </slot>
    </div>

    <input
      ref="file"
      class="upload__file"
      type="file"
      :accept="fileType"
      :disabled="inputDisabled"
      @change="onFileChange"
    />
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue'

export interface FileProps {
  raw: File
  data?: string | ArrayBuffer | null
}

interface DataProps {
  selected: Array<FileProps>
  isDragging: boolean
}

export default Vue.extend({
  name: 'TheUpload',

  props: {
    multiple: Boolean,

    fileList: {
      type: Array as PropType<Array<FileProps>>,
      required: false,
      default: () => [],
    },

    readonly: Boolean,

    disabled: Boolean,

    fileLimit: {
      type: Number,
      required: false,
      default: 0,
    },

    fileType: {
      type: String,
      required: false,
      default: () => '*',
    },

    fileSize: {
      type: Number,
      required: false,
      default: 0,
    },
  },

  data(): DataProps {
    return {
      selected: [...this.fileList],
      isDragging: false,
    }
  },

  computed: {
    isMaxFile(): boolean {
      return (
        this.multiple &&
        this.fileLimit > 0 &&
        this.selected.length >= this.fileLimit
      )
    },

    isSelectSingleFile(): boolean {
      return !this.multiple && !!this.selected.length
    },

    inputDisabled(): boolean {
      return (
        this.disabled ||
        this.readonly ||
        this.isSelectSingleFile ||
        this.isMaxFile
      )
    },
  },

  watch: {
    selected: {
      handler(val) {
        this.$emit('update:fileList', val)
      },

      deep: true,
    },

    fileList: {
      handler(val) {
        this.selected = val
      },

      deep: true,
    },

    isDragging(val) {
      this.$emit('update:dragging', val)
    },

    inputDisabled(val) {
      this.$emit('update:disabled', val)
    },
  },

  methods: {
    /**
     * Handle Add file
     */
    handleAddFile(files: Array<File>) {
      if (this.inputDisabled) return

      const file = files[0]

      if (this.fileSize > 0 && file.size > this.fileSize * 1024 * 1024) {
        this.onEmpty()
        // this.$snackbar(
        //   'error',
        //   this.$t('common.validate.cmnErr010', [this.fileSize]).toString()
        // )

        return
      }

      const isValid = this.fileType
        .split(',')
        .some((item) =>
          new RegExp(`^${item.replace(/\*/g, '[a-zA-Z].*')}`).test(file.type)
        )

      if (!file.type || !isValid) {
        const mimeTypes = this.fileType
          .split(',')
          .map((item) => '.' + item.substring(item.indexOf('/') + 1))
          .join(',')

        this.onEmpty()
        this.$emit('invalid-file', mimeTypes)

        return
      }

      const reader = new FileReader()

      reader.onload = (e) => {
        const data = e.target?.result

        const fileAdded = {
          raw: file,
          data,
        }

        this.selected.push(fileAdded)

        // Get file added
        this.$emit('file-added', fileAdded)

        this.onEmpty()
      }

      reader.onerror = () => {
        this.onEmpty()
      }

      reader.readAsDataURL(file)
    },

    /**
     * Handle when file change
     */
    onFileChange(event: any) {
      const el = event.target

      if (!el.value) return

      if (!el.files?.length) return

      this.handleAddFile(el.files)
    },

    /**
     * Clean form input
     */
    onEmpty() {
      const refFile = this.$refs.file as any

      refFile.value = ''
    },

    /**
     * Handle drop file
     */
    onDrop(event: any) {
      this.onDragLeave()

      if (!event.dataTransfer.files?.length) return

      this.handleAddFile(event.dataTransfer.files)
    },

    /**
     * Handle drag file to dropzone
     */
    onDragEnter() {
      this.isDragging = true
    },

    /**
     * Handle leave dropzone
     */
    onDragLeave() {
      this.isDragging = false
    },

    /**
     * Handle select file
     */
    selectFile() {
      const fileInput = this.$refs.file as any

      fileInput.click()
    },
  },
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/components/the-upload.scss';
</style>
