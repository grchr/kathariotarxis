import React, { useState, useEffect } from "react";
import { Space, Table, Drawer } from "antd";
import { store, ReduxSelectors } from "../store";
import { connect } from "react-redux";
import { setEditedAirmen, setCurrentActivePage } from "../components/StoreActions";
import { useHistory } from 'react-router-dom'

function AirmanPage(props: any) {
  console.log("AirmanPage");
  console.log(props);

  const history = useHistory();
  // console.log(history);
  // console.log(props.history);

  const [visibleAirmanDrawer, setVisibleAirmanDrawer] = useState(false);

  useEffect(() => {
    setVisibleAirmanDrawer(props.visibleAirmanDrawer);

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

  const onClickHandler = (e: any) => {
      // console.log('onclick called');
      // console.log(history);
      props.setEditedAirmen({
        key: 2,
        id: 2,
        name: 'ra',
        surname: 'Netflixakias'
      });
      setVisibleAirmanDrawer(true);
  };

  const onClose = (e: any) => {
    //console.log('drawer closed');
    setVisibleAirmanDrawer(false);
  }

  const dataSource = [...props.airmen.airmen];

  // console.log("this is the datasource");
  // console.log(dataSource);

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
  // console.log("mapStateToPropsXXX");
  // console.log(state);
  return {
    activePage: state.status.activePage,
    airmen: state.airmen,
    visibleAirmanDrawer: state.visibleAirmanDrawer
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
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AirmanPage);