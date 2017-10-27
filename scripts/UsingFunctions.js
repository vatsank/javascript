var app = (function() {

    var message = 'closure in Action';

    function show() {

        console.log("Nested Function");

        return function() {
            return message;
        };
    }

    function display() {
        console.log("Inside display functions");
    }

    return {
        funcRef: show,
        myfunc: display
    };
})();

console.log(app.funcRef());
var myfunc = app.funcRef();
console.log(myfunc());
//console.log(app.show());