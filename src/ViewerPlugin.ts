import type { App } from "vue";
import { SpecialUploader } from "./components";

export default {
  install: (app: App, options: { img: string } = { img: "" }) => {
    app.component("SpecialUploader", SpecialUploader);
    app.provide("SpecialUploadImage", options.img);
  },
};

export { SpecialUploader };
