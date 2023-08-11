import React, { useState } from "react";
import { Button, Modal } from "antd";

const DeleteWarning = ({handleDelete, isModalOpen, setIsModalOpen}) => {
  const showModal = () => {
    setIsModalOpen(true);
  };

  const i = localStorage.getItem('key')
  console.log(i)

  const handleOk = () => {
    handleDelete(i)
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title="Are you sure"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Save"
        centered
      >
        <p>By continuing all the changes will be saved </p>
      </Modal>
    </>
  );
};


export default DeleteWarning;
