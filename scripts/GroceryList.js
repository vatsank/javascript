var grocObj = (function() {


    var Grocery = function(itemName, quantity, ratePerUnit) {

        this.itemName = itemName;
        this.quantity = quantity;
        this.ratePerUnit = ratePerUnit;

        this.calculate = function() {
            return this.quantity * this.ratePerUnit;
        };

        this.toString = function() {

            return this.itemName + ":" +
                this.quantity + ":" +
                this.ratePerUnit;
        };
    };

    return {

        goceryRef: Grocery
    };

})();