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
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";
import draftToHtml from "draftjs-to-html";

export class AddHouseProduct extends Component {
    constructor (props) {
        super(props);
        this.state = {
            product_name: "",
            selectedFile: null,
            selectedName: "",
            description: "",
            type: "",
            model: "",
            brand: "",
            quantity: "",
            gst_class: "",
            min_selling_Q: "",
            max_selling_Q: "",
            reward_points: "",
            product_image: "",
            video_url: "",
            meta_desc: "",
            metadata: "",
            product_search_tags: "",
            category: "",
            sub_category: "",
            mrp: "",
            buying_price: "",
            m_margin: "",
            selling_price: "",
            m_customer: "",
            save_parsent: "",
            units_name: "",
            buying_price1: "",
            createdAt: "",
            status: "",
        };
    }

    onChangeHandler = (event) => {
        this.setState({ selectedFile: event.target.files[0] });
        this.setState({ selectedName: event.target.files[0].name });
        console.log(event.target.files[0]);
    };
    onChangeHandler = (event) => {
        this.setState({ selectedFile: event.target.files });
        this.setState({ selectedName: event.target.files.name });
        console.log(event.target.files);
    };

    changeHandler1 = (e) => {
        this.setState({ status: e.target.value });
    };
    changeHandler = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
            desc: draftToHtml(convertToRaw(editorState.getCurrentContent())),
        });
    };
    submitHandler = (e) => {
        e.preventDefault();
        const data = new FormData();
        data.append("product_name", this.state.product_name);
        data.append("description", this.state.description);
        data.append("type", this.state.type);
        data.append("status", this.state.status);
        data.append("model", this.state.model);
        data.append("brand", this.state.brand);
        data.append("desc", this.state.desc);
        data.append("quantity", this.state.quantity);
        data.append("gst_class", this.state.gst_class);
        data.append("min_selling_Q", this.state.min_selling_Q);
        data.append("max_selling_Q", this.state.max_selling_Q);
        data.append("reward_points", this.state.reward_points);
        data.append("video_url", this.state.video_url);
        data.append("meta_desc", this.state.meta_desc);
        data.append("metadata", this.state.metadata);
        data.append("product_search_tags", this.state.product_search_tags);
        data.append("category", this.state.category);
        data.append("sub_category", this.state.sub_category);
        data.append("mrp", this.state.mrp);
        data.append("buying_price", this.state.buying_price);
        data.append("m_margin", this.state.m_margin);
        data.append("selling_price", this.state.selling_price);
        data.append("m_customer", this.state.m_customer);
        data.append("save_parsent", this.state.save_parsent);
        data.append("units_name", this.state.units_name);
        data.append("createdAt", this.state.createdAt);
        data.append("status", this.state.status);
        for (const file of this.state.selectedFile) {
            if (this.state.selectedFile !== null) {
                data.append("product_image", file, file.name);
            }
        }
        for (var value of data.values()) {
            console.log(value);
        }
        for (var key of data.keys()) {
            console.log(key);
        }
        axiosConfig
            .post("/admin/addproduct", data)
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
                                    <Label>Product Name</Label>
                                    <Input
                                        type="text"
                                        placeholder="Product Name"
                                        name="product_name"
                                        value={this.state.product_name}
                                        onChange={this.changeHandler}
                                    />
                                </Col>

                                <Col lg="6" md="6" className="mb-2">
                                    <Label>Type</Label>
                                    <CustomInput
                                        type="select"
                                        placeholder="Select Type"
                                        name="type"
                                        value={this.state.type}
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
                                        name="brand"
                                        value={this.state.brand}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Color</Label>
                                    <Input
                                        type="text"
                                        placeholder="color"
                                        name="color"
                                        value={this.state.color}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Model</Label>
                                    <Input
                                        type="text"
                                        placeholder="Enter Model"
                                        name="model"
                                        value={this.state.model}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>GST Class</Label>
                                    <Input
                                        type="text"
                                        placeholder="GST Class"
                                        name="gst_class"
                                        value={this.state.gst_class}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Minimum Selling Quatity</Label>
                                    <Input
                                        type="text"
                                        placeholder=""
                                        name="min_selling_Q"
                                        value={this.state.min_selling_Q}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Maximum Selling Quantity</Label>
                                    <Input
                                        type="text"
                                        placeholder=""
                                        name="max_selling_Q"
                                        value={this.state.max_selling_Q}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Reward Points</Label>
                                    <Input
                                        type="number"
                                        placeholder=""
                                        name="reward_points"
                                        value={this.state.reward_points}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Upload Product Images</Label>
                                    <CustomInput
                                        type="file"

                                        onChange={this.onchangeHandler}
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col lg="12" md="12" className="mb-1">
                                    <Label>Video Url</Label>
                                    <Input
                                        type="text"
                                        placeholder=""
                                        name="video_url"
                                        value={this.state.video_url}
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
                                        name="metadata"
                                        value={this.state.metadata}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="4" md="4" className="mb-1">
                                    <Label>MetaData Description </Label>
                                    <Input
                                        type="text"
                                        placeholder="Description"
                                        name="meta_desc"
                                        value={this.state.meta_desc}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                                <Col lg="4" md="4" className="mb-1">
                                    <Label>Product Search Tags</Label>
                                    <Input
                                        type="text"
                                        placeholder="Product Search Tags"
                                        name="product_search_tags"
                                        value={this.state.product_search_tags}
                                        onChange={this.changeHandler}
                                    />
                                </Col>
                            </Row>
                            <Row className="">
                                <Col lg="6" md="6" className="mb-2 mt-1">
                                    <FormGroup>
                                        <Label className="mb-1"><h3>Price</h3></Label>
                                        <div>
                                            <input
                                                style={{ marginRight: "3px" }}
                                                type="radio"
                                                name="status"
                                                value="MRP"
                                            />
                                            <span style={{ marginRight: "80px" }}>MRP</span>
                                            {this.state.buying_price1 === "" ? (
                                                <Row className="mb-2 mt-1">
                                                    <Col lg="6" md="6" >
                                                        <FormGroup>
                                                            <Label>Buying Price</Label>
                                                            <Input
                                                                type="text"
                                                                placeholder="Enter title Here"
                                                                name="buying_price"
                                                                value={this.state.buying_price}
                                                                onChange={this.changeHandler}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="6" md="6">
                                                        <FormGroup>
                                                            <Label>M Margin (%)</Label>
                                                            <Input
                                                                type="text"
                                                                placeholder="Enter title Here"
                                                                name="m_margin"
                                                                value={this.state.m_margin}
                                                                onChange={this.changeHandler}
                                                            />
                                                        </FormGroup>
                                                    </Col></Row>) : null}

                                            <input
                                                style={{ marginRight: "3px" }}
                                                type="radio"
                                                name="status"
                                                value="NO MRP"
                                            />
                                            <span style={{ marginRight: "3px" }}>NO MRP</span>

                                            {this.state.buying_price === "" ? (
                                                <Row className="mb-2 mt-1">
                                                    <Col lg="4" md="4">
                                                        <FormGroup>
                                                            <Label>Buying Price</Label>
                                                            <Input
                                                                type="text"
                                                                placeholder="Enter title Here"
                                                                name="buying_price1"
                                                                value={this.state.buying_price}
                                                                onChange={this.changeHandler}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="4" md="4">
                                                        <FormGroup>
                                                            <Label>M Margin (%)</Label>
                                                            <Input
                                                                type="text"
                                                                placeholder="Enter title Here"
                                                                name="m_margin"
                                                                value={this.state.m_margin}
                                                                onChange={this.changeHandler}
                                                            />
                                                        </FormGroup>
                                                    </Col>
                                                    <Col lg="4" md="4">
                                                        <FormGroup>
                                                            <Label>Selling Price</Label>
                                                            <Input
                                                                type="text"
                                                                placeholder="Enter title Here"
                                                                name="selling_price"
                                                                value={this.state.selling_price}
                                                                onChange={this.changeHandler}
                                                            />
                                                        </FormGroup>
                                                    </Col></Row>) : null}
                                        </div>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>

                                <Col lg="6" md="6">
                                    <FormGroup>
                                        <Label>Description</Label>
                                        <Editor
                                            toolbarClassName="demo-toolbar-absolute"
                                            wrapperClassName="demo-wrapper"
                                            editorClassName="demo-editor"
                                            editorState={this.state.editorState}
                                            onEditorStateChange={this.onEditorStateChange}
                                            toolbar={{
                                                image: {
                                                    uploadCallback: this.uploadImageCallBack,
                                                    previewImage: true,
                                                    alt: { present: false, mandatory: false },
                                                    uploadEnabled: true,
                                                    inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
                                                },
                                            }}
                                        />
                                    </FormGroup>
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