//PHONE CHECKER

const phoneInput = document.querySelector('#phone_input')
const phoneButton = document.querySelector('#phone_button')
const phoneResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

phoneButton.onclick = () =>{
     if (regExp.test(phoneInput.value)) {
         phoneResult.innerHTML = 'OK'
         phoneResult.style.color = 'green'
     }else {
         phoneResult.innerHTML = 'NOT OK'
         phoneResult.style.color = 'red'
     }
}


// TAB SLIDER
const tabContentBlocks = document.querySelectorAll('.tab_content_block')
const tabs = document.querySelectorAll('.tab_content_item')
const tabsParent = document.querySelector('.tab_content_items')
let num = 0

const hideTabContent = () => {
    tabContentBlocks.forEach( tabContentBlock => {
        tabContentBlock.style.display = 'none'
    })
    tabs.forEach( tab =>{
        tab.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (tabIndex=0) => {
    tabContentBlocks[tabIndex].style.display = 'block'
    tabs[tabIndex].classList.add('tab_content_item_active')
}
hideTabContent()
showTabContent()

tabsParent.onclick = (event) => {
    if (event.target.classList.contains('tab_content_item')){
        tabs.forEach((tab,tabIndex) => {
            if(event.target === tab) {
                hideTabContent()
                showTabContent(tabIndex)
                num = tabIndex
            }
        })
    }
}

//HW 1

const autoTabSlider = () => {
    setInterval( () => {
        num++
        if (num > tabContentBlocks.length - 1) {
            num = 0
        }
        hideTabContent()
        showTabContent(num)
    }, 3000)
}
autoTabSlider()
