import React, { Component } from "react";
import { Card, CardBody, Col, Form, Row, Input, Label, Button, FormGroup, CustomInput } from "reactstrap";
import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";
import draftToHtml from "draftjs-to-html";

export class AddCategory extends Component {
    constructor (props) {
        super(props);
        this.state = {
            category_name: "",
            desc: "",
            image: "",
            title: "",
            type: "",
            feature: "",
            selectedFile: null,
            selectedName: "",
            url: "",
            thumbnail_img: "",
            editorState: EditorState.createEmpty(),
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
    onChangeHandler1 = (event) => {
        this.setState({ selectedFile1: event.target.files });
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
        data.append("category_name", this.state.category_name);
        data.append("title", this.state.title);
        data.append("desc", this.state.desc);
        data.append("feature", this.state.feature);
        data.append("type", this.state.type);
        data.append("url", this.state.url);
        data.append("status", this.state.status);
        for (const file of this.state.selectedFile) {
            if (this.state.selectedFile !== null) {
                data.append("image", file, file.name);
            }
        }
        for (const file of this.state.selectedFile1) {
            if (this.state.selectedFile1 !== null) {
                data.append("thumbnail_img", file, file.name);
            }
        }
        for (var value of data.values()) {
            console.log(value);
        }
        for (var key of data.keys()) {
            console.log(key);
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
                                Add Category
                            </h1>
                        </Col>
                        <Col>
                            <Button
                                className=" btn btn-danger float-right"
                                onClick={() => history.push("/app/freshlist/category/categoryList")}
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
                                        placeholder="Category Name"
                                        name="category_name"
                                        value={this.state.category_name}
                                        onChange={this.changeHandler}
                                    />
                                </Col>

                                <Col lg="6" md="6">
                                    <FormGroup>
                                        <Label>Title</Label>
                                        <Input
                                            type="text"
                                            placeholder="Enter title Here"
                                            name="title"
                                            value={this.state.title}
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
                                            name="url"
                                            value={this.state.url}
                                            onChange={this.changeHandler}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col lg="6" md="6">
                                    <FormGroup>
                                        <Label>Type</Label>
                                        <CustomInput
                                            type="select"
                                            name="type"
                                            value={this.state.type}
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
                                            name="feature"
                                            value={this.state.feature}
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
                                            name="thumbnail_img"
                                            value={this.state.thumbnail_img}
                                            onChange={this.onChangeHandler1}
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
                                                // options: [
                                                //   "inline",
                                                //   "blockType",
                                                //   "fontSize",
                                                //   "fontFamily",
                                                // ],
                                                // inline: {
                                                //   options: [
                                                //     "bold",
                                                //     "italic",
                                                //     "underline",
                                                //     "strikethrough",
                                                //     "monospace",
                                                //   ],
                                                //   bold: { className: "bordered-option-classname" },
                                                //   italic: { className: "bordered-option-classname" },
                                                //   underline: { className: "bordered-option-classname" },
                                                //   strikethrough: {
                                                //     className: "bordered-option-classname",
                                                //   },
                                                //   code: { className: "bordered-option-classname" },
                                                // },
                                                // blockType: {
                                                //   className: "bordered-option-classname",
                                                // },
                                                // fontSize: {
                                                //   className: "bordered-option-classname",
                                                // },
                                                // fontFamily: {
                                                //   className: "bordered-option-classname",
                                                // },
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
                                    Add Category
                                </Button.Ripple>
                            </Row>
                        </Form>
                    </CardBody>
                </Card >
            </div >
        );
    }
}
export default AddCategory;