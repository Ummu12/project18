import React,{useState} from "react";
import {Card,CardContent,Button,Grid,TextField} from "@mui/material"

function App() {
  const [data,setData]=useState("")
  const[clr,setClr]=useState("")
  return (
    <Card>
      <CardContent>
      <Grid container spacing={2} align="center">
        
      <Grid item xs={2}></Grid>
           <Grid item xs={4}>
                <TextField onChange={(e)=>setData(e.target.value)} variant="outlined" fullWidth  label="Enter the color name:" 
              />
                  </Grid>

                  <Grid item xs={4}>
             <Button onClick={()=>setClr(data)} variant="contained" color="primary" fullWidth>
               Print
             </Button>
                  </Grid>

                  <Grid item xs={2}></Grid>
                  <Grid item xs={2}></Grid>
                     <Grid item xs={6} align="center">
                       <Card sx={{bgcolor:"lightskyblue",fontSize:40,textAlign:"center", color:data, height:"200px", width:"500px"}}>
                        <CardContent>
                         <span style={{fontSize:40,textAlign:"center", position:"absolute" ,top:"150px"}}>{clr.toUpperCase()}</span>
                        </CardContent>
                       </Card>

                     </Grid>

      </Grid>
      </CardContent>
    </Card>
  );
}

export default App;
