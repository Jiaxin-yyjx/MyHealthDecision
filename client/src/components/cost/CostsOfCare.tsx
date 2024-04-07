import React from "react";
import Typography from '@mui/material/Typography';
import Box, { BoxProps } from '@mui/material/Box';
import { Grid, IconButton } from "@mui/material";
import {Button, Collapse} from 'react-bootstrap'
import PrimaryMedicalProcedure from "./PrimaryMedicalProcedure.tsx";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import AddIcon from '@mui/icons-material/Add';
import SubCostsOfCare from "./SubCostsOfCare.tsx";

import { useState } from "react";
function PrimaryProcedure({ data }) {
  return (
    <section className="primary-procedure">
      <h1>{data.title}</h1>
      <div className="procedure-details">
        <div className="in-network-price">
          <span>In-Network Price</span>
          <span>{data.inNetworkPrice}</span>
        </div>
        <div className="out-of-network-price">
          <span>Out-of-Network/Uninsured Price</span>
          <span>{data.outOfNetworkPrice}</span>
        </div>
      </div>
      {/* Repeat for each detail */}
    </section>
  );
}

function TitleBox (props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

export default function CostsOfCare(props) {
  const [open, setOpen] = useState(false);
  const handleClick = ()=>{
    setOpen(!open)
  }
  const [priceInfo, setPriceInfo] = useState([{
    'costs': 'Anesthesia', 'OONP': '$4,311', 'INP': '$1,930'
  }, {
    'costs': 'Pathology', 'OONP': '$1,390', 'INP': '$714'
  }, {
    'costs': 'Hospital(Outpatient)', 'OONP': '$19,692', 'INP': 'N/A'
  }])

  const detail_price = () =>{
    const details :any[]= [];
    priceInfo.forEach((info) => {
      details.push(<SubCostsOfCare info = {info}/>)
    })
    return details
  }

  return (
    <div style={{ width: '100%' }}>
      {/* The total price displace comparsion place */}
      <Box sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', borderRadius: 1 }}>
        <Grid container>
          <Grid item xs={8}>
            <Item sx={{ width: '90%' }}>Primary Medical Procedure</Item>
          </Grid>
          <Grid item xs={2}>
            <Item sx={{ width: '90%' }}>{props.OONP}</Item>
          </Grid>
          <Grid item xs={2}>
            <Item sx={{ width: '90%' }}>{props.INP}</Item>
          </Grid>
        </Grid>
        
        
      </Box>
      {/* The price comparsion place */}
      <Grid container spacing={3}>
        <Grid item xs={1} >
          <Box sx={{ display: 'flex', p: 1, bgcolor: 'background.paper', borderRadius: 1 }}>
          <IconButton className="btn" onClick={handleClick}>
            <ArrowDropDownCircleIcon/>
          </IconButton>
          </Box>
        </Grid>
        <Grid item xs = {3}>
          <TitleBox sx={{ width: '100%' }}>Related Costs (if Applicable)</TitleBox>
        </Grid>
        <Grid item xs = {2}>
        {/* <IconButton className="btn">
            <AddIcon/>
          </IconButton> */}
        </Grid>
        <Grid item xs = {4}>
          <TitleBox sx={{ width: '100%' }}>Out-of-Network/Uninsured Price</TitleBox>
        </Grid>
        <Grid item xs = {2}>
          <TitleBox sx={{ width: '100%' }}>In-Network Price</TitleBox>
        </Grid>
        {open && detail_price()}
      </Grid>
    </div>
  );
}


