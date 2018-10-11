import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Timer from './Timer';
import TimerForm from './TimerForm';

// Khai báo Component như là một function
// Tham số truyền vào là một đối tượng
export default function EditableTimer({
  id,
  title,
  project,
  elapsed,
  isRunning,
  editFormOpen,
}) {
  if (editFormOpen) {
    return <TimerForm id={id} title={title} project={project} />;
  }

  return (
    <Timer
      id={id}
      title={title}
      project={project}
      elapsed={elapsed}
      isRunning={isRunning}
    />
  );
}
