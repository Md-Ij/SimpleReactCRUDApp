import { Box, Grid, makeStyles, TextField, Typography,Button} from '@material-ui/core'
import React from 'react'
import Header from '../pages/Header'
import { useHistory } from 'react-router-dom'
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
  const history = useHistory()

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
                <TextField value='1' id='id' label='Id' name='id'variant='outlined' fullWidth disabled required />
              </Grid>
              <Grid item sm={6} xs={12}>
                <TextField value='Jakaria' id='stuname'label='Name' name='stuname' variant='outlined' fullWidth disabled required />
              </Grid>
              <Grid item xs={12}>
                <TextField value='jakaria@gmail.com' label='Email' id='email' name='email' variant='outlined' fullWidth disabled required />
              </Grid>
            </Grid>
            <Box m={2}>
                <Button color='primary' variant='contained' fullWidth>Updata</Button>
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
