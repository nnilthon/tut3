let even_predicate = function (value)
{
    
    // as if the value is null or undefined, return false
    if (value === null || value === undefined) {
        return false;
    }
    
    //convert the vaule to a number and assign it under new variable theNumber
    let theNumber = Number(value);

    //check if number is an integer first, then check if it is even, if so return true
    if (Number.isInteger(theNumber)){
        //if  the number is even, means that the remainder of  the number divided by 2 is 0, 
        if(theNumber%2 === 0 ){
            return true;
        }
    }
    //despite all of its checks, if it is not an even number, return false
    return false;
};

let odd_predicate = function (value)
{
    // as if the value is null or undefined, return false
    if (value === null || value === undefined) {
        return false;
    }

    //convert the vaule to a number and assign it under new variable theNumbe
    let theNumber = Number(value);

    //if  the number is odd, means that the remainder of  the number divided by 2 isn't 0, 
    if (Number.isInteger(theNumber)){
        if(theNumber%2 !== 0 ){
            return true;
        }
    }
    //despite all of its checks, return false
    return false;
};

let undefined_predicate = function (value)
{
     if(value === undefined){
        return true;
    }

    return false;

};

let null_predicate = function (value)
{
    if(value === null){
        return true;
    }

    return false;
};

let check = function (predicate,value){
        return predicate(value);
};

//Test 
console.log(even_predicate(2));
console.log(even_predicate(undefined));
console.log(odd_predicate(3));
console.log(odd_predicate(3.5));
console.log(undefined_predicate(undefined));
console.log(undefined_predicate(null));
console.log(null_predicate(null));
console.log(null_predicate(undefined));



//---------------------------------------------------------------------------------------------------

let getDictionary = function (lang)
{


    //The input to englishDictionary will be a number.
    let englishDictionary = function (number)
    {
        switch (number) {
            case 1:
                return "one";
            case 2:
                return "two";
            case 3:
                return "three";

            default:
                return "not included in dictionary"
        
        }      
    };

    //The input to frenchDictionary will be a number.
    let frenchDictionary = function (number)
    {
         switch (number) {
            case 1:
                return "un";
            case 2:
                return "deux";
            case 3:
                return "trois";

            default:
                return "not included in dictionary"
        
        }      
 
    };

    //to accept both upper and lower case letters by converting the input to lower case
    lang = lang.toLowerCase();

    //eithr input of "e" or "english" wiil acceptable for the englishDictionary function, while "f" or "french" will be acceptable for the frenchDictionary function
   if (lang === "e" || lang == "english"){
    return englishDictionary;
   }

    if (lang === "f" || lang == "french"){
    return frenchDictionary;
   }
};

// Test English dictionary
let english = getDictionary("English");
console.log(english(2));

// Test French dictionary
let french = getDictionary("French");
console.log(french(5));
