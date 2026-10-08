import type {Invoice} from './types';

export const currentPlan = {
    name: 'Starter',
    price: 49,
    childLimit: 20,
    childrenEnrolled: 18,
    included: ['Attendance and check-in', 'Child profiles', 'Staff directory'],
    locked: ['Parent app and messaging', 'Learning journals', 'Invoicing parents'],
};

export const sampleInvoices: Invoice[] = [
    {invoiceId: 'INV-2026-010', period: 'October 2026', issued: '2026-10-01', amount: 49, status: 'due'},
    {invoiceId: 'INV-2026-009', period: 'September 2026', issued: '2026-09-01', amount: 49, status: 'overdue'},
    {invoiceId: 'INV-2026-008', period: 'August 2026', issued: '2026-08-01', amount: 49, status: 'paid'},
    {invoiceId: 'INV-2026-007', period: 'July 2026', issued: '2026-07-01', amount: 49, status: 'paid'},
    {invoiceId: 'INV-2026-006', period: 'June 2026', issued: '2026-06-01', amount: 39, status: 'paid'},
    {invoiceId: 'INV-2026-005', period: 'May 2026', issued: '2026-05-01', amount: 39, status: 'paid'},
];
