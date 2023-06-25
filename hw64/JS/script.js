'use strict';
(function () {
    function Student(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
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
        const emptyItemIndex = this.attendanceList.findIndex(item => item === null)
            if (emptyItemIndex !== -1) {
               const pres = this.attendanceList[emptyItemIndex] = true;
               return pres;
            }

    }

    Student.prototype.absent = function () {
        if (this.attendanceList.length > 10) throw new Error('Количество занятий ошибочно')
        const emptyItemIndex = this.attendanceList.findIndex(item => item === null)
        if (emptyItemIndex !== -1) return this.attendanceList[emptyItemIndex] = false;
    }

    Student.prototype.mark = function (mark) {
        if (mark > 10 || mark < 0) throw new Error('Мы учимся по 10бальной системе')
        if (this.attendanceList.length > 10) throw new Error('Количество занятий ошибочно')
        const emptyItemIndex = this.attendanceList.filter(item => item !== null)
        const truePlace = emptyItemIndex.length
        if (emptyItemIndex !== -1) return this.marksArr[truePlace] = mark;
    }

    Student.prototype.summary = function () {
        const averageGrade = this.gradePointAverage();
        const attendanceCount = this.attendanceList.filter(item => item !== null).length
        const sumOfAttendance = this.attendanceList.reduce((acc, item) => acc + item, 0)
        const averageOfAttendance = sumOfAttendance / attendanceCount
        if (averageGrade >= 9 && averageOfAttendance >= 0.9) {
            return "Ути какой молодчинка!";
        } else if (averageGrade > 9 || averageOfAttendance > 0.9) {
            return "Норм, но можно лучше";
        } else {
            return "Редиска!";
        }
    }


    const student = new Student('Петя', 'Петро', 2006);
    student.present();
    student.mark(7);
    student.present();
    student.present();
    student.absent();
    student.present();
    student.mark(10);
    const summary = student.summary();
    console.log(summary);
    console.log(student.marksArr);
    console.log(student.attendanceList);

})()