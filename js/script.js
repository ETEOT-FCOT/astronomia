// MOSTRAR E ESCONDER NAVBAR RESPONSIVO
const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
    if (event.type === "touchstart") event.preventdefault();
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu); 

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

function resposta6() {
    let resp = document.getElementsByName("resp6");
    let op1 = document.getElementById("opcao1.6");
    let op2 = document.getElementById("opcao2.6");
    let op3 = document.getElementById("opcao3.6");
    let op4 = document.getElementById("opcao4.6");
    if (resp[2].checked == true) {
        op1.style.color = "#9d0208"
        op2.style.color = "#9d0208"
        op3.style.backgroundColor = "#80c423"
        op3.style.color = "white"
        op4.style.color = "#9d0208"
    }
    else {
        if (resp[0].checked == true) {
            op1.style.backgroundColor = "#9d0208"
            op1.style.color = "white"
            op2.style.color = "#9d0208"
            op3.style.color = "#80c423"
            op4.style.color = "#9d0208"
        }
        else if (resp[1].checked == true) {
            op1.style.color = "#9d0208"
            op2.style.backgroundColor = "#9d0208"
            op2.style.color = "white"
            op3.style.color = "#80c423"
            op4.style.color = "#9d0208"
        }
        else if (resp[3].checked == true) {
            op1.style.color = "#9d0208"
            op2.style.color = "#9d0208"
            op3.style.color = "#80c423"
            op4.style.backgroundColor = "#9d0208"
            op4.style.color = "white"
        }
        
    }

    document.getElementById("bconf6").style.display = "none";
    document.getElementById("bpro6").style.display = "block"

    return false;
}

function resposta7() {
    let resp = document.getElementsByName("resp7");
    let op1 = document.getElementById("opcao1.7");
    let op2 = document.getElementById("opcao2.7");
    let op3 = document.getElementById("opcao3.7");
    let op4 = document.getElementById("opcao4.7");
    if (resp[2].checked == true) {
        op1.style.color = "#9d0208"
        op2.style.color = "#9d0208"
        op3.style.backgroundColor = "#80c423"
        op3.style.color = "white"
        op4.style.color = "#9d0208"
    }
    else {
        if (resp[0].checked == true) {
            op1.style.backgroundColor = "#9d0208"
            op1.style.color = "white"
            op2.style.color = "#9d0208"
            op3.style.color = "#80c423"
            op4.style.color = "#9d0208"
        }
        else if (resp[1].checked == true) {
            op1.style.color = "#9d0208"
            op2.style.backgroundColor = "#9d0208"
            op2.style.color = "white"
            op3.style.color = "#80c423"
            op4.style.color = "#9d0208"
        }
        else if (resp[3].checked == true) {
            op1.style.color = "#9d0208"
            op2.style.color = "#9d0208"
            op3.style.color = "#80c423"
            op4.style.backgroundColor = "#9d0208"
            op4.style.color = "white"
        }
        
    }

    document.getElementById("bconf7").style.display = "none";
    document.getElementById("bpro7").style.display = "block"

    return false;
}

function resposta8() {
    let resp = document.getElementsByName("resp8");
    let op1 = document.getElementById("opcao1.8");
    let op2 = document.getElementById("opcao2.8");
    let op3 = document.getElementById("opcao3.8");
    let op4 = document.getElementById("opcao4.8");
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

    document.getElementById("bconf8").style.display = "none";
    document.getElementById("bpro8").style.display = "block"

    return false;
}

function resposta9() {
    let resp = document.getElementsByName("resp9");
    let op1 = document.getElementById("opcao1.9");
    let op2 = document.getElementById("opcao2.9");
    let op3 = document.getElementById("opcao3.9");
    let op4 = document.getElementById("opcao4.9");
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

    document.getElementById("bconf9").style.display = "none";
    document.getElementById("bpro9").style.display = "block"

    return false;
}

function resposta10() {
    let resp = document.getElementsByName("resp10");
    let op1 = document.getElementById("opcao1.10");
    let op2 = document.getElementById("opcao2.10");
    let op3 = document.getElementById("opcao3.10");
    let op4 = document.getElementById("opcao4.10");
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

    document.getElementById("bconf10").style.display = "none";
    document.getElementById("bpro10").style.display = "block"

    return false;
}

function resposta11() {
    let resp = document.getElementsByName("resp11");
    let op1 = document.getElementById("opcao1.11");
    let op2 = document.getElementById("opcao2.11");
    let op3 = document.getElementById("opcao3.11");
    let op4 = document.getElementById("opcao4.11");
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

    document.getElementById("bconf11").style.display = "none";
    document.getElementById("bpro11").style.display = "block"

    return false;
}

function resposta12() {
    let resp = document.getElementsByName("resp12");
    let op1 = document.getElementById("opcao1.12");
    let op2 = document.getElementById("opcao2.12");
    let op3 = document.getElementById("opcao3.12");
    let op4 = document.getElementById("opcao4.12");
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

    document.getElementById("bconf12").style.display = "none";
    document.getElementById("bpro12").style.display = "block"

    return false;
}

