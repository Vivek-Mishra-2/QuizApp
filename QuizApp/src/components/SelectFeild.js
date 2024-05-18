import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { handleCategoryChange, handleDifficultyChange, handleTypeChange } from '../redux/actions';


const SelectFeild = ({label,options}) => {
   const [value, setValue] =  useState('');
   const dispatch = useDispatch()
   const onChangeHandler = (e) =>{
        setValue(e.target.value);
        switch(label){
            case "Category":
                dispatch(handleCategoryChange(e.target.value));
                break;
            case "Difficulty":
                    dispatch(handleDifficultyChange(e.target.value));
                    break;
            case "Type":
                dispatch(handleTypeChange(e.target.value));
                break;
            default: 
                return; 
        }
   }
  return (
    <Box mt={3} width="100%"> 
        <FormControl size='small' fullWidth >
            <InputLabel>{label}</InputLabel>
            <Select value={value} label={label} onChange={onChangeHandler}>
                {options.map(({id, name})=> (
                    <MenuItem value={id} key={id}>
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    </Box>
  )
};

export default SelectFeild
