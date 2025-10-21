const items = {
  item1: [
    "https://renewed.se/cdn/shop/files/Iphone14ProSvart.png?v=1745999129",
    "Iphone",
  ],
  item2: [
    "https://png.pngtree.com/png-vector/20240806/ourmid/pngtree-blue-gaming-headphones-with-led-lights---3d-render-png-image_13396977.png",
    "Headphone",
  ],
  item3: [
    "https://images.jdmagicbox.com/quickquotes/images_main/msi-laptop-27-10-2022-29-272313679-2ritk955.png",
    "Laptop Game",
  ],
};
const buy = {
  buy1: [
    "https://www.pngarts.com/files/12/Portable-Bluetooth-Speaker-PNG-Transparent-Image.png",
    "555$",
    "Speaker JB",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vel libero numquam minima dolorEveniet vel libero numquam minima dolor",
    "Review(25)",
  ],
  buy2: [
    "https://www.pngall.com/wp-content/uploads/13/Samsung-Galaxy-PNG-Photos.png",
    "666$",
    "Samsung S25",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vel libero numquam minima dolorEveniet vel libero numquam minima dolor",
    "Review(30)",
  ],
  buy3: [
    "https://i02.appmifile.com/30_operatorx_operatorx_opx/24/06/2024/965dad479bbe458c5119d225cea6ba5e.png?thumb=1&w=400&q=85",
    "777$",
    "Realme S5",
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet vel libero numquam minima dolorEveniet vel libero numquam minima dolor",
    "Review(40)",
  ],
  
};

const box = document.getElementById("box");
console.log(box);
box.innerHTML = "";
const keys = Object.keys(items);
for (let i = 0; i < keys.length; i++) {
  box.innerHTML += `
     <div>
   <div style="display: flex; flex-direction: row; gap: 3%;justify-content: center; padding-top: 5%;">
   <div class="box" style=" width: 350px;height: 350px;background-color: gainsboro;border-radius: 50%;">
    <img style="width: 80%; height: 80%;margin-top: 12%; margin-left: 10%;" src="${
      items[keys[i]][0]
    } " alt="">
   </div>
   </div>
   <p style="text-align: center; font-size: 25px; font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; font-weight: bold;">${
     items[keys[i]][1]
   }</p>
   <div class="buy" style="width: 120px;height: 50px;border-radius: 7px;background-color: green;display: flex;justify-content: center;margin-left: 30%;">
     <p style="color: white; font-family: 'Times New Roman', Times, serif; font-size: 20px; padding-top: 10px;">BUY NOW</p>
   </div>
    </div>
    `;
}

const phone = document.getElementById('phone');
console.log(phone);
phone.innerHTML="";
const keyS=Object.keys(buy);
for(let i =0 ; i<keys.length ; i++){
  phone.innerHTML+=`
  
<div class="caption">
         <div class="photo">
          <img id="image" style="width: 75%; height: 75%; margin-top: 6%; margin-left: 10%;" src="${buy[keyS[i]][0]}" alt="">
         </div>
         <div style="display: flex; flex-direction: row;">
         <li style="list-style: none; font-size: 18px; padding-top: 5px; padding-left: 10px;">
          <i style="color: rgb(211, 211, 17);" class="fa-solid fa-star"></i>
          <i style="color: rgb(211, 211, 17);" class="fa-solid fa-star"></i>
          <i style="color: rgb(211, 211, 17);" class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
         </li> 
         <div class="price">
          <p>${buy[keyS[i]][1]}</p>
         </div>
         </div>
          <div class="name">
            <h3>${buy[keyS[i]][2]}</h3>
          </div>
          <div class="say">
              <p>${buy[keyS[i]][3]}</p>
          </div>
          <p style="font-size: 20px; padding-left: 15px; color: grey;">${buy[keyS[i]][4]}</p>
       </div>
  
  `;
}