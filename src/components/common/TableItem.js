import React, { useState, useEffect } from "react";
import { Table, Switch, Space, Button } from "antd";

// import { CaretUpFilled, CaretDownFilled } from '@ant-design/icons';
// import {CaretUpFilled as  MdKeyboardArrowUp } from 'react-icons/md'
// import { MdKeyboardArrowDown as CaretDownFilled } from 'react-icons/md'

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


const onChange = (pagination, filters, sorter, extra) => {
  console.log("params", pagination, filters, sorter, extra);
};

const handleAction = (record) => {
    console.log("Action clicked for record:", record);
  }

const TableItem = ({data, columns}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [dataSource, setDataSource] = useState([])
  const [displayData, setDisplayData]  = useState([])
  const [pageSize, setPageSize] = useState(7)
  const [searchQuery, setSearchQuery] = useState('')

  const totalItems = dataSource.length;
  const totalPages = Math.ceil(totalItems / pageSize);


  

 
 
  


  const paginationConfig = { 
    pageSize: pageSize,
    showSizeChanger: true,
    pageSizeOptions: ['7', '14', '21', '28','35'],
    showTotal: (total, range) => `Showing ${range[0]}-${range[1]} of ${total} entries`,
    onShowSizeChange: (current, size) => {
      setCurrentPage(1);
      setPageSize(size)
    },
    showSizeChangerRender:(current, _) => `${current}`,
    // onChange: (page) => setCurrentPage(page),
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

  
  useEffect(() => {
    if (searchQuery.trim() === '') {
        setDataSource(data);
    } else {
      const filteredResults = data.filter((item) =>
        Object.values(item).some((value) =>
          String(value).toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
      setDataSource(filteredResults);
    }
  }, [searchQuery]);

  return (
    <div className="font-publicsans grid gap-3">

<div className='flex justify-between'>
        <div className='flex items-center gap-[130px]'>
            <p className='font-[400] text-[15px] leading-[22px]'>Show</p>
           {/* <select className="h-[38px] w-[100px] px-2 outline-none border-[1px] border-[#DBDADE] rounded-[6px]">
            <option className="p-2">7</option>
            <option className="p-2">14</option>
            <option className="p-2">21</option>
            <option className="p-2">28</option>
           </select> */}
            <p className='font-[400] text-[15px] leading-[22px]'>Entries</p>
        </div>
        <div>
            <label>Search : </label>
            <input type='text' placeholder='Placeholder' className='rounded-[6px] border-[#DBDADE] border-[1px] h-[38px] px-2 outline-none' onChange={(e)=> setSearchQuery(e.target.value)}/>
        </div>
    </div>
      <Table
        columns={columns}
        dataSource={dataSource}
        onChange={onChange}
        scroll={{ x: true }}
       
        components={{
          header: {
            cell: (props) => (
              <th className="custom-header-cell" {...props} />
            ),
          },
        }}
        rowSelection={{
          ...rowSelection,
        }}
        // pagination={{pageSize:6}}
        pagination={paginationConfig}
        className="relative font-publicsans w-full"
        // onChange={handlePageChange}
        
      />
    </div>
  );
};
export default TableItem;
