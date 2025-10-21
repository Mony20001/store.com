const iteams = {
  iteam1: [
    "https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2Fi_Phone_Device_List_Smart_Website_1280_x_853_i_Phone_17_Pro_Max_3_be96a96468.png&w=3840&q=75",
    "Iphone 17 pro max",
    "999$",
    "Designed from the inside out to be the most powerful iPhone models ever made. Aluminum unibody.",
  ],
  iteam2: [
    "https://www.smart.com.kh/_next/image?url=https%3A%2F%2Fsmartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com%2FDessert_i_Phone_16_ebcba4c984.png&w=3840&q=75",
    "Iphone 16 pro max",
    "888$",
    "Designed from the inside out to be the most powerful iPhone models ever made. Aluminum unibody.",
  ],
  iteam3: [
    "https://smartaxiata-website-prod-v2.s3.ap-southeast-1.amazonaws.com/i_Phone_1280x853px_15_Pro_Max_cfdd766c9c.png",
    "Iphone 15 pro max",
    "777$",
    "Designed from the inside out to be the most powerful iPhone models ever made. Aluminum unibody.",
  ],
  iteam4: [
    "https://compasia.com.ph/cdn/shop/files/iphone-14-pro-max-228886_800x.png?v=1737456748",
    "Iphone 14 pro max",
    "666$",
    "Designed from the inside out to be the most powerful iPhone models ever made. Aluminum unibody.",
  ],
};
const rowcard = document.getElementById("rowcard");
console.log(rowcard);
rowcard.innerHTML = " ";
const keys = Object.keys(iteams);
for (let i = 0; i < keys.length; i++) {
  rowcard.innerHTML += `
     <div >
     <div class="card" style="width: 18rem;">
        <img src="${iteams[keys[i]][0]}" class="card-img-top" alt="...">
         <div class="card-body">
         <h5 class="card-title">${iteams[keys[i]][1]}</h5>
         <p class="card-text">${iteams[keys[i]][3]}</p>
         <a href="#" class="btn btn-success">${iteams[keys[i]][2]}</a>
        </div>
     </div>
       </div>
    `;
}
