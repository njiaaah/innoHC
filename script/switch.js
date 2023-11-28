document.addEventListener('DOMContentLoaded', ()=>{


    const switchChb = document.querySelector('#catalog-switch-chb')

    switchChb.addEventListener('click',()=>{
        if(switchChb.checked) {
            console.log('on')
        } else {
            console.log('off')
        }
    })
})