import React from "react";
import {
    Card, CardBody, Input, Row, Col, Button, UncontrolledDropdown,
    DropdownMenu, DropdownItem, DropdownToggle,
} from "reactstrap";
import axiosConfig from "../../../../axiosConfig";

import { ContextLayout } from "../../../../utility/context/Layout";
import { AgGridReact } from "ag-grid-react";
import { Edit, Trash2, ChevronDown, Eye } from "react-feather";
import { history } from "../../../../history";
import "../../../../assets/scss/plugins/tables/_agGridStyleOverride.scss";
import "../../../../assets/scss/pages/users.scss";
import { Route, Link } from "react-router-dom";

class HouseProductList extends React.Component {
    state = {
        rowData: [],
        paginationPageSize: 20,
        currenPageSize: "",
        getPageSize: "",
        defaultColDef: {
            sortable: true,
            editable: true,
            resizable: true,
            suppressMenu: true,
        },
        columnDefs: [
            {
                headerName: "S.No",
                valueGetter: "node.rowIndex + 1",
                field: "node.rowIndex + 1",
                width: 100,
                filter: true,
            },
            {
                headerName: "Product Image",
                field: "product_image",
                filter: true,
                width: 100,
                cellRendererFramework: (params) => {
                    return (
                        <div>
                            <img className="w-50 h-50  rounded-circle" src={params.data.product_image} />
                        </div>
                    );
                },
            },
            {
                headerName: "Product Name",
                field: "product_name",
                filter: true,
                width: 100,
                cellRendererFramework: (params) => {
                    return (
                        <div>
                            <span>{params.data.product_name}</span>
                        </div>
                    );
                },
            },
            {
                headerName: "Type",
                field: "type",
                filter: true,
                width: 100,
                cellRendererFramework: (params) => {
                    return (
                        <div>
                            <span>{params.data.type}</span>
                        </div>
                    );
                },
            },
            {
                headerName: "Color",
                field: "color",
                filter: true,
                width: 100,
                cellRendererFramework: (params) => {
                    return (
                        <div>
                            <span>{params.data.color}</span>
                        </div>
                    );
                },
            },
            {
                headerName: "Category",
                field: "category",
                filter: true,
                width: 100,
                cellRendererFramework: (params) => {
                    return (
                        <div>
                            <span>{params.data.category}</span>
                        </div>
                    );
                },
            },

            {
                headerName: "Brand",
                field: "brand",
                filter: true,
                width: 100,
                cellRendererFramework: (params) => {
                    return (
                        <div>
                            <span>{params.data.brand}</span>
                        </div>
                    );
                },
            },

            {
                headerName: "Model",
                field: "model",
                filter: true,
                width: 100,
                cellRendererFramework: (params) => {
                    return (
                        <div>
                            <span>{params.data.model}</span>
                        </div>
                    );
                },
            },
            {
                headerName: "MRP",
                field: "mrp",
                filter: true,
                width: 100,
                cellRendererFramework: (params) => {
                    return (
                        <div className="d-flex align-items-center cursor-pointer">
                            <span>{params.data.mrp}</span>
                        </div>
                    );
                },
            },
            {
                headerName: "Buying Price",
                field: "buying_price",
                filter: true,
                width: 100,
                cellRendererFramework: (params) => {
                    return (
                        <div>
                            <span>{params.data.buying_price}</span>
                        </div>
                    );
                },
            },

            {
                headerName: "Selling Price",
                field: "selling_price",
                filter: true,
                width: 100,
                cellRendererFramework: (params) => {
                    return (
                        <div>
                            <span>{params.data.selling_price}</span>
                        </div>
                    );
                },
            },
            {
                headerName: "Min.Selling Qty",
                field: "min_selling_Q",
                filter: true,
                width: 100,
                cellRendererFramework: (params) => {
                    return (
                        <div>
                            <span>{params.data.min_selling_Q}</span>
                        </div>
                    );
                },
            },
            {
                headerName: "Max.Selling Qty",
                field: "max_selling_Q",
                filter: true,
                width: 100,
                cellRendererFramework: (params) => {
                    return (
                        <div>
                            <span>{params.data.max_selling_Q}</span>
                        </div>
                    );
                },
            },
            {
                headerName: "Reward Points",
                field: "reward_points",
                filter: true,
                width: 100,
                cellRendererFramework: (params) => {
                    return (
                        <div>
                            <span>{params.data.reward_points}</span>
                        </div>
                    );
                },
            },
            {
                headerName: "Video Url",
                field: "video_url",
                filter: true,
                width: 100,
                cellRendererFramework: (params) => {
                    return (
                        <div>
                            <span>{params.data.video_url}</span>
                        </div>
                    );
                },
            },
            {
                headerName: "GST",
                field: "gst_class",
                filter: true,
                width: 100,
                cellRendererFramework: (params) => {
                    return (
                        <div>
                            <span>{params.data.gst_class}</span>
                        </div>
                    );
                },
            },
            {
                headerName: "Stock",
                field: "selling_price",
                filter: true,
                width: 100,
                cellRendererFramework: (params) => {
                    return (
                        <div>
                            <span>{params.data.selling_price}</span>
                        </div>
                    );
                },
            },

            {
                headerName: "Actions",
                field: "sortorder",
                // eslint-disable-next-line no-dupe-keys
                field: "transactions",
                width: 100,
                cellRendererFramework: (params) => {
                    return (
                        <div className="actions cursor-pointer">
                            <Eye
                                className="mr-50"
                                size="25px"
                                color="green"
                                onClick={() =>
                                    history.push(`/app/freshlist/house/viewHouseProduct/${params.data._id}`)}
                            />
                            <Edit
                                className="mr-50"
                                size="25px"
                                color="blue"
                                onClick={() => history.push(`/app/freshlist/house/editHouseProduct/${params.data._id}`)}
                            />
                            <Trash2
                                className="mr-50"
                                size="25px"
                                color="red"
                                onClick={() => {
                                    let selectedData = this.gridApi.getSelectedRows();
                                    this.runthisfunction(params.data._id);
                                    this.gridApi.updateRowData({ remove: selectedData });
                                }}
                            />
                        </div>
                    );
                },
            },
        ],
    };
    async componentDidMount() {
        let { id } = this.props.match.params;
        await axiosConfig.get(`/admin/viewone_product/${id}`)
            .then((response) => {
                let rowData = response.data.data;
                console.log(rowData);
                this.setState({ rowData });
            });
    }
    // eslint-disable-next-line no-dupe-class-members
    async componentDidMount() {
        await axiosConfig
            .get("/admin/product_list")
            .then((response) => {
                let rowData = response.data.data;
                console.log(rowData);
                this.setState({ rowData });
            });
    }

