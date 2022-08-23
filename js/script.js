function resposta() {
    let resp = document.getElementsByName("resp");
    let op1 = document.getElementById("opcao1");
    let op2 = document.getElementById("opcao2");
    let op3 = document.getElementById("opcao3");
    let op4 = document.getElementById("opcao4");
    if (resp[0].checked == true) {
        op1.style.backgroundColor = "#80c423"
        op1.style.color = "white"
        op2.style.color = "#9d0208"
        op3.style.color = "#9d0208"
        op4.style.color = "#9d0208"
        
    }
    else {
        if (resp[1].checked == true) {
            op1.style.color = "#80c423"
            op2.style.backgroundColor = "#9d0208"
            op2.style.color = "white"
            op3.style.color = "#9d0208"
            op4.style.color = "#9d0208"
        }
        else if (resp[2].checked == true) {
            op1.style.color = "#80c423"
            op2.style.color = "#9d0208"
            op3.style.backgroundColor = "#9d0208"
            op3.style.color = "white"
            op4.style.color = "#9d0208"
        }
        else if (resp[3].checked == true) {
            op1.style.color = "#80c423"
            op2.style.color = "#9d0208"
            op3.style.color = "#9d0208"
            op4.style.backgroundColor = "#9d0208"
            op4.style.color = "white"
        }
        
    }

    document.getElementById("bconf").style.display = "none";
    document.getElementById("bpro").style.display = "block"

    return false;
}
function resposta2() {
    let resp = document.getElementsByName("resp2");
    let op1 = document.getElementById("opcao1.2");
    let op2 = document.getElementById("opcao2.2");
    let op3 = document.getElementById("opcao3.2");
    let op4 = document.getElementById("opcao4.2");
    if (resp[1].checked == true) {
        op1.style.color = "#9d0208"
        op2.style.backgroundColor = "#80c423"
        op2.style.color = "white"
        op3.style.color = "#9d0208"
        op4.style.color = "#9d0208"
        
    }
    else {
        if (resp[0].checked == true) {
            op1.style.backgroundColor = "#9d0208"
            op1.style.color = "white"
            op2.style.color = "#80c423"
            op3.style.color = "#9d0208"
            op4.style.color = "#9d0208"
        }
        else if (resp[2].checked == true) {
            op1.style.color = "#9d0208"
            op2.style.color = "#80c423"
            op3.style.backgroundColor = "#9d0208"
            op3.style.color = "white"
            op4.style.color = "#9d0208"
        }
        else if (resp[3].checked == true) {
            op1.style.color = "#9d0208"
            op2.style.color = "#80c423"
            op3.style.color = "#9d0208"
            op4.style.backgroundColor = "#9d0208"
            op4.style.color = "white"
        }
        
    }

    document.getElementById("bconf2").style.display = "none";
    document.getElementById("bpro2").style.display = "block"

    return false;
}

function resposta3() {
    let resp = document.getElementsByName("resp3");
    let op1 = document.getElementById("opcao1.3");
    let op2 = document.getElementById("opcao2.3");
    let op3 = document.getElementById("opcao3.3");
    let op4 = document.getElementById("opcao4.3");
    if (resp[0].checked == true) {
        op1.style.backgroundColor = "#80c423"
        op1.style.color = "white"
        op2.style.color = "#9d0208"
        op3.style.color = "#9d0208"
        op4.style.color = "#9d0208"
        
    }
    else {
        if (resp[1].checked == true) {
            op1.style.color = "#80c423"
            op2.style.backgroundColor = "#9d0208"
            op2.style.color = "white"
            op3.style.color = "#9d0208"
            op4.style.color = "#9d0208"
        }
        else if (resp[2].checked == true) {
            op1.style.color = "#80c423"
            op2.style.color = "#9d0208"
            op3.style.backgroundColor = "#9d0208"
            op3.style.color = "white"
            op4.style.color = "#9d0208"
        }
        else if (resp[3].checked == true) {
            op1.style.color = "#80c423"
            op2.style.color = "#9d0208"
            op3.style.color = "#9d0208"
            op4.style.backgroundColor = "#9d0208"
            op4.style.color = "white"
        }
        
    }

    document.getElementById("bconf3").style.display = "none";
    document.getElementById("bpro3").style.display = "block"

    return false;
}
function resposta4() {
    let resp = document.getElementsByName("resp4");
    let op1 = document.getElementById("opcao1.4");
    let op2 = document.getElementById("opcao2.4");
    let op3 = document.getElementById("opcao3.4");
    let op4 = document.getElementById("opcao4.4");
    if (resp[3].checked == true) {
        op1.style.color = "#9d0208"
        op2.style.color = "#9d0208"
        op3.style.color = "#9d0208"
        op4.style.backgroundColor = "#80c423"
        op4.style.color = "white"
    }
    else {
        if (resp[0].checked == true) {
            op1.style.backgroundColor = "#9d0208"
            op1.style.color = "white"
            op2.style.color = "#9d0208"
            op3.style.color = "#9d0208"
            op4.style.color = "#80c423"
        }
        else if (resp[1].checked == true) {
            op1.style.color = "#9d0208"
            op2.style.backgroundColor = "#9d0208"
            op2.style.color = "white"
            op3.style.color = "#9d0208"
            op4.style.color = "#80c423"
        }
        else if (resp[2].checked == true) {
            op1.style.color = "#9d0208"
            op2.style.color = "#9d0208"
            op3.style.backgroundColor = "#9d0208"
            op3.style.color = "white"
            op4.style.color = "#80c423"
        }
        
    }

    document.getElementById("bconf4").style.display = "none";
    document.getElementById("bpro4").style.display = "block"

    return false;
}
function resposta5() {
    let resp = document.getElementsByName("resp5");
    let op1 = document.getElementById("opcao1.5");
    let op2 = document.getElementById("opcao2.5");
    let op3 = document.getElementById("opcao3.5");
    let op4 = document.getElementById("opcao4.5");
    if (resp[1].checked == true) {
    op1.style.color = "#9d0208"
    op2.style.backgroundColor = "#80c423"
    op2.style.color = "white"
    op3.style.color = "#9d0208"
    op4.style.color = "#9d0208"
    
    }
    else {
        if (resp[0].checked == true) {
            op1.style.backgroundColor = "#9d0208"
            op1.style.color = "white"
            op2.style.color = "#80c423"
            op3.style.color = "#9d0208"
            op4.style.color = "#9d0208"
        }
        else if (resp[2].checked == true) {
            op1.style.color = "#9d0208"
            op2.style.color = "#80c423"
            op3.style.backgroundColor = "#9d0208"
            op3.style.color = "white"
            op4.style.color = "#9d0208"
        }
        else if (resp[3].checked == true) {
            op1.style.color = "#9d0208"
            op2.style.color = "#80c423"
            op3.style.color = "#9d0208"
            op4.style.backgroundColor = "#9d0208"
            op4.style.color = "white"
        }
    
    }

    document.getElementById("bconf5").style.display = "none";
    document.getElementById("bpro5").style.display = "block"

    return false;
}
