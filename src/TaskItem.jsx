import React from 'react';

const TaskItem = ({ task, onDelete }) => {
  return (
    <li>
      {task}
      <button onClick={onDelete}>Excluir</button>
    </li>
  );
};

export default TaskItem;
