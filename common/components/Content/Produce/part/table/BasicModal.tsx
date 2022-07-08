import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Dispatch, SetStateAction, useState} from "react";
import {Card, CardActionArea, CardContent, CardMedia} from "@mui/material";

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

interface IModal {
    isOpen:boolean
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    title:string,
    imageUrl:string,
}

export default function BasicModal({isOpen,setIsOpen,title,imageUrl}:IModal) {
    const handleClose = () => setIsOpen(!isOpen);

    return (
        <div>
            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="140"
                                image={imageUrl}
                                alt="green iguana"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {title}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Box>
            </Modal>
        </div>
    );
}