import React, { Component } from "react";
import {
    Card, CardBody, Col, Form, Row,
    Input, Label, Button, FormGroup, CustomInput
} from "reactstrap";
import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";
import draftToHtml from "draftjs-to-html";

export default class AddBrand extends Component {
    constructor (props) {
        super(props);
        this.state = {
            brand_name: "",
            selectedFile: null,
            selectedName: "",
            image: "",
            desc: "",
            status: "",

        }
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
        data.append("brand_name", this.state.brand_name);
        data.append("desc", this.state.desc);
        for (const file of this.state.selectedFile) {
            if (this.state.selectedFile !== null) {
                data.append("image", file, file.name);
            }
        }
        for (var value of data.values()) {
            console.log(value);
        }
        for (var key of data.keys()) {
            console.log(key);
        }
        axiosConfig
            .post("/admin/addbrand", data)
            .then((response) => {
                console.log(response.data);
                this.props.history.push("/app/freshlist/brand/brandList");
            })
            .catch((error) => {
                console.log(error.response);
            });
    };
    render() {
        return (
            <div>
                <Card>
                    <Row className="m-2">
                        <Col>
                            <h1 col-sm-6 className="float-left">
                                Add Brand
                            </h1>
                        </Col>
                        <Col>
                            <Button
                                className=" btn btn-danger float-right"
                                onClick={() => history.push("/app/freshlist/brand/brandList")}
                            >
                                Back
                            </Button>
                        </Col>
                    </Row>
                    <CardBody>
                        <Form className="m-1" onSubmit={this.submitHandler}>
                            <Row className="mb-2">
                                <Col lg="6" md="6" className="mb-2">

                                    <Label>Brand Name</Label>
                                    <Input
                                        type="text"
                                        placeholder=" BrandName"
                                        name="brand_name"
                                        value={this.state.brand_name}
                                        onChange={this.changeHandler}
                                    />
                                </Col>

                                <Col lg="6" md="6" className="mb-1">
                                    <Label>Brand Image</Label>
                                    <CustomInput
                                        type="file"
                                        onChange={this.onChangeHandler}
                                    />
                                </Col>
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
                                <Button.Ripple
                                    color="danger"
                                    type="submit"
                                    className="mr-1 mb-1"
                                >
                                    Add Brand
                                </Button.Ripple>
                            </Row>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        );
    }
}

