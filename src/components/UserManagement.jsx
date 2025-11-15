import React, { useState } from "react";
import { FaArrowLeft, FaEdit, FaPlus } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function UserManagement() {
  const navigate = useNavigate();

  const [users, setUsers] = useState([
    {
      id: 1,
      firstName: "Manik",
      middleName: "Venkat",
      lastName: "B",
      email: "manik@gmail.com",
      phoneNumber: "99723345638",
      destignatiom: "Admin",
      priority: "1",
      role: "Super Admin",
    },
    {
      id: 2,
      firstName: "Vishal",
      middleName: "G",
      lastName: "D",
      email: "vishal@gmail.com",
      phoneNumber: "99723345638",
      destignatiom: "Officer",
      priority: "1",
      role: "Returning Officer",
    },
    {
      id: 3,
      firstName: "Sagar",
      middleName: "",
      lastName: "B",
      email: "sagar@gmail.com",
      phoneNumber: "99723345638",
      destignatiom: "Officer",
      priority: "1",
      role: "Returning Officer",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentUserId, setCurrentUserId] = useState(null);

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    destignatiom: "",
    priority: "",
    role: "",
    reason: "",
  });

  const handleAddClick = () => {
    setIsEditing(false);
    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      destignatiom: "",
      priority: "",
      role: "",
      reason: "",
    });
    setShowModal(true);
  };

  const handleEditClick = (user) => {
    setIsEditing(true);
    setCurrentUserId(user.id);
    setFormData({ ...user, reason: "" });
    setShowModal(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Please fill required fields.");
      return;
    }
    if (isEditing) {
      setUsers(
        users.map((u) => (u.id === currentUserId ? { ...u, ...formData } : u))
      );
    } else {
      const newUser = { id: users.length + 1, ...formData };
      setUsers([...users, newUser]);
    }
    setShowModal(false);
    setIsEditing(false);
  };

  return (
    <div className="w-full min-h-screen bg-gray-50 px-4 py-8">
      {/* BACK BUTTON */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 font-medium mb-6"
      >
        <FaArrowLeft /> Back
      </button>

      {/* PAGE HEADER */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-800">
            User Management
          </h1>
          <p className="text-gray-500">
            Manage system users, roles, and access permissions.
          </p>
        </div>

        <button
          onClick={handleAddClick}
          className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg shadow-md flex items-center gap-2"
        >
          <FaPlus /> Add User
        </button>
      </div>

      {/* TABLE CARD */}
      <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-200 w-full">
        <table className="w-full table-auto border-collapse text-sm">
          <thead>
            <tr className="bg-gray-100 text-gray-700 uppercase border-b">
              <th className="px-3 py-3 text-left">Number</th>
              <th className="px-3 py-3 text-left">First Name</th>
              <th className="px-3 py-3 text-left">Middle Name</th>
              <th className="px-3 py-3 text-left">Last Name</th>
              <th className="px-3 py-3 text-left">Email</th>
              <th className="px-3 py-3 text-left">Phone</th>
              <th className="px-3 py-3 text-left">Designation</th>
              <th className="px-3 py-3 text-left">Priority</th>
              <th className="px-3 py-3 text-left">Role</th>
              <th className="px-3 py-3 text-left">Actions</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user, idx) => (
              <tr key={user.id} className="border-b hover:bg-gray-50">
                <td className="px-3 py-3">{idx + 1}</td>
                <td className="px-3 py-3">{user.firstName}</td>
                <td className="px-3 py-3">{user.middleName}</td>
                <td className="px-3 py-3">{user.lastName}</td>
                <td className="px-3 py-3">{user.email}</td>
                <td className="px-3 py-3">{user.phoneNumber}</td>
                <td className="px-3 py-3">{user.destignatiom}</td>
                <td className="px-3 py-3">{user.priority}</td>
                <td className="px-3 py-3">{user.role}</td>

                <td className="px-3 py-3">
                  <button
                    onClick={() => handleEditClick(user)}
                    className="text-indigo-600 hover:text-indigo-800 font-semibold flex items-center gap-1"
                  >
                    <FaEdit /> Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50 p-4">
          <div
            className="bg-white rounded-xl shadow-2xl w-full max-w-xl p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-bold mb-4">
              {isEditing ? "Edit User" : "Create User"}
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {/* First Name */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  First Name*
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  required
                />
              </div>

              {/* Middle Name */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Middle Name
                </label>
                <input
                  type="text"
                  value={formData.middleName}
                  onChange={(e) =>
                    setFormData({ ...formData, middleName: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                />
              </div>

              {/* Last Name */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Last Name*
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Email*
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="text"
                  value={formData.phoneNumber}
                  onChange={(e) =>
                    setFormData({ ...formData, phoneNumber: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                />
              </div>

              {/* Designation */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Designation
                </label>
                <input
                  type="text"
                  value={formData.destignatiom}
                  onChange={(e) =>
                    setFormData({ ...formData, destignatiom: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                />
              </div>

              {/* Priority */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Priority
                </label>
                <input
                  type="text"
                  value={formData.priority}
                  onChange={(e) =>
                    setFormData({ ...formData, priority: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                />
              </div>

              {/* Role */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Role*
                </label>
                <select
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                  required
                >
                  <option>Super Admin</option>
                  <option>Returning Officer</option>
                </select>
              </div>

              {/* Reason Only in Edit */}
              {isEditing && (
                <div className="col-span-2">
                  <label className="block text-sm text-gray-700 mb-1">
                    Reason for Editing*
                  </label>
                  <textarea
                    rows="2"
                    value={formData.reason}
                    onChange={(e) =>
                      setFormData({ ...formData, reason: e.target.value })
                    }
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm"
                    required
                  />
                </div>
              )}
            </form>

            {/* Buttons */}
            <div className="flex justify-end gap-3 mt-5">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-200 rounded-md text-sm"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-5 py-2 bg-indigo-600 text-white rounded-md text-sm"
              >
                {isEditing ? "Save Changes" : "Save"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
