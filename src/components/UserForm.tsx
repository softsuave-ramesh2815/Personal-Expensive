import { useState } from "react";
import type { User } from "../models/user.types";

export const UserForm = ({
  editingUser,
  onClose,
  onSave,
}: {
  editingUser: User | null;
  onClose: () => void;
  onSave: (user: User) => void;
}) => {
  const [form, setForm] = useState<User>(
    editingUser || {
      id: Date.now(),
      name: "",
      email: "",
      role: "Viewer",
      status: "Active",
      joinDate: new Date().toISOString().slice(0, 10),
      avatar: "",
    }
  );

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h3>{editingUser ? "Edit User" : "Add User"}</h3>

        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
        />

        <select name="role" value={form.role} onChange={handleChange}>
          <option>Admin</option>
          <option>Editor</option>
          <option>Viewer</option>
        </select>

        <select name="status" value={form.status} onChange={handleChange}>
          <option>Active</option>
          <option>Inactive</option>
        </select>

        <input
          name="joinDate"
          type="date"
          placeholder="Join Date"
          value={form.joinDate}
          onChange={handleChange}
        />

        <div className="modal-actions">
          <button onClick={onClose}>Cancel</button>
          <button onClick={() => onSave(form)}>Save</button>
        </div>
      </div>
    </div>
  );
};
