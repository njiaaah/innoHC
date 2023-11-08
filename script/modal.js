document.addEventListener('DOMContentLoaded', () => {



    const openModalButton = document.querySelector('#header-call')
    const openModalButton2 = document.querySelector('#header-comment')
    const openModalButton3 = document.querySelector('#callback-form-submit-button')



    const openModalSuccessBtn = document.querySelector('.modal-open-success')

    const modals = document.querySelectorAll('.modal')



    if (openModalButton) {
        openModalButton.addEventListener('click', () => {
            openModal(0)
        })
    }

    if (openModalButton2) {
        openModalButton2.addEventListener('click', () => {
            openModal(0)
        })
    }

    if (openModalButton3) {
        openModalButton3.addEventListener('click', () => {
            openModal(1)
        })
    }

    if (openModalSuccessBtn) {
        openModalSuccessBtn.addEventListener('click', () => {
            openModal(1)
        })
    }




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

    // 3 - mobile sort modal

    const mobileSortChb = document.querySelector('#filter-sort-checkbox')
    const mobileSortModal = document.querySelector('#modalMobileSort')
    const mobileSortModalClose = document.querySelector('#closeModal3Area')



    if (mobileSortChb) {

        mobileSortModalClose.addEventListener('click', () => {
            mobileSortModal.close()
            mobileSortChb.checked = false
        })

        mobileSortChb.addEventListener('change', () => {
            if (mobileSortChb.checked) {
                mobileSortModal.showModal()
            }

            if (!mobileSortChb.checked) {
                mobileSortModal.close()
            }


        })
    }

})