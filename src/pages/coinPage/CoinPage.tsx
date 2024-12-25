// import FileSystem from 'react-native-filesystem';
import { Box, Icon, IconButton, Paper, Toolbar, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CoinForm from "../../components/CoinForm/CoinForm.tsx";
import dayjs from "dayjs";
import { CoinData, rows } from "../coinsPage/CoinsPage.tsx";
import fileNameToStorage from '../../shared/fileNameToStorage.tsx';
import nextId from "react-id-generator";

const coinIId = nextId();
console.log(coinIId);
function CoinPage() {
    
    
    // eslint-disable-next-line no-lone-blocks
    // const coinId = Number(useParams().coinId); {/**Используем coinId из App */ }
    const coinId = useParams().coinId; {/**Используем coinId из App */ }
    const navigate = useNavigate();
    const toHome = () => { navigate('/coins') }

    const [showForm, setShowForm] = useState(false);
    const openForm = () => setShowForm(true);
    const onFormClose = () => setShowForm(false);
    const onFormSubmit = () => { };

    // eslint-disable-next-line no-lone-blocks
    {/**запись в файл */ }

    const fileName = fileNameToStorage;

    const [coinData, setCoinData] = useState({
        id: coinIId,
        year: 0,
        coinValue: '',
        currency: '',
        coinForm: '',
        coinEdge: '',
        metal: '',
        country: '',
        period: '',
        mint: '',
        mintMark: '',
        qaulity: '',
        specialMarks: '',
        note: '',
        // dateAdded: dayjs()
    });
    const [collection, setCollection] = useState<CoinData[]>([])
    const onChange = (event: { target: { name: string; value: string; } }, ): void => {
        setCoinData({ ...coinData, [event.target.name]: event.target.value, }, );
        // console.log('>>', id);
    };
    const writeToFile = () => {
        setCollection([...collection, { ...coinData }])
    }
    const downloadableData = encodeURIComponent(JSON.stringify(collection, null, 2))

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
            <CoinForm edit open={showForm} onClose={onFormClose} onSubmit={onFormSubmit} onChange={onChange} writeToFile={writeToFile} fileName={fileName} downloadableData={downloadableData} />
            <Box sx={{ px: 3, pb: 3 }}>
                <Box>
                    <Typography component='span' variant="body1" color="white" sx={{ backgroundColor: 'primary.main', p: 0.5 }}>
                        {dayjs().format('DD-MM-YYYY')}
                    </Typography>
                    <Typography component='p' variant="body1" sx={{ mt: 2 }}>
                        {rows.map(row => {
                            if (row.id === coinId) {
                                return (
                                    <p>
                                        Монета {row.coinValue} {row.currency} год чеканки {row.year}
                                    </p>
                                )
                            } else return 0
                        })}
                    </Typography>
                </Box>
            </Box>
            {/* <Write/> */}
        </Paper>
    );
}

export default CoinPage;