import React, { useState, useEffect } from "react";
import { Space, Table, Drawer, Form, Input, Button, Checkbox } from "antd";
import { store } from "../store";
import { connect } from "react-redux";
import { setEditedAirmen, setCurrentActivePage, setCurrentlyEditedAirman, setVisibleAirmanDrawer } from "../components/StoreActions";
import { useHistory } from 'react-router-dom';
import { AirmanModel } from '../models/AirmanModel';

function AirmanPage(props: any) {
  console.log("AirmanPage");
  console.log(props);

  const history = useHistory();
  // console.log(history);
  // console.log(props.history);

  //const [visibleAirmanDrawer, setVisibleAirmanDrawer] = useState(false);

  useEffect(() => {
    //setVisibleAirmanDrawer(props.visibleAirmanDrawer);

    return function cleanup() {
      console.log('airman cleanup called');
      console.log(props);
      console.log(props.history.action);

      if (props.history.action === 'POP') {
        console.log('props.history.location.pathname');
        console.log(props.history.location.pathname);
        //props.dispatch.changeActivePage()
        props.changeActivePage(props.history.location.pathname);
      }
    }
  }, [props]);

  const onClickHandler = (record: any) => {
      console.log('onclickHandler called');
      console.log(record);
      props.changeCurrentEditedAirman(AirmanModel.clone(record));
      props.setVisibleAirmanDrawer(true);
  };

  const onClose = (e: any) => {
    console.log('drawer closed');
    props.setVisibleAirmanDrawer(false);
  }

  const onFinishDrawerHandler = (e: any) => {
    console.log('onFinishDrawerHandler');
    console.log(e);
  }

  const onFinishDrawerFailedHandler = (e: any) => {
    console.log('onFinishDrawerFailedHandler');
    console.log(e);
  }

  const dataSource = [...props.airmen];

  const columns = [
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Surname",
      key: "surname",
      dataIndex: "surname",
    },
    {
      title: "Edit",
      key: "action",
      render: (text : string, record : any) => (
        <Space size="middle">
          <a onClick={(e) => {onClickHandler(record)}}>Edit {record.name}</a>
        </Space>
      ),
    },
  ];

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const submitEditedAirman = (e: any) => {
    console.log("submitEditedAirman");
    console.log(e);
    props.setEditedAirmen(new AirmanModel(props.currentEditedAirmanRow.key, props.currentEditedAirmanRow.id, e.name, e.surname));
  }

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />;
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={props.visibleAirmanDrawer}
        maskClosable={false}
      >
        <Form {...layout} name="basic" initialValues={{remember: true}}
        onFinish={onFinishDrawerHandler} onFinishFailed={onFinishDrawerFailedHandler}>
          <Form.Item label="Name" name="name" rules={[{required: false}]} initialValue={props.currentEditedAirmanRow.name}>
            <Input/>
          </Form.Item>
          <Form.Item label="Surname" name="surname" rules={[{required: false}]} initialValue={props.currentEditedAirmanRow.surname}>
            <Input/>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" onClick={submitEditedAirman}>
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  console.log("airman map state to props");
  console.log(state);
  return {
    activePage: state.status.activePage,
    airmen: state.airmen.airmen,
    visibleAirmanDrawer: state.status.visibleAirmanDrawer,
    currentEditedAirmanRow: state.airmen.currentEditedAirmanRow
  };
};

const mapDispatchToProps = (dispatch: any) => {
  // console.log("mapDispatchToPropsXXX");
  // console.log(dispatch);
  return {
    setEditedAirmen: (key: string) => {
      dispatch(setEditedAirmen(key));
    },
    changeActivePage: (key: string) => {
      dispatch(setCurrentActivePage(key));
    },
    changeCurrentEditedAirman: (key: AirmanModel) => {
      dispatch(setCurrentlyEditedAirman(key));
    },
    setVisibleAirmanDrawer: (key: boolean) => {
      dispatch(setVisibleAirmanDrawer(key));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AirmanPage);