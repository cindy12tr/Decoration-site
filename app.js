const btn=document.querySelectorAll('.control')
const allSections=document.querySelector('.main-content')
const sections=document.querySelectorAll('.section')
const btns=document.querySelectorAll('.controlls')

function PageTransitions(){
    for (i=0; i< btn.length; i++){
        btn[i].addEventListener('click', function(){
            let currentBtn=document.querySelectorAll('.active-btn')
            currentBtn[0].className=currentBtn[0].className.replace('active-btn', '')
            this.className += 'active-btn'
        })
    }
    allSections.addEventListener('click', (e) =>{
        const id= e.target.dataset.id;
        if(id){
            btns.forEach((btn)=>{
                btn.classList.remove('active')
            })
            e.target.classList.add('active')

            sections.forEach((section)=>{
                section.classList.remove('active')
            })
            const element=document.getElementById(id)
            element.classList.add('active')
        }
    })
    //Toggle theme
    const themeBtn = document.querySelector('.theme-btn')
    themeBtn.addEventListener('click', () =>{
        let element=document.body
        element.classList.toggle('light-mode')
    })
}
PageTransitions();