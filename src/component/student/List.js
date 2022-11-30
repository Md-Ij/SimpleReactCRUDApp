import { Box, IconButton, makeStyles,Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from '@material-ui/core'
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useState,useEffect } from 'react';
import axios from 'axios';
const useStyle = makeStyles({
  stuListColor: {
    background: '#2ec4b6',
    color: '#fff',
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
    fontWeight: 'bold',
  }
})

const List = () => {
  const classes = useStyle()
  const [student, setStudent] = useState([])
  useEffect(() => {
    async function getStudentData() {
    try {
      const student = await axios.get('http://localhost:4001/students')
      setStudent(student.data)
    } catch (error) {
      console.log(error);
    }
  }
    getStudentData()
  },[])

  return (
    <>
      <Box textAlign='center' p={2} mb={1} borderRadius={3} className={classes.stuListColor}>
        <Typography variant='h4'>Student List</Typography>
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align='center' className={classes.tableHeadColor}>Id</TableCell>
              <TableCell align='center' className={classes.tableHeadColor}>Name</TableCell>
              <TableCell align='center' className={classes.tableHeadColor}>Email</TableCell>
              <TableCell align='center' className={classes.tableHeadColor}>Action</TableCell>
            </TableRow>
          </TableHead>
          {/* TableHead Ends  */}
          <TableBody>
            {
              student.map((student, i) => {
                return(<TableRow key={i}>
                  <TableCell align='center' className={classes.tableCellColor}>{i+1}</TableCell>
                    <TableCell align='center' className={classes.tableCellColor}>{student.stuname} </TableCell>
                    <TableCell align='center' className={classes.tableCellColor}>{student.email} </TableCell>
              <TableCell align='center' className={classes.tableCellColor}>
                <Tooltip title='View'>
                  <IconButton><Link to={`/view/${student.id}`} ><VisibilityIcon color='info'/></Link></IconButton>
                </Tooltip>

                <Tooltip title='Edit'>
                  <IconButton><Link to='/edit'><EditIcon color='warning'/></Link></IconButton>
                </Tooltip>

                <Tooltip title='Delete'>
                  <IconButton><Link to='/delete'><DeleteIcon color='error'/></Link></IconButton>
                </Tooltip>

              </TableCell>
                  </TableRow>)
              })
                  }
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default List
