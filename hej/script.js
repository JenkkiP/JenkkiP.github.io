let row = document.getElementsByClassName("ok");
let i = 0;
let a = ["lime"]
let b = 0;


function changeColor()
{
    console.log("hejjjj")
    document.body.style.backgroundColor = a[b];
    b++
}

while(i < row.length)
{
    row[i].addEventListener("click", changeColor);
    i++
}

changeColor();