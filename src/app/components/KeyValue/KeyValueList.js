import React, {Component} from 'react';
import {connect} from 'react-redux';
// import Loading from '../Loading/Loading';

class KeyValueList extends Component {
  constructor(props) {
    super(props);
    console.log("KeyValueList");
    console.log(props);
  }

  render() {
    return (
      <div>
        <span>
        gfdsgsfdsgsdg
        sdfgsgsdg
        dsgdsg
        dsgfds
        gfdsgsfdsgsdggfsd
        gfdsgsfdsgsdggfsdgfd
        sdfgsgsdgdsg
        dsgfdsdsf
        gfdsgsfdsgsdggfsdgfdgs
        gsfgrgrghrtgw
        wrhrthwtrhtrwhwtr
        wrhrthwtrhtrwhwtr
        hrtshsrhrhrsh
        rshhrhrshhrsgsrgtg
        rtgrgsgrsgsg
        rsgsgrs
        sggrggrhsrthrsearf
        aefreaf
        aefreafaerfeafeafr
        erafeafaegaegraetgerfgafeg
        adfgadgdagagadfggafd
        gdafgadfgafgd
        </span>
      </div>
    );
  }
}

KeyValueList.propTypes = {
  items: React.PropTypes.array.isRequired,
  isFetching: React.PropTypes.bool.isRequired
  // params: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return state.keyValues;
}

export default connect(mapStateToProps)(KeyValueList);
