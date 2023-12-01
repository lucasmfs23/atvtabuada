function valor(){
    var num = Number(document.getElementById("num").value);
    var result = "";
    for (var i = 1; i <= 10; i++) {
        var num1 = i*num;
            result += num+" x "+i+" = "+num1+"<br>";
            document.getElementById("resultado").innerHTML =result;
    }
}