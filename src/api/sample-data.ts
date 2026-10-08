import type {Child} from './types';

const names = [
    'Ada Lindqvist',
    'Benji Okafor',
    'Clara Moreau',
    'Dev Patel',
    'Elsa Hansen',
    'Felix Novak',
    'Grace Adeyemi',
    'Hugo Larsen',
    'Isla McKenzie',
    'Jonah Weiss',
    'Kaia Svensson',
    'Leo Fischer',
    'Maya Rossi',
    'Noah Jensen',
    'Olivia Brandt',
    'Pablo Ortega',
    'Quinn Murphy',
    'Rosa Lindgren',
];

// Some children have no photo, so the app shows both avatar states
const withPhoto = new Set(['Ada', 'Benji', 'Dev', 'Elsa', 'Grace', 'Hugo', 'Kaia', 'Leo', 'Noah', 'Olivia', 'Quinn', 'Rosa']);

export const sampleChildren: Child[] = names.map((fullName, index) => {
    const [firstName, lastName] = fullName.split(' ');
    const photo = `/avatars/${firstName.toLowerCase()}.svg`;
    return {
        childId: `sample-${index + 1}`,
        name: {fullName, firstName, lastName},
        image: withPhoto.has(firstName) ? {small: photo, large: photo} : undefined,
        checkedIn: index % 3 === 0,
        pickupTime: index % 3 === 0 ? '16:00' : null,
    };
});
