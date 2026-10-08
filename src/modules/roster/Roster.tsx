import {useState} from 'react';

import type {Child} from '../../api/types';
import {ChildRow} from './ChildRow';
import './roster.scss';

const PAGE_SIZE = 8;

type Props = {
    children: Child[];
    loading: boolean;
    selectedId: string | null;
    onSelect: (child: Child) => void;
};

export function Roster({children, loading, selectedId, onSelect}: Props) {
    const [page, setPage] = useState(0);
    const pageCount = Math.max(1, Math.ceil(children.length / PAGE_SIZE));
    const currentPage = Math.min(page, pageCount - 1);
    const visible = children.slice(currentPage * PAGE_SIZE, (currentPage + 1) * PAGE_SIZE);

    return (
        <section className="roster">
            <div className="roster__header">
                <h2 className="roster__title">Children</h2>
                <span className="roster__count">{children.length} in this room</span>
            </div>

            {loading && children.length === 0 ? (
                <p className="roster__empty">Loading children…</p>
            ) : children.length === 0 ? (
                <p className="roster__empty">No children in this room yet.</p>
            ) : (
                <ul className="roster__list">
                    {visible.map(child => (
                        <ChildRow
                            key={child.childId}
                            child={child}
                            selected={child.childId === selectedId}
                            onSelect={onSelect}
                        />
                    ))}
                </ul>
            )}

            <div className="pagination">
                <span>
                    Page {currentPage + 1} of {pageCount}
                </span>
                <div className="pagination__buttons">
                    <button
                        className="btn btn--ghost"
                        disabled={currentPage === 0}
                        onClick={() => setPage(currentPage - 1)}
                    >
                        Previous
                    </button>
                    <button
                        className="btn btn--primary"
                        disabled={currentPage >= pageCount - 1}
                        onClick={() => setPage(currentPage + 1)}
                    >
                        Next
                    </button>
                </div>
            </div>
        </section>
    );
}
