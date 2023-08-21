import React, { useState } from "react";
import HeaderSearch from "../../common/HeaderSearch";
import pencil from '../../../assets/pencil.png'
import eye from '../../../assets/eye.png'
import trash from '../../../assets/trash.png'
import TableItem from "../../common/TableItem";
import EditBackgroundVerification from "./EditBackgroundVerification";
import ClientEdit from "./ClientEdit";
import DeleteModal from "./DeleteModal";
import { useNavigate } from "react-router-dom";


const ServiceManagementItem = () => {
  const [backgroundVerification, setBackgroundVerification] = useState(true)
  const [backgroundshow, setBackgroundshow] = useState(true)
  const [backgroundedit, setBackgroundedit] = useState(false)
  const [client, setClient] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const navigate = useNavigate()
  const columns = [
    {
      title: "CLIENT ID",
      dataIndex: "client",
      sorter: {
        compare: (a, b) => a.client - b.client,
        multiple: 4,
      },
      render: (text, record) => (
        <span className="custom-column-style font-[600]">{text}</span>
      ),
    },
    {
      title: "CITY NAME",
      dataIndex: "city",
      sorter: {
        compare: (a, b) => a.city - b.city,
        multiple: 3,
      },
    },
    {
      title: "BUILDER NAME",
      dataIndex: "builder",
      sorter: {
        compare: (a, b) => a.builder - b.builder,
        multiple: 2,
      },
    },
    {
      title: "PROJECT NAME",
      dataIndex: "project",
      sorter: {
        compare: (a, b) => a.project - b.project,
        multiple: 1,
      },
    },

    {
      title: "NOTIFICATION",
      dataIndex: "notification",
      sorter: {
        compare: (a, b) => a.notification - b.notification,
        multiple: 1,
      },
    },

    {
      title: "REPORT",
      dataIndex: "report",
      sorter: {
        compare: (a, b) => a.report - b.report,
        multiple: 1,
      },
    },

    {
      title: "DATE OF REQUEST OF REPORT",
      dataIndex: "date",
      width:180,
      sorter: {
        compare: (a, b) => a.date - b.date,
        multiple: 1,
      },
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (text, record) => (
          <div className="flex gap-4">
        <img src={trash} className='w-[22px] h-[22px] cursor-pointer' />
        <img src={pencil} className='w-[22px] h-[22px] cursor-pointer' onClick={()=> navigate(`/servicemanagement/pre-booking/edit/${record.key}`)}/>
        <img src={eye} className='w-[22px] h-[22px] cursor-pointer' onClick={()=> navigate(`/servicemanagement/pre-booking/${record.key}`)}/>
        </div>
      ),
    },
  ]
 
  const Clientcolumns = [
    {
      title: "CLIENT ID",
      dataIndex: "client",
      sorter: {
        compare: (a, b) => a.client - b.client,
        multiple: 4,
      },
      render: (text, record) => (
        <span className="custom-column-style font-[600]">{text}</span>
      ),
    },
    {
      title: "CITY NAME",
      dataIndex: "city",
      sorter: {
        compare: (a, b) => a.city - b.city,
        multiple: 3,
      },
    },
    {
      title: "BUILDER NAME",
      dataIndex: "builder",
      sorter: {
        compare: (a, b) => a.builder - b.builder,
        multiple: 2,
      },
    },
    {
      title: "PROJECT NAME",
      dataIndex: "project",
      sorter: {
        compare: (a, b) => a.project - b.project,
        multiple: 1,
      },
    },

    {
      title: "DRONE PILOT",
      dataIndex: "drone",
      sorter: true
    },

    {
      title: "DATE OF VISIT",
      dataIndex: "datevisit",
      sorter: {
        compare: (a, b) => a.datevisit - b.datevisit,
        multiple: 1,
      },
    },

    {
      title: "TIME OF VISIT",
      dataIndex: "timevisit",
      sorter: {
        compare: (a, b) => a.timevisit - b.timevisit,
        multiple: 1,
      },
    },
    {
      title: "Actions",
      dataIndex: "actions",
      key: "actions",
      render: (text, record) => (
          <div className="flex gap-4">
        <img src={trash} className='w-[22px] h-[22px] cursor-pointer'/>
        <img src={pencil} className='w-[22px] h-[22px] cursor-pointer' onClick={()=> navigate(`/servicemanagement/pre-booking/${record.key}`)}/>
        <img src={eye} className='w-[22px] h-[22px] cursor-pointer' onClick={()=> navigate(`/servicemanagement/pre-booking/${record.key}`)}/>
        </div>
      ),
    },
  ]
    const [dataSource, setDataSource] = useState([
      {
        key: 0,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 1,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 2,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 3,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 4,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 5,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 6,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 7,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 8,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 9,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 10,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 11,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 12,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 13,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 14,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 15,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 16,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 17,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 18,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 19,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 20,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 21,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 22,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 23,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 24,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 25,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 26,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 27,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 28,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 29,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 30,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 31,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 32,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 33,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 34,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 35,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 36,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 37,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 38,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 39,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 40,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 41,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 42,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 43,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 44,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 45,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 46,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 47,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 48,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      },
      {
        key: 49,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        notification: 'Not required',
        report: 'view',
        date: '22-04-2023'
      }
    ])

    const [clientData, setClientData] = useState([
      {
        key: 0,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 1,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 2,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 3,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 4,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 5,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 6,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 7,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 8,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 9,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 10,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 11,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 12,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 13,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 14,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 15,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 16,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 17,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 18,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 19,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 20,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 21,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 22,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 23,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 24,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 25,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 26,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 27,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 28,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 29,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 30,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 31,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 32,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 33,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 34,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 35,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 36,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 37,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 38,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 39,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 40,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 41,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 42,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 43,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 44,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 45,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 46,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 47,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 48,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      },
      {
        key: 49,
        client: '123456',
        city: 'Bangalore',
        builder: 'Arnit Singh',
        project: 'Project Name',
        drone: 'Pilot Name',
        datevisit: '12-12-2023',
        timevisit: '13:00 PM'
      }
    ])

    const Pilotcolumns = [
      {
        title: "CLIENT ID",
        dataIndex: "client",
        render: (text, record) => (
          <span className="custom-column-style font-[600]">{text}</span>
        ),
      },
      {
        title: "CITY NAME",
        dataIndex: "city",
  
      },
      {
        title: "BUILDER NAME",
        dataIndex: "builder",
      
      },
      {
        title: "PROJECT NAME",
        dataIndex: "project",
       
      },
  
      {
        title: "DATE OF VISIT",
        dataIndex: "datevisit",
        
      },
  
      {
        title: "TIME OF VISIT",
        dataIndex: "timevisit",
       
      },
      {
        title: "Actions",
        dataIndex: "actions",
        key: "actions",
        render: (text, record) => (
            <div className="flex">
          <img src={eye} className='w-[22px] h-[22px] cursor-pointer'/>
          </div>
        ),
      },
    ]
    const handleDelete = (i) => {
   
      if (i >= 0 && i < dataSource.length) {
          let newArray = dataSource.slice(); // Create a copy of the original array
          newArray.splice(i, 1); // Remove 1 element at the specified index
          setDataSource(newArray); // Update the state with the new array
        }
    };
  return (
    <>

    <div className="p-3 w-[80%] grid gap-5 box-border pb-20">
      <HeaderSearch />
      <div className="flex justify-between">
      <div className={`flex gap-5 bg-white p-2 h-[38px] rounded-t-[6px] font-publicsans text-[15px] font-[400] border-b-2 ${backgroundVerification?'w-[100%]' : 'w-[70%]'}`}>
        <p className='border-b-2 border-[#002550] text-[#002550] pb-7 cursor-pointer' >
          Background Verification
        </p>
        <p className='pb-7 cursor-pointer'onClick={()=> navigate('/servicemanagement/pre-booking/virtualsite/client')}>Virtual Site Visit</p>

        
      </div>
    
    

      </div>

      <div className="mt-5">
        
         <TableItem data={dataSource} columns={columns}/> 
         
      
        
       
      </div>

    </div>

   


    

<DeleteModal handleDelete={handleDelete} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
    </>
  );
};

export default ServiceManagementItem;
