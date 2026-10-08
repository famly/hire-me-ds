import Box from '@mui/material/Box';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import {useId} from 'react';

type Props = {
    label: string;
    description: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    last?: boolean;
};

export function SettingRow({label, description, checked, onChange, last = false}: Props) {
    const id = useId();

    return (
        <Box
            sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                py: '14px',
                borderBottom: last ? 'none' : '1px solid #efeff3',
            }}
        >
            <Box sx={{flex: 1}}>
                <Typography id={id} sx={{fontSize: 15, fontWeight: 600}}>
                    {label}
                </Typography>
                <Typography sx={{fontSize: 13, color: 'text.secondary'}}>{description}</Typography>
            </Box>
            <Switch
                checked={checked}
                onChange={event => onChange(event.target.checked)}
                inputProps={{'aria-labelledby': id}}
            />
        </Box>
    );
}
