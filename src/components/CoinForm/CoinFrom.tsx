import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField } from "@mui/material"
import React from "react"

interface ICoinFormProps {
    open: boolean
    onClose: () => void
    onSubmit: () => void
    edit?: boolean
}

function CoinForm({ open, onClose, onSubmit, edit }: ICoinFormProps) {
    const formTypeText = edit ? 'Изменить' : 'Создать'
    const submitAndClose = () => {
        onSubmit()
        onClose()
    }
    return ( 
        <Dialog open={false}>
            <DialogTitle></DialogTitle>
            <DialogContent>
                <TextField />
                <TextField />
            </DialogContent>
            <DialogActions>
                <Button>Отмена</Button>
                <Button>{formTypeText}</Button>
            </DialogActions>
        </Dialog>
     );
}

export default CoinForm;