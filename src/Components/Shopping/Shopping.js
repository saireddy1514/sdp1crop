import React from 'react'
import '../../css/style.css';
import Padd from "../../images/padd.jpg"
import { Card, Paper, Typography } from '@mui/material';
import { minWidth, Stack } from '@mui/system';
import {Grid} from '@mui/material';
import {Button} from '@mui/material';

function Shopping() {
  return (
    <div className='aa'>
      <br/><br/>
      <Grid item container direction="row" xs={12} sm={6}>
      <Stack direction='row'>
      <Card sx={{maxHeight:1000,maxWidth:400,mr:10,ml:5,borderRadius:2}} elevation='20'>
      <left>
        <img src={Padd} alt="Pasd"/>
        <Typography variant='h6'>
          Rice
        </Typography>
        <Typography variant='h6'>
          <b>Quantity</b>:1 quintal
          <br/>
          <b>Price</b>:15 rupees per kg
          <br/>
        </Typography>
      </left>
      <Button type="submit" sx={{mr:50}} variant="contained" fullWidth>SELL NOW</Button>
    </Card>
    <Card sx={{maxHeight:1000,maxWidth:400,mr:10,ml:5,borderRadius:2}} elevation={20}>
      <left>
        <img src={Padd} alt="Pasd"/>
        <Typography variant='h6'>
          Rice
        </Typography>
        <Typography variant='h6'>
          <b>Quantity</b>:1 quintal
          <br/>
          <b>Price</b>:15 rupees per kg
          <br/>
        </Typography>
      </left>
      <Button type="submit" sx={{mr:50 }} variant="contained" fullWidth>SELL NOW</Button>
    </Card>
    <Card sx={{maxHeight:1000,maxWidth:400,mr:10,ml:5,borderRadius:2}} elevation={20}>
      <left>
        <img src={Padd} alt="Pasd"/>
        <Typography variant='h6'>
          Rice
        </Typography>
        <Typography variant='h6'>
          <b>Quantity</b>:1 quintal
          <br/>
          <b>Price</b>:15 rupees per kg
          <br/>
        </Typography>
      </left>
      <Button type="submit" sx={{mr:50 }} variant="contained" fullWidth>SELL NOW</Button>
    </Card>
    </Stack>
    <br/>
    <br/>
    <Stack direction="row">
    <Card sx={{maxHeight:1000,maxWidth:400,mr:10,ml:5,borderRadius:2}} elevation={20}>
      <left>
        <img src={Padd} alt="Pasd"/>
        <Typography variant='h6'>
          Rice
        </Typography>
        <Typography variant='h6'>
          <b>Quantity</b>:1 quintal
          <br/>
          <b>Price</b>:15 rupees per kg
          <br/>
        </Typography>
      </left>
      <Button type="submit" sx={{mr:50}} variant="contained" fullWidth>SELL NOW</Button>
    </Card>
    <Card sx={{maxHeight:1000,maxWidth:400,mr:10,ml:5,borderRadius:2}} elevation={20}>
      <left>
        <img src={Padd} alt="Pasd"/>
        <Typography variant='h6'>
          Rice
        </Typography>
        <Typography variant='h6'>
          <b>Quantity</b>:1 quintal
          <br/>
          <b>Price</b>:15 rupees per kg
          <br/>
        </Typography>
      </left>
      <Button type="submit" sx={{mr:50 }} variant="contained" fullWidth>SELL NOW</Button>
    </Card>
    <Card sx={{maxHeight:1000,maxWidth:400,mr:10,ml:5,borderRadius:2}} elevation={20}>
      <left>
        <img src={Padd} alt="Pasd"/>
        <Typography variant='h6'>
          Rice
        </Typography>
        <Typography variant='h6'>
          <b>Quantity</b>:1 quintal
          <br/>
          <b>Price</b>:15 rupees per kg
          <br/>
        </Typography>
      </left>
      <Button type="submit" sx={{mr:50 }} variant="contained" fullWidth>SELL NOW</Button>
    </Card>
    </Stack>
    </Grid>
    </div>
  )
}

export default Shopping