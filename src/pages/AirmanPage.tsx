import React from 'react';
import { Table } from 'antd';
import { store, ReduxSelectors } from "../store";
import { connect } from 'react-redux';
import { setEditedAirmen } from '../components/StoreActions';

function AirmanPage(props : any) {
    console.log('AirmanPage');
    console.log(props);
    return (
        <div>This will be a Airman Page</div>
    );
}

const mapStateToProps = (state : any) => {
    console.log('mapStateToPropsXXX');
    console.log(state);
    return {
      airmen: state.airmen
    };
};

const mapDispatchToProps = (dispatch : any) => {
    console.log('mapDispatchToPropsXXX');
    console.log(dispatch);
    return {
        setEditedAirmen: (key : string) => {
          dispatch(setEditedAirmen(key));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AirmanPage);