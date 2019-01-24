2
//
//                    * Create an array called ```peopleList``` objects using *Object Literal* notation.
//
// * Each 'person' object in the 'people' collection should have the following information:
//
//     First Name
// Last Name
// Age
// Zip Code
//
// Add the following 4 People to your list:
// Jimmy Page, 62, 00821
//
// Rick Nielsen, 57, 61016
//
// Jimi Hendrix, 58, 90001
//
// Lemmy Kilmister, 57, 21120


var peopleList = [{FirstNane:"Jimmy",LastName:"Page",Age:62,Zipcode:38929}, {FirstNane:"Rick",LastName:"Nielson",Age:57,Zipcode:6116},
    {FirstNane:"Jimi",LastName:"Hendrix",Age:58,Zipcode:922221},{FirstNane:"lemmy",LastName:"Kilmister",Age:57,Zipcode:21112}];
peopleList[2].FamousSong="PurpleHaze";
console.log(peopleList[2].FamousSong);
peopleList[0].stringconcat= function(){

    //("LedZeppelin");
    return("LedZeppelin" +this.Zipcode)
}

console.log(peopleList[0].stringconcat());
//function(a)

