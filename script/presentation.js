document.addEventListener('DOMContentLoaded', ()=>{

    const sliderPres = document.querySelector('#sliderPresentation')
    var marginRight = parseInt(window.getComputedStyle(sliderPres.children[0]).marginRight)
    var itemWidth = parseInt(sliderPres.children[0].clientWidth) + (parseInt(marginRight)*2)
    var sliderWidth = (itemWidth * sliderPres.childElementCount)
    var scrollerStartPos = ((itemWidth) * 3 + marginRight)

    function handleResize() {
        if(window.innerWidth > 1024) {
            marginRight = parseInt(window.getComputedStyle(sliderPres.children[0]).marginRight)
        } else {
            marginRight = 0
        }
        var itemWidth = parseInt(sliderPres.children[0].clientWidth) + (parseInt(marginRight)*2)
        sliderWidth = (itemWidth * sliderPres.childElementCount)
        console.log()
    }



    // controls 

    const scrollerPrevBtn = document.querySelector('#slider-prev-btn')
    const scrollerNextBtn = document.querySelector('#slider-next-btn')
    let newScrollPos = 0

    scrollerPrevBtn.addEventListener('click', function() {

        if(sliderPres.scrollLeft < 600) {
            newScrollPos = 0
        } else {
            newScrollPos = sliderPres.scrollLeft - itemWidth
        }

        sliderPres.scrollTo({
            left: newScrollPos,
            behavior: 'smooth'
        })
    })

    scrollerNextBtn.addEventListener('click', function() {
        if(sliderPres.scrollLeft > (sliderWidth - sliderPres.clientWidth - 600)) {
            newScrollPos = (sliderWidth - sliderPres.clientWidth)
        } else {
            newScrollPos = sliderPres.scrollLeft + itemWidth
        }
        
        sliderPres.scrollTo({
            left: newScrollPos,
            behavior: 'smooth'
        })
    })

    // status bar beneath slider

    const statusBar = document.querySelector('#sliderStatusBar')
    const statusStick = statusBar.children

    if(statusBar) {
        for (let i = 0; i < statusStick.length; i++) {
            statusStick[i].addEventListener('click', ()=>{
                sliderPres.scrollTo({
                    left: (itemWidth * (3 + i) + marginRight),
                    behavior: 'smooth'
                })
            })
        }
    }


    if(sliderPres) {
        // scroll 3 img at page
        sliderPres.scrollLeft += scrollerStartPos 
        // listen for viewport to remove margin at 1024px
        window.addEventListener('resize', handleResize)

        //  scroll opposite side on reaching start/end
        //  update status bar beneath

        sliderPres.addEventListener('scroll', function(){
            // start
            if(sliderPres.scrollLeft < (itemWidth * 3)) {
                sliderPres.scrollLeft = scrollerStartPos + (itemWidth * 6)
                sliderPres.scrollTo({
                    left: scrollerStartPos + (itemWidth * 5),
                    behavior: 'smooth'
                })
            }
            // end
            if(sliderPres.scrollLeft > (sliderWidth - sliderPres.clientWidth) - 1) {
                sliderPres.scrollLeft = sliderPres.scrollLeft - (itemWidth * 6)
            }
            // update active stick

            let activeStick = Math.floor(sliderPres.scrollLeft / itemWidth)
            
            if(activeStick < 3) {
                activeStick = 3
            } 

            if (activeStick >= 9) {
                activeStick = 3
            }

            for (let i = 0; i < statusBar.children.length; i++) {
                statusBar.children[i].classList.remove('stick-active')
            }
            if(statusBar.children[activeStick - 3]) {
                statusBar.children[activeStick - 3].classList.add('stick-active')
            }
            
        })
 
    }

    const preList = document.querySelectorAll('.presentListItem')
    if(preList) {
        for (let i = 0; i < preList.length; i++) {
            preList[i].addEventListener('click', ()=>{
                    preList[0].innerText = preList[i].innerText
            })
          
        }
    }
    

})


