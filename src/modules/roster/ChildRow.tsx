import type {Child} from '../../api/types';
import {Avatar} from './Avatar';

type Props = {
    child: Child;
    selected: boolean;
    onSelect: (child: Child) => void;
};

export function ChildRow({child, selected, onSelect}: Props) {
    return (
        <li
            className={selected ? 'child-row child-row--selected' : 'child-row'}
            onClick={() => onSelect(child)}
        >
            <Avatar child={child} />
            <span className="child-row__name">{child.name.fullName}</span>
            <span className={child.checkedIn ? 'status status--in' : 'status status--out'}>
                {child.checkedIn ? 'Checked in' : 'Not here yet'}
            </span>
        </li>
    );
}
