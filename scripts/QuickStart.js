// Object Literal Syntax

var app = {};

app.show = function() {

    console.log('Hello World');
};


app.init = function() {

    var greetButton = document.getElementById('greetButton');

    greetButton.addEventListener('click', function() {

        var msgDiv = document.getElementById('msg');

        msgDiv.innerHTML = "Name Spacing  with JS";
    });

};

app.init();

function f1(employeeId) {
    this.employeeId = employeeId;
}

console.log(f1(20));