function startApp() {


//   function Range(begin, end) {
//     this.low = begin;
//     this.hi = end;
//     this.has = function(n) {
//       return (n >= this.low && n <= this.hi);
//     };
//     // AIRTEL
//     let airtelLine1 = new Range(7010000000, 7019999999);
//     let airtelLine2 = new Range(7080000000, 7089999999);
//     let airtelLine3 = new Range(8020000000, 8029999999);
//     let airtelLine4 = new Range(8080000000, 8089999999);
//     let airtelLine5 = new Range(8120000000, 8129999999);
//     let airtelLine6 = new Range(9020000000, 9029999999);
//     let airtelLine7 = new Range(9070000000, 9079999999);
//     let airtelLine8 = new Range(9010000000, 9019999999);

//     // MTN
//     let mtn1 = new Range(7030000000, 7039999999);
//     let mtn2 = new Range(7060000000, 7069999999);
//     let mtn3 = new Range(8030000000, 8039999999);
//     let mtn4 = new Range(8060000000, 8069999999);
//     let mtn5 = new Range(8100000000, 8109999999);
//     let mtn6 = new Range(8130000000, 8139999999);
//     let mtn7 = new Range(8140000000, 8149999999);
//     let mtn8 = new Range(8160000000, 8169999999);
//     let mtn9 = new Range(9030000000, 9039999999);
//     let mtn10 = new Range(9060000000, 9069999999);

//     // GLO
//     let glo1 = new Range(7050000000, 7059999999);
//     let glo2 = new Range(8050000000, 8059999999);
//     let glo3 = new Range(8070000000, 8079999999);
//     let glo4 = new Range(8110000000, 8119999999);
//     let glo5 = new Range(8150000000, 8159999999);
//     let glo6 = new Range(9050000000, 9059999999);

//     // ETISALAT
//     let etisalat1 = new Range(8090000000, 8099999999);
//     let etisalat2 = new Range(8170000000, 8179999999);
//     let etisalat3 = new Range(9080000000, 9089999999);
//     let etisalat4 = new Range(9090000000, 9099999999);

// // AIRTEL
// function airtelLine1a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// airtelLine1a(('' + airtelLine1), 11);

// function airtelLine2a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// airtelLine2a(('' + airtelLine2), 11);

// function airtelLine3a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// airtelLine3a(('' + airtelLine3), 11);

// function airtelLine4a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// airtelLine4a(('' + airtelLine4), 11);

// function airtelLine5a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// airtelLine5a(('' + airtelLine5), 11);

// function airtelLine6a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// airtelLine6a(('' + airtelLine6), 11);

// function airtelLine7a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// airtelLine7a(('' + airtelLine7), 11);

// function airtelLine8a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// airtelLine8a(('' + airtelLine8), 11);


// // MTN
// function mtn1a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// mtn1a(('' + mtn1), 11);

// function mtn2a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// mtn2a(('' + mtn2), 11);

// function mtn3a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// mtn3a(('' + mtn3), 11);

// function mtn4a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// mtn4a(('' + mtn4), 11);

// function mtn5a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// mtn5a(('' + mtn5), 11);

// function mtn6a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// mtn6a(('' + mtn6), 11);

// function mtn7a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// mtn7a(('' + mtn7), 11);

// function mtn8a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// mtn8a(('' + mtn8), 11);

// function mtn9a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// mtn9a(('' + mtn9), 11);

// function mtn10a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// mtn10a(('' + mtn10), 11);


// // GLO
// function glo1a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// glo1a(('' + glo1), 11);

// function glo2a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// glo2a(('' + glo2), 11);

// function glo3a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// glo3a(('' + glo3), 11);

// function glo4a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// glo4a(('' + glo4), 11);

// function glo5a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// glo5a(('' + glo5), 11);

// function glo6a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// glo6a(('' + glo6), 11);  
// console.log(glo6a())

// // ETISALAT
// function etisalat1a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// etisalat1a(('' + etisalat1), 11);

// function etisalat2a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// etisalat2a(('' + etisalat2), 11);

// function etisalat3a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// etisalat3a(('' + etisalat3), 11);

// function etisalat4a(number, digits) {
//     return Array(Math.max(digits - String(number).length + 1, 0)).join(0) + number;
// }
// etisalat4a(('' + etisalat4), 11);

//     const phoneNumber = document.getElementsByClassName("phone").innerHTML;


// // var airtelImg = document.getElementsByClassName('airtelLogo');
// // var mtnImg = document.getElementsByClassName('mtnLogo');
// // var gloImg = document.getElementsByClassName('gloLogo');
// // var etisalatImg = document.getElementsByClassName('etisalatLogo');

//     function validateServiceProvider() {
//       if (airtelLine1a().has(phoneNumber)) {
//        var airtelElement = document.getElementsByClassName("airtelLogo");
// airtelElement.classList.remove("images");
//       } else if (airtelLine2a.has(phoneNumber)) {
//         alert("Today is Tuesday!")
//       } else if (airtelLine3a.has(phoneNumber)) {
//         alert("Today is Wednesday!")
//       } else if (airtelLine4a.has(phoneNumber)) {
//         alert("Today is Wednesday!")
//       } else if (airtelLine5a.has(phoneNumber)) {
//         alert("Today is Wednesday!")
//       } else if (airtelLine6a.has(phoneNumber)) {
//         alert("Today is Wednesday!")
//       } else if (airtelLine7a.has(phoneNumber)) {
//         alert("Today is Wednesday!")
//       } else if (airtelLine8a.has(phoneNumber)) {
//         alert("Today is Wednesday!")
//       } else if (mtn1a.has(phoneNumber)) {
//         alert("Today is Wednesday!")
//       } else {
//         alert("Today is neither Monday, Tuesday or Wednesday!")
//       }
//     }
//     validateServiceProvider()

//     document.getElementById("myBtn").addEventListener("click", validateServiceProvider());





//     // Your entire app should not necessarily be coded inside this 
//     // single function (though there's no penalty for that), 
//     // so create and use/call additional functions from here

//     // pls remove the below and make some magic in here!

  };








  /* const header = document.querySelector('h2');
   if(header) {
    header.textContent = 'make some magic here!!';
   } */

  // ======= DO NOT EDIT ============== //
  export default startApp;
  // ======= EEND DO NOT EDIT ========= //