import {sampleChildren} from './sample-data';
import type {Allergy, ChildProfile} from './types';

const allergies: Record<string, Allergy[]> = {
    Ada: [{name: 'Peanuts', severity: 'severe', notes: 'Carries an EpiPen. Kept in the Caterpillars medicine box.'}],
    Dev: [{name: 'Dairy', severity: 'mild', notes: 'Oat milk at snack time.'}],
    Grace: [
        {name: 'Eggs', severity: 'severe', notes: 'Check labels on all baked goods.'},
        {name: 'Kiwi', severity: 'mild', notes: 'Itchy mouth only.'},
    ],
    Leo: [{name: 'Gluten', severity: 'mild', notes: 'Gluten-free bread is in the kitchen.'}],
    Quinn: [{name: 'Bee stings', severity: 'severe', notes: 'Keep indoors if there are wasps near the garden.'}],
};

const notes: Record<string, string> = {
    Benji: 'Naps best with the blue blanket from home.',
    Hugo: 'Learning to use the potty. Spare clothes are in his drawer.',
    Maya: 'Speaks Italian at home. Responds well to "ciao".',
};

const parentNames = ['Sam', 'Alex', 'Jo', 'Chris', 'Robin', 'Charlie', 'Kim', 'Taylor', 'Jamie'];

export function getChildProfile(childId: string): ChildProfile | null {
    const index = sampleChildren.findIndex(child => child.childId === childId);
    if (index === -1) {
        return null;
    }
    const {firstName = '', lastName = ''} = sampleChildren[index].name;
    const day = String((index * 7) % 27 + 1).padStart(2, '0');
    const month = String((index % 12) + 1).padStart(2, '0');

    return {
        childId,
        room: index % 2 === 0 ? 'Caterpillars' : 'Butterflies',
        dateOfBirth: `2022-${month}-${day}`,
        startDate: `2024-${String((index % 4) + 9).padStart(2, '0')}-01`,
        allergies: allergies[firstName] ?? [],
        contacts: [
            {
                name: `${parentNames[index % parentNames.length]} ${lastName}`,
                relation: 'Parent',
                phone: `+44 7700 900${String(100 + index * 3)}`,
                canPickUp: true,
            },
            {
                name: `${parentNames[(index + 4) % parentNames.length]} ${lastName}`,
                relation: index % 3 === 0 ? 'Grandparent' : 'Parent',
                phone: `+44 7700 900${String(200 + index * 3)}`,
                canPickUp: index % 3 !== 0,
            },
        ],
        notes: notes[firstName] ?? '',
    };
}
