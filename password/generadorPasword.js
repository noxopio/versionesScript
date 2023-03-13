generateSecurePassword = (n,ipt)=> {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*_+-=<>?";
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]/;
    finding = true
    while (finding) {
        let password = "";
        if (ipt.value.length<1){
            for (let i = 0; i < n - ipt.value.length; i++) {
              password += characters.charAt(Math.floor(Math.random() * characters.length));
            }
        } else {
            let palabra = ipt.value
            newCH = palabra.toLowerCase() + palabra.toUpperCase() + "0123456789!@#$%^&*_+-=<>?"
            for (let i = 0; i < n; i++) {
                password += newCH.charAt(Math.floor(Math.random() * newCH.length));
            }
        }
        try {
            const isValid = regex.test(password);
            console.log(isValid)
            if (isValid) {finding = false; return password}
        }
        catch (e){
            return "Tardo mucho en generarse, agrege algún caracter más y prueba de nuevo"
        }
        
    }

}

showPassword = n => {
    const input = document.getElementById("frase")
    document.getElementById("password").textContent = "Generando..."
    setTimeout(() => {
    let newPassword = generateSecurePassword(n,input)
    document.getElementById("password").textContent = newPassword
    }, 300);
}


document.querySelector(".c12").addEventListener("click",()=>{
    showPassword(12)
})
document.querySelector(".c16").addEventListener("click",()=>{
    showPassword(16)
})
document.querySelector(".c20").addEventListener("click",()=>{
    showPassword(20)
})