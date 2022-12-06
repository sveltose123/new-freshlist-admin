import React, { Component } from "react";
import { Card, CardBody, Col, Form, Row, Input, Label, Button, FormGroup, CustomInput } from "reactstrap";
import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";

export class AddHub extends Component {
    constructor (props) {
        super(props);
        this.state = {
            category_name: "",
            desc: "",
            image: "",
            title: "",
            type: "",
            selectedFile: null,
            selectedName: "",
            url: "",
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
        data.append("category_name", this.state.category_name);
        data.append("desc", this.state.desc);
        data.append("status", this.state.status);
        if (this.state.selectedFile !== null) {
            data.append(
                "image",
                this.state.selectedFile,
                this.state.selectedName
            );
        }
        for (var value of data.values()) {
            console.log(value);
        }
        axiosConfig
            .post("/admin/addcategory", data)
            .then((response) => {
                console.log(response);
                this.props.history.push("/app/freshlist/category/categoryList");
            })
            .catch((error) => {
                console.log(error);
            });
    };
    render() {
        return (
            <div>
                <Card>
                    <Row className="m-2">
                        <Col>
                            <h1 col-sm-6 className="float-left">
                                Add
                            </h1>
                        </Col>
                        <Col>
                            <Button
                                className=" btn btn-danger float-right"
                                onClick={() => history.push("/app/freshlist/hub/HubList")}
                            >
                                Back
                            </Button>
                        </Col>
                    </Row>
                    <CardBody>
                        <Form className="m-1" onSubmit={this.submitHandler}>
                            <Row className="mb-2">
                                <Col lg="6" md="6">
                                    <Label>Name</Label>
                                    <Input
                                        type="text"
                                        placeholder="Customer Name"
                                        name="category_name"
                                        value={this.state.category_name}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6">
                                    <FormGroup>
                                        <Label>Order No.</Label>
                                        <Input
                                            type="text"
                                            placeholder="Enter Here"
                                            name="desc"
                                            value={this.state.desc}
                                            onChange={this.changeHandler}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6">
                                    <FormGroup>
                                        <Label>Hub Type</Label>
                                        <Input
                                            type="select"
                                            placeholder="Enter title Here"
                                            name="desc"
                                            value={this.state.desc}
                                            onChange={this.changeHandler}
                                        >
                                            <option value="Service">Service</option>
                                            <option value="Food Delivery">Food Delivery</option>
                                            <option value="Parcel Delivery">Parcel Delivery</option>
                                            <option value="Pharmacy">Pharmacy</option>
                                            <option value="Geocery">Geocery</option>

                                        </Input>
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6">
                                    <FormGroup>
                                        <Label>Description</Label>
                                        <Input
                                            type="urL"
                                            placeholder=""
                                            name="desc"
                                            value={this.state.desc}
                                            onChange={this.changeHandler}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6">
                                    <FormGroup>
                                        <Label>Phone</Label>
                                        <Input
                                            type="Number"
                                            placeholder="Enter Number Here"
                                            name="desc"
                                            value={this.state.desc}
                                            onChange={this.changeHandler}
                                        />

                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6">
                                    <FormGroup>
                                        <Label>Email</Label>
                                        <Input
                                            type="select"
                                            placeholder="Enter Here"
                                            name="desc"
                                            value={this.state.desc}
                                            onChange={this.changeHandler}
                                        />
                                    </FormGroup>
                                </Col>

                                <Col lg="6" md="6">
                                    <FormGroup>
                                        <Label>Address</Label>
                                        <Input
                                            type="text"
                                            name="image"
                                            value={this.state.image}
                                            onChange={this.onChangeHandler}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6">
                                    <FormGroup>
                                        <Label>Latitude</Label>
                                        <Input
                                            type="text"
                                            name="image"
                                            value={this.state.image}
                                            onChange={this.onChangeHandler}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6">
                                    <FormGroup>
                                        <Label>Longitude</Label>
                                        <Input
                                            type="text"
                                            name="image"
                                            value={this.state.image}
                                            onChange={this.onChangeHandler}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6">
                                    <FormGroup>
                                        <Label>Delivery Zone</Label>
                                        <Input
                                            type="text"
                                            name="image"
                                            value={this.state.image}
                                            onChange={this.onChangeHandler}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6">
                                    <FormGroup>
                                        <Label>Category</Label>
                                        <Input
                                            type="select"
                                            placeholder="Enter title Here"
                                            name="desc"
                                            value={this.state.desc}
                                            onChange={this.changeHandler}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6">
                                    <FormGroup>
                                        <Label>Delivery Fee</Label>
                                        <Input
                                            type="text"
                                            name="image"
                                            value={this.state.image}
                                            onChange={this.onChangeHandler}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6">
                                    <FormGroup>
                                        <Label>Delivery Range(KM)</Label>
                                        <Input
                                            type="Number"
                                            name="image"
                                            value={this.state.image}
                                            onChange={this.onChangeHandler}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6" sm="6">
                                    <FormGroup>
                                        <Row style={{ marginTop: "28px" }}>

                                            <h5 style={{ marginRight: "10px" }}>Charge per KM</h5>
                                            <Col>
                                                <Input
                                                    type="checkbox"
                                                    name="image"
                                                    value={this.state.image}
                                                    onChange={this.onChangeHandler}
                                                /></Col>
                                            <h5 style={{ marginRight: "10px", marginBottom: '20px' }}>Schedule Order</h5>
                                            <Col>
                                                <Input
                                                    type="checkbox"
                                                    name="image"
                                                    value={this.state.image}
                                                    onChange={this.onChangeHandler}
                                                /></Col>

                                            <h5 style={{ marginRight: "10px" }}>Auto Accept Order</h5>
                                            <Col>
                                                <Input
                                                    type="checkbox"
                                                    name="image"
                                                    value={this.state.image}
                                                    onChange={this.onChangeHandler}
                                                /></Col>


                                        </Row>
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6">
                                    <FormGroup>
                                        <Label>Delivery Time</Label>
                                        <Input
                                            type="text"
                                            placeholder="Enter title Here"
                                            name="desc"
                                            value={this.state.desc}
                                            onChange={this.changeHandler}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6">
                                    <FormGroup>
                                        <Label>Image</Label>
                                        <CustomInput
                                            type="file"
                                            name="desc"
                                            value={this.state.desc}
                                            onChange={this.changeHandler}
                                        />
                                    </FormGroup>
                                </Col>

                            </Row>
                            <Row>
                                <Button.Ripple
                                    color="danger"
                                    type="submit"
                                    className="mr-1 mb-1"
                                >
                                    Add
                                </Button.Ripple>
                            </Row>
                        </Form>
                    </CardBody>
                </Card>
            </div >
        );
    }
}
export default AddHub;