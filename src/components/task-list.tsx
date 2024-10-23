import React from 'react';
import { TaskItemProps, TaskListProps } from '../utils/types';
import { Check } from 'lucide-react';

export const TaskItem: React.FC<TaskItemProps> = ({
  task,
  onToggle,
  onEdit,
}) => (
  <div
    className="bg-white rounded-lg border justify-between border-[#E7E7E7] p-4 flex items-center gap-3 h-[91px]"
    style={{ boxShadow: '0px 4px 4px 0px #0000001A' }}
  >
    <div className="flex gap-4 items-center">
      <button
        onClick={() => onToggle(task.id)}
        className={`w-[32px] h-[32px] border-[1.5px] rounded-full flex items-center justify-center ${
          task.completed ? 'bg-[#53DA69] border-[#399649]' : 'border-[#071D55]'
        }`}
      >
        {task.completed && <Check className="w-4 h-4 text-[#399649]" />}
      </button>
      <span
        className={`${
          task.completed ? 'line-through text-[#8D8D8D]' : 'text-[#071D55]'
        } w-[173px] truncate`}
      >
        {task.name}
      </span>
    </div>
    <button
      onClick={() => onEdit(task)}
      className="ml-auto px-3 w-[51px] h-[45px] py-1 text-[#071D55] rounded border border-[#071D55]"
    >
      Edit
    </button>
  </div>
);

export const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onTaskToggle,
  onEditTask,
}) => (
  <div className="space-y-3">
    {tasks.map((task) => (
      <TaskItem
        key={task.id}
        task={task}
        onToggle={onTaskToggle}
        onEdit={onEditTask}
      />
    ))}
  </div>
);
