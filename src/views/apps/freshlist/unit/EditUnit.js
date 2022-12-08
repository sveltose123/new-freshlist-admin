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
import "react-toastify/dist/ReactToastify.css";
export class EditUnit extends Component {
  constructor (props) {
    super(props);
    this.state = {
      units_name: "",
      value: "",
      desc: "",

    };
  }

  componentDidMount() {
    console.log(this.props.match.params);
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/admin/viewone_units/${id}`)
      .then((response) => {
        console.log(response);
        this.setState({
          units_name: response.data.data.units_name,
          desc: response.data.data.desc,
          value: response.data.data.value,

        });
      })
      .catch((error) => {
        console.log(error);
      });
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
    // console.log(this.props.match.params , this.state);
    let { id } = this.props.match.params;

    axiosConfig
      .post(`/admin/edit_units/${id}`, this.state)
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
                Edit
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
                  <FormGroup>
                    <Label>Unit Title</Label>
                    <Input
                      type="text"
                      placeholder="Enter Unit Title"
                      name="units_name"
                      value={this.state.units_name}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
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
                  Update Unit
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default EditUnit;
