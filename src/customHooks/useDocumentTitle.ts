import { useEffect } from "react";
import { useSelector } from "react-redux";
import { getIsEditing, getCurrentTask } from "../store/editing";

/**
 * Custom hook for updating the document title. Name started with 'use' to follow linting custom hook conventions 
 */
export function useDocumentTitle() {

  const isEditing = useSelector(getIsEditing);
  const currentEditingTask = useSelector(getCurrentTask);

  useEffect(() => {
    document.title = isEditing ? `Editing ${currentEditingTask.name} | To Do List App` : `To Do List App`;
  }, [isEditing, currentEditingTask]);
}