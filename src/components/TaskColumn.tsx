import React, { FC } from 'react';
import { ITaskDataItem } from '../data/dataInfo';
import TaskItem from './TaskItem';

interface TaskColumnProps {
  title: string;
  list?: ITaskDataItem[];
  total?: number;
  onDeleteTaskItem: Function,
  onEditTaskItem: Function
}

const TaskColumn: FC<TaskColumnProps> = ({ title, total, list, onDeleteTaskItem, onEditTaskItem }) => {


  return (
    <>
      <div>
        <div >

          <div>
            <div className="card">
              <h5 className="card-header">{title} ({list && list.length}/{total})
              </h5>
              <div className="card-body">
                <div className="list-group">

                  {
                    list && list.length > 0 && list.map((item, index) =>
                      <TaskItem item={item} index={index} onDeleteTaskItem={onDeleteTaskItem} onEditTaskItem={onEditTaskItem}></TaskItem>
                    )
                  }
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default TaskColumn;