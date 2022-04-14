import { Box, Button, Typography } from "@mui/material";
import { useEffect, useState } from "react";


function myFetchHook(https, props){
    const [fetchData, setFetchData] = useState([])
    const [error, setError] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        setIsLoading(true)
        fetch(https)
        .then((response) => {
            if(response.status !== 200){
                throw Error(response.statusText)
            }
            return response.json()})
        .then((data) => {
            setFetchData(data)
        })
        .catch((errors) => setError(errors.message))
        .finally(() => {
            setIsLoading(false)
        });
    }, [props]);

    return {fetchData, error, isLoading}
}

export default function AdvicesWithMyHook(){
    const [changeAdvice, setChangeAdvice] = useState(false)
    const {fetchData: advice, error: errorMessage, isLoading} = myFetchHook("https://www.boredapi.com/api/activity/", changeAdvice);
    
    return (
        <Box mt = {15}>
            <Typography 
            fontSize="30px" 
            > 
            The fifth task with fetch and custom hook
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