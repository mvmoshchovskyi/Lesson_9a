// Мають бути функції, які є асинхронними (мають сетТаймАут або сетІнтервал) які описують якусь певну вашу дію в день.
// Наприклад функція прокинутись триває 1с, поїсти - 0,5с. Доїхати до роботи - 2с. Пообідати - 1с.
// Зробити таких функцій в районі 10 штук. Функція має приймати параметр, який буде відповідати за успішне чи не успішне виконання.
// Далі виконати їх в тій послідовності, в якій ви виконуєте їх у свій звичайний день.
//
// Тобто, як приклад
// Прокинулись - Поснідали - Зібрались - ПОїхали на роботу - Працююєте - Пообідали - Працюєте - Випили кави - Працюєте - Поїхали до дому - Повчились - Лягли спати.
//
// Кожна функція має мати якесь успіше або не успішне виконання. Тобто можливий варіант, що при виконанні функції доїхати на роботу ви стали в заторі і не попали на роботу. Або йдучи на обід ви забули гаманець і лишились голодні.



function random() {
return Math.random() > 0.2
}


wakeUp(random(), (err, data) => {
    if (err) {
        console.log(err, 'no wakeUp')
    } else {
        console.log(data)
        eatFood(random(), (err, data) => {
            if (err) {
                console.log(err, 'no eatFood')
            } else {
                console.log(data)
                moveToWork(random(), (err, data) => {
                        if (err) {
                            console.log(err, 'no moveToWork')
                        } else {
                            console.log(data)
                            working(random(), (err, data) => {
                                if (err) {
                                    console.log(err, 'no working')
                                } else {
                                    console.log(data)
                                    haveLanch(random(), (err, data) => {
                                        if (err) {
                                            console.log(err, 'no lanch')
                                        } else {
                                            console.log(data)
                                            working(random(), (err, data) => {
                                                if (err) {
                                                    console.log(err, 'no working')
                                                } else {
                                                    console.log(data)
                                                    drinkCoffe(random(), (err, data) => {
                                                        if (err) {
                                                            console.log(err, 'no coffe')
                                                        } else {
                                                            console.log(data)
                                                            doHomeWork(random(), (err, data) => {
                                                                if (err) {
                                                                    console.log(err, 'no home work')
                                                                } else {
                                                                    console.log(data)
                                                                    goSleap(random(), (err, data) => {
                                                                        if (err) {
                                                                            console.log(err, 'no sleap')
                                                                        } else {
                                                                            console.log(data)
                                                                        }
                                                                    })
                                                                }
                                                            })
                                                        }
                                                    })
                                                }
                                            })
                                        }
                                    })
                                }
                            })

                        }
                    }
                )
            }
        })
    }
})

function wakeUp(isDone, cb) {
    setTimeout(() => {
        isDone
            ? cb(null,'Я прокинувся вчасно')
            : cb("Я проспав ")
    }, 1000)
}
function eatFood(isDone, cb) {
    setTimeout(() => {
        isDone
            ? cb(null, 'Я пообідав')
            : cb("Я голодний ")
    }, 1000)

}
function moveToWork(isDone, cb) {
    setTimeout(() => {
        isDone
            ? cb(null, 'Я поїхав на роботу ')
            : cb("Я спізнився на автобус  ")
    }, 1000)
}
function working(isDone, cb) {
    setTimeout(() => {
        isDone
            ? cb(null,'Я працюю ')
            : cb("Я лінивий   ")
    }, 1000)
}
function haveLanch(isDone, cb) {
    setTimeout(() => {
        isDone
            ? cb(null, "Я смачно пообідав")
            : cb("Я голодний  ")
    }, 1000)
}
function drinkCoffe(isDone, cb) {
    setTimeout(() => {
        isDone
            ? cb(null, "Я попив кави")
            : cb("Я хочу пити ")
    }, 1000)
}
function doHomeWork(isDone, cb) {
    setTimeout(() => {
        isDone
            ? cb(null,'Я зробив Домашку')
            : cb("Я тупий  ")
    }, 1000)
}
function goSleap(isDone, cb) {
    setTimeout(() => {
        isDone
            ? cb(null, 'Я заснув')
            : cb("я хочу спати")
    }, 1000)
}




// console.log("2222222222222222222222222222222222222222")
//
//
//
// let time = 0
//
// function wakeUp(isWake) {
//     return new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     if (isWake){
//         time+=1
//         console.log(' Я прокинувся вчасно')
//       resolve(time)
//     } else{
//         console.log("Я проспав ")
//         reject(' errorrrrr')}
//
// },1000)
//     })
// }
//
//
// function eatFood(isDone) {
//     return new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     if (isDone){
//         time+=2
//
//         console.log(' Im have my breakfest')
//       resolve(time)
//     }
//     reject(' wrong')
// },2000)
//     })
// }
//
// function moveToWork(isDone) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isDone) {
//                 time += 2
//
//                 console.log(' Im at Work')
//                 resolve(time)
//             }
//             reject(' wrong')
//         }, 2000)
//     })
// }
//
// function working(isDone) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isDone) {
//                 time += 3
//                 console.log('я працюю')
//                 resolve(time)
//             } else {
//                 console.log('я забив на роботу ')
//                 reject('mistake')}
//             }, 3000)
//     })
// }
//
// function haveLanch(isDone) {
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(isDone){
//                 time+=1
//                 console.log("Я смачно пообідав")
//                 resolve (time)
//             }else{
//                 console.log('Я голодний')
//                 reject('Помилка')
//             }
//         },1000  )
//     })
//
// }
//
// function drinkCoffe(isDone) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (isDone) {
//                 time += 1
//                 console.log("Я попив кави ")
//                 resolve(time)
//             } else {
//                 console.log('Я хочу пити')
//                 reject('Помилка')
//             }
//
//         }, 1000)
//
//     })
// }
//
// function goSleap(isDone){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(isDone){
//                 time+=3
//             console.log('Я заснув')
//             resolve(time)
//             }
//             else {
//                               console.log('Я хочу спати')
//                 reject('Помилка')
//         }
//
//         },3000)
//     })
//
// }
//
// function random() {
//   return (Math.floor(Math.random() * 2) !== 0);
// }
// console.log(random())
//
// wakeUp(random())
//     .then((reward) => {
//
//         return eatFood(reward)
//     })
//     .then(value => {
//
//         return moveToWork(random())
//     })
//     .then(value => {
//
//         return working(random())
//     })
//     .then(value => {
//
//         return haveLanch(random())
//     })
//         .then(value => {
//
//         return working(random())
//     })
//         .then(value => {
//
//         return drinkCoffe(random())
//     })
//         .then(value => {
//
//         return goSleap(random())
//     })
//     .catch(reason => {
//         console.log(reason)
//
//     })
//     .finally(() => {
//         console.log('finally')
//     })
//
//

