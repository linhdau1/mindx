let inputNumber = Number(prompt("Nhập vào số"));
console.log(typeof(inputNumber));
let n;

//x là số cần tìm

//chọn ra số ngẫu nhiên từ 4 đến 20
while(n % 2 != 0)
{   
    n = Math.floor(Math.random() * (16) + 4);
    console.log("random " + n);
}
console.log(n);

function finOppositeNumber(n, inputNumber)
{
    let x = 180/(360 / n) + inputNumber;
    Math.floor(x);
    if( x > n)
    {
        x = 1;
        console.log("so doi dien " + inputNumber +" la " + 1);
    }
    else{
        console.log("so doi dien " + inputNumber +" la " + x);
    }
}
finOppositeNumber(n, inputNumber);

// let a = prompt("Nhap vao chuoi 1")
// let b = prompt("Nhap vao chuoi 2");
// let c = "";
// function merge2String(a,b)
// {
   
// }




