const navRequest = new Request(`nav/nav.html`)
const bodyElem = document.querySelector(`body`)

fetch(navRequest)
.then(function (response)
{
    return response.text()
})
.then(function (res)
{
    bodyElem.innerHTML = res + bodyElem.innerHTML
    
    const menuSearchInput = document.getElementById(`menuSearch`)
    const menuElems = document.querySelectorAll(`.navbar-nav.justify-content-end.flex-grow-1.pe-3 li a`)

    menuSearchInput.addEventListener(`input`, () =>
    {
        menuElems.forEach(elem =>
        {
            elem.parentNode.classList.remove(`d-none`)
            if(elem.innerText)
            {
                const found = elem.innerText.toLowerCase().includes(menuSearchInput.value.toLowerCase())
                const closestDropDown = elem.closest(`.nav-item.dropdown`)
                if(menuSearchInput.value && !found && !elem.parentNode.classList.contains(`d-dropdown-found`))
                {
                    elem.parentNode.classList.add(`d-none`)
                }
                if(menuSearchInput.value && found && elem.parentNode.classList.contains(`nav-item`) && elem.parentNode.classList.contains(`dropdown`))
                {
                    elem.parentNode.querySelectorAll(`ul > li`).forEach(elemChild =>
                    {
                        elemChild.classList.remove(`d-none`)
                        elemChild.classList.add(`d-dropdown-found`)
                    })   
                }
                if((!menuSearchInput.value || !found) && elem.parentNode.classList.contains(`nav-item`) && elem.parentNode.classList.contains(`dropdown`))
                {
                    elem.parentNode.querySelectorAll(`ul > li`).forEach(elemChild =>
                    {
                        elemChild.classList.remove(`d-dropdown-found`)
                    })   
                }
                if(menuSearchInput.value && found && closestDropDown)
                {
                    closestDropDown.classList.remove(`d-none`)
                    const children = closestDropDown.children
                    for(let i = 0; i < children.length; i++)
                    {
                        const elem = children[i]
                        elem.classList.add(`show`)
                    }
                }
            }
        })
    })
})

