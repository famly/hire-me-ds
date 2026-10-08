import {sampleChildren} from './sample-data';
import type {Child} from './types';

// The app runs on local sample data. Changes last until the page is reloaded.
let children: Child[] = sampleChildren.map(child => ({...child}));

// A short delay so loading states show, like they would with a real server
const wait = () => new Promise(resolve => setTimeout(resolve, 300));

export async function fetchChildren(): Promise<Child[]> {
    await wait();
    return children.map(child => ({...child}));
}

export async function checkIn(childId: string, pickupTime: string): Promise<void> {
    await wait();
    // Simulate a server error for one child
    if (children.find(child => child.childId === childId)?.name.fullName === 'Felix Novak') {
        throw new Error("Couldn't check in Felix. Please try again.");
    }
    children = children.map(child => (child.childId === childId ? {...child, checkedIn: true, pickupTime} : child));
}

export async function checkOut(childId: string): Promise<void> {
    await wait();
    children = children.map(child =>
        child.childId === childId ? {...child, checkedIn: false, pickupTime: null} : child,
    );
}
