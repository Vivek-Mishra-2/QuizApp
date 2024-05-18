import { FormControl, TextField } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useDispatch } from 'react-redux'
import { handleAmountChange } from '../redux/actions'

const TextFeild = () => {
  const dispatch = useDispatch();
    const onChangeHandler = (e) => {
      dispatch(handleAmountChange(e.target.value))
    }
  return (
    <Box mt={3} width="100%">
        <FormControl fullWidth size='small' > 
            <TextField
                onChange={onChangeHandler}
                variant="outlined"
                label="Ammunt of Questions"
                size="small"
                type="number"
            >

            </TextField>
        </FormControl>
    </Box>
  )
}

export default TextFeild
