function convertFahrToCelsius(fahrenheit)
{ 
    var resultType = typeof(fahrenheit)
    if(resultType == "number"){
        var ft = fahrenheit;
        var fc = ((ft - 32) * 5 / 9).toFixed(4);
        var message = ft+'\xB0F is ' + fc + '\xB0C.';
        console.log(message);
    }
    else {
        var errorMessage = fahrenheit +' is not a valid number but a/an ' + resultType +'.'
        console.log(errorMessage);
    }
    
}


convertFahrToCelsius("7,8");



function checkYuGiOh(n)
{
    
}
