import React from 'react';
import { useState, useEffect } from 'react'; // Import useState and useEffect for state and side effects
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle } from '@headlessui/react'; // Import Headless UI components for dialog
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'; // Import warning icon

// Item component displays user details and handles editing/deleting
const Item = ({ details, index, editUser, deleteUser }) => {
  // State to control dialog visibility
  const [open, setOpen] = useState(false);
  // State to manage form input for name, pre-filled with current user data
  const [name, setName] = useState('');
  // State to manage form input for email, pre-filled with current user data
  const [email, setEmail] = useState('');

  // Pre-fill form with current user data when component mounts or details change
  useEffect(() => {
    setName(details.name);
    setEmail(details.email);
  }, [details]);

  // Handle name input changes
  const handleName = (event) => {
    setName(event.target.value);
  };

  // Handle email input changes
  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  // Handle form submission to edit user details
  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedUser = {
      name: name,
      email: email,
    };
    // Call editUser prop with index and updated user data
    editUser(index, updatedUser);
    setOpen(false); // Close dialog after submission
  };

  // Handle delete button click
  const handleDelete = () => {
    deleteUser(index); // Call deleteUser prop with index
  };

  // Open the edit dialog
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    // Container for item display with styling for layout and hover effect
    <div className="flex items-center justify-between p-4 mb-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
      {/* Display user name and email */}
      <div>
        <h3 className="text-lg font-bold text-gray-800">{details.name}</h3>
        <p className="text-sm text-gray-500">{details.email}</p>
      </div>
      {/* Display user initial in a styled circle */}
      <div className="w-10 h-10 bg-green-100 text-green-600 flex items-center justify-center rounded-full font-semibold uppercase">
        {details.name.charAt(0)}
      </div>

      {/* Button to open edit dialog */}
      <button onClick={handleOpen} className="text-blue-600 hover:text-blue-800">
        Edit
      </button>
      {/* Button to delete user */}
      <button onClick={handleDelete} className="text-red-600 hover:text-red-800">
        Delete
      </button>

      {/* Dialog for editing user details */}
      <Dialog open={open} onClose={() => setOpen(false)} className="relative z-10">
        {/* Backdrop for modal overlay with transition effects */}
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500/75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in"
        />

        {/* Dialog container for centering content */}
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            {/* Dialog panel with transition animations */}
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[enter]:ease-out data-[leave]:duration-200 data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              {/* Dialog content */}
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  {/* Warning icon for dialog */}
                  <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                    <ExclamationTriangleIcon aria-hidden="true" className="size-6 text-red-600" />
                  </div>
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    {/* Dialog title */}
                    <DialogTitle as="h3" className="text-base font-semibold text-gray-900">
                      Edit User
                    </DialogTitle>
                    {/* Form for editing user details */}
                    <div className="mt-4">
                      <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Name input field */}
                        <div>
                          <label className="block text-sm font-medium text-slate-600">Name</label>
                          <input
                            onChange={handleName}
                            value={name}
                            name="name"
                            type="text"
                            required
                            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                          />
                        </div>
                        {/* Email input field */}
                        <div>
                          <label className="block text-sm font-medium text-slate-600">Email</label>
                          <input
                            onChange={handleEmail}
                            value={email}
                            name="email"
                            type="email"
                            required
                            className="mt-1 w-full rounded-xl border border-slate-300 px-4 py-3 text-sm shadow-sm focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition"
                          />
                        </div>
                        {/* Submit button for form */}
                        <button
                          type="submit"
                          className="w-full bg-indigo-600 text-white font-medium py-3 rounded-xl hover:bg-indigo-700 shadow-md transition"
                        >
                          Save
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              {/* Dialog action buttons */}
              <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                {/* Cancel button to close dialog */}
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-xs ring-1 ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto"
                >
                  Cancel
                </button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Item;