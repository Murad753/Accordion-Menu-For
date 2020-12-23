// // // function calisan(isim,soyIsim,numara){
// // //     this.isim = isim;
// // //     this.soyIsim = soyIsim;
// // //     this.numara = numara;
// // //     this.bilgileriGoster = function (){
// // //         return "Isim: " + this.isim + "\nSoyisim: " + this.soyIsim + "\nNumara: " + this.numara;
// // //     }
// // // }

// // // var calisan1 = new calisan ("Murad","Bendeliyev",200);
// // // var calisan2 = new calisan ("Yusif","Mustafayev",535);

// // // console.log(calisan1.bilgileriGoster());
// // // console.log(calisan2.bilgileriGoster());




// // // 1-ci
// // // var d = new Date();
// // // console.log(d);
// // // console.log(d.getFullYear());
// // // console.log(d.getMonth());
// // // console.log(d.getDate());
// // // console.log(d.getDay());
// // // console.log(d.getHours());
// // // console.log(d.getMinutes());
// // // console.log(d.getSeconds());

// // // 2-ci

// // // var dtC = new Date("1/1/1990");
// // // var dateOfMonth = dtC.getDate();
// // // dtC.setDate(dateOfMonth-1);
// // // console.log(dtC);

// // // 3-cu 

// // // let start = new Date("1/1/2020");
// // // let end = new Date("1/1/2021");
// // // let millisecond = end-start;
// // // let saniye = millisecond / 1000;
// // // let dakika = saniye / 60;
// // // let saat = dakika / 60;
// // // let gun = saat / 24;
// // // let ay = gun / 30.5;
// // // let yil = ay / 12;

// // // console.log(millisecond);
// // // console.log(saniye);
// // // console.log(dakika);
// // // console.log(saat);
// // // console.log(gun);
// // // console.log(ay);
// // // console.log(yil);

// // // 4-cu 

// // // var brithday = new Date("8/1/1985");
// // // var ageMs = Date.now() - brithday.getTime();
// // // var ageDate = new Date(ageMs);

// // // console.log(ageDate.getFullYear() - 1970);

// // // *****************************

// // // Ders-Number

// // var num = 15.123456789;

// // // Toplamda 3 basamakli sayi kullan 

// // console.log(num.toPrecision(3));

// // // Ondalik kismi 3 basamakta sinirla

// // console.log(num.toFixed(3));

// // // En yakin sayiya yuvarla

// // console.log(Math.round(num));

// // // Asagi yuvarla

// // console.log(Math.floor(num));

// // // Yukari yuvarla

// // console.log(Math.ceil(num));

// // // 1,2,10,56,20 sayilarindan en kucugu ve en buyuyugunu bul

// // console.log(Math.min(1,2,10,56,20));
// // console.log(Math.max(1,2,10,56,20));

// // // Sayi araligini kullanicinin belirleyecegi rastgele bir sayi uretin

// // var min;
// // var max;
// // min = 50;
// // max = 100;

// // console.log(Math.floor(min+Math.random()*(max-min)));


// // Buton cagirma 

// // "use strict"

// // var btn = document.getElementsByClassName("my-btn");

// // for(var i = 0; i < btn.length; i++){
// //     btn[i].onclick = function(){
// //         for(var j = 0; j < btn.length; j++){
// //             btn[j].style.backgroundColor = '#fff'
// //         }
// //         this.style.backgroundColor = '#ff0000'
// //     }
// // }
// // console.log(btn);


// // Accordion Menu-Display-Method


// "use strict"

// var open  = document.querySelector(".open");
// var open2 = document.querySelector(".open2");
// var open3 = document.querySelector(".open3");

// var p1 = document.querySelector(".p1");
// var p2 = document.querySelector(".p2");
// var p3 = document.querySelector(".p3");

// open.onclick = function(){
//     p1.style.display = "block";
//     p2.style.display = "none";
//     p3.style.display = "none"
// }

// open2.onclick = function(){
//     p1.style.display = "none";
//     p2.style.display = "block";
//     p3.style.display = "none";
// }

// open3.onclick = function(){
//     p1.style.display = "none";
//     p2.style.display = "none";
//     p3.style.display = "block";
// }


// Accordion Menu Method-2 For

// var myBtn = document.querySelectorAll(".open");
// var myP = document.querySelectorAll(".myp");

// for(var i = 0; i < myBtn.length; i++){
//     myBtn[i].onclick = function(){
//         // for(var j = 0; j < myBtn.length; j++){
//         //     myP[j].classList.remove("active");
//         // }
//         this.nextElementSibling.classList.toggle("active");
//     }

// }

var myBtn = document.querySelectorAll(".open");
var myP = document.querySelectorAll(".myp");

for(var i = 0; i < myBtn.length; i++){
    myBtn[i].onclick = function(){
        for(var j = 0; j < myBtn.length; j++){
            myP[j].classList.remove('active');
        }
        this.nextElementSibling.classList.add('active');
    }
}


