function resposta13() {
    let resp = document.getElementsByName("resp13");
    let op1 = document.getElementById("opcao1.13");
    let op2 = document.getElementById("opcao2.13");
    let op3 = document.getElementById("opcao3.13");
    let op4 = document.getElementById("opcao4.13");
    if (resp[2].checked == true) {
        op1.style.color = "#9d0208"
        op2.style.color = "#9d0208"
        op3.style.backgroundColor = "#80c423"
        op3.style.color = "white"
        op4.style.color = "#9d0208"
    }
    else {
        if (resp[0].checked == true) {
            op1.style.backgroundColor = "#9d0208"
            op1.style.color = "white"
            op2.style.color = "#9d0208"
            op3.style.color = "#80c423"
            op4.style.color = "#9d0208"
        }
        else if (resp[1].checked == true) {
            op1.style.color = "#9d0208"
            op2.style.backgroundColor = "#9d0208"
            op2.style.color = "white"
            op3.style.color = "#80c423"
            op4.style.color = "#9d0208"
        }
        else if (resp[3].checked == true) {
            op1.style.color = "#9d0208"
            op2.style.color = "#9d0208"
            op3.style.color = "#80c423"
            op4.style.backgroundColor = "#9d0208"
            op4.style.color = "white"
        }
        
    }

    document.getElementById("bconf13").style.display = "none";
    document.getElementById("bpro13").style.display = "block";

    return false;
}

function resposta14() {
    let resp = document.getElementsByName("resp14");
    let op1 = document.getElementById("opcao1.14");
    let op2 = document.getElementById("opcao2.14");
    let op3 = document.getElementById("opcao3.14");
    let op4 = document.getElementById("opcao4.14");
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

    document.getElementById("bconf14").style.display = "none";
    document.getElementById("bpro14").style.display = "block"

    return false;
}

function resposta15() {
    let resp = document.getElementsByName("resp15");
    let op1 = document.getElementById("opcao1.15");
    let op2 = document.getElementById("opcao2.15");
    let op3 = document.getElementById("opcao3.15");
    let op4 = document.getElementById("opcao4.15");
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

    document.getElementById("bconf15").style.display = "none";
    document.getElementById("bpro15").style.display = "block"

    return false;
}

function resposta16() {
    let resp = document.getElementsByName("resp16");
    let op1 = document.getElementById("opcao1.16");
    let op2 = document.getElementById("opcao2.16");
    let op3 = document.getElementById("opcao3.16");
    let op4 = document.getElementById("opcao4.16");
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

    document.getElementById("bconf16").style.display = "none";
    document.getElementById("bpro16").style.display = "block"

    return false;
}

function resposta17() {
    let resp = document.getElementsByName("resp17");
    let op1 = document.getElementById("opcao1.17");
    let op2 = document.getElementById("opcao2.17");
    let op3 = document.getElementById("opcao3.17");
    let op4 = document.getElementById("opcao4.17");
    if (resp[2].checked == true) {
        op1.style.color = "#9d0208"
        op2.style.color = "#9d0208"
        op3.style.backgroundColor = "#80c423"
        op3.style.color = "white"
        op4.style.color = "#9d0208"
    }
    else {
        if (resp[0].checked == true) {
            op1.style.backgroundColor = "#9d0208"
            op1.style.color = "white"
            op2.style.color = "#9d0208"
            op3.style.color = "#80c423"
            op4.style.color = "#9d0208"
        }
        else if (resp[1].checked == true) {
            op1.style.color = "#9d0208"
            op2.style.backgroundColor = "#9d0208"
            op2.style.color = "white"
            op3.style.color = "#80c423"
            op4.style.color = "#9d0208"
        }
        else if (resp[3].checked == true) {
            op1.style.color = "#9d0208"
            op2.style.color = "#9d0208"
            op3.style.color = "#80c423"
            op4.style.backgroundColor = "#9d0208"
            op4.style.color = "white"
        }
        
    }

    document.getElementById("bconf17").style.display = "none";
    document.getElementById("bpro17").style.display = "block"

    return false;
}

function resposta18() {
    let resp = document.getElementsByName("resp18");
    let op1 = document.getElementById("opcao1.18");
    let op2 = document.getElementById("opcao2.18");
    let op3 = document.getElementById("opcao3.18");
    let op4 = document.getElementById("opcao4.18");
    if (resp[2].checked == true) {
        op1.style.color = "#9d0208"
        op2.style.color = "#9d0208"
        op3.style.backgroundColor = "#80c423"
        op3.style.color = "white"
        op4.style.color = "#9d0208"
    }
    else {
        if (resp[0].checked == true) {
            op1.style.backgroundColor = "#9d0208"
            op1.style.color = "white"
            op2.style.color = "#9d0208"
            op3.style.color = "#80c423"
            op4.style.color = "#9d0208"
        }
        else if (resp[1].checked == true) {
            op1.style.color = "#9d0208"
            op2.style.backgroundColor = "#9d0208"
            op2.style.color = "white"
            op3.style.color = "#80c423"
            op4.style.color = "#9d0208"
        }
        else if (resp[3].checked == true) {
            op1.style.color = "#9d0208"
            op2.style.color = "#9d0208"
            op3.style.color = "#80c423"
            op4.style.backgroundColor = "#9d0208"
            op4.style.color = "white"
        }
        
    }

    document.getElementById("bconf18").style.display = "none";
    document.getElementById("bpro18").style.display = "block"

    return false;
}

function resposta19() {
    let resp = document.getElementsByName("resp19");
    let op1 = document.getElementById("opcao1.19");
    let op2 = document.getElementById("opcao2.19");
    let op3 = document.getElementById("opcao3.19");
    let op4 = document.getElementById("opcao4.19");
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

    document.getElementById("bconf19").style.display = "none";
    document.getElementById("bpro19").style.display = "block"

    return false;
}

function resposta20() {
    let resp = document.getElementsByName("resp20");
    let op1 = document.getElementById("opcao1.20");
    let op2 = document.getElementById("opcao2.20");
    let op3 = document.getElementById("opcao3.20");
    let op4 = document.getElementById("opcao4.20");
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

    document.getElementById("bconf20").style.display = "none";
    document.getElementById("bpro20").style.display = "block"

    return false;
}

// A mudar a Condição