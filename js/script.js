/*
* TAB MENU
 */
const header = document.querySelector("header.header")
        window.addEventListener("scroll", function () {
            const pxTop = window.scrollY;
            if (pxTop > 100) {
                header.style.boxShadow = '1px 0px 5px gray';
                header.style.transition = 'ease 0.3s';
                header.style.backgroundColor = 'rgba(230,230,230,0.95)';
            }
            else {
                header.style.boxShadow = 'none';
                header.style.backgroundColor = 'rgba(255,255,255,0)';
            }
        })