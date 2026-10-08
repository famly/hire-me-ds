import {useState} from 'react';

import {sampleStaff} from '../../api/staff';
import {StaffButton} from './StaffButton';
import {
    Actions,
    Count,
    Email,
    Empty,
    Footer,
    Header,
    Initials,
    List,
    Name,
    Page,
    RoleBadge,
    Room,
    Row,
    Search,
    Status,
    Title,
} from './styles';

const statusLabels = {onShift: 'On shift', off: 'Off today', onLeave: 'On leave'};

export function StaffDirectory() {
    const [query, setQuery] = useState('');
    const [showInactive, setShowInactive] = useState(false);
    const [invited, setInvited] = useState(false);

    const inactiveCount = sampleStaff.filter(member => !member.active).length;
    const visible = sampleStaff.filter(
        member =>
            (showInactive || member.active) && member.name.toLowerCase().includes(query.trim().toLowerCase()),
    );

    return (
        <Page>
            <Header>
                <Title>Staff</Title>
                <Count>{sampleStaff.length - inactiveCount} active</Count>
                <Search
                    type="search"
                    placeholder="Search staff"
                    aria-label="Search staff"
                    value={query}
                    onChange={event => setQuery(event.target.value)}
                />
                <StaffButton onClick={() => setInvited(true)}>+ Invite staff</StaffButton>
            </Header>

            {invited && <Count as="p">Inviting staff is turned off in this demo.</Count>}

            <List>
                {visible.length === 0 ? (
                    <Empty>No staff match "{query}".</Empty>
                ) : (
                    visible.map(member => (
                        <Row key={member.staffId} style={member.active ? undefined : {opacity: 0.5}}>
                            <Initials aria-hidden="true">
                                {member.name
                                    .split(' ')
                                    .map(part => part[0])
                                    .join('')}
                            </Initials>
                            <div>
                                <Name>{member.name}</Name>
                                <Email>{member.email}</Email>
                            </div>
                            <div>
                                <RoleBadge $role={member.role}>{member.role}</RoleBadge>
                                <Room>{member.room ?? 'All rooms'}</Room>
                            </div>
                            <Status $status={member.status}>{statusLabels[member.status]}</Status>
                            <Actions>
                                <StaffButton
                                    $variant="icon"
                                    title={`Call ${member.name}`}
                                    onClick={() => (window.location.href = `tel:${member.phone.replace(/\s/g, '')}`)}
                                >
                                    ✆
                                </StaffButton>
                                <StaffButton
                                    $variant="icon"
                                    title={`Email ${member.name}`}
                                    onClick={() => (window.location.href = `mailto:${member.email}`)}
                                >
                                    ✉
                                </StaffButton>
                            </Actions>
                        </Row>
                    ))
                )}
            </List>

            <Footer>
                <StaffButton $variant="transparent" onClick={() => setShowInactive(value => !value)}>
                    {showInactive ? 'Hide inactive staff' : `Show inactive staff (${inactiveCount})`}
                </StaffButton>
            </Footer>
        </Page>
    );
}
