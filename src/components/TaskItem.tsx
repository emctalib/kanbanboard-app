import React, { FC } from 'react'
import { ITaskDataItem } from '../data/dataInfo';
import { PencilSquare, Trash } from 'react-bootstrap-icons';
import TaskItemDetail from './TaskItemDetail';


interface TaskItemProps {
    index: number;
    item: ITaskDataItem;
    onDeleteTaskItem: Function,
    onEditTaskItem: Function
}

const TaskItem: FC<TaskItemProps> = ({ index, item, onDeleteTaskItem, onEditTaskItem }) => {

    const onMouseEnterEvent = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const box: HTMLAnchorElement = event.currentTarget;
        const el = box.getElementsByClassName("showButtons")[0];
        box.className += " active"
        //console.log("Mouse entered." + box.className)
        event.preventDefault();
    };

    const onMouseEnterLeaveEvent = (event: React.MouseEvent<HTMLAnchorElement>) => {
        const box: HTMLAnchorElement = event.currentTarget;
        box.className = box.className.replace(" active", "");
        const el = box.getElementsByClassName("showButtons")[0];
        //console.log("Mouse left." + box.className)
        event.preventDefault();
    };

    const deleteTaskItem = (event: React.MouseEvent<HTMLDivElement>) => {
        onDeleteTaskItem(item.id);
    };

    const editTaskItem = (event: React.MouseEvent<HTMLDivElement>) => {
        onEditTaskItem(item.id);
    };


    return (
        <>
            <a href="#" key={item.id} className="list-group-item list-group-item-action taskItem" onMouseEnter={onMouseEnterEvent} onMouseLeave={onMouseEnterLeaveEvent}>
                <div className="d-flex w-100 justify-content-between">
                    <h5 className="mb-1">{item.title}</h5>
                    <small className="text-muted">{item.dueDate}</small>
                </div>
                <div className="d-flex w-100 justify-content-between">
                    <p className="mb-1">{item.description}</p>
                </div>
                <div className="d-flex w-100 justify-content-between">
                    <small className="text-muted">Estimated Time: {Math.round(item.estimatedHours / 60.0)} hours.</small>
                </div>
                <div className='showButtons text-end'>
                    <span onClick={deleteTaskItem}>
                        <Trash className='text-danger' ></Trash>
                    </span>
                    &nbsp;
                    <span onClick={editTaskItem}>
                        <PencilSquare className='text-info'></PencilSquare>
                    </span>

                </div>
            </a>
        </>
    )
}

export default TaskItem;