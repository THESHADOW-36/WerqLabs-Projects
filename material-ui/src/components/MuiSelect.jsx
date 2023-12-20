import React, { useState } from 'react'
import { Box, MenuItem, TextField } from '@mui/material'

const MuiSelect = () => {
    const [num, setNum] = useState('');
    const [multiNum, setMultiNum] = useState([]);

    function handleChange(event) {
        setNum(event.target.value)
    }

    function handleChange2(event) {
        setMultiNum(event.target.value)
    }
    return (
        <Box width='250px' margin='auto'>
            <Box marginTop='20px'>
                <TextField label='Select' value={num} onChange={handleChange} select fullWidth>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                </TextField>
            </Box>

            <Box marginTop='40px'>
                <TextField label='Multi Select' value={multiNum} onChange={handleChange2} SelectProps={{ multiple: true }} select fullWidth>
                    <MenuItem value={1}>1</MenuItem>
                    <MenuItem value={2}>2</MenuItem>
                    <MenuItem value={3}>3</MenuItem>
                    <MenuItem value={4}>4</MenuItem>
                    <MenuItem value={5}>5</MenuItem>
                </TextField>
            </Box>
        </Box >
    )
}

export default MuiSelect
