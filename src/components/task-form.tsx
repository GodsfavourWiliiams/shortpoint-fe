// TaskForm.tsx
import React, { useEffect, useState } from 'react';
import { TaskFormProps } from '../utils/types';

export const TaskForm: React.FC<TaskFormProps> = ({
  mode,
  initialTask,
  onSave,
  onDelete,
}) => {
  const [taskName, setTaskName] = useState<string>(initialTask?.name || '');

  useEffect(() => {
    if (initialTask) {
      setTaskName(initialTask.name);
    }
  }, [initialTask]);

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();
    if (taskName.trim()) {
      onSave({
        id: initialTask?.id || '',
        name: taskName.trim(),
        completed: initialTask?.completed || false,
      });
      setTaskName('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block leading-[19.44px] text-black mb-2">
          Task Name
        </label>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="w-full p-3 border bg-[#FDFDFD] border-[#CBCBCB] rounded-lg focus:ring-2 focus:ring-[#0D2972] focus:border-[#0D2972]"
          placeholder="Enter task name"
        />
      </div>
      <div className="flex items-center gap-4 absolute bottom-6 w-full">
        {mode === 'edit' && onDelete && (
          <button
            type="button"
            onClick={() => onDelete(initialTask!.id)}
            className="px-6 py-2 bg-[#AB3535] border h-[61px] w-fit border-[#720D0D] text-white rounded-lg hover:bg-[#AB3535]/80"
            style={{
              //   boxShadow: '0px 3px 1px 0px #A8B5DE80 inset',
              boxShadow: '0px 4px 4px 0px #00000040',
            }}
          >
            Delete
          </button>
        )}
        <button
          type="submit"
          className="px-6 py-2 bg-[#3556AB] h-[61px] w-[436px] text-white rounded-lg hover:bg-[#3556AB]/80"
          style={{
            //   boxShadow: '0px 3px 1px 0px #A8B5DE80 inset',
            boxShadow: '0px 4px 4px 0px #00000040',
          }}
        >
          Save
        </button>
      </div>
    </form>
  );
};
