document.addEventListener('DOMContentLoaded', () => {

    // переход с главной по клику на свич "на плане башни" с параметром #plan

    var getUrl = window.location.href
    var substring = 'plan'

    if (getUrl.includes(substring)) {
        document.querySelector('#cataloguePlanSwitch').checked = true
    }

    // apparts heading on mobile z-index fix

    const appartHeading = document.querySelector('.section-filter-heading-wrap')
    const toggleFilter = document.querySelector('#toggleFilter')


    if (toggleFilter) {
        window.addEventListener('change', () => {
            if (toggleFilter.checked) {
                appartHeading.style.zIndex = '6'
            } else {
                appartHeading.style.zIndex = '1'
            }
        })
    }

    // filter list on mobile

    $('.filterSortListHeadingMoblie').on('click', function () {
        $('#filter-sort-dropdown-toggle').prop('checked', false)
        $('.filter-sort-dropdown').animate({ 'opacity': '0' }, 1)
        $('.filter-sort-dropdown').transition({ y: '500px' });
        $('.filter-sort-dropdown').hide(1)
    })

    const dropdownChk = document.querySelector('#filter-sort-dropdown-toggle')
    // const togglePlan = document.querySelector('#cataloguePlanSwitch')

    window.addEventListener('resize', () => {
        if (window.innerWidth >= 561) {
            $('#filter-sort-dropdown-toggle').prop('checked', false)
            $('.filter-sort-dropdown').show(1)
            $('.filter-sort-dropdown').animate({ 'opacity': '1' }, 1)
            $('.filter-sort-dropdown').transition({ y: '0px' }, 1);
        } else {

            $('.filter-sort-dropdown').css({ 'opacity': '0' }, 1)
            $('.filter-sort-dropdown').transition({ y: '500px' }, 1);
            $('.filter-sort-dropdown').hide(1)
        }

        if (window.innerWidth <= 1150) {
            $('#cataloguePlanSwitch').prop('checked', false)
        }
    })


    if (dropdownChk) {
        dropdownChk.addEventListener('change', () => {
            if (dropdownChk.checked && window.innerWidth < 561) {

                $('.filter-sort-dropdown').show()
                $('.filter-sort-dropdown').animate({ 'opacity': '1' }, 50)
                $('.filter-sort-dropdown').transition({ y: '0px' }, 350);

            } else if (window.innerWidth < 561) {
                $('.filter-sort-dropdown').animate({ 'opacity': '0' }, 1)
                $('.filter-sort-dropdown').transition({ y: '500px' }, 1);
                $('.filter-sort-dropdown').hide(1)
            }
        })
    }

    // close dropdown/list

    if (document.querySelector('.mobile-dropdown-list-modal')) {
        var modalDropdownOptions = document.querySelector('.mobile-dropdown-list-modal').children

        for (let i = 0; i < modalDropdownOptions.length; i++) {
            modalDropdownOptions[i].addEventListener('click', () => {

                if (window.innerWidth < 561) {

                    $('.filter-sort-dropdown').delay(150).animate({ 'opacity': '0' }, 150)
                    $('.filter-sort-dropdown').delay(150).hide(150)
                    setTimeout(() => {
                        $('#filter-sort-dropdown-toggle').prop('checked', false)
                    }, 300)
                } else {
                    setTimeout(() => {
                        $('#filter-sort-dropdown-toggle').prop('checked', false)
                    }, 150)
                }


            })
        }
    }

    // sticky filter btn

    const stickyBack2FilterBtn = document.querySelector('#callBackSearchIconChbLabel')

    if (stickyBack2FilterBtn) {
        stickyBack2FilterBtn.addEventListener('click', () => {

            if (!toggleFilter.checked) {
                toggleFilter.checked = true
            }

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            })
        })

    }


})