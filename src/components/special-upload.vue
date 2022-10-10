<script setup lang="ts">
import { ref, inject } from "vue";
const props = defineProps<{
  customImg?: string;
}>();

const img = inject("SpecialUploadImage") as string;
const imgVal = img ?? props.customImg;
const imgSRC = ref(imgVal);

function fileUpload(event: Event): void {
  const target = event.target as HTMLInputElement;
  const file = target.files[0];
  fileProcess(file);
}
function fileProcess(file: File) {
  imgSRC.value = URL.createObjectURL(file);
}
</script>
<template>
  <div class="image-uploader">
    <h1>File Uploader</h1>
    <input
      @change="fileUpload"
      type="file"
      id="file-upload"
      name="file-upload"
      accept="image/*"
    />
    <div class="your-file">
      <img :src="imgSRC" alt="" srcset="" />
    </div>
  </div>
</template>

<style scoped>
.image-uploader {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid grey;
  width: 55%;
  background-color: eggshell;
  margin: 0 auto;
  height: 300px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
}
.your-file {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}
img {
  width: 25%;
  max-height: 200px;
}
</style>
