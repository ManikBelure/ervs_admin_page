import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft, FaEdit, FaPlus, FaShieldAlt } from "react-icons/fa";

export default function RoleManagement() {
  const navigate = useNavigate();

  const [roles, setRoles] = useState([
    { id: 1, name: "Super Admin", description: "Full access to all modules" },
    {
      id: 2,
      name: "Returning Officer",
      description: "Can edit but not delete",
    },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentRoleId, setCurrentRoleId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  // Permission Modal State
  const [showPermissionModal, setShowPermissionModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState(null);

  const openPermissionModal = (role) => {
    setSelectedRole(role);
    setShowPermissionModal(true);
  };

  // Add Role
  const handleAddRole = () => {
    setIsEditing(false);
    setFormData({ name: "", description: "" });
    setShowModal(true);
  };

  // Edit Role
  const handleEditRole = (role) => {
    setIsEditing(true);
    setCurrentRoleId(role.id);
    setFormData({ name: role.name, description: role.description });
    setShowModal(true);
  };

  // Save Role
  const handleSave = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.description) {
      alert("Please fill all fields!");
      return;
    }

    if (isEditing) {
      setRoles(
        roles.map((r) => (r.id === currentRoleId ? { ...r, ...formData } : r))
      );
    } else {
      const newRole = { id: roles.length + 1, ...formData };
      setRoles([...roles, newRole]);
    }

    setShowModal(false);
    setFormData({ name: "", description: "" });
    setIsEditing(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 font-medium mb-6 transition"
      >
        <FaArrowLeft /> Back
      </button>

      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-extrabold text-gray-800">
            Role Management
          </h1>
          <p className="text-gray-500 mt-1">
            Manage system roles and assign permissions.
          </p>
        </div>

        <button
          onClick={handleAddRole}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-4 py-2 rounded-lg shadow-md flex items-center gap-2"
        >
          <FaPlus /> Add Role
        </button>
      </div>

      {/* Table */}
      <div className="bg-white shadow-lg rounded-2xl p-6 border border-gray-100">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700 text-left text-sm uppercase tracking-wide border-b">
                <th className="px-6 py-3 font-semibold">Number</th>
                <th className="px-6 py-3 font-semibold">Role</th>
                <th className="px-6 py-3 font-semibold">Description</th>
                <th className="px-6 py-3 font-semibold">Edit</th>
                <th className="px-6 py-3 font-semibold">Actions</th>
              </tr>
            </thead>

            <tbody>
              {roles.map((role, index) => (
                <tr
                  key={role.id}
                  className="border-b hover:bg-gray-50 transition"
                >
                  <td className="px-6 py-4">{index + 1}</td>
                  <td className="px-6 py-4 font-semibold">{role.name}</td>
                  <td className="px-6 py-4 text-gray-600">
                    {role.description}
                  </td>

                  {/* Edit Button */}
                  <td className="px-6 py-4">
                    <button
                      onClick={() => handleEditRole(role)}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      <FaEdit />
                    </button>
                  </td>

                  {/* Permission Button */}
                  <td className="px-6 py-4">
                    <button
                      onClick={() =>
                        navigate(
                          `/dashboard/role-management/${role.id}/permission`
                        )
                      }
                      className="
      flex items-center gap-2 
      border border-blue-500 
      text-blue-600 
      px-4 py-2 
      rounded-full 
      hover:bg-blue-50 
      transition font-semibold
    "
                    >
                      <FaShieldAlt className="text-blue-600" />
                      Permissions
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* ---------------------- Role Modal ---------------------- */}
      {showModal && (
        <div className="fixed inset-0 flex justify-center items-center z-50">
          <div
            className="bg-white rounded-2xl shadow-xl w-[90%] max-w-xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              {isEditing ? "Edit Role" : "Create Role"}
            </h2>

            <form className="space-y-4" onSubmit={handleSave}>
              <div>
                <label className="block font-medium">Role Name*</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full border rounded-lg px-3 py-2"
                  required
                />
              </div>

              <div>
                <label className="block font-medium">Description*</label>
                <input
                  type="text"
                  value={formData.description}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      description: e.target.value,
                    })
                  }
                  className="w-full border rounded-lg px-3 py-2"
                  required
                />
              </div>

              <div className="flex justify-end gap-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 bg-gray-200 rounded-lg"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py- bg-indigo-600 text-white rounded-lg"
                >
                  {isEditing ? "Save Changes" : "Save"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
