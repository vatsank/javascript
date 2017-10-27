(function() {


    var Flight = function(flightCode, source, destination) {

        console.log("hi from flight");
        this.flightCode = flightCode;
        this.source = source;
        this.destination = destination;
        this.getFltCode = function() {
            return this.flightCode;
        };
    };

    var Helicopter = function() {

        console.log("Hi from heli");
        this.engine = 'agusta';

    };
    Flight.prototype.status = 'landed';

    Helicopter.prototype.showDetails = function() {
        return "hi helicopter";
    };

    Helicopter.prototype = new Flight();
    Helicopter.prototype.constructor = Helicopter;


    Flight.prototype.copy = function() {

        return new Flight();
    };

    var heli = new Helicopter();

    console.log(heli.constructor == Helicopter);
    console.log(heli.constructor == Flight);




    console.log("Status" + heli.status);

    //var heli2 = new Flight('hhghg', 'chn', 'ndls');

    // console.log("Flight Codclse" + heli2.getFltCode());

    Flight.prototype.toString = function() {

            return this.destination + ":" + this.source;
        }
        //var jet9e = new Flight('207', 'chn', 'bom');

    //var indi6e = new Flight('789', 'chn', 'hyd');

    // console.log(jet9e.destination);
    // console.log(jet9e.status);
    // console.log(jet9e.toString());

    // console.log(indi6e.destination);
    // console.log(indi6e.status);
    // console.log(indi6e.toString());

})();