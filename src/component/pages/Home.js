import React from 'react'
import Header from './Header'
import { Typography, Box, Grid, makeStyles, TextField, Button } from "@material-ui/core";
import List from '../student/List';
import { useState} from 'react';
import axios from 'axios';

const useStyle = makeStyles({
  addStuColor: {
    background: '#4e598c',
    color: '#fff',
  },

})
const Home = () => {
  const classes = useStyle()
  const [student, setStudent] = useState({
    stuname: '',
    email:''
  })
  const [status,setStatus]=useState()
  function onTextChange(e) {
    setStudent({
      ...student,
      [e.target.name]:e.target.value
  })
  }

  async function onFormSubmit(e) {
    e.preventDefault()
    try {
      await axios.post('http://localhost:4001/students', student)
      setStatus(true)
    } catch (error) {
      console.log(error);
    }
  }
  if (status) {
    return <Home/>
  }
  return (
    <>
      <Header />
      {/* Start Grid  */}
      <Grid container spacing={4} justifyContent='center'>
        {/* First Grid Item Start  */}
        <Grid item md={6} xs={12}>
          <Box className={classes.addStuColor} textAlign='center' py={2} mb={2} borderRadius={2}><Typography variant='h4'>Add Student</Typography></Box>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField name='stuname' label='Name' id='stuname' required variant='outlined' fullWidth autoFocus autoComplete='stuname' onChange={e=>onTextChange(e)} />
              </Grid>
              <Grid item xs={12}>
                <TextField name='email' id='email' required label='Email' onChange={e=>onTextChange(e)}  variant='outlined' fullWidth autoComplete='email'  />
              </Grid>
            </Grid>

            <Box my={3}><Button  color='primary' variant='contained' onClick={e=>onFormSubmit(e)} type='submit' fullWidth>Add</Button></Box>
          </form>
        </Grid>
        {/* Second Grid item start  */}
        <Grid item md={6} xs={12}>
          <List/>
        </Grid>
      </Grid>
    </>
  )
}

export default Home
