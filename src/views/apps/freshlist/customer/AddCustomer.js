// import React, { Component } from "react";
// import {
//   Card,
//   CardBody,
//   Col,
//   Form,
//   Row,
//   Input,
//   Label,
//   Button,
//   FormGroup,
//   CustomInput,
// } from "reactstrap";
// import {
//   Accordion,
//   AccordionItem,
//   AccordionItemButton,
//   AccordionItemPanel,
// } from "react-accessible-accordion";
// import { FiArrowDown } from "react-icons/fi";
// import { history } from "../../../../history";
// import axiosConfig from "../../../../axiosConfig";

// export class AddCategory extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       customer_name: "",
//       selectedFile: null,
//       selectedName: "",
//       desc: "",
//       image: "",
//       status: "",
//     };
//   }

//   onChangeHandler = (event) => {
//     this.setState({ selectedFile: event.target.files[0] });
//     this.setState({ selectedName: event.target.files[0].name });
//     console.log(event.target.files[0]);
//   };

//   changeHandler1 = (e) => {
//     this.setState({ status: e.target.value });
//   };
//   changeHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };
//   submitHandler = (e) => {
//     e.preventDefault();
//     const data = new FormData();
//     data.append("customer_name", this.state.customer_name);
//     data.append("desc", this.state.desc);
//     data.append("status", this.state.status);
//     if (this.state.selectedFile !== null) {
//       data.append("image", this.state.selectedFile, this.state.selectedName);
//     }
//     for (var value of data.values()) {
//       console.log(value);
//     }
//     axiosConfig
//       .post("/admin/addcategory", data)
//       .then((response) => {
//         console.log(response);
//         this.props.history.push("/app/freshlist/category/categoryList");
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   render() {
//     return (
//       <div>
//         <Card>
//           <Row className="m-2">
//             <Col>
//               <h1 col-sm-6 className="float-left">
//                 Add Customer
//               </h1>
//             </Col>
//             <Col>
//               <Button
//                 className=" btn btn-danger float-right"
//                 onClick={() =>
//                   history.push("/app/freshlist/customer/CustomerList")
//                 }
//               >
//                 Back
//               </Button>
//             </Col>
//           </Row>
//           <CardBody>
//             <Form className="m-1" onSubmit={this.submitHandler}>
//               <Row className="mb-2">
//                 <Col lg="6" md="6">
//                   <FormGroup>
//                     <Label>Customer Name</Label>
//                     <Input
//                       type="text"
//                       placeholder="Customer Name"
//                       name="customer_name"
//                       value={this.state.customer_name}
//                       onChange={this.changeHandler}
//                     />
//                   </FormGroup>
//                 </Col>

//                 <Col lg="6" md="6">
//                   <FormGroup>
//                     <Label for="exampleEmail">Email</Label>
//                     <Input
//                       type="email"
//                       name="email"
//                       id="exampleEmail"
//                       placeholder="Email"
//                     />
//                   </FormGroup>
//                 </Col>
//                 <Col lg="6" md="6">
//                   <FormGroup>
//                     <Label for="examplePassword">Password</Label>
//                     <Input
//                       type="password"
//                       name="password"
//                       id="examplePassword"
//                       placeholder="password"
//                     />
//                   </FormGroup>
//                 </Col>
//                 <Col lg="6" md="6">
//                   <FormGroup>
//                     <Label for="ConfirmPassword">Confirm Password</Label>
//                     <Input
//                       type="password"
//                       name="password"
//                       id="ConfirmPassword"
//                       placeholder="Confirm password"
//                     />
//                   </FormGroup>
//                 </Col>

//                 <Col lg="6" md="6">
//                   <FormGroup>
//                     <Label>Description</Label>
//                     <Input
//                       type="text"
//                       placeholder="Enter Here"
//                       name="desc"
//                       value={this.state.desc}
//                       onChange={this.changeHandler}
//                     />
//                   </FormGroup>
//                 </Col>
//                 <Col lg="6" md="6">
//                   <FormGroup>
//                     <Label>Mobile Number</Label>
//                     <Input
//                       type="number"
//                       name="desc"
//                       placeholder="Enter Number"
//                       value={this.state.desc}
//                       onChange={this.changeHandler}
//                     />
//                   </FormGroup>
//                 </Col>

//                 <Col lg="6" md="6">
//                   <FormGroup>
//                     <Label>Customer Image </Label>
//                     <CustomInput
//                       type="file"
//                       name="image"
//                       value={this.state.image}
//                       onChange={this.onChangeHandler}
//                     />
//                   </FormGroup>
//                 </Col>

//                 <Col lg="6" md="6">
//                   <FormGroup>
//                     <Label>Shipping</Label>
//                     <Input
//                       type="text"
//                       placeholder="shipping_address"
//                       name="shipping_address"
//                       // value={this.state.shipping_address}
//                       // onChange={this.changeHandler}
//                     />
//                   </FormGroup>
//                 </Col>
//                 <Col lg="6" md="6" className="mb-2">
//                   <Label>Address</Label>
//                   <Accordion>
//                     <AccordionItem>
//                       <Col lg="6" md="6" className="">
//                         <AccordionItemButton
//                           style={{
//                             paddingLeft: "424px",
//                             paddingRight: "40px",
//                             margin: "3px 0 12px -13px",
//                             height: "36px",
//                             backgroundColor: "white",
//                             borderRadius: "0.5rem",
//                             border: "1px solid #d9d9d9",
//                           }}
//                         >
//                           <FiArrowDown />
//                         </AccordionItemButton>
//                       </Col>
//                       <AccordionItemPanel>
//                         <Form onSubmit={this.submitHandler}>
//                           <FormGroup>
//                             <Label>Type</Label>
//                             <Input
//                               type="select"
//                               name="type"
//                               value={this.state.type}
//                               onChange={this.changeHandler}
//                             >
//                               <option>---Select Address---</option>
//                               <option value="1">Home</option>
//                               <option value="2">Work</option>
//                               <option value="3">Others</option>
//                             </Input>
//                           </FormGroup>

//                           <FormGroup>
//                             <Label>Name</Label>
//                             <Input
//                               type="text"
//                               name="name"
//                               value={this.state.name}
//                               onChange={this.changeHandler}
//                             />
//                           </FormGroup>

//                           <FormGroup>
//                             <Label>Phone</Label>
//                             <Input
//                               type="number"
//                               name="number"
//                               value={this.state.phone}
//                               onChange={this.changeHandler}
//                             />
//                           </FormGroup>

//                           <FormGroup>
//                             <Label>Email</Label>
//                             <Input
//                               type="email"
//                               name="email"
//                               value={this.state.email}
//                               onChange={this.changeHandler}
//                             />
//                           </FormGroup>
//                           <FormGroup>
//                             <Label>Address</Label>
//                             <Input
//                               type="address"
//                               name="address"
//                               value={this.state.address}
//                               onChange={this.changeHandler}
//                             />
//                           </FormGroup>

//                           <FormGroup>
//                             <Label>City</Label>
//                             <Input
//                               type="city"
//                               name="city"
//                               value={this.state.city}
//                               onChange={this.changeHandler}
//                             />
//                           </FormGroup>
//                           {/* <FormGroup>
//                                 <Label>Descripition</Label>
//                                 <Editor
//                                   toolbarClassName="demo-toolbar-absolute"
//                                   wrapperClassName="demo-wrapper"
//                                   editorClassName="demo-editor"
//                                   editorState={this.state.editorState}
//                                   onEditorStateChange={this.onEditorStateChange}
//                                 />
//                               </FormGroup> */}
//                         </Form>
//                       </AccordionItemPanel>
//                     </AccordionItem>
//                   </Accordion>
//                 </Col>
//               </Row>

//               <Row className="ml-0">
//                 <FormGroup check>
//                   <Label check>
//                     <Input type="checkbox" />
//                     Check me out
//                   </Label>
//                 </FormGroup>
//               </Row>
//               <Row className="m-2">
//                 <Button.Ripple
//                   color="danger"
//                   type="submit"
//                   className="mr-1 mb-1"
//                 >
//                   Add Customer
//                 </Button.Ripple>
//               </Row>
//             </Form>
//           </CardBody>
//         </Card>
//       </div>
//     );
//   }
// }
// export default AddCategory;
