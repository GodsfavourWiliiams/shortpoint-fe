export interface Task {
  id: string;
  name: string;
  completed: boolean;
}

export interface TaskFormProps {
  mode: 'add' | 'edit';
  initialTask?: Task;
  onSave: (task: Task) => void;
  onDelete?: (id: string) => void;
}

export interface TaskListProps {
  tasks: Task[];
  onTaskToggle: (id: string) => void;
  onEditTask: (task: Task) => void;
}

export interface TaskItemProps {
  task: Task;
  onToggle: (id: string) => void;
  onEdit: (task: Task) => void;
}
