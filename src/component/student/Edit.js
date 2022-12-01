import React from 'react'
import { Box, Grid, makeStyles, TextField, Typography, Button } from '@material-ui/core'
import Header from '../pages/Header'
import { useState,useEffect } from 'react'
import { useHistory,useParams } from 'react-router-dom'
import axios from 'axios'


const useStyle = makeStyles({
  stuEditColor: {
    background: '#00afb9',
    color: '#fff',
    textAlign: 'center',
    borderRadius:3,
  }
})
const Edit = () => {
  const classes = useStyle()
  const { id } = useParams()
  const history = useHistory()
  const [student,setStudent]=useState({stuname:'',email:''})
  useEffect(() => {
    async function getStudentData() {
      try {
        const student = await axios.get(`http://localhost:4001/students/${id}`)
        setStudent(student.data)
      } catch (error) {
        console.log(error);
      }
    }
    getStudentData()
  }, [id])

  const {stuname,email}=student
  function onTextChange(e) {
    setStudent({
      ...student,
      [e.target.name]:e.target.value
     })
   }

  async function onFormSubmit(e) {
  e.preventDefault()
    try {
      await axios.put(`http://localhost:4001/students/${id}`,student)
      history.push('/')
    } catch (error) {
      console.log(error);
    }
  }
  function handleClick() {
    history.push('/')
  }
  return (
    <>
      <Header />
      <Grid container justifyContent="center" spacing={4}>
    <Grid item md={6} xs={12}>
     <Box textAlign="center" p={2} className={classes.stuEditColor} mb={2}>
      <Typography variant="h4">Edit Student</Typography>
     </Box>
          <form>
            <Grid container spacing={2}>
              <Grid item sm={6} xs={12}>
                <TextField value={id} id='id' label='Id' name='id'variant='outlined' fullWidth autoFocus disabled required />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField value={stuname} onChange={e => onTextChange(e)}  name="stuname" label='Name'  variant='outlined' fullWidth autoComplete='stuname' required />
              </Grid>
              <Grid item xs={12}>
                <TextField value={email} onChange={e=>onTextChange(e)} name="email" label='Email Address' variant='outlined' fullWidth autoComplete='email' required />
              </Grid>
            </Grid>
            <Box m={2}>
                <Button color='primary' variant='contained' fullWidth onClick={e=>onFormSubmit(e)} >Updata</Button>
              </Box>
    </form>
     <Box m={3} textAlign="center">
      <Button variant="contained" color="primary" onClick={handleClick}>Back to Home</Button>
     </Box>
    </Grid>
   </Grid >
    </>
  )
}

export default Edit
