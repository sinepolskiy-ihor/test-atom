const menuSearchInput = document.getElementById(`menuSearch`)
const menuElems = document.querySelectorAll(`.navbar-nav.justify-content-end.flex-grow-1.pe-3 li a`)

menuSearchInput.addEventListener(`keyup`, () =>
{
    menuElems.forEach(elem =>
    {
        elem.parentNode.classList.remove(`d-none`)
        if(elem.innerText && menuSearchInput.value && !elem.innerText.toLowerCase().includes(menuSearchInput.value.toLowerCase()))
        {
            elem.parentNode.classList.add(`d-none`)
        }
    })
})