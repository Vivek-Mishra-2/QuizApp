import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleAmountChange, handleScoreChange } from '../redux/actions'

const FinalScreen = () => {
  const {score} = useSelector(state => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBackToSetting = () => {
    dispatch(handleScoreChange(0));
    dispatch(handleAmountChange(50));
    navigate("/")
  }
  return (
    <Box mt={30}>
      <Typography variant='h3' fontWeight="bold" mb='3' >Final Score {score} </Typography>
      <Button onClick={handleBackToSetting} variant='outlined'>Home</Button>
    </Box>
  )
}

export default FinalScreen
