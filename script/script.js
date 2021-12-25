const order = {};
let total = 0;

const options = document.querySelectorAll("li");
const submitOrder = document.querySelector(".submit-order");
const cancelOrder = document.querySelector(".cancel-order");
const sendOrder = document.querySelector(".confirm-order");

options.forEach((li) => {
    li.addEventListener("click", () => {
        const userChoice = li.querySelector(".food-label").innerText;
        const price = li.querySelector(".food-price").innerText.substring(3);
        const section = document.getElementById(`${li.parentNode.id}`);
        
        order[li.parentNode.id] = [userChoice, price];
        li.classList.add("selected");
        li.querySelector(".select-icon").style.displays = "flex";

        section.querySelectorAll("li").forEach((li) => {
            if(li.querySelector(".food-label").innerText != userChoice) {
                li.classList.remove("selected");
                li.querySelector(".select-icon").style.display = "none";
            }
        });

        if(Object.keys(order).length == 3){
            submitOrder.classList.add("request");
            submitOrder.innerText = "Fechar pedido";
            submitOrder.disabled = false;
        }
        else{
            submitOrder.classList.remove("request");
            submitOrder.innerText = "Selecione os 3 itens para fechar o pedido";
            submitOrder.disabled = true;
        }
    });
});

submitOrder.addEventListener("click", () => {
    const modal = document.getElementById("modal");
    total = 0;

    modal.style.display = "flex";

    Object.values(order).map( element => total += parseFloat(element[1]));

    const table = document.getElementById("checkout-order");
    table.innerHTML = `<tr id="product"><td>${order.meal[0]}</td><td>${order.meal[1]}</td></tr>` +
                      `<tr id="product"><td>${order.drink[0]}</td><td>${order.drink[1]}</td></tr>` +
                      `<tr id="product"><td>${order.dessert[0]}</td><td>${order.dessert[1]}</td></tr>` +
                      `<tr class="total"><td>TOTAL</td><td>R$ ${total.toFixed(2)}</td></tr>`;
})



cancelOrder.addEventListener("click", () => {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
})

sendOrder.addEventListener("click", () => {
    const message = `Olá, gostaria de fazer o pedido:` +
                    `- Prato:${order.meal[0]}` +
                    `- Bebida:${order.drink[0]}` +
                    `- Sobremesa: ${order.dessert[0]}` +
                    `Total: R$ ${total}`    

    window.location.href = "https://wa.me/" + "+558888888888" + "?text=" + encodeURIComponent(message)  
})

