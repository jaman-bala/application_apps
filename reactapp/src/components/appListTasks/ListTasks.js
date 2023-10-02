import {Table} from "reactstrap";
import ModalTasks from "../appModalTasks/ModalTasks";
import AppRemoveTask from "../appRemoveTask/appRemoveTask";
import ModalPhoto from "../appPhotoModal/ModalPhoto";

const ListTasks = (props) => {
    const {tasks} = props
    return (
        <Table dark>
            <thead>
            <tr>
                <th>First_name</th>
                <th>Last_name</th>
                <th>Email</th>
                <th>Document</th>
                <th>Phone</th>
                <th>Registration</th>
                <th>Photo</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {!tasks || tasks.length <= 0 ? (
                <tr>
                    <td colSpan="6" align="center">
                        <b>Пока ничего нет</b>
                    </td>
                </tr>
            ) : tasks.map(task => (
                    <tr key={task.pk}>
                        <td>{task.first_name}</td>
                        <td>{task.last_name}</td>
                        <td>{task.email}</td>
                        <td>{task.document}</td>
                        <td>{task.phone}</td>
                        <td>{task.registrationDate}</td>
                        <td><ModalPhoto
                            task={task}
                        /></td>
                        <td>
                            <ModalTasks
                                create={false}
                                task={task}
                                resetState={props.resetState}
                                newTask={props.newTask}
                            />
                            &nbsp;&nbsp;
                            <AppRemoveTask
                                pk={task.pk}
                                resetState={props.resetState}
                            />
                        </td>
                    </tr>
                )
            )}
            </tbody>
        </Table>
    )
}

export default ListTasks;