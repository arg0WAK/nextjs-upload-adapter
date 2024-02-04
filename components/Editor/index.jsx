import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { useEditor } from "@/contexts/Editor";

import Editor from "ckeditor5-custom-build/build/ckeditor";

const uploadAdapter = (loader) => {
  return {
    upload: async () => {
      const data = await loader.file.then((file) => {
        return new Promise((resolve, reject) => {
          const form = new FormData();
          form.append("file", file);
          fetch("/service/backend/api/upload", {
            method: "POST",
            headers: {
              Accept: "image/*",
            },
            body: form,
          })
            .then((response) => response.json())
            .then((result) => {
              resolve(result.url);
            })
            .catch((error) => {
              reject(error);
            });
        });
      });
      return {
        default: data,
      };
    },
  };
};

function imageUploader(editor) {
  editor.plugins.get("FileRepository").createUploadAdapter = (loader) => {
    return uploadAdapter(loader);
  };
}

const editorConfiguration = {
  toolbar: [
    "heading",
    "|",
    "bold",
    "italic",
    "link",
    "bulletedList",
    "numberedList",
    "|",
    "outdent",
    "indent",
    "|",
    "imageUpload",
    "blockQuote",
    "insertTable",
    "mediaEmbed",
    "undo",
    "redo",
  ],
  extraPlugins: [imageUploader],
};

function CustomEditor(props) {
  const { setData } = useEditor();
  return (
    <CKEditor
      editor={Editor}
      data={props.value}
      config={editorConfiguration}
      onChange={(event, editor) => {
        const data = editor.getData();
        console.log({ event, editor, data });
        setData(data);
      }}
    />
  );
}

export default CustomEditor;
