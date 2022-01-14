import React, { useState, useEffect } from 'react';
import { PlusCircleFill } from 'react-bootstrap-icons';
import logo from './logo.svg';
import TaskColumn from './TaskColumn';
import modelJson from '../data/model.json';
import { ITodoDataItem, ITaskDataItems, ITaskProps } from '../data/dataInfo';

export default class TaskContainer extends React.Component<ITaskProps, ITaskDataItems> {

    constructor(props: any) {
        super(props);
        this.state = { data: [] };;
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
            .then(json => this.setState({ data: json }));

        //StatusBar.setNetworkActivityIndicatorVisible(true)
        //const res = await fetch('https://api.ipify.org?format=json')
        //const { ip } = await res.json()
        //await this.setStateAsync({ ipAddress: ip })
        //StatusBar.setNetworkActivityIndicatorVisible(false)
    }

    render() {
        return (
            <>
                {
                    this.state.data.length
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