import { Box, Button, Checkbox, List, styled, Typography } from "@mui/material";


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

export default function StyledTodos(){

  const styledItems = [
    'style prop', // div, checkbox, button
    'system props', // Box, Checkbox, Button
    'sx prop', // Box, Checkbox, Button
    'styled component', // div, checkbox, button
    'tailwind css' // div, checkbox, button
  ]

  return (
    <Box mt={15} width="100%">
      <Typography 
        fontSize="30px" 
        textAlign="center"
      > 
      The sixth task with different types of stylization 
      </Typography>

      <List style={{margin: "20px 70px",}}>

        <div style={{display: "flex",justifyContent: "space-between", alignItems: "center", padding: 20, fontSize: 21, fontWeight: 500, borderColor: "white", borderWidth: 3, color: "#1976d2", marginBottom: 20}}>
          <div style={{display: "flex", alignItems: "center"}}>
            <input style={{marginRight: 5, }} type="checkbox" id="stProp" name="stProp" /> 
            <div htmlFor="styleProp">{styledItems[0]}</div>
          </div>
          <button style={{borderColor: "#1976d2",fontSize: "0.875rem", borderWidth: 1, borderRadius: 4, padding: "5px 15px", }} type='submit'>EDIT</button>
        </div>

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
            <Box color = "#1976d2">{styledItems[1]}</Box>
          </Box>
          <Button variant="outlined">edit</Button>
        </Box>

        <Box sx={{border:"3px solid white", display:"flex", justifyContent: "space-between", alignItems: "center", p: 2, mb: 2, fontSize: "21px", fontWeight: "500"}}>
          <Box sx={{display: "flex", alignItems: "center"}}>
            <Checkbox sx={{color: "success", mr: "5px"}}/>
            <Box sx={{color: "#1976d2"}}>{styledItems[2]}</Box>
          </Box>
          <Button  variant = "outlined">edit</Button>
        </Box>

        <MyTodo>
          <MyFlex>
            <MyCheckbox/>
            <MyLabel>{styledItems[3]}</MyLabel>
          </MyFlex>
          <Button variant = "outlined">edit</Button>
        </MyTodo>

        <div className="flex justify-between items-center p-5 text-xl font-medium border-white border-2 decoration-blue-200 ">
          <div className="flex items-center">
            <input className="mr-1" type="checkbox" id="tailwind" name="tailwind" />
            <div htmlFor="tailwind">{styledItems[4]}</div>
          </div>
          <button className="border-white border-2 rounded-xl py-1 px-4 decoration-blue-200" type='submit'>EDIT</button>
        </div>

      </List>
    </Box>
  )
}