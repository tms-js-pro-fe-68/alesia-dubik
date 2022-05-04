import { Box, Button, Checkbox } from "@mui/material";

export default function SxProps({title}){
    return(
        <Box sx={{border:"3px solid white", display:"flex", justifyContent: "space-between", alignItems: "center", p: 2, mb: 2, fontSize: "21px", fontWeight: "500"}}>
          <Box sx={{display: "flex", alignItems: "center"}}>
            <Checkbox sx={{color: "success", mr: "5px"}}/>
            <Box sx={{color: "#1976d2"}}>{title}</Box>
          </Box>
          <Button variant = "outlined">edit</Button>
        </Box>
    )
}