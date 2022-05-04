import { Box, Button, Checkbox, styled } from "@mui/material";

export default function StyledComponent({title}){

    const MyTodo = styled(Box)({
        border:"3px solid white",
        display:"flex", 
        justifyContent: "space-between", 
        alignItems: "center", 
        padding: 20, 
        marginBottom: 20, 
        fontSize: "21px", 
        fontWeight: "500"
    });
    
    const MyFlex = styled(Box)({display: "flex", alignItems: "center"});
    const MyCheckbox = styled(Checkbox)({color: "success", mr: "5px"});
    const MyLabel = styled(Box)({color: "#1976d2"});

    return(
        <MyTodo>
          <MyFlex>
            <MyCheckbox/>
            <MyLabel>{title}</MyLabel>
          </MyFlex>
          <Button variant = "outlined">edit</Button>
        </MyTodo>
    )
}