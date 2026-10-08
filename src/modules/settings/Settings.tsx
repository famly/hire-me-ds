import Alert from '@mui/material/Alert';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Select from '@mui/material/Select';
import Snackbar from '@mui/material/Snackbar';
import Typography from '@mui/material/Typography';
import {useState} from 'react';

import {defaultSettings, type NurserySettings} from './defaults';
import {SettingRow} from './SettingRow';

export function Settings() {
    const [saved, setSaved] = useState<NurserySettings>(defaultSettings);
    const [draft, setDraft] = useState<NurserySettings>(defaultSettings);
    const [showSaved, setShowSaved] = useState(false);
    const dirty = JSON.stringify(saved) !== JSON.stringify(draft);

    const update = <K extends keyof NurserySettings>(key: K, value: NurserySettings[K]) =>
        setDraft(current => ({...current, [key]: value}));

    return (
        <Box sx={{maxWidth: 760, pb: dirty ? '96px' : 0}}>
            <Typography component="h1" sx={{fontSize: 24, fontWeight: 700, mb: '6px'}}>
                Settings
            </Typography>
            <Typography sx={{fontSize: 15, color: 'text.secondary', mb: '24px'}}>
                These settings apply to everyone at your nursery.
            </Typography>

            <Paper elevation={0} sx={{p: '8px 24px', mb: '20px', border: '1px solid #e2e2e9', borderRadius: '14px'}}>
                <Typography component="h2" sx={{fontSize: 18, fontWeight: 600, pt: '14px'}}>
                    Notifications
                </Typography>
                <SettingRow
                    label="Late pickups"
                    description="Email the manager when a child is picked up after their expected time."
                    checked={draft.lateEmails}
                    onChange={value => update('lateEmails', value)}
                />
                <SettingRow
                    label="Daily summary"
                    description="Send a summary of the day's attendance at 6pm."
                    checked={draft.dailySummary}
                    onChange={value => update('dailySummary', value)}
                />
                <SettingRow
                    label="Messages from parents"
                    description="Show a notification when a parent sends a message."
                    checked={draft.parentMessages}
                    onChange={value => update('parentMessages', value)}
                    last
                />
            </Paper>

            <Paper elevation={0} sx={{p: '22px 24px', mb: '20px', border: '1px solid #e2e2e9', borderRadius: '14px'}}>
                <Typography component="h2" sx={{fontSize: 18, fontWeight: 600, mb: '16px'}}>
                    Preferences
                </Typography>

                <Typography sx={{fontSize: 14, fontWeight: 600, mb: '6px'}} id="pickup-label">
                    Default pickup time
                </Typography>
                <Select
                    size="small"
                    value={draft.defaultPickup}
                    onChange={event => update('defaultPickup', event.target.value)}
                    inputProps={{'aria-labelledby': 'pickup-label'}}
                    sx={{minWidth: 160, mb: '20px'}}
                >
                    {['15:00', '15:30', '16:00', '16:30', '17:00'].map(time => (
                        <MenuItem key={time} value={time}>
                            {time}
                        </MenuItem>
                    ))}
                </Select>

                <Typography sx={{fontSize: 14, fontWeight: 600}} id="week-label">
                    Week starts on
                </Typography>
                <RadioGroup
                    row
                    aria-labelledby="week-label"
                    value={draft.weekStart}
                    onChange={event => update('weekStart', event.target.value as NurserySettings['weekStart'])}
                    sx={{mb: '12px'}}
                >
                    <FormControlLabel value="monday" control={<Radio />} label="Monday" />
                    <FormControlLabel value="sunday" control={<Radio />} label="Sunday" />
                </RadioGroup>

                <FormControlLabel
                    control={
                        <Checkbox
                            checked={draft.showPhotos}
                            onChange={event => update('showPhotos', event.target.checked)}
                        />
                    }
                    label="Show children's photos in the attendance list"
                />
            </Paper>

            <Button
                variant="outlined"
                color="error"
                onClick={() => setDraft(defaultSettings)}
                disabled={JSON.stringify(draft) === JSON.stringify(defaultSettings)}
            >
                Reset to defaults
            </Button>

            {dirty && (
                <Box
                    sx={{
                        position: 'fixed',
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'flex-end',
                        gap: '12px',
                        px: '32px',
                        py: '14px',
                        bgcolor: '#1f1f2b',
                        color: '#fff',
                    }}
                >
                    <Typography sx={{fontSize: 15, mr: 'auto', pl: '232px'}}>You have unsaved changes</Typography>
                    <Button onClick={() => setDraft(saved)} sx={{color: '#c6c6d2'}}>
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        disableElevation
                        onClick={() => {
                            setSaved(draft);
                            setShowSaved(true);
                        }}
                    >
                        Save changes
                    </Button>
                </Box>
            )}

            <Snackbar
                open={showSaved}
                autoHideDuration={4000}
                onClose={() => setShowSaved(false)}
                anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
            >
                <Alert severity="success" variant="filled" onClose={() => setShowSaved(false)}>
                    Settings saved
                </Alert>
            </Snackbar>
        </Box>
    );
}
