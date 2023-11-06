document.addEventListener('DOMContentLoaded', () => {

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
            // console.log('desktop')
            $('#filter-sort-dropdown-toggle').prop('checked', false)
            $('.filter-sort-dropdown').show(1)
            $('.filter-sort-dropdown').animate({ 'opacity': '1' }, 1)
            $('.filter-sort-dropdown').transition({ y: '0px' }, 1);
        } else {
            // console.log('mobile')

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
        console.log(modalDropdownOptions.length)

        for (let i = 0; i < modalDropdownOptions.length; i++) {
            modalDropdownOptions[i].addEventListener('click', () => {

                $('.filter-sort-dropdown').delay(150).animate({ 'opacity': '0' }, 150)
                // $('.filter-sort-dropdown').delay(0).transition({ y: '500px' }, 300)
                $('.filter-sort-dropdown').delay(150).hide(150)


                setTimeout(() => {
                    $('#filter-sort-dropdown-toggle').prop('checked', false)
                }, 300)
            })
        }
    }




})