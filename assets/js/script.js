function cardNameCheck(){
    var cardName = document.getElementById("cardName").value;
    var cardNameLength = cardName.length; 
    if((cardName != null || cardName != "") && (cardNameLength <=18 && cardNameLength>=1)){ 
        document.getElementById("cardHolderName").value=cardName.toUpperCase();
    }else if(cardNameLength == 0){
        document.getElementById("cardHolderName").value="Full Name";
    }else{
        alert("Please enter Card Holder Name within 18 digit");
        var cardName=document.getElementById("cardName").value;
        var cardNameSub = cardName.substring(0,18);
        document.getElementById("cardHolderName").value= cardNameSub.toUpperCase();
        document.getElementById("cardName").value= cardName.substring(0,18);
    }
}

function cardExpMonthCheck(req){
    var cardExpMonthreq =req.value;
    var cardExpMonth = document.getElementById(cardExpMonthreq).value;
    if((cardExpMonth != null || cardExpMonth != "") && (cardExpMonth != "Month")){
        var cardexpire = document.getElementById("cardexpire").value;
        var YY = cardexpire.substring(3, 5);
        document.getElementById("cardexpire").value=cardExpMonth+"/"+YY;
    }else if((cardExpMonth != null || cardExpMonth != "") &&(cardExpMonth == "Month")){
        var cardexpire = document.getElementById("cardexpire").value;
        var YY = cardexpire.substring(3, 5);
        document.getElementById("cardexpire").value="MM"+"/"+YY;
    }
    
}

function cardExpYearCheck(req){
    var cardExpYearreq =req.value;
    var cardExpYear = document.getElementById(cardExpYearreq).value;
    if((cardExpYear != null || cardExpYear != "") && (cardExpYear != "Year")){

        var cardexpire = document.getElementById("cardexpire").value;
        var MM = cardexpire.substring(0, 2);
        document.getElementById("cardexpire").value=MM+"/"+cardExpYear.substring(2,4);
    } else if((cardExpYear != null || cardExpYear != "") &&(cardExpYear == "Year")){
        var cardexpire = document.getElementById("cardexpire").value;
        var MM = cardexpire.substring(0, 2);
        document.getElementById("cardexpire").value=MM+"/"+"YY";
    }
}

function cardNumberCheck(){
    var cardNumber = document.getElementById("cardNumber").value;
    var cardNumberLength = cardNumber.length; 
    if((cardNumber != null || cardNumber != "") && (cardNumberLength !=0)){ 
        document.getElementById("cardNumberView").value=cardNumber.substring(0, 4)+"      "
        +cardNumber.substring(4, 8)+"     "+cardNumber.substring(8, 12)+"    "+cardNumber.substring(12, 16);
              
        if(cardNumber.substring(0, 1) == 4){
            document.getElementById("cardType").src="assets/images/visa.png";
            document.getElementById("cardtypeview").src="assets/images/visa.png";
        }else if(cardNumber.substring(0, 1) == 5){
            document.getElementById("cardType").src="assets/images/mastercard.png";
            document.getElementById("cardtypeview").src="assets/images/mastercard.png";
        }else if(cardNumber.substring(0, 1) == 6){
            document.getElementById("cardType").src="assets/images/discover.png";
            document.getElementById("cardtypeview").src="assets/images/discover.png";
        }else if(cardNumber.substring(0, 2) == 34 || cardNumber.substring(0, 2) == 37){
            document.getElementById("cardType").src="assets/images/amex.png";
            document.getElementById("cardtypeview").src="assets/images/amex.png";
        }else if(cardNumber.substring(0, 2) == 36){
            document.getElementById("cardType").src="assets/images/dinersclub.png";
            document.getElementById("cardtypeview").src="assets/images/dinersclub.png";
        }else if(cardNumber.substring(0, 4) >= 3528 && cardNumber.substring(0, 4) >= 3589){
            document.getElementById("cardType").src="assets/images/jcb.png";
            document.getElementById("cardtypeview").src="assets/images/jcb.png";
        }else if(cardNumber.substring(0, 2) == 65){
            document.getElementById("cardType").src="assets/images/troy.png";
            document.getElementById("cardtypeview").src="assets/images/troy.png";
        }else if(cardNumber.substring(0, 2) == 62){
            document.getElementById("cardType").src="assets/images/unionpay.png";
            document.getElementById("cardtypeview").src="assets/images/unionpay.png";
        }
    }else if(cardNumberLength ==0){
        document.getElementById("cardNumberView").value="####      ####     ####     ####";
        document.getElementById("cardType").src="assets/images/visa.png";
    }
    if(cardNumberLength >16){
        alert("Please enter Card Number within 16 digit");
        document.getElementById("cardNumber").value= cardNumber.substring(0,16);
    }

}

function cvvhover(){
    document.getElementById("cvvfocus").style.transform="rotateY(-180deg)";
    var cardCvv = document.getElementById("cvv").value;
    var cardCvvLength = cardCvv.length;
    if((cardCvv != null || cardCvv != "") && (cardCvvLength !=0)){ 
        document.getElementById("CVVvalue").innerHTML=cardCvv.substring(0, 4);
    }else if(cardCvvLength == 0){
        document.getElementById("CVVvalue").innerHTML="";
    }
    if(cardCvvLength >4){
        alert("Please enter CVV Number within 4 digit");
        document.getElementById("cvv").value= cardCvv.substring(0,4);
    }
}


function cvvhoverreturn(){
    document.getElementById("cvvfocus").style.transform="";
}
