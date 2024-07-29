// task 1
// arrow functiondan isdifade ederek ele bir function itifade edinki parametr olaraq array ve silinecek datani
// gonderdiyinizde o function hemen datani silsin ve consolede silindiyi barede melumat cixsin eger data yoxdursa
// oda ekranda cap olunsunki  data movcud deyil. meselen deleteFunc(arrayy,"Ali")


// 1 ci hell yolu

// const deleteValue= (arr, value) => {
//     let result = [];
//     for (let index in arr) {
//       if (arr[index] !== value) {
//         result.push(arr[index]);
//       } if (arr.includes(value) == false) {
//         alert("value is not avaible");
//       }
//     }
//     return result;
//   };
//   let arrayy = ["Ali","Ali", "Qabil", "Qalib", "Behlul","Ali", "Malik", "Kamil"];
//   let newArray = deleteValue(arrayy, "Ali");
//   console.log(newArray);


// 2 ci hell yolu

// let arrayy = ["Ali", "Ali", "Qabil", "Qalib", "Behlul", "Ali", "Malik", "Kamil"];
// const deleteFunc = (arr, delItem) => {
//     let result = false;
//     if (delItem == null || delItem == undefined) {
//         console.log('item is null or undefined');
//     } else {
//         for (let i in arr) {
//             if (arr[i] != delItem) {
//                 result = true;
//             }
//             var del = arr.indexOf(delItem);
//             if (del >= 0) {
//                 arr.splice(del, 1);
//                 console.log(delItem + " element removed successfully");
//             }
//         }
//         if (result) {
//             console.log(delItem + " element is not avaible");
//         }
//     }
// }

// deleteFunc(arrayy, "Ali")
// console.log(arrayy);




// 3 cü həll yolu

// let arrayy = ["Ali", "Ali", "Qabil", "Qalib", "Behlul", "Malik", "Kamil"];
// const deleteFunc = (arr, delItem) => {
//     if (delItem == null || delItem == undefined) return console.log("daxil olunan element null ve ya undefineddir");
//     let index = arr.indexOf(delItem);
//     if (index === -1) {
//         console.log(delItem + " element movcud deyil");
//         return;
//     }
//     while ((index = arr.indexOf(delItem)) !== -1) arr.splice(index, 1);
//     console.log(delItem + " adli element ugurla silindi");
// }

// deleteFunc(arrayy, "Ali5");
// console.log(arrayy);





// task 2
// bunun eynisini elave etmek ucunde isdifade edin yani arrow functiondan isdifade ederek array ve yeni deyeri
// parametr olaraq vererek arraya elave olunsun ve  elave olunanda logda elave oldugu barede melumat cixsin
// arraya data elave edende eyni elementin tekrar elave olundugunda logda bu datanin artiq var oldugunu  bildirsin
// meselen addedFunc(arrayy,10)
// ----------------------------------------------------------------------
// const addFunc = (arr, value) => {
//     arr.includes(value) ? console.log(`Did not add because ${value} exists in the array!!!`) : (arr.push(value) && console.log(`${value} added successfully!`));
// }

// let num = [1, 2, 3, 4, 5, 6, 7, 8];

// addFunc(num, 5);
// addFunc(num, 10);
// console.log(num);

// -----------------------------------------------------------------------------
// const addFunc = (arr, value) => {
    // !arr.includes(value) ? arr.push(value) : console.log(`Did not add beacuse ${value} exists in the array!!!`);
    // if (!arr.includes(value)) {
    //     arr.push(value);
    //     console.log(`${value} added successfully!`);
    //     return;
    // } else {
    //     console.log(`Did not add beacuse ${value} exists in the array!!!`);
    //     return;
    // }
// }


// let num = [1, 2, 3, 4, 5, 6, 7, 8]

// addFunc(num, 5)
// addFunc(num, 10)
// console.log(num);
// addFunc(num,9)
// console.log(num);



