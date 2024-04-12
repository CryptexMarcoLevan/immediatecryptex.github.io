const scriptURL = 'https://script.google.com/macros/s/AKfycbyJ3cnF50I-UM9J4nSMH7kuIRGzkPwgarUrSGSY4BVihahZt-7C897zJtETsvRvBUIkiQ/exec'
 
const form = ['google-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, {method: 'POST', body: new Sheet2(Sheet2)})
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})