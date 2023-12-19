import React from 'react'
import { Button, ButtonGroup, IconButton, Stack, ToggleButton, ToggleButtonGroup } from '@mui/material';
import { KeyboardDoubleArrowLeft, KeyboardDoubleArrowRight, Send, FormatBold, FormatItalic, FormatUnderlined } from '@mui/icons-material';
const MuiButton = () => {
    return (
        <>
            <Stack spacing={2} direction='row' style={{ justifyContent: 'center' }}>
                <Button variant='text'>Text</Button>
                <Button variant='contained'>Contained</Button>
                <Button variant='outlined'>Outlined</Button>
            </Stack>

            <Stack spacing={2} direction='row' style={{ justifyContent: 'center', marginTop: '20px' }}>
                <Button variant='contained' color='primary'>Primary</Button>
                <Button variant='contained' color='secondary'>Secondary</Button>
                <Button variant='contained' color='success'>Success</Button>
                <Button variant='contained' color='warning'>Warning</Button>
                <Button variant='contained' color='info'>Info</Button>
                <Button variant='contained' color='error'>Error</Button>
            </Stack>

            <Stack spacing={2} direction='row' display='block' justifyContent='center' marginTop='20px'>
                <Button variant='contained' size='small' >Small</Button>
                <Button variant='contained' size='medium' >Medium</Button>
                <Button variant='contained' size='large' >Large</Button>
            </Stack>

            <Stack spacing={2} direction='row' display='block' justifyContent='center' marginTop='20px'>
                <Button variant='contained' startIcon={<KeyboardDoubleArrowLeft />}>Start Icon</Button>
                <Button variant='contained' endIcon={<KeyboardDoubleArrowRight />}>End Icon</Button>

                <IconButton aria-label='send' color='primary'>
                    <Send />
                </IconButton>
            </Stack>

            <Stack spacing={2} direction='row' display='block' justifyContent='center' marginTop='20px'>
                <ButtonGroup variant='contained'>
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack spacing={2} direction='row' display='block' justifyContent='center' marginTop='20px'>
                <ButtonGroup variant='outlined'>
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>
            <Stack spacing={2} direction='row' display='block' justifyContent='center' marginTop='20px'>
                <ButtonGroup variant='text'>
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>

            <Stack spacing={2} direction='row' display='block' justifyContent='center' marginTop='20px'>
                <ButtonGroup variant='contained' orientation='vertical'>
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
                <ButtonGroup variant='outlined' orientation='vertical'>
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
                <ButtonGroup variant='text' orientation='vertical'>
                    <Button>Left</Button>
                    <Button>Center</Button>
                    <Button>Right</Button>
                </ButtonGroup>
            </Stack>

            {/* <Stack spacing={2} direction='row' display='block' justifyContent='center' marginTop='20px'>
                <ToggleButtonGroup aria-label='text formatting'>
                    <ToggleButton value='bold' aria-label='bold'><FormatBold /></ToggleButton>
                    <ToggleButton><FormatItalic /></ToggleButton>
                    <ToggleButton><FormatUnderlined /></ToggleButton>
                </ToggleButtonGroup>
            </Stack> */}
        </>
    )
}

export default MuiButton;
