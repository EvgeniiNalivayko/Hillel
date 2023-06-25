'use strict';

(function () {
    function Student(firstName, lastName, birthYear) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthYear = birthYear;
        this.marksArr = new Array(10).fill(null);
        this.attendanceList = new Array(10).fill(null);
    }

    Student.prototype.age = function () {
        const currentYear = new Date().getFullYear();
        return currentYear - +this.birthYear;
    };

    Student.prototype.gradePointAverage = function () {
        const validGrades = this.marksArr.filter((grade) => grade !== null);
        if (validGrades.length === 0) return;
        const sumGrades = validGrades.reduce((acc, grade) => acc + grade, 0);
        return sumGrades / validGrades.length;
    };

    Student.prototype.present = function () {
        if (this.attendanceList.length > 10) throw new Error('Количество занятий ошибочно');
        const emptyIndex = this.attendanceList.findIndex((item) => item === null);
        if (emptyIndex !== -1) {
            const attendance = this.attendanceList[emptyIndex] = true;
            return attendance;
        }
    };

    Student.prototype.absent = function () {
        if (this.attendanceList.length > 10) throw new Error('Количество занятий ошибочно');
        const emptyIndex = this.attendanceList.findIndex((item) => item === null);
        if (emptyIndex !== -1) return this.attendanceList[emptyIndex] = false;
    };

    Student.prototype.mark = function (mark) {
        if (mark > 10 || mark < 0) throw new Error('Мы учимся по 10бальной системе');
        if (this.attendanceList.length > 10) throw new Error('Количество занятий ошибочно');
        const presentAttendance = this.attendanceList.filter((item) => item !== null);
        const lastIndex = presentAttendance.length - 1;
        return this.marksArr[lastIndex] = mark;
    };

    Student.prototype.averageAttendance = function () {
        const attendanceCount = this.attendanceList.filter((item) => item !== null).length;
        const sumOfAttendance = this.attendanceList.reduce((acc, item) => acc + item, 0);
        return sumOfAttendance / attendanceCount;
    }

    Student.prototype.summary = function () {
        const averageGrade = this.gradePointAverage();
        const attendanceAverage = this.averageAttendance();

        if (averageGrade >= 9 && attendanceAverage >= 0.9) {
            return 'Ути какой молодчинка!';
        }
        if (averageGrade > 9 || attendanceAverage > 0.9) {
            return 'Норм, но можно лучше';
        } else return 'Редиска!';
    };

    const student = new Student('Петя', 'Петров', 1999);
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
    student.age();
})();