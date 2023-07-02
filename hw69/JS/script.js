'use script';
(function () {
    const student = {name: 'Иван Иванов'};
    const grades = {math: 90, fiz: 85, eng: 95};

    const saveGrades = (data, marks) => {
        const newData = new WeakMap()
        newData.set(data, marks)
        return newData
    }
    console.log(saveGrades(student, grades));
})()