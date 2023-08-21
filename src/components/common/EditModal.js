import React, { useState } from "react";
import { Button, Modal } from "antd";

const EditModal = ({handleSubmit, isModalOpen, setIsModalOpen}) => {
  const showModal = () => {
    setIsModalOpen(true);
  };

  const i = localStorage.getItem('key')
  console.log(i)

  const handleOk = () => {
    handleSubmit(i)
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <Modal
        title="Do you want to save changes"
        open={isModalOpen}
       
        okText="Save"
        centered
        className="!text-center"
        width={400}
        onCancel={handleCancel}
        footer={[
          <Button onClick={handleCancel} className="w-[76px] h-[38px] rounded-[8px] !font-publicsans !font-[500] !text-[15px] !bg-[#002550] hover:!bg-opacity-95 hover:!bg-[#002550] hover:!text-white hover:!border-none !border-none">
            Cancel
          </Button>,

<Button  onClick={handleOk} className="w-[76px] h-[38px] rounded-[8px] !font-publicsans !font-[500] !text-[15px] !bg-[#002550] hover:!bg-opacity-95 hover:!bg-[#002550] hover:!text-white hover:!border-none !border-none">
Save
</Button>
        ]}
      >
    
      </Modal>
    </>
  );
};


export default EditModal;
