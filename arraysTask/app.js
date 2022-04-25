
// Задачи 1

// Рост каждого из 22 учеников класса представлен в виде 
// массива. Определить количество учеников, рост которых не пре-
// вышает значения r.

// let heights = [
// 	100, 110, 120, 130, 140, 160, 
// 	180, 200, 210, 148, 139, 165, 
// 	163, 178, 170, 154, 149, 158,
// 	199, 235, 289, 267
// ]

// let r = 5

// for (let i = 0; i < heights.length; i++) {
//     if (i == r) {
//         console.log(heights[i])
//     }
// }





// Задачи 2
// Найти число пар соседних элементов массива, оканчи-
// вающихся нулем.

// let arrs = [
// 	19, 10, 80, 0, 90, 23, 
// 	90, 20, 40, 55, 78, 90, 0
// ]

// let b = 0; 

// for (let i = 1; i < arrs.length; i++) {
// 	if(arrs[i] == 0) {
//         b++
//     }
// }

// console.log(b)





// Задачи 3
// Дан массив из 26 элементов. Найти пять соседних элементов, 
// сумма значений которых максимальна.

// let arrs = [
// 	50, -71, 45, 10, 17, 1,
// 	0, 45, -34, 45, 0, 7,
// 	50, 20, -20.39, 45, 55.66, 67,
// 	240, -139, 45, 90, 600, -239.45
// ]


// let array1 = arrs.slice([0], [6])
// let array2 = arrs.slice([7], [12])
// let array3 =  arrs.slice([13], [18])
// let array4 = arrs.slice([19], [24])

// let allArr = [array1, array2,array3, array4]
// console.log(allArr)

// let couple = [] 
// let maxCouple;


// for (let i = 1; i < allArr.length; i++) {
//     couple = allArr[i - 1] + allArr[i]
//     // maxCouple = Math.max(...couple)

//     console.log(couple)
// }


let arr = [1, 2, 3, 4, 5];

for (let i = 1; i < arr.length; i++) {
	console.log(arr[i - 1] + arr[i]);
}

