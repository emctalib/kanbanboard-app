import React, { useState, useEffect } from 'react';
import { PlusCircleFill } from 'react-bootstrap-icons';
import logo from './logo.svg';
import TaskColumn from './TaskColumn';
import modelJson from '../data/model.json';
import { ITodoDataItem, ITaskDataItems, ILoginUserInfo } from '../data/dataInfo';
import LoadingSpinner from './LoadingSpinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TaskItemDetail from './TaskItemDetail';

export type ITaskProps = {
    type: string;
    currentUser: ILoginUserInfo
}

export default class TaskContainer extends React.Component<ITaskProps, ITaskDataItems> {

    constructor(props: any) {
        super(props);
        this.state = { data: [], isLoading: true, showEditPopup: false, currentItem: undefined };;
    }

    async componentDidMount() {
        await fetch('https://api.mockaroo.com/api/1c0f4f40?count=1000&key=11d4c790'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(r => {
                console.log(r.length + " total records fetected.")
                this.setState({ data: r })
            }
            )
            .catch(error => {
                console.error('There was an error!', error);
            });

        this.setState({ isLoading: false });
        console.log("Component loaded.");
    }

    componentDidUpdate() {
        console.log("Component updated.");
    }

    filteredList(s: number) {
        const userId = this.props.currentUser.id;
        return this.state.data?.filter(function (v) {
            return v.assignee === userId && v.status === s;
        });
    }

    onDeleteTaskItemHandler = (id: number) => {
        var index = this.state.data?.findIndex((t) => t.id == id) || 0;
        this.setState({ data: this.state.data?.slice(index) });
        console.log(id + " - Delete event fired.")
        toast.success("Item has been deleted.");
    }

    onEditTaskItemHandler = (id: number) => {
        var item = this.state.data?.find((t) => t.id == id);
        console.log(id + " - Edit popup event fired.")
        this.setState({ showEditPopup: true, currentItem: item });
    }

    onShowDialogEvent = (show: boolean) => {
        this.setState({ showEditPopup: show });
        console.log("Edit popup " + (show ? "opened" : "closed") + ".");
    }

    render() {
        return (
            <>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
                <ToastContainer />
                {
                    this.state.showEditPopup ?
                        <TaskItemDetail item={this.state.currentItem} showDialog={this.state.showEditPopup} onShowDialog={this.onShowDialogEvent}></TaskItemDetail>
                        : "==="
                }
                {
                    this.state.isLoading ?
                        <LoadingSpinner isLoading={this.state.isLoading}></LoadingSpinner> :
                        <>
                            <div className='panelMargin'>
                                <div className="row row-cols-1 row-cols-md-4 g-4">
                                    <TaskColumn onEditTaskItem={this.onEditTaskItemHandler} onDeleteTaskItem={this.onDeleteTaskItemHandler} title='Pending' total={this.state.data && this.state.data.length} list={this.filteredList(0)}></TaskColumn>
                                    <TaskColumn onEditTaskItem={this.onEditTaskItemHandler} onDeleteTaskItem={this.onDeleteTaskItemHandler} title='In Progress' total={this.state.data && this.state.data.length} list={this.filteredList(1)}></TaskColumn>
                                    <TaskColumn onEditTaskItem={this.onEditTaskItemHandler} onDeleteTaskItem={this.onDeleteTaskItemHandler} title='In Review' total={this.state.data && this.state.data.length} list={this.filteredList(2)}></TaskColumn>
                                    <TaskColumn onEditTaskItem={this.onEditTaskItemHandler} onDeleteTaskItem={this.onDeleteTaskItemHandler} title='Completed' total={this.state.data && this.state.data.length} list={this.filteredList(3)}></TaskColumn>
                                </div>
                            </div>
                        </>

                }

            </>
        );
    }
}

/*
export const TaskContainer = () => {

    const getData = async () => {
        await fetch('https://api.mockaroo.com/api/1c0f4f40?count=1000&key=11d4c790'
            , {
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        )
            .then(function (response) {
                return response.json();
            })
            .then(function (myJson) {
                // let initData: ITaskDataItem[] = myJson
                setData1(myJson)
            });
    }
    useEffect(() => {
        getData()
    }, [])

    const [data1, setData1] = useState<ITaskDataItem[]>([]);

    //https://stackoverflow.com/questions/47658765/objects-are-not-valid-as-a-react-child-found-object-promise

    const initData: ITodoDataItem[] = modelJson
    const [data, setData] = useState(initData);

    console.log(data1.length)
    console.log(data1[0])
    console.log(data1[0].title)

    return (
        <>


            <div className='panelMargin'>
                <div className="row row-cols-1 row-cols-md-4 g-4">
                    <TaskColumn title='Pending' list={data}></TaskColumn>
                    <TaskColumn title='In Progress' list={data}></TaskColumn>
                    <TaskColumn title='In Review' list={data}></TaskColumn>
                    <TaskColumn title='Completed' list={data}></TaskColumn>
                </div>
            </div>
        </>
    )
}
*/