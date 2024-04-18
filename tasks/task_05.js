/*
* Написать функцию, которая принимает массив чисел, например [1,2,3,4,5] и функция возращает среднее арифметическое, (округлить результат до десятых)
* */

// function abs(array) {
//     let a = 0
//     for (let i = 0; i < abs.length; i++){
//         a += abs[i]
//     let b = a / abs.length
//     }
    
//     return (b)
// }

function abs(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    
    let avg = sum / array.length;
    // Округляем результат до десятых
    avg = Math.round(avg * 10) / 10;

    return avg;
}







































module.exports = abs