import * as React from 'react';
import Button from '@mui/material/Button';
import {Close} from '@styled-icons/material';
import {Dispatch, SetStateAction} from "react";
import {
    Dialog, DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle, IconButton
} from "@mui/material";

interface IModal {
    content:string,
    isOpen:boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>,
}

export default function TestDialog({content,isOpen,setIsOpen}:IModal) {

    const dialogStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }
    const handleClose = () => {setIsOpen(false);}

    return (
        <div>
            <Dialog
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle style={dialogStyle} >
                    <h3>{`${content} 삭제 창`}</h3>
                    <IconButton onClick={handleClose}>
                        <Close style={{height:"25px"}} />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">{`선택한 ${content}를 정말 삭제하시겠습니까?(삭제 후 복구되지 않습니다.)`}</DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button variant={"contained"} onClick={handleClose} autoFocus>확인</Button>
                    <Button variant={"contained"} onClick={handleClose}>취소</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}