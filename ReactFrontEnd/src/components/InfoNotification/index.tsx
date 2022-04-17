import { IconButton, Snackbar } from "@mui/material";
import { Fragment } from "react";
import CloseIcon from '@mui/icons-material/Close';

interface InfoNotificationProps {
    open: boolean,
    setOpen: React.Dispatch<React.SetStateAction<boolean>>,
    message: string,
}


export const InfoNotification = ({ open, setOpen, message}: InfoNotificationProps) => {

    const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };

    const action = (
        <Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </Fragment>
    )

    return (
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            message={message}
            action={action}
        />
    );
}