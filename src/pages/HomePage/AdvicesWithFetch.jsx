import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";


export default function AdvicesWithFetch(){

    const [isLoading, setIsLoading] = useState(true)
    const [advice, setAdvice] = useState([])
    const [errorMessage, setErrorMessage] = useState("")
    const [changeAdvice, setChangeAdvice] = useState(false)
    
    useEffect(() => {
        setIsLoading(true)
        fetch("https://www.boredapi.com/api/activity/")
        .then((response) => {
            if(response.status !== 200){
                throw Error(response.statusText)
            }
            return response.json()})
        .then((data) => {
            setAdvice(data)
        })
        .catch((error) => setErrorMessage(error.message))
        .finally(() => setIsLoading(false));
    }, [changeAdvice]);

    return (
        <Box mt = {15}>
            <Typography 
            fontSize="30px" 
            > 
            The second task with fetch and useEffect
            </Typography>
            <Box sx={{
                margin: "50px auto",
                display: "flex",
                flexDirection: "column",
                width: "500px",
                padding: "50px",
                pb: 2,
                border: "5px solid #002366",
                borderRadius: "5px",
                fontSize: "18px",
                textAlign: "center",
                
            }}>
                {isLoading && !advice.activity ? <Typography>Loading...</Typography> : ""}
                {!!errorMessage && !advice.activity ? <Typography>{errorMessage}</Typography> : ""}
                <Typography sx={{
                    color: "#002366",
                    fontWeight: 700,
                    fontSize: "25px",
                    marginBottom: "20px",
                    pb: 2
                }}>
                    {advice.activity}
                </Typography>
                <Button 
                    variant="contained" 
                    onClick={() => changeAdvice ? setChangeAdvice(false) : setChangeAdvice(true) }
                    >change advice
                </Button>
            </Box>
        </Box>
    )
    
}