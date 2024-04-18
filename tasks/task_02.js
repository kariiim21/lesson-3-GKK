/*
*  Если мы получили палиндром, функция должна вернуть значение true. Если же нет — false.
* */




function isPalindrome(str) {
    let a = str.split('').reverse().join('');
    if  (a == str)
        return (true)
    else 
        return (false)
}














































module.exports = isPalindrome