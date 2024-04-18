/*
* Написать функцию, которая форматирует продолжительность, заданную в секундах, удобным для человека способом.

Функция должна принимать неотрицательное целое число.
*  Если оно равно нулю, оно просто возвращает «now».
*  В противном случае продолжительность выражается как комбинация years, days, hours, minutes и seconds.
*
Гораздо проще понять на примере:
* Для seconds = 62, ваша функция должна вернуть результат.
    "1 minute and 2 seconds"
* Для seconds = 3662 ваша функция должна вернуть результат.
    "1 hour, 1 minute and 2 seconds"
Для целей год состоит из 365 дней, а день — из 24 часов.

Обратите внимание, что пробелы важны.

Подробные правила
Результирующее выражение состоит из таких компонентов, как 4 seconds, 1 year и т.д.
*  Обычно это положительное целое число и одна из допустимых единиц времени, разделенные пробелом.
*  Единица времени используется во множественном числе, если целое число больше 1.
*

* Компоненты разделяются запятой и пробелом («,»).
*  За исключением последнего компонента, который разделяется символами «and», как если бы он был написан на английском языке.
Более значимые единицы времени наступят раньше, чем наименее значимые.
*  Следовательно, 1 second and 1 year неверно, но 1 year and 1 second верно.
*
Разные компоненты имеют разную единицу измерения времени. Таким образом, нет повторяющихся единиц, таких как 5 seconds и 1 second.

A component will not appear at all if its value happens to be zero. Hence, 1 minute and 0 seconds is not valid, but it should be just 1 minute.
Компонент вообще не появится, если его значение равно нулю.
*  Следовательно, 1 minute and 0 seconds недопустимы, но они должны составлять всего 1 minute.
Единицу времени необходимо использовать «насколько это возможно».
*  Это означает, что функция должна возвращать не 61 seconds, а 1 minute and 1 second.
*  Формально длительность, указанная в компоненте, не должна превышать любую допустимую более значимую единицу времени.
*
* * */
// function formatDuration (seconds) {
//     let sec = seconds;
//     let min = sec/60;
//     let hrs = min/60;
//     let ds = hrs/24;
//     let yrs = ds/365;

//     console.log(min, hrs, ds, yrs)

//     return(result)

// }


function formatDuration(seconds) {
    if (seconds === 0) {
        return "now";
    }

    const year = Math.floor(seconds / (60 * 60 * 24 * 365));
    const day = Math.floor((seconds % (60 * 60 * 24 * 365)) / (60 * 60 * 24));
    const hour = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
    const minute = Math.floor((seconds % (60 * 60)) / 60);
    const second = seconds % 60;

    const components = [];
    if (year > 0) {
        components.push(year > 1 ? year + ' years' : year + ' year');
    }
    if (day > 0) {
        components.push(day > 1 ? day + ' days' : day + ' day');
    }
    if (hour > 0) {
        components.push(hour > 1 ? hour + ' hours' : hour + ' hour');
    }
    if (minute > 0) {
        components.push(minute > 1 ? minute + ' minutes' : minute + ' minute');
    }
    if (second > 0) {
        components.push(second > 1 ? second + ' seconds' : second + ' second');
    }

    let result = '';
    for (let i = 0; i < components.length; i++) {
        if (result !== '' && i === components.length - 1) {
            result += ' and ';
        } else if (result !== '' && i < components.length - 1) {
            result += ', ';
        }
        result += components[i];
    }

    return result;
}















































































































module.exports = formatDuration