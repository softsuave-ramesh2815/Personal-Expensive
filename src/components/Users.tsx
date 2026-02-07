import { useMemo, useState } from "react";
import "../stylesheet/user.css";
import {UserForm} from "./UserForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";


type User = {
  id: number;
  name: string;
  email: string;
  role: "Admin" | "Editor" | "Viewer";
  status: "Active" | "Inactive";
  joinDate: string;
  avatar: string;
};

const Users = () => {
  /* USERS STATE */
  const [users, setUsers] = useState<User[]>([
    {
      id: 1,
      name: "Ramesh M",
      email: "ramesh@example.com",
      role: "Editor",
      status: "Active",
      joinDate: "2024-03-22",
      avatar: "RM",
    },
    {
      id: 2,
      name: "Satheesh",
      email: "satheesh@example.com",
      role: "Admin",
      status: "Active",
      joinDate: "2024-02-28",
      avatar: "S",
    },
    {
      id: 3,
      name: "Eric Michael",
      email: "eric@example.com",
      role: "Admin",
      status: "Active",
      joinDate: "2024-04-18",
      avatar: "EM",
    },
    {
      id: 4,
      name: "Akash",
      email: "akash@example.com",
      role: "Viewer",
      status: "Inactive",
      joinDate: "2024-06-11",
      avatar: "A",
    },
    {
      id: 5,
      name: "Palani",
      email: "palani@example.com",
      role: "Editor",
      status: "Active",
      joinDate: "2024-01-15",
      avatar: "P",
    },
    {
      id: 6,
      name: "Santosh",
      email: "santosh@example.com",
      role: "Viewer",
      status: "Active",
      joinDate: "2024-07-10",
      avatar: "S",
    },
    {
      id: 7,
      name: "Ajith",
      email: "ajith@example.com",
      role: "Editor",
      status: "Active",
      joinDate: "2024-08-05",
      avatar: "A",
    },
    {
      id: 8,
      name: "Dulqar",
      email: "dulqar@example.com",
      role: "Admin",
      status: "Inactive",
      joinDate: "2024-09-20",
      avatar: "D",
    },
  ]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<User | null>(null);


  const stats = useMemo(() => {
    const total = users.length;
    const active = users.filter(u => u.status === "Active").length;
    const inactive = users.filter(u => u.status === "Inactive").length;
    const admins = users.filter(u => u.role === "Admin").length;

    return { total, active, inactive, admins };
  }, [users]);


  const handleSaveUser = (user: User) => {
    if (editingUser) {
      setUsers(prev =>
        prev.map(u => (u.id === user.id ? user : u))
      );
    } else {
      setUsers(prev => [...prev, user]);
    }

    setIsModalOpen(false);
    setEditingUser(null);
  };

  const handleDeleteUser = (id: number) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      setUsers(prev => prev.filter(u => u.id !== id));
    }
  };

  return (
    <div className="users-page">
      <div className="page-header">
        <h2>Users</h2>
      </div>

      <div className="stats-row">
        <StatCard title="TOTAL USERS" value={stats.total} subtitle="registered" />
        <StatCard title="ACTIVE USERS" value={stats.active} subtitle="of total" />
        <StatCard title="INACTIVE" value={stats.inactive} subtitle="of total" />
        <StatCard title="ADMINS" value={stats.admins} subtitle="with admin access" />
      </div>

      <div className="users-card">
        <div className="users-card-header">
          <input placeholder="Search users..." />
          <button
            onClick={() => {
              setEditingUser(null);
              setIsModalOpen(true);
            }}
          >
            + Add User
          </button>
        </div>

        <table>
          <thead>
            <tr>
              <th>User</th>
              <th>Email</th>
              <th>Role</th>
              <th>Status</th>
              <th>Joined</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td className="user-cell">
                  <div className="avatar">
                    {user.name
                      .split(" ")
                      .map(n => n[0])
                      .join("")}
                  </div>
                  {user.name}
                </td>
                <td>{user.email}</td>
                <td>{user.role}</td>
                <td>
                  <span className={`status ${user.status.toLowerCase()}`}>
                    {user.status}
                  </span>
                </td>
                <td>{user.joinDate}</td>
                <td className="actions">
                  <span
                    className="action edit"
                    onClick={() => {
                      setEditingUser(user);
                      setIsModalOpen(true);
                    }}
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </span>
                  <span
                    className="action delete"
                    onClick={() => handleDeleteUser(user.id)}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {isModalOpen && (
        <UserForm
          editingUser={editingUser}
          onClose={() => {
            setIsModalOpen(false);
            setEditingUser(null);
          }}
          onSave={handleSaveUser}
        />
      )}
    </div>
  );
};

export default Users;


const StatCard = ({
  title,
  value,
  subtitle,
}: {
  title: string;
  value: number;
  subtitle: string;
}) => (
  <div className="stat-card">
    <p>{title}</p>
    <h3>{value}</h3>
    <span>{subtitle}</span>
  </div>
);
