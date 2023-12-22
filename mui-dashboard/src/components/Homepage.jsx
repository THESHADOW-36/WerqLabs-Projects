import React from 'react'
import { Avatar, Box, Button, Grid, InputAdornment, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material'
import { DomainVerification, KeyboardArrowLeft, KeyboardArrowRight, LocalShipping, Output, People, Search } from '@mui/icons-material'


const Homepage = () => {
  const dbList1 = [
    {
      title: 'Total Entries',
      count: '361',
      logo: <Box sx={{ backgroundColor: '#fff1da', borderRadius: '50px', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><People sx={{ fontSize: '36px', color: '#fab044' }} /></Box>
    },
    {
      title: 'Vehicles',
      count: '5',
      logo: <Box sx={{ backgroundColor: '#e4e4fe', borderRadius: '50px', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><LocalShipping sx={{ fontSize: '36px', color: '#767af5' }} /></Box>
    },
    {
      title: 'Check In',
      count: '361',
      logo: <Box sx={{ backgroundColor: '#fdeae4', borderRadius: '50px', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><DomainVerification sx={{ fontSize: '36px', color: '#f09e7f' }} /></Box>
    },
    {
      title: 'Check Out',
      count: '361',
      logo: <Box sx={{ backgroundColor: '#f7e4fe', borderRadius: '50px', width: '60px', height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Output sx={{ fontSize: '36px', color: '#b039db' }} /></Box>
    }
  ]

  const dbVisitors = [
    {
      name: 'Jose King',
      compName: 'Initech',
      phone: '8975894323',
      date: '20th Nov 2023',
      chkIn: '12:11 PM',
      chkOut: '12:03 PM'
    },
    {
      name: 'Kevin Wilkinson',
      compName: 'Globex Corporation',
      phone: '7856934434',
      date: '20th Nov 2023',
      chkIn: '12:11 PM',
      chkOut: '11:55 PM'
    },
    {
      name: 'John Doe',
      compName: 'werqlabs',
      phone: '9867834423',
      date: '20th Nov 2023',
      chkIn: '12:11 PM',
      chkOut: '05:18 PM'
    },
  ]
  return (
    <Box sx={{ width: '97.4%', margin: 'auto' }}>
      <Grid container spacing={3} marginTop='-2px'>
        {dbList1.map((db1) => (
          <Grid item md={3}>
            <Paper sx={{ padding: '0px 16px', height: '92px', display: 'flex', alignItems: 'center', boxShadow: '0px 0px 4px -1.7px gray', borderRadius: '8px' }}>
              {db1.logo}
              <Box sx={{ marginLeft: '16px' }}>
                <Typography sx={{ fontSize: '16px', fontWeight: '600', letterSpacing: '-0.5px' }}>{db1.title}</Typography>
                <Typography sx={{ fontSize: '16px', fontWeight: '600', color: '#28a745', marginTop: '5px' }}>{db1.count}</Typography>
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ backgroundColor: 'white', boxShadow: '0px 0px 4px -1.7px gray', borderRadius: '8px', height: '342px', marginTop: '22px' }}>
        <Box sx={{ padding: '15px 15px' }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Typography sx={{ fontSize: '18px', fontWeight: '600', letterSpacing: '-0.4px' }}>Recent Visits</Typography>
            <Box>
              <TextField sx={{ width: '244px', '& .MuiInputBase-root': { height: '34px', fontSize: '14px' } }} InputProps={{ endAdornment: (<InputAdornment><Search sx={{ fontSize: '20px' }} /></InputAdornment>) }} size='small' placeholder='Search...' />
              <Button variant='contained' sx={{ height: '100%', fontSize: '12px', textTransform: 'capitalize', letterSpacing: '0.5px', paddingRight: '9px', paddingLeft: '9px', marginLeft: '16px' }}>Check In</Button>
            </Box>
          </Box>

          <Box sx={{ border: '1px solid rgb(224, 224, 224)', borderRadius: '4px', marginTop: '16px' }}>
            <TableContainer>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ padding: '14px 10px', width: '16%', fontWeight: '600', color: '#363636', letterSpacing: '-0.3px' }}>Name</TableCell>
                    <TableCell sx={{ padding: '14px 10px', width: '16%', fontWeight: '600', color: '#363636', letterSpacing: '-0.3px' }}>Company Name</TableCell>
                    <TableCell sx={{ padding: '14px 10px', width: '16%', fontWeight: '600', color: '#363636', letterSpacing: '-0.3px' }}>Phone</TableCell>
                    <TableCell sx={{ padding: '14px 10px', width: '16%', fontWeight: '600', color: '#363636', letterSpacing: '-0.3px' }}>Date</TableCell>
                    <TableCell sx={{ padding: '14px 10px', width: '16%', fontWeight: '600', color: '#363636', letterSpacing: '-0.3px' }}>Check In</TableCell>
                    <TableCell sx={{ padding: '14px 10px', width: '16%', fontWeight: '600', color: '#363636', letterSpacing: '-0.3px' }}>Check Out</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dbVisitors.map((dbv) => (
                    <TableRow>
                      <TableCell sx={{ padding: '5px 0px 4px 10px', textWrap: 'nowrap', color: '#545454' }}><Box sx={{ display: 'flex', alignItems: 'center' }}><Avatar sx={{ width: '38px', height: '38px', marginRight: '8px' }} />{dbv.name}</Box></TableCell>
                      <TableCell sx={{ padding: '5px 0px 4px 10px', textWrap: 'nowrap', color: '#545454' }}>{dbv.compName}</TableCell>
                      <TableCell sx={{ padding: '5px 0px 4px 10px', textWrap: 'nowrap', color: '#545454' }}>{dbv.phone}</TableCell>
                      <TableCell sx={{ padding: '5px 0px 4px 10px', textWrap: 'nowrap', color: '#545454' }}>{dbv.date}</TableCell>
                      <TableCell sx={{ padding: '5px 0px 4px 10px', textWrap: 'nowrap', color: '#545454' }}>{dbv.chkIn}</TableCell>
                      <TableCell sx={{ padding: '5px 0px 4px 10px', textWrap: 'nowrap', color: '#545454' }}>{dbv.chkOut}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            {/* <TablePagination></TablePagination> */}
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <Typography sx={{ color: '#212529', fontSize: '14px', padding: '22px 16px 20px 16px' }}>Showing <b>1</b> to <b>3</b> out of <b>3</b> People</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', marginRight: '30px' }}>
                <Box sx={{ backgroundColor: '#b6c3ef', borderRadius: '1px', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '5px' }}><KeyboardArrowLeft sx={{ color: 'white', fontSize: '18px' }} /></Box>
                <Box sx={{ backgroundColor: '#ebebeb', borderRadius: '1px', width: '22px', height: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '5px', fontSize: '14px' }}>1</Box>
                <Box sx={{ backgroundColor: '#b6c3ef', borderRadius: '1px', width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '5px' }}><KeyboardArrowRight sx={{ color: 'white', fontSize: '18px' }} /></Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box >
  )
}

export default Homepage