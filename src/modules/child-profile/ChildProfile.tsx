import {useState} from 'react';

import {getChildProfile} from '../../api/profiles';
import type {Child} from '../../api/types';
import {AllergyAlerts} from './AllergyAlerts';
import {ContactCard} from './ContactCard';
import './child-profile.scss';

type Tab = 'details' | 'contacts';

const formatDate = (date: string) =>
    new Date(date).toLocaleDateString('en-GB', {day: 'numeric', month: 'long', year: 'numeric'});

export function ChildProfile({children}: {children: Child[]}) {
    const [childId, setChildId] = useState<string | null>(null);
    const [tab, setTab] = useState<Tab>('details');
    const [confirmingRemove, setConfirmingRemove] = useState(false);
    const [notice, setNotice] = useState<string | null>(null);

    const child = children.find(c => c.childId === childId) ?? children[0];
    const profile = child ? getChildProfile(child.childId) : null;

    if (!child || !profile) {
        return <p className="profile__empty">Loading profiles…</p>;
    }

    const firstName = child.name.firstName ?? child.name.fullName;

    return (
        <div className="profile">
            <label className="profile__picker">
                Child
                <select
                    value={child.childId}
                    onChange={event => {
                        setChildId(event.target.value);
                        setConfirmingRemove(false);
                        setNotice(null);
                    }}
                >
                    {children.map(c => (
                        <option key={c.childId} value={c.childId}>
                            {c.name.fullName}
                        </option>
                    ))}
                </select>
            </label>

            <section className="profile__card">
                <div className="profile__header">
                    {child.image?.large ? (
                        <img className="profile__photo" src={child.image.large} alt="" />
                    ) : (
                        <span className="profile__photo profile__photo--empty" aria-hidden="true">
                            {firstName[0]}
                        </span>
                    )}
                    <div className="profile__heading">
                        <h1 className="profile__name">{child.name.fullName}</h1>
                        <p className="profile__meta">
                            {profile.room} room · Born {formatDate(profile.dateOfBirth)} · Started{' '}
                            {formatDate(profile.startDate)}
                        </p>
                    </div>
                    <div className="profile__actions">
                        <button className="btn btn--primary" onClick={() => setNotice('Editing is turned off in this demo.')}>
                            Edit
                        </button>
                        <button className="btn btn--ghost" onClick={() => setNotice('Messaging is turned off in this demo.')}>
                            Message parents
                        </button>
                        <button className="profile__remove" onClick={() => setConfirmingRemove(true)}>
                            Remove child
                        </button>
                    </div>
                </div>

                {confirmingRemove && (
                    <div className="profile__confirm">
                        <p>
                            Remove {firstName} from {profile.room}? Their profile and attendance history will be
                            deleted. This can't be undone.
                        </p>
                        <div className="profile__confirm-actions">
                            <button
                                className="profile__remove profile__remove--solid"
                                onClick={() => {
                                    setConfirmingRemove(false);
                                    setNotice('Removing children is turned off in this demo.');
                                }}
                            >
                                Remove {firstName}
                            </button>
                            <button className="btn btn--ghost" onClick={() => setConfirmingRemove(false)}>
                                Cancel
                            </button>
                        </div>
                    </div>
                )}

                {notice && <p className="profile__notice">{notice}</p>}

                <div className="profile__tabs" role="tablist">
                    <span
                        role="tab"
                        aria-selected={tab === 'details'}
                        className={tab === 'details' ? 'profile__tab profile__tab--active' : 'profile__tab'}
                        onClick={() => setTab('details')}
                    >
                        Details
                    </span>
                    <span
                        role="tab"
                        aria-selected={tab === 'contacts'}
                        className={tab === 'contacts' ? 'profile__tab profile__tab--active' : 'profile__tab'}
                        onClick={() => setTab('contacts')}
                    >
                        Emergency contacts
                    </span>
                </div>

                {tab === 'details' ? (
                    <div className="profile__section">
                        <h2 className="profile__section-title">Allergies and medical</h2>
                        <AllergyAlerts allergies={profile.allergies} />
                        <h2 className="profile__section-title">Notes from parents</h2>
                        <p className="profile__notes">{profile.notes || 'No notes yet.'}</p>
                    </div>
                ) : (
                    <div className="profile__contacts">
                        {profile.contacts.map(contact => (
                            <ContactCard key={contact.phone} contact={contact} />
                        ))}
                    </div>
                )}
            </section>
        </div>
    );
}
