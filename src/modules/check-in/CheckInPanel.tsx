import {useEffect, useState} from 'react';

import type {Child} from '../../api/types';
import {Button} from './Button';
import {
    Actions,
    CloseButton,
    Header,
    Info,
    Label,
    LateBadge,
    Panel,
    Select,
    Subtitle,
    Title,
} from './styles';

const PICKUP_TIMES = buildPickupTimes('12:00', '18:30', 15);
const LATE_PICKUP_FROM = '17:30';

type Props = {
    child: Child;
    onClose: () => void;
    onCheckIn: (childId: string, pickupTime: string) => Promise<void>;
    onCheckOut: (childId: string) => Promise<void>;
};

export function CheckInPanel({child, onClose, onCheckIn, onCheckOut}: Props) {
    const [pickupTime, setPickupTime] = useState('16:00');
    const [saving, setSaving] = useState(false);

    useEffect(() => {
        setPickupTime('16:00');
    }, [child.childId]);

    const run = async (action: () => Promise<void>) => {
        setSaving(true);
        try {
            await action();
        } catch {
            // The error is shown by the app-level error toast.
        } finally {
            setSaving(false);
        }
    };

    return (
        <Panel aria-label={`Attendance for ${child.name.fullName}`}>
            <Header>
                <div>
                    <Title>{child.name.fullName}</Title>
                    <Subtitle>{child.checkedIn ? 'Checked in' : 'Not checked in yet'}</Subtitle>
                </div>
                <CloseButton onClick={onClose} aria-label="Close">
                    ×
                </CloseButton>
            </Header>

            {child.checkedIn ? (
                <>
                    {child.pickupTime && <Info>Pickup expected at {child.pickupTime}.</Info>}
                    <Actions>
                        <Button
                            $variant="danger"
                            disabled={saving}
                            onClick={() => run(() => onCheckOut(child.childId))}
                        >
                            {saving ? 'Checking out…' : 'Check out'}
                        </Button>
                        <Button $variant="secondary" onClick={onClose}>
                            Cancel
                        </Button>
                    </Actions>
                </>
            ) : (
                <>
                    <Label>
                        Pickup time
                        <Select value={pickupTime} onChange={event => setPickupTime(event.target.value)}>
                            {PICKUP_TIMES.map(time => (
                                <option key={time} value={time}>
                                    {time}
                                </option>
                            ))}
                        </Select>
                    </Label>
                    {pickupTime >= LATE_PICKUP_FROM && <LateBadge>Late pickup</LateBadge>}
                    <Actions>
                        <Button disabled={saving} onClick={() => run(() => onCheckIn(child.childId, pickupTime))}>
                            {saving ? 'Checking in…' : 'Check in'}
                        </Button>
                        <Button $variant="secondary" onClick={onClose}>
                            Cancel
                        </Button>
                    </Actions>
                </>
            )}
        </Panel>
    );
}

function buildPickupTimes(from: string, to: string, stepMinutes: number): string[] {
    const toMinutes = (time: string) => {
        const [hours, minutes] = time.split(':').map(Number);
        return hours * 60 + minutes;
    };
    const times: string[] = [];
    for (let m = toMinutes(from); m <= toMinutes(to); m += stepMinutes) {
        const hours = String(Math.floor(m / 60)).padStart(2, '0');
        const minutes = String(m % 60).padStart(2, '0');
        times.push(`${hours}:${minutes}`);
    }
    return times;
}
