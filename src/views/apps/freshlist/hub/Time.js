import React, { Component } from "react";

import {
    Card,
    CardBody,
    Col,
    Form,
    Row,
    Input,
    CustomInput,
    Label,
    Button,
} from "reactstrap";
import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";

export class Time extends Component {
    constructor (props) {
        super(props);

        this.state = {
            name: "",
            selectedFile: null,
            selectedName: "",
            sortorder: "",
            desc: "",
            product_img: "",
            status: "",
        };
    }

    onChangeHandler = (event) => {
        this.setState({ selectedFile: event.target.files[0] });
        this.setState({ selectedName: event.target.files[0].name });
        console.log(event.target.files[0]);
    };

    changeHandler1 = (e) => {
        this.setState({ status: e.target.value });
    };
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    submitHandler = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("name", this.state.name);
        data.append("sortorder", this.state.sortorder);
        data.append("desc", this.state.desc);
        data.append("status", this.state.status);
        data.append(
            "product_img",
            this.state.selectedFile,
            this.state.selectedName
        );
        //   for (var value of data.values()) {
        //     console.log(value);
        //  }
        axiosConfig
            .post(" /addproductcategory", data)
            .then((response) => {
                console.log(response);
                this.props.history.push("/app/category/category");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    render() {
        return (
            <div>

                <div>
                    <Card>
                        <Row className="m-1">
                            <Col >
                                <h3 col-sm-6 className="float-left">
                                    Hub Open/Close Time
                                </h3>
                            </Col>
                        </Row>
                        <CardBody>
                            <Form className="m-1" onSubmit={this.submitHandler}>
                                <Row className="mb-2">
                                    <Col lg="4" md="4" className="mb-2">

                                        <Label>Days</Label>
                                        <Input
                                            type="select"
                                            name="type"
                                            value={this.state.type}
                                            onChange={this.changeHandler}
                                        >
                                            <option>Monday</option>
                                            <option>Tuesday</option>
                                            <option>Wednesday</option>
                                            <option>Thursday</option>
                                            <option>Friday</option>
                                            <option>Saturday</option>
                                            <option>Sunday</option>
                                        </Input>
                                    </Col>
                                    <Col lg="4" md="4" className="mb-1">
                                        <Label>Opening Time</Label>
                                        <Input
                                            type="time"
                                            name="Password"
                                            value={this.state.desc}
                                            onChange={this.changeHandler}
                                        >
                                        </Input>
                                    </Col>

                                    <Col lg="4" md="4" className="mb-1">
                                        <Label>Closing Time</Label>
                                        <Input
                                            required
                                            type="time"
                                            name="Enter Password"
                                            placeholder="Enter Password."
                                            value={this.state.date}
                                            onChange={this.changeHandler}
                                        ></Input>
                                    </Col>
                                </Row>
                                <Row>
                                    <Button.Ripple
                                        color="danger"
                                        type="submit"
                                        className="mr-1 mb-1"
                                    >
                                        Save
                                    </Button.Ripple>
                                </Row>
                            </Form>
                        </CardBody>
                    </Card>
                </div >

            </div >
        );
    }
}
export default Time;