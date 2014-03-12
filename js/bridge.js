var funct = (function () {
    // private stuff goes here
    
    return {

        convertFromItoM: function (ansID, weight) {

             var cw = document.getElementById(weight).value
            document.getElementById(ansID).value = Converter.convertFromImperialToMetric(cw);
     
        },

        convertFromMToI: function (weight) {
            var num = parseFloat(weight);
            if (isNaN(num) == true) {
                throw new Error("Not a Number");
            }
            num = num * converterValue;
            return parseFloat(num.toFixed(1));
        },
        convertFromInchesToCentimeters: function (In) {
            var num = parseFloat(In);
            if (isNaN(num) == true) {
                throw new Error("Not a Number");
            }
            num = num * cmsToIncehes;
            return parseFloat(num.toFixed(1));
        },
        convertFromMilesToKilometers: function (In) {
            var num = parseFloat(In);
            if (isNaN(num) == true) {
                throw new Error("Not a Number");
            }
            num = num * kmToMiles;
            return parseFloat(num.toFixed(1));
        }
    }


})();