/*Ваша задача — написать такую кодировку.
  Для данной строки верните массив массивов [[i1, s1], [i2, s2], …, [in, sn]],
так что можно восстановить исходную строку, реплицируя символ sx ix раз и объединяя. Ваша кодировка длины серии должна быть минимальной, т.е.
. для всех i значения si и si+1 должны различаться.*/
// runLengthEncoding("hello world!")
//=>      [[1,'h'], [1,'e'], [2,'l'], [1,'o'], [1,' '], [1,'w'], [1,'o'], [1,'r'], [1,'l'], [1,'d'], [1,'!']]
// runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb")
//  // => [[34,'a'], [3,'b']]
function runLengthEncoding(str) {
  let a = str.length
  const word = []

  if (a != 0){
    const firstletter = [1]
    firstletter.push(str[0])
    word.push(firstletter);


    for (let i = 1; i < a; i++){
      if (str[i] != str[i - 1]){
        const letter = [1]
        letter.push(str[i])
        word.push(letter);
      }

      else{
        let b = word.pop() 
        b[0] += 1
        word.push(b);
      }
  }

}
    return word
}

//console.log(runLengthEncoding("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbb"))











































































module.exports = runLengthEncoding