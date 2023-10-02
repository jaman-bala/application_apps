import {useEffect, useState} from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import axios from "axios";
import {API_URL} from "../../index";

const TaskForm = (props) => {
    const [task, setTask] = useState({})

    const onChange = (e) => {
        const newState = task
        if (e.target.first_name === "file") {
            newState[e.target.first_name] = e.target.files[0]
        } else newState[e.target.first_name] = e.target.value
        setTask(newState)
    }

    useEffect(() => {
        if (!props.newTask) {
            setTask(task => props.task)
        }
        // eslint-disable-next-line
    }, [props.task])

    const defaultIfEmpty = value => {
        return value === "" ? "" : value;
    }

    const submitDataEdit = async (e) => {
        e.preventDefault();
        // eslint-disable-next-line
        const result = await axios.put(API_URL + task.pk, task, {headers: {'Content-Type': 'multipart/form-data'}})
            .then(() => {
                props.resetState()
                props.toggle()
            })
    }
    const submitDataAdd = async (e) => {
        e.preventDefault();
        const data = {
            first_name: task['first_name'],
            last_name: task['last_name'],
            email: task['email'],
            document: task['document'],
            phone: task['phone'],
            photo: "/",
            file: task['file'],
        }
        // eslint-disable-next-line
        const result = await axios.post(API_URL, data, {headers: {'Content-Type': 'multipart/form-data'}})
            .then(() => {
                props.resetState()
                props.toggle()
            })
    }
    return (
        <Form onSubmit={props.newTask ? submitDataAdd : submitDataEdit}>
            <FormGroup>
                <Label for="last_name">Last_name:</Label>
                <Input
                    type="text"
                    last_name="last_name"
                    onChange={onChange}
                    defaultValue={defaultIfEmpty(task.last_name)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="first_name">First_name:</Label>
                <Input
                    type="text"
                    first_name="first_name"
                    onChange={onChange}
                    defaultValue={defaultIfEmpty(task.first_name)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input
                    type="email"
                    name="email"
                    onChange={onChange}
                    defaultValue={defaultIfEmpty(task.email)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="document">Document:</Label>
                <Input
                    type="text"
                    name="document"
                    onChange={onChange}
                    defaultValue={defaultIfEmpty(task.document)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="phone">Phone:</Label>
                <Input
                    type="text"
                    name="phone"
                    onChange={onChange}
                    defaultValue={defaultIfEmpty(task.phone)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="photo">Photo:</Label>
                <Input
                    type="file"
                    name="file"
                    onChange={onChange}
                    accept='image/*'
                />
            </FormGroup>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <Button>Send</Button> <Button onClick={props.toggle}>Cancel</Button>
            </div>
        </Form>
    )
}

export default TaskForm;