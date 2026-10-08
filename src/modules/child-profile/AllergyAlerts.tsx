import type {Allergy} from '../../api/types';

export function AllergyAlerts({allergies}: {allergies: Allergy[]}) {
    if (allergies.length === 0) {
        return <div className="alert alert--info">No known allergies.</div>;
    }

    return (
        <div className="alerts">
            {allergies.map(allergy => (
                <div key={allergy.name} className={`alert alert--${allergy.severity}`}>
                    <strong>
                        {allergy.severity === 'severe' ? '⚠ Severe allergy: ' : 'Mild allergy: '}
                        {allergy.name}
                    </strong>
                    <span>{allergy.notes}</span>
                </div>
            ))}
        </div>
    );
}
