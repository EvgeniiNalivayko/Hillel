//Task #1

let user = {}
user.name = 'John';
user.surname = 'Smith';

user.name = 'Pete'

delete user.name;

//Task #2
//Можно ли изменить объект, объявленный с помощью const?

// это будет работать?
//user.name = «Pete»;
//---------------------------------------------
//Ответ: Название объекта изменить нельзя, так как это константа , но свойства  этого объекта - можно .
//Когда мы изменяем имя объекта это все равно что создать новый или переназначаем его. Это можно было сделать, если
//вместо const будет let.


//Task #3

function sumAllNumberValue(obj) {
    let sum = 0;
    for (const name in obj) {
        if (typeof obj[name] === 'number') {
            sum += obj[name]
        }
    }
    return sum

}


let salaries = {

    John: 100, Ann: 160, Pete: 130
}

let allSalaries = sumAllNumberValue(salaries)
console.log(`Нужно выплатить: ${allSalaries}`)