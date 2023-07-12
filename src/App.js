import "./styles.css";
import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import Mount from './demo';
import List from './list';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <p> 使用v5.0.5+antd弹窗关闭报错:</p>
      <Button type="primary" onClick={showModal}>
        弹窗
      </Button>
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}
      destroyOnClose
      >
        <Mount />
      </Modal>
      <p> 使用v5.0.4无法删除polygon:</p>
      <List />
    </div>
  );
}
