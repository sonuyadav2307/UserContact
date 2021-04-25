import { Modal, Button } from 'antd';
import React from 'react'
import {
    EyeOutlined,
  } from '@ant-design/icons';
class ViewModal extends React.Component {
  state = {
    loading: false,
    visible: false,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  render() {
    const { visible, loading } = this.state;
    return (
      <>
        <Button type="primary" onClick={this.showModal}>
        <EyeOutlined />
        </Button>
        <Modal
          visible={visible}
          title="User Information"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={null}
        >
            
           
        
          <p>Name:{this.props.user.name}</p>
          <p>Email:{this.props.user.email}</p>
          <p>Phone Number:{this.props.user.phone}</p>
        </Modal>
      </>
    );
  }
}

export default ViewModal