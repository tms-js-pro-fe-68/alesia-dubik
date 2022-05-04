import { Box, Button, Typography } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useQuery } from "react-query";
import { usePageContext } from '../../components/Page'


function myQueryHook(https, props){
    const { isInitialized } = usePageContext()
    const getData = async () => {
        const result = await axios.get(https)
        return result.data
    }

    return useQuery(["fetchData", props], getData, {
        enabled: isInitialized,
    }
    );

}

export default function AdvicesWithReactQuery(){
    const [changeAdvice, setChangeAdvice] = useState(false)
    const {data: advice, error: errorMessage, isLoading} = myQueryHook("https://www.boredapi.com/api/activity/", changeAdvice);
    return (
        <Box mt = {15}>
            <Typography 
            fontSize="30px" 
            > 
            The seventh task with axios and react query
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
                {isLoading && !advice?.activity ? <Typography>Loading...</Typography> : ""}
                {!!errorMessage && !advice?.activity ? <Typography>{errorMessage}</Typography> : ""}
                <Typography sx={{
                    color: "#002366",
                    fontWeight: 700,
                    fontSize: "25px",
                    marginBottom: "20px",
                    pb: 2
                }}>
                    {advice?.activity}
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