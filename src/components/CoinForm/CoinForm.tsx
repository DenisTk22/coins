import React, { useState } from "react"
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material"
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Dayjs } from "dayjs"
import 'dayjs/locale/ru'

interface ICoinFormProps {
    open: boolean
    onClose: () => void
    onSubmit: () => void
    onChange: (event: { target: { name: string; value: string; }; }, ) => void
    writeToFile: () => void
    edit?: boolean
    fileName: string
    downloadableData: string
}

function CoinForm({ open, onClose, onSubmit, onChange, writeToFile, edit, fileName, downloadableData }: ICoinFormProps) {
    const formTypeText = edit ? 'Изменить' : 'Добавить'
    const formTitle = edit ? 'Изменить данные' : 'Добавить монету'
    const submitAndCloseAndWrite = () => {
        onSubmit()
        onClose()
        writeToFile()
    }

    const [date, setDate] = useState<Dayjs | null>(null)

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{formTitle}</DialogTitle>
            <DialogContent sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', alignItems: 'center' }}>
                <div>
                    <TextField name='year' label='Год' variant="outlined" fullWidth margin="normal" onChange={onChange} />
                    <TextField name='coinValue' label='Номинал' variant="outlined" fullWidth margin="normal" onChange={onChange} />
                    <TextField name='currency' label='Валюта' variant="outlined" fullWidth margin="normal" onChange={onChange} />
                    <TextField name='coinForm' label='Форма' variant="outlined" fullWidth margin="normal" onChange={onChange} />
                    <TextField name='coinEdge' label='Гурт' variant="outlined" fullWidth margin="normal" onChange={onChange} />
                    <TextField name='metal' label='Металл' variant="outlined" fullWidth margin="normal" onChange={onChange} />
                </div>
                <div>
                    <TextField name='country' label='Страна' variant="outlined" fullWidth margin="normal" onChange={onChange} />
                    <TextField name='period' label='Период' variant="outlined" fullWidth margin="normal" onChange={onChange} />
                    <TextField name='mint' label='Монетный двор' variant="outlined" fullWidth margin="normal" onChange={onChange} />
                    <TextField name='mintMark' label='Знак мд' variant="outlined" fullWidth margin="normal" onChange={onChange} />
                    <TextField name='qaulity' label='Качество' variant="outlined" fullWidth margin="normal" onChange={onChange} />
                    {/* <TextField name='id' label='Код' variant="outlined" fullWidth margin="normal" onChange={onChange} /> */}
                </div>
                <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
                        <DatePicker
                            name='dateAdded'
                            label='Дата занесения'
                            value={date}
                            onChange={setDate}
                            renderLoading={() => <TextField fullWidth margin="normal" />}
                        // renderInput={params => <TextField {...params} fullWidth margin="normal" />}
                        />
                    </LocalizationProvider>
                    <TextField name='specialMarks' label='Особые отметки' variant="outlined" fullWidth margin="normal" multiline rows={6} />
                    <TextField name='note' label='Примечание' variant="outlined" fullWidth margin="normal" multiline rows={6} />
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Отмена</Button>
                <Button href={`data:application/json,${downloadableData}`} download={fileName} onClick={submitAndCloseAndWrite}>{formTypeText}</Button>
            </DialogActions>
        </Dialog>
    );
}

export default CoinForm;