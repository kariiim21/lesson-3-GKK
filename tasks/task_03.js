/*
* Нужно написать функцию, принимающую строку в качестве аргумента и возвращающую количество гласных, которые содержатся в строке.
Гласными являются «a», «e», «i», «o», «u», «y».
* */

function getVowelsCount(str) {
    let b = 0
    let c = str.length
    for (let i = 0; i < c; i++){
        if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i] == "o" || str[i] == "u" || str[i] == "y")
            b = b + 1
    }

    return (b)

}












































module.exports = getVowelsCount