import { Box, List, Typography } from "@mui/material";
import StyledComponent from "./styledTodoComponents/StyledComponent";
import StyleProps from "./styledTodoComponents/StyleProps";
import SxProps from "./styledTodoComponents/SxProps";
import SystemProps from "./styledTodoComponents/SystemProps";
import Tailwind from "./styledTodoComponents/Tailwind";


export default function StyledTodos(){

  const styledItems = [
    'style prop',
    'system props',
    'sx prop',
    'styled component',
    'tailwind css'
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
        <StyleProps title = {styledItems[0]}/>
        <SystemProps title = {styledItems[1]}/>
        <SxProps title = {styledItems[2]}/>
        <StyledComponent title = {styledItems[3]}/>
        <Tailwind title = {styledItems[4]}/>
      </List>
    </Box>
  )
}