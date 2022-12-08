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
} from "reactstrap";
import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../../../../assets/scss/plugins/extensions/editor.scss";
import draftToHtml from "draftjs-to-html";

export class AddUnit extends Component {
  constructor (props) {
    super(props);

    this.state = {
      units_name: "",
      value: "",
      desc: "",
      status: "",
    };
  }

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
    console.log(this.state);

    axiosConfig
      .post("/admin/addunits", this.state)
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/freshlist/unit/unitList");
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
                Add New Unit
              </h1>
            </Col>
            <Col>
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/freshlist/unit/unitList")}
              >
                Back
              </Button>
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6">
                  <Label>Unit Title</Label>
                  <Input
                    type="text"
                    placeholder="Enter Title"
                    name="units_name"
                    value={this.state.units_name}
                    onChange={this.changeHandler}
                  />
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Value</Label>
                    <Input
                      type="number"
                      placeholder="Value"
                      name="value"
                      value={this.state.value}
                      onChange={this.changeHandler}
                    />
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
                  Add Unit
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default AddUnit;
