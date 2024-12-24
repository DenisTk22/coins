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
    edit?: boolean
}

function CoinForm({ open, onClose, onSubmit, edit }: ICoinFormProps) {
    const formTypeText = edit ? 'Изменить' : 'Добавить'
    const formTitle = edit ? 'Изменить данные' : 'Добавить монету'
    const submitAndClose = () => {
        onSubmit()
        onClose()
    }

    const [date, setDate] = useState<Dayjs | null>(null)


    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>{formTitle}</DialogTitle>
            <DialogContent sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', alignItems: 'center' }}>
                <div>
                    <TextField label='Год' variant="outlined" fullWidth margin="normal" />
                    <TextField label='Номинал' variant="outlined" fullWidth margin="normal" />
                    <TextField label='Валюта' variant="outlined" fullWidth margin="normal" />
                    <TextField label='Форма' variant="outlined" fullWidth margin="normal" />
                    <TextField label='Гурт' variant="outlined" fullWidth margin="normal" />
                    <TextField label='Металл' variant="outlined" fullWidth margin="normal" />
                </div>
                <div>
                    <TextField label='Страна' variant="outlined" fullWidth margin="normal" />
                    <TextField label='Период' variant="outlined" fullWidth margin="normal" />
                    <TextField label='Монетный двор' variant="outlined" fullWidth margin="normal" />
                    <TextField label='Знак мд' variant="outlined" fullWidth margin="normal" />
                    <TextField label='Качество' variant="outlined" fullWidth margin="normal" />
                    <TextField label='Код' variant="outlined" fullWidth margin="normal" />
                </div>
                <div>
                    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="ru">
                        <DatePicker
                            label='Дата занесения'
                            value={date}
                            onChange={setDate}
                            renderLoading={() => <TextField fullWidth margin="normal" />}
                        // renderInput={params => <TextField {...params} fullWidth margin="normal" />}
                        />
                    </LocalizationProvider>
                    <TextField label='Особые отметки' variant="outlined" fullWidth margin="normal" multiline rows={6} />
                    <TextField label='Примечание' variant="outlined" fullWidth margin="normal" multiline rows={6} />
                </div>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Отмена</Button>
                <Button onClick={submitAndClose}>{formTypeText}</Button>
            </DialogActions>
        </Dialog>
    );
}

export default CoinForm;