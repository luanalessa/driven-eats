const order = {};

const options = document.querySelectorAll("li");
const submit = document.querySelector(".submit-order");

options.forEach((li) => {
    li.addEventListener("click", () => {

        userChoice = li.querySelector("label").innerText;

        if ( order[li.parentNode.id] == null ){
            order[li.parentNode.id] = userChoice;
            li.classList.add("selected");
            li.querySelector(".select-icon").style.display = "flex";
        }
        else if( userChoice == order[li.parentNode.id] ){
            delete order[li.parentNode.id];
            li.classList.remove("selected");
            li.querySelector(".select-icon").style.display = "none";
        } 

        if(Object.keys(order).length == 3){
            submit.classList.add("request");
            submit.innerText = "Fechar pedido";
        }
        else{
            submit.classList.remove("request");
            submit.innerText = "Selecione os 3 itens para fechar o pedido";
        }
    });
});

submit.addEventListener("click", () => {
})