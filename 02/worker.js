myData = {}
// item must not contain 
// piecesInCart, isDiscount prop

function change(name, plus) {
    myData.products.forEach(item => {
        if (item.name == name) {
            // console.log(name,plus);
            if (item.hasOwnProperty('piecesInCart')) {
                
                if(plus){
                    item.piecesInCart +=1
                    if (myData.cart>=item.price) {
                        myData.cart -= item.price
                    }
                }
                else if (item.piecesInCart >0) {
                    item.piecesInCart -=1
                    myData.cart += item.price
                }
            }
        }
    });
    logProducts()
    writeOut()
    // console.log(plus?"add":"remove" + " " + name)
}

function logProducts() {
    console.log(myData.products)
}

function discount() {
    myData.discount? myData.discount = false: myData.discount = true
    writeOut()
}

function reset(){
    myData.products.forEach(item => {
        while (item.piecesInCart>0) {
            change(item.name,false);
        }
    });
}

function writeOut() {
    
    cartTable = document.getElementById("my-data-prices")
    
    document.getElementById("balance").innerHTML = 
    String((myData.discount ? myData.cart : myData.cart*0.9))+" Ft"
    document.getElementById("cart").innerHTML = 
    String(myData.cart)+" Ft"
    // <tr>
    //     <td>cicu:</td>
    //     <td id="t1DBKiir">0 db</td>
    // </tr>
    // console.log(myData.products[0].p)
    cartString = ""
    myData.products.forEach(product => {
        cartString += '<tr><td>' + String(product.name) + ':</td><td>'+String(product.piecesInCart)+' db</td></tr>'
    });
    cartTable.innerHTML = cartString
}

fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
        myData = { ...json };
        discount()
        for (let i = 0; i < myData.products.length; i++) {
            myData.products[i].piecesInCart = 0;
        }

        //load images
        productView = document.getElementById("my-datas")
        productsString = ""
        myData.products.forEach(product => {
            productsString += '<td class="t"><figure><img src="' + String(product.imgName) + '" alt=""><figcaption>' + String(product.name) + ' - ' + String(product.price) + ' Ft <br><input type="button" value="+" onclick="change(`' + String(product.name) + '`,true)"><input type="button" value="-" onclick="change(`' + String(product.name) + '`,false)"> </figcaption></figure></td>'
        });
        // console.log(productsString)
        productView.innerHTML = productsString
        writeOut()
    });
