'use strict';
(function () {
    function Student() {
        this.firstName = "firstName";
        this.lastName = "lastName";
        this.birthYear = null;
        this.marksArr = new Array(10).fill(null);
        this.attendanceList = new Array(10).fill(null);
    }

    Student.prototype.getDOB = function () {
        const currentYear = new Date().getFullYear();
        return currentYear - this.birthYear;
    }
    Student.prototype.gradePointAverage = function () {
        const validGrades = this.marksArr.filter(item => item != null)
        if (validGrades.length === 0) return;
        const sumGrades = validGrades.reduce((acc, grade) => acc + grade, 0)
        return sumGrades / validGrades.length;
    }
    Student.prototype.present = function () {
        if (this.attendanceList.length > 10) throw new Error('Количество занятий ошибочно')
        const emptyItemIndex = this.attendanceList.findIndex(item => item === undefined)
        if (emptyItemIndex != -1) return this.attendanceList[emptyItemIndex] = true;
    }
    Student.prototype.absent = function () {
        if (this.attendanceList.length > 10) throw new Error('Количество занятий ошибочно')
        const emptyItemIndex = this.attendanceList.findIndex(item => item === undefined)
        if (emptyItemIndex != -1) return this.attendanceList[emptyItemIndex] = false;
    }
    Student.prototype.mark = function (mark) {
        if (mark > 10 || mark < 0) throw new Error('Мы учимся по 10бальной системе')
        if (this.attendanceList.length > 10) throw new Error('Количество занятий ошибочно')
        const emptyItemIndex = this.marksArr.findIndex(item => item === undefined)
        if (emptyItemIndex != -1) return this.marksArr[emptyItemIndex] = mark;
        console.log('Массив полон')
    }

    Student.prototype.summary = function () {
        const average = this.gradePointAverage();
        const sumOfAttendance = this.attendanceList.reduce((acc, item) => acc + item, 0)
        const calculateAverageAttendance = sumOfAttendance / this.lessons
        if (calculateAverageAttendance > 0.9 && average > 9) console.log("Ути какой молодчинка!");
        else if (calculateAverageAttendance > 0.9 || average > 9) console.log("Норм, но можно лучше")
        else if (calculateAverageAttendance < 0.9 && average < 9) console.log("Редиска!")
        // else console.log()
    }


    const student = new Student();
    student.present();
    student.present();
    student.present();
    // student.absent();
    student.mark(10);
    student.mark(10);
    student.mark(8);
    const summary = student.summary();
})()