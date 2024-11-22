var i;
for (i=0; i<3; i++) {
    console.log(i);
}

var myArray = ["A", "B", "C"];
for (i=0; i<myArray.length; i++){
    console.log(myArray[i]);
}

var i = 99;
while (i > 0){
    console.log(i + " bottles of beer on the wall");
    i--;
}

var i = 99;
while (true)
{
    i -= 1;
    if (i != 1)
    {
        console.log(i + " bottles of beer on the wall");
    } else {
        console.log(i + " bottle of beer on the wall");
    }
    if (i == 0)
    {
        break;
    }
}


for (var i = 0; i < 100; i++){
    if (i % 2 == 0){
        continue;
    }
    console.log(i + " is an odd number.");
}

var myArray = ["What is the meaning of life?", "The meaning of life is", 42];
for(var i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}