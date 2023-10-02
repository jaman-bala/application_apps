import {Fragment, useState} from "react";
import {Button, Modal, ModalHeader, ModalBody} from "reactstrap";
import TaskForm from "../appTaskForm/TaskForm";

const ModalTasks = (props) => {
    const [visible, setVisible] = useState(false)
    var button = <Button onClick={() => toggle()}>Редактировать</Button>;

    const toggle = () => {
        setVisible(!visible)
    }

    if (props.create) {
        button = (
            <Button
                color="primary"
                className="float-right"
                onClick={() => toggle()}
                style={{minWidth: "200px"}}>
                Добавить студента
            </Button>
        )
    }
    return (
        <Fragment>
            {button}
            <Modal isOpen={visible} toggle={toggle}>
                <ModalHeader
                    style={{justifyContent: "center"}}>{props.create ? "Добавить задачу" : "Редактировать задачу"}</ModalHeader>
                <ModalBody>
                    <TaskForm
                        task={props.task ? props.task : []}
                        resetState={props.resetState}
                        toggle={toggle}
                        newTask={props.newTask}
                    />
                </ModalBody>
            </Modal>
        </Fragment>
    )
}
export default ModalTasks;