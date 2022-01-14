import React, { FC, useState } from 'react'
import { ITaskDataItem } from '../data/dataInfo';
import { PencilSquare, Trash } from 'react-bootstrap-icons';
import { Modal, Button } from 'react-bootstrap';

interface TaskItemDetailProps {
    item?: ITaskDataItem;
    showDialog: boolean;
    onShowDialog: Function;
}

const TaskItemDetail: FC<TaskItemDetailProps> = ({ item, showDialog, onShowDialog }) => {
    const [show, setShow] = useState(showDialog);
    const handleClose = () => {
        setShow(false);
        onShowDialog(false);
    };
    const handleShow = () => {
        setShow(true);
        onShowDialog(true);
    };

    const updateInputValue = (event: React.MouseEvent<HTMLInputElement>) => {
        alert(event);
        //const { target: { value } } = event;
        //this.setState({ recipeName: value });
    }
    //https://jasonwatmore.com/post/2020/10/14/react-hook-form-combined-add-edit-create-update-form-example
    return (
        <>
            <Modal show={show} onHide={handleClose} centered size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <p contentEditable>Task Details</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="form-group">
                        <label htmlFor="tbTitle">Title:</label>
                        <input type="text" className="form-control" id="tbTitle" value={item?.title} onChange={() => updateInputValue} placeholder="Please enter title." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="tbDesc">Description:</label>
                        <input type="text" className="form-control" value={item?.description} id="tbDesc" placeholder="Please enter description." />
                    </div>
                    <p contentEditable></p> </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default TaskItemDetail;