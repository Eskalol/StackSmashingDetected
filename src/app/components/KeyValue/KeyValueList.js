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
      <div className="main-container">
        {this.props.namespace}
      </div>
    );
  }
}

KeyValueList.propTypes = {
  items: React.PropTypes.array.isRequired,
  isFetching: React.PropTypes.bool.isRequired,
  params: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return state.keyValues;
}

export default connect(mapStateToProps)(KeyValueList);
