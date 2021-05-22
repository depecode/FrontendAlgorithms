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
    var resultType = typeof(n)
    if(resultType == "number"){
        var arrayList = [];
        for(var i =1; i<=n; i++){
            var muitiple = [];
            switch (arrayList) {
                case 2:
                  i % 2 === 0;
                  arrayList.push("yu");
                  console.log(arrayList);
                  break;
                case 3:
                    i % 3 === 0;
                    arrayList.push("gi");
                  break;
                case 5:
                    i % 5 === 0;
                    arrayList.push("oh");
              }
        }
        console.log(arrayList);
      
    }
    else {
        var errorMessage = 'invalid parameter: ' + n
        console.log(errorMessage);
    }
}


checkYuGiOh(2);
