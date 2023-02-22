fetch('./data.json')
    .then((response) => response.json())
    .then((json) => {
        myData = {...json};
        for (let i = 0; i < myData.length; i++) {
            item = myData[i];
            item.
            
        }

        function writeOut(){
            cartTable = document.getElementById("my-data-prices")
            cartString=""
            myData.products.forEach(product => {
                cartString += '<tr><td>'+String(product.name)+':</td><td id="t1DBKiir">0 db</td></tr>'
            });
        }

        // console.log(myData.products[0].name)
        productView = document.getElementById("my-datas")
        productsString=""
        myData.products.forEach(product => {
            productsString += '<td class="t"><figure><img src="'+String(product.imgName)+'" alt=""><figcaption>'+String(product.name)+' - '+String(product.price)+' Ft <br><input type="button" value="+" onclick="plus("'+String(product.name)+'")"><input type="button" value="-" onclick="minus("'+String(product.name)+'")"> </figcaption></figure></td>'
        });
        productView.innerHTML = productsString 
        console.log(productView.innerHTML)
    });