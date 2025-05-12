abstract class MyDate {
    protected date = new Date();

    getDate(): string {
        return this.date.getDate().toString();
    }

    getDay(): string {
        return this.date.getDay().toString();
    }

    getMonth(): string {
        return this.date.getMonth().toString();
    }

}

class MyDate2 extends MyDate {

}

const myDate = new MyDate2();
console.log(myDate.getDate());
console.log(myDate.getMonth());

