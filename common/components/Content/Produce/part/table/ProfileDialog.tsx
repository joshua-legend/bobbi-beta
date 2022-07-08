import * as React from 'react';
import Button from '@mui/material/Button';
import {
    Avatar,
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

export default function ProfileDialog({isOpen,setIsOpen}:IModal) {
    const dialogStyle = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
    }

    const contentStyle ={
        display: "flex",
        justifyContent: "space-around",
        height: "300px",
    } as CSSProperties

    const sectionStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
    } as CSSProperties

    const boxStyle = {
        width: "300px",
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
    }
    const handleClose = () => {setIsOpen(false);}


    return (
        <div >
            <Dialog fullWidth  maxWidth="md" open={isOpen} onClose={handleClose}>
                <DialogTitle style={dialogStyle} >
                    <h2>프로필 팝업</h2>
                    <IconButton onClick={handleClose}>
                        <Close style={{height:"25px"}} />
                    </IconButton>
                </DialogTitle>
                <DialogContent style={contentStyle}>
                    <section style={sectionStyle}>
                        <Box style={boxStyle}>
                            <Avatar sx={{ width: 100, height: 100 }} alt="Remy Sharp" src="https://picsum.photos/200" />
                        </Box>
                        <Box style={boxStyle}>
                            <Typography style={{width:"40%"}} variant="h5" component="div" gutterBottom>SNS</Typography>
                            <TextField autoFocus margin="dense" id="SNS" variant="standard" value={"카카오"}/>
                        </Box>
                        <Box style={boxStyle}>
                            <Typography style={{width:"40%"}} variant="h5" component="div" gutterBottom>이름</Typography>
                            <TextField autoFocus margin="dense" id="name" variant="standard" value={"김바비"}/>
                        </Box>
                        <Box style={boxStyle}>
                            <Typography style={{width:"40%"}} variant="h5" component="div" gutterBottom>성별</Typography>
                            <TextField autoFocus margin="dense" id="sex" variant="standard" value={"여"}/>
                        </Box>
                    </section>
                    <section style={sectionStyle}>
                        <Box style={boxStyle}>
                            <Typography style={{width:"40%"}} variant="h5" component="div" gutterBottom>닉네임</Typography>
                            <TextField autoFocus margin="dense" id="SNS" variant="standard" value={"피망조아"}/>
                        </Box>
                        <Box style={boxStyle}>
                            <Typography style={{width:"40%"}} variant="h5" component="div" gutterBottom>이메일</Typography>
                            <TextField autoFocus margin="dense" id="SNS" variant="standard" value={"IlikePiment@kakao.com"}/>
                        </Box>
                        <Box style={boxStyle}>
                            <Typography style={{width:"40%"}} variant="h5" component="div" gutterBottom>가입일</Typography>
                            <TextField autoFocus margin="dense" id="SNS" variant="standard" value={"2022-08-07 14:09"}/>
                        </Box>
                        <Box style={boxStyle}>
                            <Typography style={{width:"40%"}} variant="h5" component="div" gutterBottom>전화번호</Typography>
                            <TextField autoFocus margin="dense" id="name" variant="standard" value={"010-0000-0000"}/>
                        </Box>
                        <Box style={boxStyle}>
                            <Typography style={{width:"40%"}} variant="h5" component="div" gutterBottom>출생연도</Typography>
                            <TextField autoFocus margin="dense" id="sex" variant="standard" value={"1993년"}/>
                        </Box>
                    </section>
                </DialogContent>
            </Dialog>
        </div>
    );
}