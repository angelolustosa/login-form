

const showPass = () => {
    const inputPass = document.getElementById('pass')
    const iconPass = document.getElementById('icon-pass')

    /* 
    inputPass.type = inputPass.type === 'password' ? 'text' : 'password';
    iconPass.name = inputPass.type === 'password' ? 'eye' : 'eye-off';
    */
    

    if(inputPass.type === 'password') {
        inputPass.type = 'text'
        iconPass.name = 'eye-off'
    } else {
        inputPass.type = 'password'
        iconPass.name = 'eye'
    }
}