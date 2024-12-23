import { Icon, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, Toolbar, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";

interface CoinData {
    id: number
    year: number
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
    noteL?: string
    dateAdded?: Date
}

const createCoin = (id: number, year: number, coinValue: string, currency: string, coinForm: string, coinEdge: string, metal: string, country: string, period: string, mint: string, mintMark: string, qaulity: string, specialMarks: string, noteL: string, dateAdded?: Date): CoinData => 
    ({
        id, year, coinValue, currency, coinForm, coinEdge, metal, country, period, mint, mintMark, qaulity, specialMarks, noteL, dateAdded
    });

const rows = [
    createCoin(101001, 1878, '5', 'копейка', 'круглая', 'рубчатый', 'медь', 'Императорская Россия', 'Александр III', '', '', 'VF', 'Без повреждений', '', new Date()),
    createCoin(101002, 1800, '1', 'копейка', 'круглая', 'рубчатый', 'медь', 'Императорская Россия', 'Павел I', '', '', 'VF', 'Без повреждений', '', new Date()),
    createCoin(101003, 1710, '1', 'полушка', 'круглая', 'гладкий', 'медь', 'Императорская Россия', 'Петр I', '', '', 'VF', 'Без повреждений', '', new Date()),
]

function CoinsPage() {
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const handleClick = (e: React.MouseEvent<unknown>, id: CoinData['id']) => {}
    const handleChangePage = (e:unknown, newPage:number) => {
        setPage(newPage);
    }

    const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(e.target.value, 10));
        setPage(0);
    }

    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

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
        <Paper sx={{width: '100%'}}>
            <Toolbar>
                <Typography component='div' variant="h6" sx={{flex: 1}}>
                    Монеты
                </Typography>
                <Tooltip title='Новая монета'>
                    <IconButton>
                        <Icon>add</Icon>
                    </IconButton>
                </Tooltip>
            </Toolbar>
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
                        { page > 1 && (emptyRows > 0) && (
                            <TableRow>
                                <TableCell colSpan={displayCells.length} sx={{height: emptyRows * 53}}></TableCell>
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
                labelDisplayedRows={({from, to, count}) => `${from}-${to} из ${count}`}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}

export default CoinsPage;