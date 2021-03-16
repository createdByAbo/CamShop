const timeTab = [];
const bestsellers = [];
const preorders = [];
const onStock = [];
const sale = [];
const used = [];
fetch('http://127.0.0.1:6969/Cameras')
    .then(function (res) { return res.json(); })
    .then(function (data) {
        const CamProduct = data;
        for (i = 0; i < CamProduct.length; i++) {
        timeTab.push(CamProduct[i].dateAdd);
    }
    for (i = 0; i < timeTab.length; i++) {
        var iplus = i + 1;
        if (timeTab[i] < timeTab[iplus]) {
            const onePrice = document.getElementById("onePricePLN");
            const oneProductName = document.getElementById("oneProductName");
            onePrice.innerHTML = (CamProduct[iplus].USD);
            oneProductName.innerHTML = (CamProduct[iplus].FullName);
            const oneImage = document.createElement("img");
            oneImage.setAttribute("src", CamProduct[iplus].img);
            let positionOne = document.getElementById("oneEL");
            oneImage.classList.add("elementsIMG");
            positionOne.prepend(oneImage);
            break;
        }
    }
    if (document.getElementById('oneProductName').innerHTML === 'err failed to load') {
        document.getElementById('oneProductName').innerHTML = ('Sorry!');
        document.getElementById('onePricePLN').innerHTML = ('We havent product in this category');
    }
    for (i = 0; i < CamProduct.length; i++) {
        bestsellers.push(CamProduct[i].buyed);
    }
    for (i = 0; i < timeTab.length; i++) {
        var iplus = i + 1;
        if (bestsellers[i] > bestsellers[iplus]) {
            const twoPrice = document.getElementById("twoPricePLN");
            const twoProductName = document.getElementById("twoProductName");
            twoPrice.innerHTML = (CamProduct[i].USD);
            twoProductName.innerHTML = (CamProduct[i].FullName);
            const twoImage = document.createElement("img");
            twoImage.setAttribute("src", CamProduct[i].img);
            const positionTwo = document.getElementById("twoEL");
            twoImage.classList.add("elementsIMG");
            positionTwo.prepend(twoImage);
            break;
        }
    }
    if (document.getElementById('twoProductName').innerHTML === 'err failed to load') {
        document.getElementById('twoProductName').innerHTML = ('Sorry!');
        document.getElementById('twoPricePLN').innerHTML = ('We havent product in this category');
    }
    for (i = 0; i < CamProduct.length; i++) {
        preorders.push(CamProduct[i].type);
    }
    for (i = 0; i < timeTab.length; i++) {
        var iplus = i + 1;
        if (preorders[i] === 'preorder') {
            const threePrice = document.getElementById("threePricePLN");
            const threeProductName = document.getElementById("threeProductName");
            threePrice.innerHTML = (CamProduct[i].USD);
            threeProductName.innerHTML = (CamProduct[i].FullName);
            const threeImage = document.createElement("img");
            threeImage.setAttribute("src", CamProduct[i].img);
            const positionThree = document.getElementById("threeEL");
            threeImage.classList.add("elementsIMG");
            positionThree.prepend(threeImage);
            break;
        }
    }
    if (document.getElementById('threeProductName').innerHTML === 'err failed to load') {
        document.getElementById('threeProductName').innerHTML = ('Sorry!');
        document.getElementById('threePricePLN').innerHTML = ('We havent product in this category');
    }
    for (i = 0; i < CamProduct.length; i++) {
        onStock.push(CamProduct[i].onstock);
    }
    for (i = 0; i < CamProduct.length; i++) {
        var iplus = i + 1;
        if (onStock[i] < onStock[iplus]) {
            i++;
            const fourPrice = document.getElementById("fourPricePLN");
            const fourProductName = document.getElementById("fourProductName");
            fourPrice.innerHTML = (CamProduct[i].USD);
            fourProductName.innerHTML = (CamProduct[i].FullName);
            const fourImage = document.createElement("img");
            fourImage.setAttribute("src", CamProduct[i].img);
            const positionFour = document.getElementById("fourEL");
            fourImage.classList.add("elementsIMG");
            positionFour.prepend(fourImage);
            break;
        }
    }
    if (document.getElementById('fourProductName').innerHTML === 'err failed to load') {
        document.getElementById('fourProductName').innerHTML = ('Sorry!');
        document.getElementById('fourPricePLN').innerHTML = ('We havent product in this category');
    }
    for (i = 0; i < CamProduct.length; i++) {
        sale.push(CamProduct[i].type);
    }
    for (i = 0; i < CamProduct.length; i++) {
        if (sale[i] === 'sale') {
            var fivePriceFrom = document.getElementById("priceFrom");
            fivePriceFrom.innerHTML = (CamProduct[i].USD);
            var fiveProductName = document.getElementById("fiveProductName");
            fiveProductName.innerHTML = (CamProduct[i].FullName);
            const SaledPrice = document.getElementById("fivePricePLN");
            const sOne = CamProduct[i].sale / 100;
            const sTwo = CamProduct[i].PriceUSD * sOne;
            const sPrice = CamProduct[i].PriceUSD - sTwo + " USD";
            SaledPrice.innerHTML = (sPrice);
            const fiveImage = document.createElement("img");
            fiveImage.setAttribute("src", CamProduct[i].img);
            const positionFive = document.getElementById("fiveEL");
            fiveImage.classList.add("elementsIMG");
            positionFive.prepend(fiveImage);
            break;
        }
    }
    for (i = 0; i < CamProduct.length; i++) {
        used.push(CamProduct[i].type);
    }
    for (i = 0; i < CamProduct.length; i++) {
        if (used[i] === 'used') {
            var fivePriceFrom = document.getElementById("sixPricePLN");
            fivePriceFrom.innerHTML = (CamProduct[i].USD);
            var fiveProductName = document.getElementById("sixProductName");
            fiveProductName.innerHTML = (CamProduct[i].FullName);
            const sixImage = document.createElement("img");
            sixImage.setAttribute("src", CamProduct[i].img);
            const positionSix = document.getElementById("sixEL");
            sixImage.classList.add("elementsIMG");
            positionSix.prepend(sixImage);
            break;
        }
    }
});
try { }
catch (err) { }
console.log(err);
function registerUser() {
    const Acc = document.getElementById('rulesAcc');
    const password = document.getElementById('password--register').value;
    const passwordVerify = document.getElementById('passwordReapete--register').value;
    const mail = document.getElementById('email--register').value;
    const Name = document.getElementById('Name--register').value;
    const nick = document.getElementById('Nick--register').value;
    if (mail == "" && Name == "" && nick == "" && password == "" && passwordVerify == "") {
        alert('uzupełnij pola!');
    }
    else {
        if (mail == "") {
            alert('uzupełnij email');
        }
        else {
            if (mail.length <= 6) {
                alert('za krótki adres email');
            }
            else {
                if (Name == "") {
                    alert('uzupełnij imie i nazwisko');
                }
                else {
                    if (Name.length <= 5) {
                        alert('za krótkie imie i nazwisko');
                    }
                    else {
                        if (nick == "") {
                            alert('uzupełnij pole nick');
                        }
                        else {
                            if (nick == "") {
                                alert('uzupełnij pole nick');
                            }
                            else {
                                if (nick.length <= 2) {
                                    alert('za krótki nick');
                                }
                                else {
                                    if (password == "" || passwordVerify == "") {
                                        if (password == "") {
                                            alert('uzupełnij pole hasła');
                                        }
                                        else {
                                            if (passwordVerify == "") {
                                                alert('uzupełnij pole weryfikacji hasła');
                                            }
                                            else {
                                                if (password == "" && passwordVerify == "") {
                                                    alert('uzupełnij pole hasła i jego weryfikacji!');
                                                }
                                                else {
                                                    if (passwordVerify != password) {
                                                        alert('hasła się nie zgadzają');
                                                    }
                                                    else {
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (Acc.checked == true) {
                            onload(UA);
                        }
                        else {
                            alert('Rules Accept is required to create account');
                        }
                    }
                }
            }
        }
    }
}
