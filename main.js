function getPassword(){
    const chars =
    '1234567890-=!@#$%&*()_+qwertyuiop[asdfghjkl~]zxcvbnm,.;{}:><QWERTYUIOPASDFGHJKLZXCVBNM';

    var passWordLength = 16;
    var password = "";

    for(var i=0;i< passWordLength;i++){
        var randomNumber = Math.floor(Math.random()* chars.length);
        password +=chars.substring(randomNumber,randomNumber+1);
    }

    document.getElementById("password").value = password;
}

function copyPassword() {

    if (document.getElementById("password").value === "") getPassword();

    navigator.clipboard.writeText(document.getElementById("password").value);
    document.getElementById("alert").classList.add("active");

    setTimeout(()=>{
        document.getElementById("alert").classList.remove("active");
    },1000);

}