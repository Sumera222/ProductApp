let products = [{
  productName: 'Nike Man\'s Flex',
  image: `<img src="nike-shoes.jpg" alt="nike-shoes-red" width="173" height="120" class = "imageClass">`,
  isLiked: false,
  tag: "footwear",
  price: "$950"
},
{
  productName: "Nike shoes black",
  image:`<img src="nike-black-shoes.jpg" alt="nike-shoes-black" width="173" height="120" class = "imageClass">`,
  isLiked: true,
  tag: "footwear",
  price: "$1100"
},
{
  productName: "Shirt",
  image:`<img src="shirt-image.jpg" alt="shirt" width="173" height="120" class = "imageClass">`,
  isLiked: false,
  tag: "clothes",
  price: "$700"
},
{
  productName: "juicer-machine",
  image:`<img src="juicer.jpg" alt="juicer-machine" width="173" height="120" class = "imageClass">`,
  isLiked: true,
  tag: "electronics",
  price: "$2500"
},
{
  productName:"Iron",
  image:`<img src="iron.jpg" alt="iron" width="173" height="120" class = "imageClass">`,
  isLiked: true,
  tag: "electronics",
  price: "$1300"
},
{
  productName:"Special Pack-1",
  image:`<img src="Bangles.jpg" alt="Special Pack-1" width="173" height="120" class = "imageClass">`,
  isLiked: true,
  tag: "Women Accessories",
  price: "$899"
}
];

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}

let classLength = document.getElementsByClassName("productName").length;
for (let i=0; i<products.length; i++){
  for (let j=0; j<=classLength; j++){
      document.getElementsByClassName("productName")[j].innerHTML = products[i+j].productName;
      document.getElementsByClassName("price")[j].innerHTML = products[i+j].price;
      document.getElementsByClassName("imageDiv")[j].innerHTML = products[i+j].image;
      //console.log("ElementsByClassName array's length: ", document.getElementsByClassName("productName").length);
  }
}










