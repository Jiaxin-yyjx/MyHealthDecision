import React from "react";
import Typography from '@mui/material/Typography';
import Box, { BoxProps } from '@mui/material/Box';
import { Grid, IconButton } from "@mui/material";
import {Button, Collapse} from 'react-bootstrap'
import PrimaryMedicalProcedure from "./PrimaryMedicalProcedure.tsx";
import ArrowDropDownCircleIcon from '@mui/icons-material/ArrowDropDownCircle';
import AddIcon from '@mui/icons-material/Add';
import { useState } from "react";



function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? '#0ceb7f' : '#0ceb7f'),
        border: '1px solid',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}

export default function SubCostsOfCare(props) {
  return (
    <div style={{ width: '100%' }}>
      <Grid container xs={12}>
        <Grid item xs={8}>
          <Item sx={{ width: '90%' }}>{props.info.costs}</Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{ width: '90%' }}>{props.info.OONP}</Item>
        </Grid>
        <Grid item xs={2}>
          <Item sx={{ width: '90%' }}>{props.info.costs}</Item>
        </Grid>
      </Grid>
    </div>
  );
}


