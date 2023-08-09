import React, { useEffect, useState } from "react";
import { Table, Switch, Space, Button } from "antd";
import pencil from '../../assets/pencil.png'
import eye from '../../assets/eye.png'
import trash from '../../assets/trash.png'

const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  onSelect: (record, selected, selectedRows) => {
    console.log(record, selected, selectedRows);
  },
  onSelectAll: (selected, selectedRows, changeRows) => {
    console.log(selected, selectedRows, changeRows);
  },
};

const dataSource = [

  {
    key:1,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },

  {
    key:2,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },

  {
    key:3,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },


  {
    key:4,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },

  {
    key:4,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },

  {
    key:5,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:6,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:7,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:8,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:9,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:10,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:11,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:12,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:13,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:14,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:15,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:16,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:17,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:18,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:19,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:20,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:21,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:22,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:23,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:24,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:25,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:26,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:27,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:28,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:29,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:30,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:31,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:32,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:33,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:34,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:35,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:36,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:37,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:38,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:39,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:40,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:41,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
    key:42,
    name:'Aohn Brown',
    name: "Aohn Brown",
    email: "Herminia47@hotmail.com",
    property: "Villas",
    stage: "i'm still searching",
  },
  {
  key:43,
  name:'Aohn Brown',
  name: "Aohn Brown",
  email: "Herminia47@hotmail.com",
  property: "Villas",
  stage: "i'm still searching",
  }


]

const columns = [
  {
    title: "FULL NAME",
    dataIndex: "name",
    sorter: {
      compare: (a, b) => a.name - b.name,
      multiple: 4,
    },
  },
  {
    title: "EMAIL",
    dataIndex: "email",
    sorter: {
      compare: (a, b) => a.email - b.email,
      multiple: 3,
    },
  },
  {
    title: "PROPERTY TYPE",
    dataIndex: "property",
    sorter: {
      compare: (a, b) => a.property - b.property,
      multiple: 2,
    },
  },
  {
    title: "STAGE",
    dataIndex: "stage",
    sorter: {
      compare: (a, b) => a.stage - b.stage,
      multiple: 1,
    },
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    render: (text, record) => (
        <div className="flex gap-4">
      {/* <Button onClick={() => handleAction(record)}>Action</Button> */}
      <img src={trash}/>
      <img src={pencil}/>
      <img src={eye}/>
      </div>
    ),
  },
];



const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const handleAction = (record) => {

    console.log("Action clicked for record:", record);
  };
const TableItem = () => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [dataSource setDataSource] = useState([])
  const pageSize = 6

  const totalItems = dataSource.length;
  const totalPages = Math.ceil(totalItems / pageSize);

 

  

; // Define your options

  const paginationConfig = { 
    pageSize: pageSize,
    // showSizeChanger: true,
    total:totalItems, // Display a dropdown for changing page size
    showTotal: (total, range) => `Showing ${range[0]}-${range[1]} of ${total} entries`,
    // onShowSizeChange: (current, size) => {

    //   setCurrentPage(current);
      
    // },
    onChange: (page) => setCurrentPage(page),
    itemRender: (current, type, originalElement) => {
      if (type === 'prev') {
        return <button className="custom-pagination-button font-publicsans text-[15px]">Previous</button>;
      }
      if (type === 'next') {
        return <button className="custom-pagination-button font-publicsans text-[15px]">Next</button>;
      }
      return originalElement;
    },
  };

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const displayedData = dataSource.slice(startIndex, endIndex);
  return (
    <div className="font-publicsans">
      <Table
        columns={columns}
        dataSource={displayedData}
        onChange={onChange}
        rowSelection={{
          ...rowSelection,
        }}
        // pagination={{pageSize:6}}
        pagination={paginationConfig}
        className="relative font-publicsans"
        
      />
    </div>
  );
};
export default TableItem;
