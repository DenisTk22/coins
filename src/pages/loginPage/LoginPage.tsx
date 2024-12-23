import React, { FormEvent } from 'react';
import classes from './loginPage.module.scss'
import { Box, Button, Card, TextField, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function LoginPage() {
    const navigate = useNavigate();
    const onSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        navigate('/coins');

    }
    return ( 
        <div className={classes.loginPage}>
            <Card variant='outlined' sx={{p: 2}}> {/**padding=16px */}
                <Typography variant='h4' component='h1'>
                    Вход в Coins
                </Typography>
                <Box component='form' onSubmit={onSubmit} sx={{maxWidth: 600}}>
                    <TextField label='email' variant='outlined' fullWidth margin='normal'/>
                    <TextField label='Пароль' variant='outlined' fullWidth margin='normal' />
                    <Button type='submit' sx={{ mt: 1, display: 'block', ml: 'auto' }} variant='outlined'>
                        Подтвердить
                    </Button>
                </Box>
            </Card>
        </div>
     );
}

export default LoginPage;