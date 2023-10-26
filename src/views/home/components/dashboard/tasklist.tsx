import { SelectDropdown } from "common";
import { useCallback } from "react";
import { IStatus, statusList, tableHeader, useTaskManager } from "views";

export const TaskList = () => {
  const { taskList, updateTask, deleteTask, changeTaskStatus } =
    useTaskManager();

  const handleStatusChange = useCallback(
    (taskId: string) => {
      return (value: string) => {
        changeTaskStatus(taskId, value as IStatus);
      };
    },
    [changeTaskStatus]
  );

  return (
    <div className="table-container">
      <div className="th-container">
        {tableHeader.map(({ label, width }, idx) => {
          return (
            <div key={idx} style={{ width: width }}>
              {label}
            </div>
          );
        })}
      </div>
      {taskList.length > 0 ? (
        <table className="ui-table">
          <tbody>
            {taskList.map(({ id, title, description, status }) => (
              <tr key={id}>
                <td>{title}</td>
                <td>{description}</td>
                <td>
                  <SelectDropdown
                    value={status}
                    onChange={handleStatusChange(id)}
                    options={statusList}
                  />
                </td>
                <td>
                  <div className="action-container">
                    <div title="save task" onClick={() => updateTask(id)}>
                      <i className="ri-save-fill" />
                    </div>
                    <div
                      title="delete task"
                      id="delete-task"
                      onClick={() => deleteTask(id)}
                    >
                      <i id="delete-task" className="ri-delete-bin-fill" />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="empty-table">Empty List</div>
      )}
    </div>
  );
};
