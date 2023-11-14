document.addEventListener('DOMContentLoaded', () => {


    // SCROLLERS

    // scroller - элемент который скролится с классами horizontal-scroller, snaps-inline
    // controls - массив с кнопками для управления данного скрола

    function updateScrollerControls(scroller, controls) {
        currentScroll = parseInt((scroller.scrollLeft / (scroller.scrollWidth - scroller.clientWidth) - 0.01) * controls.length)
        for (let i = 0; i < controls.length; i++) {
            controls[i].classList.remove('current-scroll')
        }
        controls[currentScroll].classList.add('current-scroll')
    }

    // btnIndex - порядковый номер кнопки по которой было кликнуто
    function clickScrollerControls(scroller, controls, btnIndex) {
        let offsetLeft = (btnIndex / (controls.length - 1)) * (scroller.scrollWidth - scroller.clientWidth)
        scroller.scrollTo({
            left: offsetLeft,
            behavior: 'smooth'
        })
    }

    // COMPANY SCROLLER-01

    var scrollerCompany01 = document.querySelector('#scrollerCompany01')

    if (document.querySelector('.section-parners-contols')) {
        var scrollerCompany01controls = document.querySelector('.section-parners-contols').children
        scrollerCompany01.addEventListener('scroll', () => {
            updateScrollerControls(scrollerCompany01, scrollerCompany01controls)
        })

        for (let i = 0; i < scrollerCompany01controls.length; i++) {
            scrollerCompany01controls[i].addEventListener('click', () => {
                clickScrollerControls(scrollerCompany01, scrollerCompany01controls, i)
            })
        }
    }

    // COMPANY SCROLLER-02

    var scrollerCompany02 = document.querySelector('#scrollerCompany02')

    if (document.querySelector('.section-achievements-contols')) {
        var scrollerCompany02controls = document.querySelector('.section-achievements-contols').children
        scrollerCompany02.addEventListener('scroll', () => {
            updateScrollerControls(scrollerCompany02, scrollerCompany02controls)
        })

        for (let i = 0; i < scrollerCompany02controls.length; i++) {
            scrollerCompany02controls[i].addEventListener('click', () => {
                clickScrollerControls(scrollerCompany02, scrollerCompany02controls, i)
            })
        }
    }

})

