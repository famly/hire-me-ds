import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

type Props = {
    message: string | null;
    onClose: () => void;
};

export function ErrorToast({message, onClose}: Props) {
    return (
        <Snackbar
            open={Boolean(message)}
            autoHideDuration={6000}
            onClose={onClose}
            anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
        >
            <Alert severity="error" variant="filled" onClose={onClose} sx={{width: '100%'}}>
                {message}
            </Alert>
        </Snackbar>
    );
}
