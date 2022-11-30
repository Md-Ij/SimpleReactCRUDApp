import React from 'react'
import { Typography, Box, makeStyles, Grid, TextField, Button,} from "@material-ui/core";
// import { deepPurple,grey } from '@material-ui/core/colors';
import '../../App.css'
const useStyle = makeStyles({
  headingColor: {
    background:'#0b2545',
    color: 'white',
    textAlign: 'center',
    padding: '1rem 0',
  }
})
const Header = () => {
  const classes=useStyle()
  return (
    <>
        <Box textAlign='center' className={classes.headingColor} p={2} my={2} borderRadius={4}>
        <Typography variant='h2'>React CRUD With Api Call</Typography>
      </Box>
    </>
  )
}

export default Header
