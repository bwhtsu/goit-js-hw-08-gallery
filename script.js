
const images = [
  {
    preview: "https://www.aravot.am/wp-content/uploads/2023/06/blue-flower.jpg",
    original: "https://www.aravot.am/wp-content/uploads/2023/06/blue-flower.jpg",
    description: "flower"
  },
  {
    preview: "https://www.stradoji.com/wp-content/uploads/2020/11/volatilite-marches-trading-bourse-1024x576.jpg",
    original: "https://www.stradoji.com/wp-content/uploads/2020/11/volatilite-marches-trading-bourse-1024x576.jpg",
    description: "container"
  },
  {
    preview: "https://assets.st-note.com/production/uploads/images/176567610/rectangle_large_type_2_be6b9b6ff744b5ad8006bdd1cfe44566.jpeg?width=1200",
    original: "https://assets.st-note.com/production/uploads/images/176567610/rectangle_large_type_2_be6b9b6ff744b5ad8006bdd1cfe44566.jpeg?width=1200",
    description: "River"
  },
  {
    preview: "https://th.bing.com/th/id/R.f6782dc1165b44720d47e4f094a83daf?rik=WOZnfAvH7sEFfw&riu=http%3a%2f%2fbiologylab.org%2fwp-content%2fuploads%2f2021%2f04%2fflowers-1835619_640.jpg&ehk=4zm0%2bIPKpAuzJTW5MHTcyzZSmpj1cbqF8hpAp0YBJ40%3d&risl=&pid=ImgRaw&r=0",
    original: "https://th.bing.com/th/id/R.f6782dc1165b44720d47e4f094a83daf?rik=WOZnfAvH7sEFfw&riu=http%3a%2f%2fbiologylab.org%2fwp-content%2fuploads%2f2021%2f04%2fflowers-1835619_640.jpg&ehk=4zm0%2bIPKpAuzJTW5MHTcyzZSmpj1cbqF8hpAp0YBJ40%3d&risl=&pid=ImgRaw&r=0",
    description: "flowers"
  },
  {
    preview: "https://tse1.mm.bing.net/th/id/OIP.h2ZdLB8qrIVn4uzrlVDRAgHaD4?rs=1&pid=ImgDetMain&o=7&rm=3",
    original: "https://tse1.mm.bing.net/th/id/OIP.h2ZdLB8qrIVn4uzrlVDRAgHaD4?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "hiking"
  },
  {
    preview: "https://ecoledevoilecnbpp.fr/wp-content/uploads/2021/12/landscape-4208571_1280.jpg",
    original: "https://ecoledevoilecnbpp.fr/wp-content/uploads/2021/12/landscape-4208571_1280.jpg",
    description: "boat"
  },
  {
    preview: "https://media.cdn.kaufland.de/product-images/1024x1024/1c885e59ae9bdf0529533dca57dc8116.jpg",
    original: "https://media.cdn.kaufland.de/product-images/1024x1024/1c885e59ae9bdf0529533dca57dc8116.jpg",
    description: "daisy-flower"
  },
  {
    preview: "https://tse2.mm.bing.net/th/id/OIP.wS3VQh-Jc1b7E_vNvTbTBwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    original: "https://tse2.mm.bing.net/th/id/OIP.wS3VQh-Jc1b7E_vNvTbTBwHaE8?rs=1&pid=ImgDetMain&o=7&rm=3",
    description: "mountain"
  },
  {
    preview: "https://emmareed.net/wp-content/uploads/2024/07/Anglesey.png",
    original: "https://emmareed.net/wp-content/uploads/2024/07/Anglesey.png",
    description: "light-house"
  }
];


const listEl = document.querySelector(".js-list");
const closeBtn = document.querySelector(".modal-close");
const modalEl = document.querySelector(".modal");
const backdropEl = document.querySelector(".box");


function createItems(arr) {
    const item = arr.map((elem) =>{
    return `<li class="js-item"><img src="${elem.preview}" data-source="${elem.original}" alt="${elem.description}" width="100%"/></li>`;
    
    }).join("")
    listEl.innerHTML = item
    closeModal()

}

createItems(images);

listEl.addEventListener("click", (event) => {
    if(event.target.nodeName !== "IMG"){
        return
    } 

    const largeImage = event.target.dataset.source;
    backdropEl.style.opacity = "1";
    backdropEl.style.pointerEvents = "auto";
    modalEl.innerHTML = `<img src="${largeImage}" width="100%" height="100%">`;
});

closeBtn.addEventListener("click", (event) => {
  closeModal()
});

backdropEl.addEventListener("click", (event) => {
  if (event.target === event.currentTarget) {
    closeModal()
  }
});

document.addEventListener("keydown", (event) => {
  if (event.code === "Escape") {
    closeModal()
  }
});

function closeModal() {
    backdropEl.style.opacity = "0";
    backdropEl.style.pointerEvents = "none";
}