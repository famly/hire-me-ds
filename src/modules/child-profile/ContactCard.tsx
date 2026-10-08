import type {EmergencyContact} from '../../api/types';

export function ContactCard({contact}: {contact: EmergencyContact}) {
    return (
        <div className="contact">
            <div className="contact__top">
                <span className="contact__name">{contact.name}</span>
                {contact.canPickUp && <span className="contact__badge">Can pick up</span>}
            </div>
            <span className="contact__relation">{contact.relation}</span>
            <a className="contact__phone" href={`tel:${contact.phone.replace(/\s/g, '')}`}>
                {contact.phone}
            </a>
        </div>
    );
}
