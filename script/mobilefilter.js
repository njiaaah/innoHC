document.addEventListener('DOMContentLoaded', () => {
    // mobilefilter.html открывается только из <560 вьюпорта
    // откидываем в каталог если вьюпорт становится >=560
    window.addEventListener('resize', () => {
        if (window.innerWidth > 559) {
            window.open('catalogue.html')
        }
    })

})