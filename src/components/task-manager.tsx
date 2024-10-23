import React, { useState } from 'react';
import { TaskForm } from './task-form';
import { TaskList } from './task-list';
import { Task } from '../utils/types';

const TaskManager: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([
    { id: '1', name: 'Training at the Gym', completed: true },
    { id: '2', name: 'Play Paddle with friends', completed: false },
    { id: '3', name: 'Burger BBQ with family', completed: false },
  ]);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [currentTask, setCurrentTask] = useState<Task | undefined>(undefined);

  const handleSaveTask = (task: Task): void => {
    if (isEditing) {
      setTasks(tasks.map((t) => (t.id === task.id ? task : t)));
    } else {
      setTasks([...tasks, { ...task, id: Date.now().toString() }]);
    }
    setIsEditing(false);
    setCurrentTask(undefined);
  };

  const handleDeleteTask = (id: string): void => {
    setTasks(tasks.filter((task) => task.id !== id));
    setIsEditing(false);
    setCurrentTask(undefined);
  };

  const handleTaskToggle = (id: string): void => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const handleEditTask = (task: Task): void => {
    setIsEditing(true);
    setCurrentTask(task);
  };

  return (
    <div className="flex h-screen bg-[#F3F3F3] w-full max-w-[1000px]">
      {/* Sidebar */}
      <div
        className="relative w-[414px] h-full"
        style={{ boxShadow: '0px 0px 7px 2px #00000040' }}
      >
        <div className="flex items-start h-[123px] gap-4 bg-[#3556AB] text-white p-4">
          <img
            src="/Ellipse 2.png"
            alt="Profile"
            className="w-[50px] h-[50px] rounded-full"
          />
          <div>
            <h1 className="text-base font-medium">Hello, Jhon</h1>
            <p className="text-[25px] font-thin italic w-full max-w-[221px] leading-[26.46px]">
              What are your plans for today?
            </p>
          </div>
        </div>

        {/* Pro Upgrade Banner */}
        <div className="relative bg-[#CDE53D] border-1 border-[#9EB031] p-4 h-[116px] flex justify-between items-center shadow-[0px 4px 0px 0px #FFFFFF99]">
          <div className="flex items-center gap-4">
            <img src="Group 27.png" alt="trophy" />
            <span className="text-[#071D55] font-bold text-lg">
              Go Pro Upgrade Now
            </span>
          </div>
          <span className="text-center flex items-center justify-center absolute top-0 right-6 bg-[#071D55] h-[71px] w-[66.11px] text-[#F2C94C] font-bold">
            $1
          </span>
        </div>

        {/* Task List */}
        <div className="p-4">
          <TaskList
            tasks={tasks}
            onTaskToggle={handleTaskToggle}
            onEditTask={handleEditTask}
          />
        </div>

        {/* Add Task Button */}
        <button
          onClick={() => setCurrentTask({ id: '', name: '', completed: false })}
          className="absolute bottom-8 right-4 w-[60px] h-[61px] bg-[#3556AB] rounded-full text-white text-2xl flex items-center justify-center shadow-lg hover:bg-[#3556AB]/70 transition-colors"
        >
          +
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="bg-[#3556AB] h-[123px] p-4 flex items-center justify-center text-white">
          <h2 className="text-2xl text-center font-medium">
            {isEditing ? 'Edit Task' : 'Add Task'}
          </h2>
        </div>
        <div className="p-4">
          {(isEditing || currentTask) && (
            <TaskForm
              mode={isEditing ? 'edit' : 'add'}
              initialTask={currentTask}
              onSave={handleSaveTask}
              onDelete={isEditing ? handleDeleteTask : undefined}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskManager;