    async runthisfunction(id) {
        console.log(id);
        await axiosConfig.delete(`/admin/del_product/${id}`).then(
            (response) => {
                console.log(response);
            },
            (error) => {
                console.log(error);
            }
        );
    }
    onGridReady = (params) => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
        this.setState({
            currenPageSize: this.gridApi.paginationGetCurrentPage() + 1,
            getPageSize: this.gridApi.paginationGetPageSize(),
            totalPages: this.gridApi.paginationGetTotalPages(),
        });
    };
    updateSearchQuery = (val) => {
        this.gridApi.setQuickFilter(val);
    };
    filterSize = (val) => {
        if (this.gridApi) {
            this.gridApi.paginationSetPageSize(Number(val));
            this.setState({
                currenPageSize: val,
                getPageSize: val,
            });
        }
    };
    render() {
        const { rowData, columnDefs, defaultColDef } = this.state;
        return (
            console.log(rowData),
            (
                <Row className="app-user-list">
                    <Col sm="12"></Col>
                    <Col sm="12">
                        <Card>
                            <Row className="m-2">
                                <Col>
                                    <h1 sm="6" className="float-left">
                                        InHouseProduct List
                                    </h1>
                                </Col>
                                <Col>
                                    <Button style={{ marginRight: '-17rem' }}
                                        className=" btn btn-danger float-right"
                                        onClick={() => history.push("/app/freshlist/house/HouseProductList")}
                                    >
                                        Back
                                    </Button>
                                </Col>
                                <Col>
                                    <Route render={({ history }) => (
                                        <Button
                                            className="btn btn-danger float-right"
                                            onClick={() => history.push("/app/freshlist/house/addHouseProduct")}
                                        >
                                            Add New
                                        </Button>
                                    )}
                                    />
                                </Col>
                            </Row>
                            <CardBody>
                                {this.state.rowData === null ? null : (
                                    <div className="ag-theme-material w-100 my-2 ag-grid-table">
                                        <div className="d-flex flex-wrap justify-content-between align-items-center">
                                            <div className="mb-1">
                                                <UncontrolledDropdown className="p-1 ag-dropdown">
                                                    <DropdownToggle tag="div">
                                                        {this.gridApi
                                                            ? this.state.currenPageSize
                                                            : "" * this.state.getPageSize -
                                                            (this.state.getPageSize - 1)}{" "}
                                                        -{" "}
                                                        {this.state.rowData.length -
                                                            this.state.currenPageSize *
                                                            this.state.getPageSize >
                                                            0
                                                            ? this.state.currenPageSize *
                                                            this.state.getPageSize
                                                            : this.state.rowData.length}{" "}
                                                        of {this.state.rowData.length}
                                                        <ChevronDown className="ml-50" size={15} />
                                                    </DropdownToggle>
                                                    <DropdownMenu right>
                                                        <DropdownItem
                                                            tag="div"
                                                            onClick={() => this.filterSize(20)}
                                                        >
                                                            20
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            tag="div"
                                                            onClick={() => this.filterSize(50)}
                                                        >
                                                            50
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            tag="div"
                                                            onClick={() => this.filterSize(100)}
                                                        >
                                                            100
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            tag="div"
                                                            onClick={() => this.filterSize(134)}
                                                        >
                                                            134
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </div>
                                            <div className="d-flex flex-wrap justify-content-between mb-1">
                                                <div className="table-input mr-1">
                                                    <Input
                                                        placeholder="search..."
                                                        onChange={(e) =>
                                                            this.updateSearchQuery(e.target.value)
                                                        }
                                                        value={this.state.value}
                                                    />
                                                </div>
                                                <div className="export-btn">
                                                    <Button.Ripple
                                                        color="primary"
                                                        onClick={() => this.gridApi.exportDataAsCsv()}>
                                                        Export as CSV
                                                    </Button.Ripple>
                                                </div>
                                            </div>
                                        </div>
                                        <ContextLayout.Consumer>
                                            {(context) => (
                                                <AgGridReact
                                                    gridOptions={{}}
                                                    rowSelection="multiple"
                                                    defaultColDef={defaultColDef}
                                                    columnDefs={columnDefs}
                                                    rowData={rowData}
                                                    onGridReady={this.onGridReady}
                                                    colResizeDefault={"shift"}
                                                    animateRows={true}
                                                    floatingFilter={false}
                                                    pagination={true}
                                                    paginationPageSize={this.state.paginationPageSize}
                                                    pivotPanelShow="always"
                                                    enableRtl={context.state.direction === "rtl"}
                                                />
                                            )}
                                        </ContextLayout.Consumer>
                                    </div>
                                )}
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            )
        );
    }
}
export default HouseProductList;