import React, { useState, useEffect } from "react";
import { Space, Table, Drawer } from "antd";
import { store, ReduxSelectors } from "../store";
import { connect } from "react-redux";
import { setEditedAirmen } from "../components/StoreActions";

function AirmanPage(props: any) {
  console.log("AirmanPage");
  console.log(props);

  const [visibleAirmanDrawer, setVisibleAirmanDrawer] = useState(false);

  useEffect(() => {
    setVisibleAirmanDrawer(props.visibleAirmanDrawer);
  }, [props.visibleAirmanDrawer]);

  const onClickHandler = (e: any) => {
      console.log('onclick called');
      props.setEditedAirmen({
        key: 2,
        id: 2,
        name: 'ra',
        surname: 'Netflixakias'
      });
      setVisibleAirmanDrawer(true);
  };

  const onClose = (e: any) => {
    console.log('drawer closed');
    setVisibleAirmanDrawer(false);
  }

  const dataSource = [...props.airmen.airmen];

  console.log("this is the datasource");
  console.log(dataSource);

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
          <a onClick={onClickHandler}>Edit {record.name}</a>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Table dataSource={dataSource} columns={columns} />;
      <Drawer
        title="Basic Drawer"
        placement="right"
        closable={true}
        onClose={onClose}
        visible={visibleAirmanDrawer}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  console.log("mapStateToPropsXXX");
  console.log(state);
  return {
    airmen: state.airmen,
    visibleAirmanDrawer: state.visibleAirmanDrawer
  };
};

const mapDispatchToProps = (dispatch: any) => {
  console.log("mapDispatchToPropsXXX");
  console.log(dispatch);
  return {
    setEditedAirmen: (key: string) => {
      dispatch(setEditedAirmen(key));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AirmanPage);
