import { Box, Icon, IconButton, Paper, Toolbar, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CoinForm from "../../components/CoinForm/CoinForm.tsx";
import dayjs from "dayjs";

function CoinPage() {
    // eslint-disable-next-line no-lone-blocks
    const coinId = Number(useParams().coinId); {/**Используем coinId из App */ }
    const navigate = useNavigate();
    const toHome = () => { navigate('/coins') }

    const [showForm, setShowForm] = useState(false);
    const openForm = () => setShowForm(true);
    const onFormClose = () => setShowForm(false);
    const onFormSubmit = () => { };

    return (
        <Paper sx={{ width: '100%' }}>
            <Toolbar>
                <Typography component='div' variant="h6" sx={{ flex: 1 }}>
                    Монета #{coinId}
                </Typography>
                <Tooltip title='Изменить данные'>
                    <IconButton onClick={openForm}>
                        <Icon>edit</Icon>
                    </IconButton>
                </Tooltip>
                <Tooltip title='К списку монет'>
                    <IconButton onClick={toHome}>
                        <Icon>list</Icon>
                    </IconButton>
                </Tooltip>
            </Toolbar>
            <CoinForm edit open={showForm} onClose={onFormClose} onSubmit={onFormSubmit} />
            <Box sx={{px: 3, pb: 3}}>
                <Box>
                    <Typography component='span' variant="body1" color="white" sx={{ backgroundColor: 'primary.main', p: 0.5 }}>
                        {dayjs().format('DD-MM-YYYY')}
                    </Typography>
                    <Typography component='p' variant="body1" sx={{ mt: 2 }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores voluptatibus maxime velit fuga excepturi provident quod magnam quisquam nisi totam officiis beatae exercitationem nesciunt, mollitia et odit sint pariatur at?
                    </Typography>
                </Box>
            </Box>
        </Paper>
    );
}

export default CoinPage;