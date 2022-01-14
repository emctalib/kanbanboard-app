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

    return (
        <>
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <p contentEditable>{item?.title} - Task Details</p>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p contentEditable>{item?.description}</p> </Modal.Body>
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