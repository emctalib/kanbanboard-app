import React, { FC } from 'react';
import { ITaskDataItem } from '../data/dataInfo';

interface TaskColumnProps {
  title: string;
  list: ITaskDataItem[];

}

const TaskColumn: FC<TaskColumnProps> = ({ title, list }) => {
  return (
    <>
      <div>
        <div >

          <div>
            <div className="card">
              <h5 className="card-header">{title} ({list.length})
              </h5>
              <div className="card-body">
                <div className="list-group">

                  {
                    list && list.length > 0 && list.map((item) =>
                      <a href="#" key={item.id} className="list-group-item list-group-item-action">
                        <div className="d-flex w-100 justify-content-between">
                          <h5 className="mb-1">{item.title}</h5>
                          <small className="text-muted">3 days ago</small>
                        </div>
                        <div className="d-flex w-100 justify-content-between">
                          <p className="mb-1">{item.text}</p>
                          <small className="text-muted">High Priorty</small>
                        </div>

                        <div className="form-check form-switch">
                          <input className="form-check-input" type="checkbox" id="cbComplete" defaultChecked={!item.completed} />
                          <label className="form-check-label" label-for="cbComplete">
                            <small className="text-muted">Mark as Completed.</small>
                          </label>
                        </div>
                      </a>
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