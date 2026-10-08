import {useState} from 'react';

import {useChildren} from './api/useChildren';
import {CheckInPanel} from './modules/check-in/CheckInPanel';
import {ChildProfile} from './modules/child-profile/ChildProfile';
import {AttendanceBar} from './modules/insights/AttendanceBar';
import {ErrorToast} from './modules/insights/ErrorToast';
import {SideNav, type Page} from './modules/insights/SideNav';
import {PlanAndBilling} from './modules/plan-and-billing/PlanAndBilling';
import {Roster} from './modules/roster/Roster';
import {Settings} from './modules/settings/Settings';
import {StaffDirectory} from './modules/staff-directory/StaffDirectory';

export function App() {
    const {children, loading, error, clearError, refresh, checkIn, checkOut} = useChildren();
    const [page, setPage] = useState<Page>('attendance');
    const [selectedId, setSelectedId] = useState<string | null>(null);
    const selectedChild = children.find(child => child.childId === selectedId) ?? null;

    return (
        <div style={{minHeight: '100vh', background: '#f9f9fa'}}>
            <AttendanceBar children={children} loading={loading} onRefresh={refresh} />

            <div style={{display: 'flex', minHeight: 'calc(100vh - 64px)'}}>
                <SideNav page={page} onNavigate={setPage} />

                <main style={{flex: 1, minWidth: 0, padding: '28px 32px'}}>
                    {page === 'attendance' && (
                        <div
                            style={{
                                display: 'grid',
                                gridTemplateColumns: selectedChild ? 'minmax(0, 1fr) 340px' : 'minmax(0, 1fr)',
                                gap: 20,
                                alignItems: 'start',
                                maxWidth: 1100,
                            }}
                        >
                            <Roster
                                children={children}
                                loading={loading}
                                selectedId={selectedId}
                                onSelect={child => setSelectedId(child.childId)}
                            />

                            {selectedChild && (
                                <CheckInPanel
                                    child={selectedChild}
                                    onClose={() => setSelectedId(null)}
                                    onCheckIn={checkIn}
                                    onCheckOut={checkOut}
                                />
                            )}
                        </div>
                    )}
                    {page === 'profiles' && <ChildProfile children={children} />}
                    {page === 'staff' && <StaffDirectory />}
                    {page === 'settings' && <Settings />}
                    {page === 'billing' && <PlanAndBilling />}
                </main>
            </div>

            <ErrorToast message={error} onClose={clearError} />
        </div>
    );
}
