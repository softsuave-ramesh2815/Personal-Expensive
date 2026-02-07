import type { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { faUser, faTableColumns, faGear } from '@fortawesome/free-solid-svg-icons';

export type MenuItem = {
    id: number;
    label: string;
    icon: IconDefinition;
    path: string;
    iconColor: string;
};

export const menuBar: MenuItem[] = [
    {
        id: 1,
        label: 'Users',
        icon: faUser,
        path: '/users',
        iconColor: '#11CDEF'
    },
    {
        id: 2,
        label: 'Dashboard',
        icon: faTableColumns,
        path: '/dashboard',
        iconColor: '#5E72E4'
    }
]
