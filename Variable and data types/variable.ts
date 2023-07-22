var n1:number = 10;

console.log(n1);


var s1:string = "Hello World"
var s2:string = `all the power is with you, you can do anything`

console.log(s1);
console.log(s2);


var s3:string = s1;
console.log(s3);

var b1:boolean = true;
var b2:boolean = false;


console.log(b1);
console.log(b2);


var a1:any = "test"
var a2:any = {
    product:1,
    productName: 'Iphone',
    productPrice: 1000
}

console.log(a1);
console.log(a2);


var array1:Array<string> = ["AngularJS", "RectJS", "NodeJS"];
var array2:Array<any> = ["AngularJS", "RectJS", "NodeJS", 123, true];
console.log(array1);
console.log(array1[0]);
console.log(array2);
