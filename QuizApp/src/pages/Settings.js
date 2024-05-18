import { Button, Typography,CircularProgress  } from '@mui/material'
import { Box } from '@mui/system';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import SelectFeild from '../components/SelectFeild.js';
import TextFeild from '../components/TextFeild.js';
import useAxios from '../hooks/useAxios.js';
import { Form } from 'react-router-dom';

const Settings = () => {

    const {response, error, loading}  = useAxios({url: "api_category.php"});
   const navigate = useNavigate();
    if(loading){
        return (
            <Box mt={20}>
                <CircularProgress/>
            </Box>
        )
    }

    if(error){
        return (
            <Typography variant='h6' mt={20} color='red' >
                Something Went Wrong!
            </Typography>
        )
    }

    const difficultyOptions = [
        { id: "easy", name: "Easy" },
        { id: "medium", name: "Medium" },
        { id: "hard", name: "Hard" },
    ];

    const typeOptions = [
        {id: "multiple", name: "Multiple Choise"},
        {id: "boolean", name: "True/False"},
    ]


    console.log(response)
    const onChangeSubmit = (e) => {
        e.preventDefault()
        navigate("/questions")
    }
  return (
    <Typography fontWeight='bold' variant='h4'>
    <Form onSubmit={onChangeSubmit}>
        <SelectFeild options={response.trivia_categories} label="Catogory"/>
        <SelectFeild options={difficultyOptions} label="Deficulty"/>
        <SelectFeild options={typeOptions} label="Type"/>
        <TextFeild/>
        <Box mt={3} width="100%">
            <Button fullWidth variant="contained" type="submit" o>
                Get Started
            </Button>
        </Box>
    </Form>
    </Typography>
  )
}

export default Settings
