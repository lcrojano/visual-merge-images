const addImageButton = document.getElementById("add") as HTMLButtonElement;
const canvas = new CanvasComponent("canvas", 500, 500);

function getCanvasComponent(): CanvasComponent {
  return canvas;
}

addImageButton.addEventListener("click", (event) => {
  const canvas = getCanvasComponent();
  const selectedImageInput = document.getElementById("locaImage") as HTMLInputElement;
  const localFiles: FileList | null = selectedImageInput.files;

  if (localFiles) {
    for(let file of localFiles){
        let drawing = new ImageComponent(canvas,file, 0,0)
        drawing.draw()
    }
  }
});
