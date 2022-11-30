import React from 'react'
import { Box, Button, Grid, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@material-ui/core'
import { useState, useEffect } from 'react'
import axios from 'axios'
import {useParams,useHistory } from 'react-router-dom'
const useStyle = makeStyles({
  tableList: {
    background: '#335c67',
    color:'#fff'
  },
  tableHeadColor: {
    color: 'white',
    background:'#284b63',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign:'center'
  },
  tableCellColor: {
    background: '#333533',
    color: '#fff',
    fontSize: 16,
    fontWeight:'bold'
  },
})
const View = () => {
  const classes = useStyle()
  const [student, setStudent] = useState([])
  const { id } = useParams()
  const history=useHistory()
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

  function handleClick() {
    history.push('/')
  }
  return (
    <>
      <Box my={2} p={2} textAlign='center' className={classes.tableList}>
        <Typography variant='h4'>Student Detail</Typography>
      </Box>
      <Grid container justifyContent='center' spacing={2}>
        <Grid item md={12}>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                    <TableCell align='center' className={classes.tableHeadColor}>Id</TableCell>
              <TableCell align='center' className={classes.tableHeadColor}>Name</TableCell>
              <TableCell align='center' className={classes.tableHeadColor}>Email</TableCell>
                </TableRow>
              </TableHead>
              {/* table head ends  */}
              <TableBody>
                <TableRow>
                  <TableCell align='center' className={classes.tableCellColor}>{student.id} </TableCell>
                  <TableCell align='center' className={classes.tableCellColor}>{student.stuname} </TableCell>
                  <TableCell align='center' className={classes.tableCellColor}>{student.email} </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        <Box>
          <Button color='primary' variant='contained' onClick={handleClick}>Back To Home</Button>
        </Box>
      </Grid>
    </>
  )
}

export default View
