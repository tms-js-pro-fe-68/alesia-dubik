import { Box, Button, Checkbox } from "@mui/material";

export default function SystemProps({title}){
    return(
        <Box
        border="3px solid white"
        display="flex"
        justifyContent="space-between"
        p={2}
        mb={2}
        fontSize = "21px"
        fontWeight = "500"
        >
          <Box display="flex" alignItems = "center">
            <Checkbox color = "success" mr={0.5}/>
            <Box color = "#1976d2">{title}</Box>
          </Box>
          <Button variant="outlined">edit</Button>
        </Box>
    )
}