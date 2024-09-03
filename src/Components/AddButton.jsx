import React, { useState } from 'react';
import { MdAddCircleOutline } from "react-icons/md";

const AddButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [taskName, setTaskName] = useState('');

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const AddTask = () => {
    // Get the current date
    const currentDate = new Date().toLocaleString();

    // Get existing tasks from local storage
    const existingTasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Create the task object
    const newTask = {
      id: Date.now(), // Unique identifier
      task: taskName, // Use the taskName from state
      date: currentDate,
      status: false
    };

    // Add the new task to the existing tasks
    existingTasks.push(newTask);

    // Save the updated tasks array back to local storage
    localStorage.setItem("tasks", JSON.stringify(existingTasks));

    console.log("Task added:", newTask);

    // Clear the task input and close the modal
    setTaskName('');
    toggleModal();
  };
 
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
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
                type='button'
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
