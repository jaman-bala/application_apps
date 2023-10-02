import {Container, Row, Col} from "reactstrap";
import ListTasks from "../appListTasks/ListTasks";
import axios from "axios";
import {useEffect, useState} from "react";
import ModalTasks from "../appModalTasks/ModalTasks";
import {API_URL} from "../../index";

const Home = () => {
    const [tasks, setTasks] = useState([])

    useEffect(()=>{
        getTasks()
    },[])

    const getTasks = (data)=>{
        axios.get(API_URL).then(data => setTasks(data.data))
    }

    const resetState = () => {
        getTasks();
    };

    return (
        <Container style={{marginTop: "20px"}}>
            <Row>
                <Col>
                    <ListTasks tasks={tasks} resetState={resetState} newTask={false}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ModalTasks
                    create={true}
                    resetState={resetState}
                    newTask={true}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;