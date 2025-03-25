import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import KanbanCard from './KanbanCard';
import { Task } from '../pages/Kanban';

interface KanbanColumnProps {
  id: string;
  title: string;
  tasks: Task[];
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ id, title, tasks }) => {
  const { setNodeRef } = useDroppable({ id });

  return (
    <div ref={setNodeRef} className="flex-1 min-w-[300px]">
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        {title} <span className="text-gray-500">({tasks.length})</span>
      </h2>
      <div className="space-y-4">
        {tasks.map((task) => (
          <KanbanCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default KanbanColumn;
