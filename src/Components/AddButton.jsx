import React, { useState, useEffect } from 'react';
import { MdAddCircleOutline } from "react-icons/md";

const AddButton = (props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskName, setTaskName] = useState('');

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const AddTask = () => {
    if (taskName.trim() === '') {
      alert("Task name cannot be empty!");
      return;
    }

    const currentDate = new Date().toLocaleString();
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    const newTask = {
      id: Date.now(),
      task: taskName,
      date: currentDate,
      status: false,
    };

    existingTasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(existingTasks));

    console.log("Task added:", newTask);

    setTaskName('');
    toggleModal();
    props.check(taskName);
  };

  // Close modal on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.classList.contains("modal-bg")) {
        toggleModal();
      }
    };
    
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isModalOpen]);

  return (
    <>
      {/* Add Button */}
      <div className="absolute z-[5] flex justify-center content-center items-center drop-shadow-xl rounded-l-full -translate-y-[50%] bg-zinc-900 w-20 h-20 right-0 top-1/2">
        <button onClick={toggleModal}>
          <MdAddCircleOutline size={36} color="white" />
        </button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 modal-bg">
          <div className="bg-zinc-800 text-white p-6 rounded-lg shadow-lg w-[90%] max-w-lg">
            <h2 className="text-xl font-bold mb-4">Add New Task</h2>

            <div className="mb-4">
              <textarea
                id="taskTitle"
                name="task"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                className="shadow border rounded w-full py-2 px-3 bg-zinc-700 text-white leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter your task"
                autoFocus // Autofocus on modal open
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="button"
                onClick={toggleModal}
                className="bg-gray-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Cancel
              </button>
              <button
                type="button"
                className="bg-zinc-500 hover:bg-zinc-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                onClick={AddTask}
              >
                Add Item
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AddButton;
