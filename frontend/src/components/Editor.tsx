import { useCallback, useMemo, useRef } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

export const Editor = ({ onChange }: { onChange: (e: string) => void }) => {
  const quill: any = useRef(null);

  const imageHandler = useCallback(() => {
    const input = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.onchange = () => {
      if (input.files) {
        const file: File | null = input.files[0];
        const reader = new FileReader();
        reader.onload = () => {
          const imageUrl = reader.result;
          const quillEditor = quill.current.getEditor();

          const range = quillEditor.getSelection(true);

          quillEditor.insertEmbed(range.index, "image", imageUrl, "user");
        };

        reader.readAsDataURL(file);
      }
    };
  }, []);

  const modules = useMemo(
    () => ({
      toolbar: {
        container: [
          [{ header: [1, 2, 3, 4, 5, 6, false] }],
          ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
          [{ align: ["right", "center", "justify"] }],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
          ],
          ["link", "image"],
          ["clean"],
        ],
        handlers: {
          image: imageHandler,
        },
      },
      clipboard: {
        matchVisual: true,
      },
    }),
    [imageHandler]
  );

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "code",
    "code-block",
    "align",
    "clean",
  ];

  return (
    <div className="h-full">
      <ReactQuill
        ref={(e) => (quill.current = e)}
        theme="snow"
        formats={formats}
        modules={modules}
        onChange={onChange}
      />
    </div>
  );
};
