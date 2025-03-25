import React, { useState } from 'react';
import { DndContext, closestCenter, DragEndEvent } from '@dnd-kit/core';
import { SortableContext, verticalListSortingStrategy } from '@dnd-kit/sortable';
import KanbanColumn from '../components/KanbanColumn';
import { PlusIcon } from '@heroicons/react/24/solid';
import Layout from '../components/Layout';

type Task = {
  id: string;
  title: string;
  description?: string;
  column: 'todo' | 'inProgress' | 'review' | 'done';
  labels?: string[];
  dueDate?: Date;
};

const initialTasks: Task[] = [
  { id: '1', title: 'Design Dashboard', column: 'todo', labels: ['design'], dueDate: new Date() },
  { id: '2', title: 'Implement API', column: 'inProgress', labels: ['backend'] },
  { id: '3', title: 'Write Tests', column: 'review', labels: ['testing'] },
  { id: '4', title: 'Deploy to Production', column: 'done', labels: ['devops'] }
];

const Kanban: React.FC = () => {
  const [tasks, setTasks] = useState(initialTasks);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;
    if (active.id === over?.id) return;

    setTasks((tasks) => {
      const activeTask = tasks.find((task) => task.id === active.id);
      if (activeTask && over) {
        activeTask.column = over.id as Task['column'];
      }
      return [...tasks];
    });
  };

  return (
    <Layout>
      <div className="p-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Kanban Board</h1>
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
          <div className="flex gap-4 overflow-x-auto">
            <SortableContext items={tasks} strategy={verticalListSortingStrategy}>
              <KanbanColumn id="todo" title="To Do" tasks={tasks.filter((task) => task.column === 'todo')} />
              <KanbanColumn id="inProgress" title="In Progress" tasks={tasks.filter((task) => task.column === 'inProgress')} />
              <KanbanColumn id="review" title="Review" tasks={tasks.filter((task) => task.column === 'review')} />
              <KanbanColumn id="done" title="Done" tasks={tasks.filter((task) => task.column === 'done')} />
            </SortableContext>
          </div>
        </DndContext>
      </div>
    </Layout>
  );
};

export default Kanban;
