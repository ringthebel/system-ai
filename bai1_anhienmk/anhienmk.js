const inputElement = document.querySelector('idpassword')
const buttonElement = document.querySelector('btnPassword')
// lắng nghe sự kiện click
buttonElement.addEventListener('click',function(){
    const currentType = inputElement.getAttribute('type')
    inputElement.setAttribute(
        'type',currentType==='password' ? 'text' : 'password'
    )
})
