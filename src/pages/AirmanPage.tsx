import React from "react";
import { Space, Table } from "antd";
import { store, ReduxSelectors } from "../store";
import { connect } from "react-redux";
import { setEditedAirmen } from "../components/StoreActions";

function AirmanPage(props: any) {
  console.log("AirmanPage");
  console.log(props);

  const onClickHandler = (e: any) => {
      console.log('onclick called');
  };

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
    </div>
  );
}

const mapStateToProps = (state: any) => {
  console.log("mapStateToPropsXXX");
  console.log(state);
  return {
    airmen: state.airmen,
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
