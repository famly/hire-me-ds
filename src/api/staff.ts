import type {StaffMember} from './types';

const member = (
    staffId: string,
    name: string,
    role: StaffMember['role'],
    room: string | null,
    status: StaffMember['status'],
    active = true,
): StaffMember => {
    const [first, last] = name.toLowerCase().split(' ');
    return {
        staffId,
        name,
        role,
        room,
        status,
        email: `${first}.${last}@sample-nursery.test`,
        phone: `+44 7700 900${staffId.slice(-3)}`,
        active,
    };
};

export const sampleStaff: StaffMember[] = [
    member('staff-101', 'Priya Shah', 'Manager', null, 'onShift'),
    member('staff-102', 'Tom Hughes', 'Room leader', 'Caterpillars', 'onShift'),
    member('staff-103', 'Amara Okoye', 'Room leader', 'Butterflies', 'onLeave'),
    member('staff-104', 'Lena Vogel', 'Practitioner', 'Caterpillars', 'onShift'),
    member('staff-105', 'Marcus Reid', 'Practitioner', 'Butterflies', 'onShift'),
    member('staff-106', 'Sofia Marquez', 'Practitioner', 'Butterflies', 'off'),
    member('staff-107', 'Jonas Berg', 'Practitioner', 'Caterpillars', 'onShift'),
    member('staff-108', 'Ellie Clarke', 'Apprentice', 'Caterpillars', 'onShift'),
    member('staff-109', 'Yusuf Demir', 'Apprentice', 'Butterflies', 'off'),
    member('staff-110', 'Ruth Agyeman', 'Cook', null, 'onShift'),
    member('staff-111', 'Nina Kowalski', 'Practitioner', 'Butterflies', 'off', false),
    member('staff-112', 'Ben Archer', 'Apprentice', 'Caterpillars', 'off', false),
];
