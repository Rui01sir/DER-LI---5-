const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num");
let a = 1;
plus.addEventListener("click", ()=>{
  a++;
  a = (a < 10) ? "0" + a : a;
  num.innerText = a;
});

minus.addEventListener("click", ()=>{
  if(a > 1){
    a--;
    a = (a < 10) ? "0" + a : a;
    num.innerText = a;
  }
});

const plus1 = document.querySelector(".plus1"),
minus1 = document.querySelector(".minus1"),
num1 = document.querySelector(".num1");
let i = 1;
plus1.addEventListener("click", ()=>{
  i++;
  i = (i < 10) ? "0" + i : i;
  num1.innerText = i;
});

minus1.addEventListener("click", ()=>{
  if(i > 1){
    i--;
    i = (i < 10) ? "0" + i : i;
    num1.innerText = i;
  }
});

const plus2 = document.querySelector(".plus2"),
minus2 = document.querySelector(".minus2"),
num2 = document.querySelector(".num2");
let b = 1;
plus2.addEventListener("click", ()=>{
  b++;
  b = (b < 10) ? "0" + b : b;
  num2.innerText = b;
});

minus2.addEventListener("click", ()=>{
  if(b > 1){
    b--;
    b = (b < 10) ? "0" + b : b;
    num2.innerText = b;
  }
});

const plus3 = document.querySelector(".plus3"),
minus3 = document.querySelector(".minus3"),
num3 = document.querySelector(".num3");
let c = 1;
plus3.addEventListener("click", ()=>{
  c++;
  c = (c < 10) ? "0" + c : c;
  num3.innerText = c;
});

minus3.addEventListener("click", ()=>{
  if(c > 1){
    c--;
    c = (c < 10) ? "0" + c : c;
    num3.innerText = c;
  }
});

const plus4 = document.querySelector(".plus4"),
minus4 = document.querySelector(".minus4"),
num4 = document.querySelector(".num4");
let d = 1;
plus4.addEventListener("click", ()=>{
  d++;
  d = (d < 10) ? "0" + d : d;
  num4.innerText = d;
});

minus4.addEventListener("click", ()=>{
  if(d > 1){
    d--;
    d = (d < 10) ? "0" + d : d;
    num4.innerText = d;
  }
});

const plus5 = document.querySelector(".plus5"),
minus5 = document.querySelector(".minus5"),
num5 = document.querySelector(".num5");
let e = 1;
plus5.addEventListener("click", ()=>{
  e++;
  e = (e < 10) ? "0" + e : e;
  num5.innerText = e;
});

minus5.addEventListener("click", ()=>{
  if(e > 1){
    e--;
    e = (e < 10) ? "0" + e : e;
    num5.innerText = e;
  }
});



// const productprice =document.querySelector("productprice")
// num = document.querySelector(".num");
// let f = 1;
// num.addEventListener("")



// function updatetoltal(){
//     // var cartContent = document.getElementsByClassName('cart-content')[0]
//     // var cartBoxes = cartContent.getElementsByClassName('cart-box')
//     var num = 1;
//     for(var i = 0; i < cartBoxes.length; i++){
//         var priceElement = cartBoxes.getElementsByClassName('cart-price')[0]
//         var quantityElement =cartBoxes.getElementsByClassName('cart-quantity')[0]
//         var price =  parseFloat(priceElement.innerText.replace("$",""));
//         var productprice = productpriceElement.value;
//         num = num + num * productprice;

//         document.getElementsByClassName("total-price")[0].innerText="$"+total;
//     }
// }