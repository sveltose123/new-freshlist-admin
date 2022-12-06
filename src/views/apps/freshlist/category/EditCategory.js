import React, { Component } from "react";
import {
    Card,
    CardBody,
    Col,
    Form,
    Row,
    Input,
    Label,
    Button,
    FormGroup, CustomInput
} from "reactstrap";
import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";

export class EditCategory extends Component {
    constructor (props) {
        super(props);
        this.state = {
            category_name: "",
            selectedFile: null,
            selectedName: "",
            desc: "",
            image: "",
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

        axiosConfig
            .post("/addbrand", data)
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
                                Update Category
                            </h1>
                        </Col>
                        <Col>
                            <Button
                                className=" btn btn-danger float-right"
                                onClick={() => history.push("/app/freshlist/category/categoryListt")}
                            >
                                Back
                            </Button>
                        </Col>
                    </Row>
                    <CardBody>
                        <Form className="m-1" onSubmit={this.submitHandler}>
                            <Row className="mb-2">
                                <Col lg="6" md="6">
                                    <Label>Category Name</Label>
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
                                        <Label>Description</Label>
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
                                        <Label>Title</Label>
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
                                        <Label>URl</Label>
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
                                        <Label>Type</Label>
                                        <CustomInput
                                            type="select"
                                            placeholder="Enter title Here"
                                            name="desc"
                                            value={this.state.desc}
                                            onChange={this.changeHandler}
                                        >
                                            <option>--Select--</option>
                                            <option value="Veg">Veg</option>
                                            <option value="Non-Veg">Non-Veg</option>
                                            <option value="Only Egg">Only Egg</option>
                                        </CustomInput>
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6">
                                    <FormGroup>
                                        <Label>Featured</Label>
                                        <CustomInput
                                            type="select"
                                            placeholder="Enter title Here"
                                            name="desc"
                                            value={this.state.desc}
                                            onChange={this.changeHandler}
                                        >
                                            <option>--Select--</option>
                                            <option value="Yes">Yes</option>
                                            <option value="No">No</option>

                                        </CustomInput>
                                    </FormGroup>
                                </Col>

                                <Col lg="6" md="6">
                                    <FormGroup>
                                        <Label>Web Thumbnail</Label>
                                        <CustomInput
                                            type="file"
                                            name="image"
                                            value={this.state.image}
                                            onChange={this.onChangeHandler}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6">
                                    <FormGroup>
                                        <Label>App Thumbnail</Label>
                                        <CustomInput
                                            type="file"
                                            name="image"
                                            value={this.state.image}
                                            onChange={this.onChangeHandler}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6">
                                    <FormGroup>
                                        <Label>Web Banner</Label>
                                        <CustomInput
                                            type="file"
                                            name="image"
                                            value={this.state.image}
                                            onChange={this.onChangeHandler}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6">
                                    <FormGroup>
                                        <Label>App Banner</Label>
                                        <CustomInput
                                            type="file"
                                            name="image"
                                            value={this.state.image}
                                            onChange={this.onChangeHandler}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6">
                                    <FormGroup>
                                        <Label>Suggested Product Set</Label>
                                        <CustomInput
                                            type="select"
                                            placeholder="Enter title Here"
                                            name="desc"
                                            value={this.state.desc}
                                            onChange={this.changeHandler}
                                        >
                                            <option>--Select--</option>
                                            <option value="1">1</option>
                                            <option value="2">2</option>

                                        </CustomInput>
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6">
                                    <FormGroup>
                                        <Label>Show On</Label>
                                        <CustomInput
                                            type="select"
                                            placeholder="Enter title Here"
                                            name="desc"
                                            value={this.state.desc}
                                            onChange={this.changeHandler}
                                        >
                                            <option>--Select--</option>
                                            <option value="List">List</option>
                                            <option value="App">App</option>
                                            <option value="Web">Web</option>
                                            <option value="Menu">Menu</option>

                                        </CustomInput>
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
                                    <FormGroup>
                                        <Label className="mb-1"><h3>Status</h3></Label>
                                        <div
                                            className="form-label-group"
                                            onChange={(e) => this.changeHandler1(e)}
                                        >
                                            <input
                                                style={{ marginRight: "3px" }}
                                                type="radio"
                                                name="status"
                                                value="true"
                                            />
                                            <span style={{ marginRight: "20px" }}>Enable</span>

                                            <input
                                                style={{ marginRight: "3px" }}
                                                type="radio"
                                                name="status"
                                                value="false"
                                            />
                                            <span style={{ marginRight: "3px" }}>Disable</span>
                                        </div>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Button.Ripple
                                    color="danger"
                                    type="submit"
                                    className="mr-1 mb-1"
                                >
                                    Update Category
                                </Button.Ripple>
                            </Row>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
export default EditCategory;