"use strict"


function testVar() {

    var a = 50; console.log(a);
}
testVar();


for (let i = 0; i < 10; i++) {

    console.log(i);
}

const colors = [];
colors.push('red');
colors.push('blue');
//colors = ['red', 'green'];

console.log(colors);
class user {
    constructor(username, email, pasword) {


        this.email = email;
        this.pasword = pasword;
        this.username = username;
        this.money = 30;

    }

    register() {



        console.log(this.username + " is registred ");
    }

}
let User = new user('hamza', 'hamza@', '123');
User.register();
class member extends user {

    constructor(username, email, pasword, member) {

        super(username,email,pasword);
        this.member = member;


    }
}
let hamouda=new member('hamouda','ha@','AZR','member of est');
hamouda.register();