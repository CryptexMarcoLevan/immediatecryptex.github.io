const scriptURL = 'https://script.google.com/macros/s/AKfycbwhN_EAMAboLFjO2dsx-ggvWzR7dlMm0t5rL8SR9NsEelFAmQs53WRj1MjM2JDB6XVMGw/exec'
 
const form = ['google-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new Sheet2(Sheet2)})
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})
