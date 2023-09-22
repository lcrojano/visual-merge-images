const addImageButton = document.getElementById("add") as HTMLButtonElement;
const canvas = new CanvasComponent({
  id: "canvas",
  name: "capa1",
  width: 500,
  height: 500,
} as IDrawable);

function getCanvasComponent(): CanvasComponent {
  return canvas;
}

addImageButton.addEventListener("click", (event) => {
  const canvas = getCanvasComponent();
  const selectedImageInput = document.getElementById(
    "locaImage"
  ) as HTMLInputElement;
  const localFiles: FileList | null = selectedImageInput.files;

  if (localFiles) {
    const totalImages = localFiles.length;
    for (let i = 0; i < totalImages; i++) {
      let drawing = new ImageComponent(
        {
          id: `${i}`,
          name: `image ${i}`,
          width: 400,
          height: 400,
        } as IImage,
        localFiles[i],
        canvas
      );
      drawing.draw();
    }
  }
});
