import React from "react";
import { Icon, IconButton, AppBar as MuiAppBar, Toolbar, Typography } from "@mui/material"; 
import { useNavigate } from "react-router-dom";

function AppBar() {
    const navigate = useNavigate();
    return ( 
        <MuiAppBar component='nav'>
            <Toolbar>
                <Typography variant="h5" component='p' sx={{flexGrow:1}}>
                    Список монет
                </Typography>
                <IconButton size="large" color="inherit" onClick={() => {navigate('/login')}}>
                    <Icon>logout</Icon>
                </IconButton>
            </Toolbar>
        </MuiAppBar>
     );
}

export default AppBar;