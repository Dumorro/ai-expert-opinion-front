import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Task } from '../pages/Kanban';

interface KanbanCardProps {
  task: Task;
}

const KanbanCard: React.FC<KanbanCardProps> = ({ task }) => {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
    >
      <h3 className="font-medium text-gray-900">{task.title}</h3>
      {task.description && <p className="text-sm text-gray-600 mt-1">{task.description}</p>}
      <div className="mt-2 flex items-center space-x-2">
        {task.labels?.map((label) => (
          <span key={label} className="text-xs px-2 py-1 bg-gray-100 rounded-full">
            {label}
          </span>
        ))}
      </div>
    </div>
  );
};

export default KanbanCard;
