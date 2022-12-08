import React, { Component } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  Row,
  Col,
  Form,
  Label,
  Input,
  CustomInput,
  Button,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";
import swal from "sweetalert";
export default class AddBatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      batch_title: "",
      selectedFile: undefined,
      selectedName: "",
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
  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("batch_title", this.state.batch_title);
    data.append("batchtype", this.state.batchtype);

    for (var value of data.values()) {
      console.log(value);
    }
    for (var key of data.keys()) {
      console.log(key);
    }
    axiosConfig
      .post("/addbatch", data)
      .then((response) => {
        console.log(response);
        swal("Successful!", "You clicked the button!", "success");
        this.props.history.push("/app/freshlist/batch/batchList");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <Card>
          <CardHeader>
            <CardTitle>New Batch</CardTitle>
          </CardHeader>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Batch Name</Label>
                  <Input
                    required
                    type="text"
                    name="batch_name"
                    placeholder="Enter Batch Name"
                    value={this.state.batch_name}
                    onChange={this.changeHandler}
                  />
                </Col>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Label>Batch Type</Label>
                  <CustomInput
                    required
                    type="select"
                    name="batchtype"
                    placeholder="Enter Batch Type"
                    value={this.state.batchtype}
                    onChange={this.changeHandler}
                  >
                    <option value="select">--Select--</option>
                    <option value="ABC">ABC</option>
                    <option value="XYZ">XYZ</option>
                    <option value="PQR">PQR</option>
                  </CustomInput>
                </Col>
              </Row>

              <Row>
                <Col lg="6" md="6" sm="6" className="mb-2">
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1"
                  >
                    Add Batch
                  </Button.Ripple>
                </Col>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
