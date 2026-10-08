import type {Child} from '../../api/types';

export function Avatar({child}: {child: Child}) {
    if (child.image?.small) {
        return <img className="avatar" src={child.image.small} alt="" />;
    }

    const initials = child.name.fullName
        .split(' ')
        .map(part => part[0])
        .join('')
        .slice(0, 2)
        .toUpperCase();

    return (
        <span className="avatar avatar--initials" aria-hidden="true">
            {initials}
        </span>
    );
}
