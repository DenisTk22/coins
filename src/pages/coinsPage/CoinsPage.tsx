import { Icon, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Toolbar, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import CoinForm from "../../components/CoinForm/CoinForm.tsx";
import { useNavigate } from "react-router-dom";
import fileNameToStorage from "../../shared/fileNameToStorage.tsx";
import nextId from "react-id-generator";

import data from '../../coinData.json';
const coinIId = nextId();
export interface CoinData {
    id: string | number
    year: number | string
    coinValue: string
    currency: string
    coinForm: string
    coinEdge: string
    metal: string
    country: string
    period: string
    mint?: string
    mintMark?: string
    qaulity: string
    specialMarks?: string
    note?: string
    // dateAdded?: Date
}

// const createCoin = (id: number, year: number, coinValue: string, currency: string, coinForm: string, coinEdge: string, metal: string, country: string, period: string, mint: string, mintMark: string, qaulity: string, specialMarks: string, note: string, dateAdded?: Date): CoinData =>
// ({
//     id, year, coinValue, currency, coinForm, coinEdge, metal, country, period, mint, mintMark, qaulity, specialMarks, note
// });

export const fileName = fileNameToStorage;
// console.log(data);



// const jason = JSON.parse(data)

// export const rows = [
//     createCoin(101001, 1878, '5', 'копейка', 'круглая', 'рубчатый', 'медь', 'Императорская Россия', 'Александр III', '', '', 'VF', 'Без повреждений', '', new Date()),
//     createCoin(101002, 1800, '1', 'копейка', 'круглая', 'рубчатый', 'медь', 'Императорская Россия', 'Павел I', '', '', 'VF', 'Без повреждений', '', new Date()),
//     createCoin(101003, 1710, '1', 'полушка', 'круглая', 'гладкий', 'медь', 'Императорская Россия', 'Петр I', '', '', 'VF', 'Без повреждений', '', new Date()),
//     createCoin(101004, 1878, '5', 'копейка', 'круглая', 'рубчатый', 'медь', 'Императорская Россия', 'Александр III', '', '', 'VF', 'Без повреждений', '', new Date()),
//     createCoin(101005, 1800, '1', 'копейка', 'круглая', 'рубчатый', 'медь', 'Императорская Россия', 'Павел I', '', '', 'VF', 'Без повреждений', '', new Date()),
//     createCoin(101006, 1710, '1', 'полушка', 'круглая', 'гладкий', 'медь', 'Императорская Россия', 'Петр I', '', '', 'VF', 'Без повреждений', '', new Date()),
//     createCoin(101007, 1878, '5', 'копейка', 'круглая', 'рубчатый', 'медь', 'Императорская Россия', 'Александр III', '', '', 'VF', 'Без повреждений', '', new Date()),
//     createCoin(101008, 1800, '1', 'копейка', 'круглая', 'рубчатый', 'медь', 'Императорская Россия', 'Павел I', '', '', 'VF', 'Без повреждений', '', new Date()),
//     createCoin(101009, 1710, '1', 'полушка', 'круглая', 'гладкий', 'медь', 'Императорская Россия', 'Петр I', '', '', 'VF', 'Без повреждений', '', new Date()),
//     createCoin(101010, 1878, '5', 'копейка', 'круглая', 'рубчатый', 'медь', 'Императорская Россия', 'Александр III', '', '', 'VF', 'Без повреждений', '', new Date()),
//     createCoin(101011, 1800, '1', 'копейка', 'круглая', 'рубчатый', 'медь', 'Императорская Россия', 'Павел I', '', '', 'VF', 'Без повреждений', '', new Date()),
//     createCoin(101012, 1710, '1', 'полушка', 'круглая', 'гладкий', 'медь', 'Императорская Россия', 'Петр I', '', '', 'VF', 'Без повреждений', '', new Date()),
//     createCoin(101013, 1878, '5', 'копейка', 'круглая', 'рубчатый', 'медь', 'Императорская Россия', 'Александр III', '', '', 'VF', 'Без повреждений', '', new Date()),
//     createCoin(101014, 1800, '1', 'копейка', 'круглая', 'рубчатый', 'медь', 'Императорская Россия', 'Павел I', '', '', 'VF', 'Без повреждений', '', new Date()),
//     createCoin(101015, 1710, '1', 'полушка', 'круглая', 'гладкий', 'медь', 'Императорская Россия', 'Петр I', '', '', 'VF', 'Без повреждений', '', new Date()),
//     createCoin(101016, 1878, '5', 'копейка', 'круглая', 'рубчатый', 'медь', 'Императорская Россия', 'Александр III', '', '', 'VF', 'Без повреждений', '', new Date()),
//     createCoin(101017, 1800, '1', 'копейка', 'круглая', 'рубчатый', 'медь', 'Императорская Россия', 'Павел I', '', '', 'VF', 'Без повреждений', '', new Date()),
//     createCoin(101018, 1710, '1', 'полушка', 'круглая', 'гладкий', 'медь', 'Императорская Россия', 'Петр I', '', '', 'VF', 'Без повреждений', '', new Date()),

// ]

export const rows: CoinData[] = data

function CoinsPage() {
    const navigate = useNavigate();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleClick = (e: React.MouseEvent<unknown>, id: CoinData['id']) => {
        navigate(`/coins/${id}`)
    }
    const handleChangePage = (e: unknown, newPage: number) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0);
    }

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

    const [showForm, setShowForm] = useState(false);
    const openForm = () => setShowForm(true);
    const onFormClose = () => setShowForm(false);
    const onFormSubmit = () => { };

    // eslint-disable-next-line no-lone-blocks
    {/**запись в файл */ }

    const fileName = 'coinData.json';

    const [coindata, setFormData] = useState({
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
    const onChange = (event: { target: { name: string; value: string; }; }): void => {
        setFormData({ ...coindata, [event.target.name]: event.target.value });
    };
    const writeToFile = () => {
        setCollection([...collection, { ...coindata }])
    }
    const downloadableData = encodeURIComponent(JSON.stringify(collection, null, 2))

    const displayCells = rows.slice(page * rowsPerPage, (page + 1) * rowsPerPage).map(row => (
        <TableRow key={row.id} hover sx={{ cursor: 'pointer' }} onClick={e => { handleClick(e, row.id) }}>
            <TableCell>{row.coinValue}</TableCell>
            <TableCell>{row.currency}</TableCell>
            <TableCell>{row.year}</TableCell>
            <TableCell>{row.coinForm}</TableCell>
            <TableCell>{row.coinEdge}</TableCell>
            <TableCell>{row.metal}</TableCell>
            <TableCell>{row.country}</TableCell>
            <TableCell>{row.period}</TableCell>
            <TableCell>{row.qaulity}</TableCell>
        </TableRow>
    ))

    return (
        <Paper sx={{ width: '100%' }}>
            <Toolbar>
                <Typography component='div' variant="h6" sx={{ flex: 1 }}>
                    Монеты
                </Typography>
                <Tooltip title='Новая монета'>
                    <IconButton onClick={openForm}>
                        <Icon>add</Icon>
                    </IconButton>
                </Tooltip>
            </Toolbar>
            <CoinForm open={showForm} onClose={onFormClose} onSubmit={onFormSubmit} onChange={onChange} writeToFile={writeToFile} fileName={fileName} downloadableData={downloadableData} />
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Номинал</TableCell>
                            <TableCell>Валюта</TableCell>
                            <TableCell>Год</TableCell>
                            <TableCell>Форма</TableCell>
                            <TableCell>Гурт</TableCell>
                            <TableCell>Металл</TableCell>
                            <TableCell>Страна</TableCell>
                            <TableCell>Период</TableCell>
                            <TableCell>Качество</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {displayCells}
                        {page > 1 && (emptyRows > 0) && (
                            <TableRow>
                                <TableCell colSpan={displayCells.length} sx={{ height: emptyRows * 53 }}></TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                component='div'
                rowsPerPageOptions={[5, 10, 25]}
                page={page}
                count={rows.length}
                rowsPerPage={rowsPerPage}
                labelRowsPerPage='Элементов на странице'
                labelDisplayedRows={({ from, to, count }) => `${from}-${to} из ${count}`}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default CoinsPage;