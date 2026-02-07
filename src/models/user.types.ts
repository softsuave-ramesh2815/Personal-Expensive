export type User = {
  id: number;
  name: string;
  email: string;
  role: 'Admin' | 'Editor' | 'Viewer';
  status: 'Active' | 'Inactive';
  joinDate: string;
  avatar: string;
};

// Action types for useReducer
export type UserAction =
  | { type: 'ADD_USER'; payload: Omit<User, 'id'> }
  | { type: 'UPDATE_USER'; payload: User }
  | { type: 'DELETE_USER'; payload: number }
  | { type: 'SET_USERS'; payload: User[] };

// Seed data
export const SEED_USERS: User[] = [
  { id: 1, name: 'John Michael', email: 'john@example.com', role: 'Admin', status: 'Active', joinDate: '2024-04-18', avatar: 'JM' },
  { id: 2, name: 'Alexa Liras', email: 'alexa@example.com', role: 'Editor', status: 'Active', joinDate: '2024-03-22', avatar: 'AL' },
  { id: 3, name: 'Laurent Perrier', email: 'laurent@example.com', role: 'Viewer', status: 'Inactive', joinDate: '2024-06-11', avatar: 'LP' },
  { id: 4, name: 'Michael Levi', email: 'michael@example.com', role: 'Editor', status: 'Active', joinDate: '2024-01-15', avatar: 'ML' },
  { id: 5, name: 'Richard Gran', email: 'richard@example.com', role: 'Admin', status: 'Active', joinDate: '2023-11-05', avatar: 'RG' },
  { id: 6, name: 'Miriam Eric', email: 'miriam@example.com', role: 'Viewer', status: 'Inactive', joinDate: '2024-08-20', avatar: 'ME' },
  { id: 7, name: 'Sophie Turner', email: 'sophie@example.com', role: 'Editor', status: 'Active', joinDate: '2024-09-10', avatar: 'ST' },
  { id: 8, name: 'David Chen', email: 'david@example.com', role: 'Admin', status: 'Active', joinDate: '2024-02-28', avatar: 'DC' },
];
