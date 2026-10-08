export type Child = {
    childId: string;
    name: {
        fullName: string;
        firstName?: string;
        lastName?: string;
    };
    image?: {
        small?: string;
        large?: string;
    };
    checkedIn: boolean;
    pickupTime?: string | null;
};

export type GroupResponse = {
    children: Child[];
};

export type Allergy = {
    name: string;
    severity: 'severe' | 'mild';
    notes: string;
};

export type EmergencyContact = {
    name: string;
    relation: string;
    phone: string;
    canPickUp: boolean;
};

export type ChildProfile = {
    childId: string;
    room: string;
    dateOfBirth: string;
    startDate: string;
    allergies: Allergy[];
    contacts: EmergencyContact[];
    notes: string;
};

export type StaffRole = 'Manager' | 'Room leader' | 'Practitioner' | 'Apprentice' | 'Cook';

export type StaffMember = {
    staffId: string;
    name: string;
    role: StaffRole;
    room: string | null;
    status: 'onShift' | 'off' | 'onLeave';
    email: string;
    phone: string;
    active: boolean;
};

export type Invoice = {
    invoiceId: string;
    period: string;
    issued: string;
    amount: number;
    status: 'paid' | 'due' | 'overdue';
};
