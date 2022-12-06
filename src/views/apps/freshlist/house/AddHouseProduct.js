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
    FormGroup,
    CustomInput,
    List,
} from "reactstrap";
import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";

export class AddHouseProduct extends Component {
    constructor (props) {
        super(props);
        this.state = {
            name: "",
            selectedFile: null,
            selectedName: "",
            sortorder: "",
            desc: "",
            brand_img: "",
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
        if (this.state.selectedFile !== null) {
            data.append(
                "brand_img",
                this.state.selectedFile,
                this.state.selectedName
            );
        }
        //   for (var value of data.values()) {
        //     console.log(value);
        //  }
        axiosConfig
            .post("/addbrand", data)
            .then((response) => {
                console.log(response);
                this.props.history.push("/app/freshlist/house/HouseProductList");
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
                                Add Product
                            </h1>
                        </Col>
                        <Col>
                            <Button
                                className=" btn btn-danger float-right"
                                onClick={() =>
                                    history.push("/app/freshlist/house/houseProductList")
                                }
                            >
                                Back
                            </Button>
                        </Col>
                    </Row>
                    <CardBody>
                        <Form className="m-1" onSubmit={this.submitHandler}>
                            <Row className="mb-2">
                                <Col lg="6" md="6" className="mb-2">
                                    <Label> Product Name</Label>
                                    <Input
                                        type="text"
                                        placeholder="Product Name"
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-2">
                                    <Label>Description</Label>
                                    <Input
                                        type="text"
                                        placeholder=""
                                        name="name"
                                        value={this.state.name}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-2">
                                    <Label>Type</Label>
                                    <CustomInput
                                        type="select"
                                        placeholder="Select Type"
                                        name="type"
                                        value={this.state.name}
                                        onChange={this.changeHandler}
                                    >
                                        <option>---Select---</option>
                                        <option value="veg">Veg</option>
                                        <option value="nonveg">Non-Veg</option>
                                        <option value="egg">Egg only</option>
                                    </CustomInput>
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Brand</Label>
                                    <Input
                                        type="text"
                                        placeholder="Enter brand"
                                        name="name"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Color</Label>
                                    <Input
                                        type="text"
                                        placeholder="color"
                                        name="name"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-2">
                                    <Label>Attribute</Label>
                                    <CustomInput
                                        type="select"
                                        placeholder="Select Type"
                                        name="type"
                                        value={this.state.name}
                                        onChange={this.changeHandler}
                                    >
                                        <option>---Select---</option>
                                        <option value="size">Size</option>
                                        <option value="type">Type</option>
                                    </CustomInput>
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Model</Label>
                                    <Input
                                        type="text"
                                        placeholder="Enter Model"
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>GST Class</Label>
                                    <Input
                                        type="text"
                                        placeholder="GST Class"
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Minimum Selling Quatity</Label>
                                    <Input
                                        type="text"
                                        placeholder=""
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Maximum Selling Quantity</Label>
                                    <Input
                                        type="text"
                                        placeholder=""
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Reward Points</Label>
                                    <Input
                                        type="number"
                                        placeholder=""
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Upload Product Images</Label>
                                    <CustomInput
                                        type="file"
                                        placeholder=""
                                        name=""
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Upload Product Images</Label>
                                    <CustomInput
                                        type="file"
                                        placeholder=""
                                        name=""
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>

                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Upload Product Images</Label>
                                    <CustomInput
                                        type="file"
                                        placeholder=""
                                        name=""
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="12" md="12" className="mb-1">
                                    <Label>Video Url</Label>
                                    <Input
                                        type="text"
                                        placeholder=""
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                            </Row>
                            <Row className="my-1">
                                <Col lg="12" md="12">
                                    <h1 col-sm-6 className="float-left">
                                        SEO
                                    </h1>
                                </Col>
                            </Row>

                            <Row>
                                <Col lg="4" md="4" className="mb-1">
                                    <Label>MetaData</Label>
                                    <Input
                                        type="text"
                                        placeholder="MetaData"
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="4" md="4" className="mb-1">
                                    <Label>MetaData Description </Label>
                                    <Input
                                        type="text"
                                        placeholder="Description"
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="4" md="4" className="mb-1">
                                    <Label>Product Search Tags</Label>
                                    <Input
                                        type="text"
                                        placeholder="Product Search Tags"
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                            </Row>
                            <Row className="">
                                <h1 className="my-1"> Price </h1>
                                <Col lg="12" md="12" sm="12" className="mb-2 mt-1">
                                    <FormGroup>
                                        <div
                                            className="form-label-group"
                                            onChange={(e) => this.changeHandler1(e)}
                                        >
                                            <input
                                                style={{ marginRight: "3px" }}
                                                type="radio"
                                                name="status"
                                                value="MRP"
                                            />
                                            <span style={{ marginRight: "80px" }}>MRP</span>

                                            <input
                                                style={{ marginRight: "3px" }}
                                                type="radio"
                                                name="status"
                                                value="NO MRP"
                                            />
                                            <span style={{ marginRight: "3px" }}>NO MRP</span>
                                        </div>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>MRP</Label>
                                    <Input
                                        type="text"
                                        placeholder="MRP"
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Buying Price </Label>
                                    <Input
                                        type="text"
                                        placeholder="Buying Price"
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>M Margin (%)</Label>
                                    <Input
                                        type="text"
                                        placeholder="M Margin"
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>

                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Selling Price</Label>
                                    <Input
                                        type="text"
                                        placeholder="Selling Price"
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>M Customer </Label>
                                    <Input
                                        type="text"
                                        placeholder="M Customer"
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Save %</Label>
                                    <Input
                                        type="text"
                                        placeholder="Save"
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                            </Row>
                            <Row className="">
                                <Col lg="12" md="12" sm="12" className="mb-2 mt-1">
                                    <FormGroup>
                                        <div
                                            className="form-label-group"
                                            onChange={(e) => this.changeHandler1(e)}
                                        >
                                            <input
                                                style={{ marginRight: "3px" }}
                                                type="radio"
                                                name="status"
                                                value="MRP"
                                            />
                                            <span style={{ marginRight: "80px" }}>MRP</span>

                                            <input
                                                style={{ marginRight: "3px" }}
                                                type="radio"
                                                name="status"
                                                value="NO MRP"
                                            />
                                            <span style={{ marginRight: "3px" }}>NO MRP</span>
                                        </div>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>MRP</Label>
                                    <Input
                                        type="text"
                                        placeholder="MRP"
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Buying Price </Label>
                                    <Input
                                        type="text"
                                        placeholder="Buying Price"
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>M Margin (%)</Label>
                                    <Input
                                        type="text"
                                        placeholder="M Margin"
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>

                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Selling Price</Label>
                                    <Input
                                        type="text"
                                        placeholder="Selling Price"
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>M Customer </Label>
                                    <Input
                                        type="text"
                                        placeholder="M Customer"
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Save %</Label>
                                    <Input
                                        type="text"
                                        placeholder="Save"
                                        name="type"
                                        value={this.state.sortorder}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <FormGroup check inline>
                                    <List type="unstyled">
                                        <li>
                                            <Input type="checkbox" />
                                            <Label check>Category</Label>
                                            <ul>
                                                <li style={{ listStyleType: "none" }}>
                                                    <Input type="checkbox" />
                                                    <Label check> Sub Category</Label>
                                                </li>
                                                <li style={{ listStyleType: "none" }}>
                                                    <Input type="checkbox" />
                                                    <Label check> Sub Category</Label>
                                                </li>
                                            </ul>
                                        </li>
                                    </List>
                                </FormGroup>
                                <FormGroup check inline>
                                    <List type="unstyled">
                                        <li>
                                            <Input type="checkbox" />
                                            <Label check>Category</Label>
                                            <ul>
                                                <li style={{ listStyleType: "none" }}>
                                                    <Input type="checkbox" />
                                                    <Label check> Sub Category</Label>
                                                </li>
                                                <li style={{ listStyleType: "none" }}>
                                                    <Input type="checkbox" />
                                                    <Label check> Sub Category</Label>
                                                </li>
                                            </ul>
                                        </li>
                                    </List>
                                </FormGroup>
                            </Row>
                            <Row>
                                <Button.Ripple
                                    color="primary"
                                    type="submit"
                                    className="mr-1 mb-1"
                                >
                                    Add
                                </Button.Ripple>
                            </Row>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        );
    }
}
export default AddHouseProduct;