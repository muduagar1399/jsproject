const selectImage = document.querySelector(".select-image");
const inputFile = document.querySelector("#file");
const imgArea = document.querySelector(".image-area");

selectImage.addEventListener("click", function () {
  inputFile.click();
});

inputFile.addEventListener("change", function () {
  const image = this.file[0];
  console.log(image);
  const reader = new FileReader();
  reader.onload = () => {
    const allImg = imgArea.querySelectorAll('img');
    allImg.forEach(item=> item.remove())
    const imgUrl = reader.result;
    const img = document.createElement("img");
    img.src = imgUrl;
    imgArea = appendChild(img);
    imgArea = classList.add("active");
    imgArea = dataset.img = image.name;
  };
  reader.readAsDataUrl(image);
});
