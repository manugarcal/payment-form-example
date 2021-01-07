let form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let creditCard = /^[0-9]{13,16}$/;
    let card = document.querySelector("#card");
    if (!creditCard.test(card.value)) {
        form.card.classList.add("is-invalid");
        form.card.classList.add("alert-danger");
        form.card.classList.remove("is-valid");

    } else {
        form.card.classList.remove("is-invalid");
        form.card.classList.add("is-valid");
        form.card.classList.remove("alert-danger");

    }
    let cvcnNumber = /^[0-9]{4}$/;
    let cvc = document.querySelector("#cvc");
    if (!cvcnNumber.test(cvc.value)) {
        form.cvc.classList.add("is-invalid");
        form.cvc.classList.add("alert-danger");
        form.cvc.classList.remove("is-valid");
    } else {
        form.cvc.classList.remove("is-invalid");
        form.cvc.classList.add("is-valid");
        form.cvc.classList.remove("alert-danger");
    }
    let quantity = /^[0-9]{1,}$/;
    let amount = document.querySelector("#amount");
    if (!quantity.test(amount.value)) {
        form.amount.classList.add("is-invalid");
        form.amount.classList.add("alert-danger");
        form.amount.classList.remove("is-valid");
    } else {
        form.amount.classList.remove("is-invalid");
        form.amount.classList.add("is-valid");
        form.amount.classList.remove("alert-danger");
    }
    let name = /^[a-zA-Z]{5,}$/
    let fisrtname = document.querySelector("#firstname");
    if (!name.test(firstname.value)) {
        form.firstname.classList.add("is-invalid");
        form.firstname.classList.add("alert-danger");
        form.firstname.classList.remove("is-valid");
    } else {
        form.firstname.classList.remove("is-invalid");
        form.firstname.classList.add("is-valid");
        form.firstname.classList.remove("alert-danger");
    }

    let lastname = document.querySelector("#lastname");
    if (!name.test(lastname.value)) {
        form.lastname.classList.add("is-invalid");
        form.lastname.classList.remove("is-valid");
        form.lastname.classList.add("alert-danger");
    } else {
        form.lastname.classList.remove("is-invalid");
        form.lastname.classList.add("is-valid");
        form.lastname.classList.remove("bg-danger");
    }
    let cityName = /^[a-zA-Z]{5,}$/
    let inputCity = document.querySelector("#inputCity");
    if (!cityName.test(inputCity.value)) {
        form.inputCity.classList.add("is-invalid");
        form.inputCity.classList.remove("is-valid");
        form.inputCity.classList.add("alert-danger");
    } else {
        form.inputCity.classList.remove("is-invalid");
        form.inputCity.classList.add("is-valid");
        form.inputCity.classList.remove("alert-danger");
    }

    let inputState = document.querySelector("#inputState");
    if (inputState.value === "") {
        form.inputState.classList.add("is-invalid");
        form.inputState.classList.remove("is-valid");
        form.inputState.classList.add("alert-danger");
    } else {
        form.inputState.classList.remove("is-invalid");
        form.inputState.classList.add("is-valid");
        form.inputState.classList.remove("alert-danger");
    }
    let code = /^[0-9]{4}$/
    let postalCode = document.querySelector("#postalCode");
    if (!code.test(postalCode.value)) {
        form.postalCode.classList.add("is-invalid");
        form.postalCode.classList.add("alert-danger");
        form.postalCode.classList.remove("is-valid");
    } else {
        form.postalCode.classList.remove("is-invalid");
        form.postalCode.classList.add("is-valid");
        form.postalCode.classList.remove("alert-danger");
    }

    let messchart = /^[a-zA-Z0-9]+$/
    let message = document.querySelector("#message");
    if (!messchart.test(message.value)) {
        form.message.classList.add("is-invalid");
        form.message.classList.add("alert-danger");
        form.message.classList.remove("is-valid");
    } else {
        form.message.classList.remove("is-invalid");
        form.message.classList.add("is-valid");
        form.message.classList.remove("alert-danger");
    }

})
