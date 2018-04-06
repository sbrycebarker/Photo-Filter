const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

let img = new Image();
let fileName = '';

const downloadBtn = document.getElementById('download-Btn')
const uploadFile = document.getElementById('upload-file')
const revertBtn = document.getElementById('revert-btn')

// Add Filters & Effects

document.addEventListener('click', e => {
  if(e.target.classList.contains('filter-btn')) {
    if(e.target.classList.contains('brightness-add')){
      Caman('#canvas', img, function() {
        this.brightness(5).render()
      })
    } else if(e.target.classList.contains('brightness-remove')) {
      Caman('#canvas', img, function(){
        this.brightness(-5).render()
      })
    } else if(e.target.classList.contains('contrast-add')) {
      console.log('contrast')
      Caman('#canvas', img, function(){
        this.contrast(5).render()
      })
    } else if(e.target.classList.contains('contrast-remove')) {
      Caman('#canvas', img, function(){
        this.contrast(-5).render()
      })
    } else if(e.target.classList.contains('saturation-add')) {
      Caman('#canvas', img, function(){
        this.saturation(5).render()
      })
    } else if(e.target.classList.contains('saturation-remove')) {
      Caman('#canvas', img, function(){
        this.saturation(-5).render()
      })
    } else if(e.target.classList.contains('vibrance-add')) {
      Caman('#canvas', img, function(){
        this.vibrance(5).render()
      })
    } else if(e.target.classList.contains('vibrance-remove')) {
      Caman('#canvas', img, function(){
        this.vibrance(-5).render()
      })
    } else if(e.target.classList.contains('vintage-add')) {
      Caman('#canvas', img, function(){
        this.vintage().render()
      })
    } else if(e.target.classList.contains('lomo-add')) {
      Caman('#canvas', img, function(){
        this.lomo().render()
      })
    } else if(e.target.classList.contains('clarity-add')) {
      Caman('#canvas', img, function(){
        this.vibrance().render()
      })
    } else if(e.target.classList.contains('sincity-add')) {
      Caman('#canvas', img, function(){
        this.sinCity().render()
      })
    } else if(e.target.classList.contains('crossprocess-add')) {
      Caman('#canvas', img, function(){
        this.crossprocess().render()
      })
    } else if(e.target.classList.contains('pinhole-add')) {
      Caman('#canvas', img, function(){
        this.pinhole().render()
      })
    } else if(e.target.classList.contains('nostalgia-add')) {
      Caman('#canvas', img, function(){
        this.nostalgia().render()
      })
    } else if(e.target.classList.contains('hermajesty-add')) {
      Caman('#canvas', img, function(){
        this.herMajesty().render()
      })
    }

  }
})

// Revert Filters

revertBtn.addEventListener('click', e => {
  Caman('Canvas', img, function() {
    this.revert()
  })
})

// UPLOAD fileName

uploadFile.addEventListener('change', e => {

  const file = document.getElementById('upload-file').files[0]

  const reader = new FileReader();

  if(file) {
    fileName = file.name;
    reader.readAsDataURL(file)
  }

  reader.addEventListener('load', ()=>{
    img = new Image()
    // Set src
    img.src = reader.result;

    img.onload = function() {
      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, img.width, img.height);
      canvas.removeAttribute('data-caman-id');
    }
  }, false)
})

// Download Event
downloadBtn.addEventListener('click', e => {
  // get fo;e ext
const fileExtension = fileName.slice(-4);

// init new filename
let newFileName

// check image type
if (fileExtension === '.jpg' || fileExtension === '.png') {
  newFilename = fileName.substring(0, fileName.length - 4) + '-edited.jpg'
}

// Call download
download(canvas, newFilename);

});

// download function
function download(canvas, filename) {
  // Init event
  let e;
  // Create link
  const link = document.createElement("a");

  // Set props
  link.download = filename;
  link.href = canvas.toDataURL("image/jpeg", 0.8);
  // New mouse event
  e = new MouseEvent("click");
  // Dispatch event
  link.dispatchEvent(e);
}
