import * as React from 'react';
import Button from '@mui/material/Button';
import {
    Box,
    Dialog, DialogActions,
    DialogContent,
    DialogTitle, IconButton, TextField, Typography
} from "@mui/material";
import {CSSProperties, Dispatch, SetStateAction, useState} from "react";
import {Close} from "@styled-icons/material";

interface IModal {
    isOpen:boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>,
}

export default function FormDialog({isOpen,setIsOpen}:IModal) {
    const dialogStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }

    const contentStyle ={
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
    } as CSSProperties

    const boxStyle = {
        width: "300px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-end",
    }
    const handleClose = () => {setIsOpen(false);}

    const [name, setName] = useState('')
    const [id, setId] = useState('');
    const [pw, setPW] = useState('');

    const onChangeName = e =>{
        setName(e.target.value)
    }

    const onChangeId = (e) => {
        setId(e.target.value)
    }
    const onChangePw = (e) => {
        setPW(e.target.value)
    }

    const isEmpty = (str) =>{
        return str === ""
    }

    const validation =(str)=>{
        const check = /[~!@#$%^&*()_+|<>?:{}.,/;='"ㄱ-ㅎ | ㅏ-ㅣ |가-힣]/;
        return check.test(str);
    }

    const helperText = (inputText) =>{
        if(inputText === "") return "입력해주세요."
    }


    return (
        <div >
            <Dialog open={isOpen} onClose={handleClose}>
                <DialogTitle style={dialogStyle} >
                    <h3>관리자 추가 </h3>
                    <IconButton onClick={handleClose}>
                        <Close style={{height:"25px"}} />
                    </IconButton>
                </DialogTitle>
                <DialogContent style={contentStyle}>
                    <Box style={boxStyle}>
                        <Typography style={{width:"40%"}} variant="h5" component="div" gutterBottom>관리자명 *</Typography>
                        <TextField inputProps={{maxLength:5}} autoFocus margin="dense" id="name" label="관리자명" type="text" fullWidth onChange={onChangeName}  variant="standard"/>
                    </Box>
                    <Box style={boxStyle}>
                        <Typography style={{width:"40%"}} variant="h5" component="div" gutterBottom>아이디 *</Typography>
                        <TextField inputProps={{maxLength:8}} autoFocus margin="dense" id="id" label="아이디" type="text" fullWidth onChange={onChangeId} error={validation(id)} helperText={validation(id) ? "영어 또는 숫자만 입력가능합니다." : ""} variant="standard"/>
                    </Box>
                    <Box style={boxStyle}>
                        <Typography style={{width:"40%"}} variant="h5" component="div" gutterBottom>비밀번호 *</Typography>
                        <TextField inputProps={{maxLength:12}} autoFocus margin="dense" id="password" label="비밀번호" type="text" fullWidth onChange={onChangePw} error={validation(pw)} helperText={validation(pw) ? "영어 또는 숫자만 입력가능합니다." : ""} variant="standard"/>
                    </Box>
                    <Box style={boxStyle}>
                        <Typography style={{width:"40%"}} variant="h5" component="div" gutterBottom>전화번호 *</Typography>
                        <TextField autoFocus margin="dense" id="tel" label="전화번호" type="tel" fullWidth variant="standard"/>
                    </Box>
                    <Box style={boxStyle}>
                        <Typography style={{width:"40%"}} variant="h5" component="div" gutterBottom>부서</Typography>
                        <TextField autoFocus margin="dense" id="department" label="부서" type="text" fullWidth variant="standard"/>
                    </Box>
                    <Box style={boxStyle}>
                        <Typography style={{width:"40%"}} variant="h5" component="div" gutterBottom>비고</Typography>
                        <TextField autoFocus inputProps={{maxLength:15}} multiline margin="dense" id="note" label="비고" type="text" fullWidth variant="standard"/>
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Cancel</Button>
                    <Button onClick={handleClose}>Subscribe</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}