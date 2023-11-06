document.addEventListener('DOMContentLoaded', () => {



    const openModalButton = document.querySelector('#header-call')
    const openModalButton2 = document.querySelector('#header-comment')
    const openModalSuccessBtn = document.querySelector('.modal-open-success')

    const modals = document.querySelectorAll('.modal')

    openModalButton.addEventListener('click', () => {
        openModal(0)
    })
    openModalButton2.addEventListener('click', () => {
        openModal(0)
    })
    openModalSuccessBtn.addEventListener('click', () => {
        openModal(1)
    })



    // open modal

    function openModal(option) {
        modals[option].showModal()
    }

    // close all modals

    const closeModalBtns = document.querySelectorAll('.modal-close-btn')

    closeModalBtns.forEach(closeBtn => {
        closeBtn.addEventListener('click', () => {
            modals.forEach(modal => {
                modal.close()
            })
        })
    });

})