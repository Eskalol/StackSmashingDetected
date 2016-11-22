import React, {Component} from 'react';
import {connect} from 'react-redux';
import Loading from '../Loading/Loading';

class KeyValueList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        {this.props.isFetching && <Loading/>}
        {
          !this.props.isFetching &&
          Cool
        }
      </div>
    );
  }
}

KeyValueList.propTypes = {
  items: React.PropTypes.array.isRequired,
  isFetching: React.PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return state.keyValues;
}

export default connect(mapStateToProps)(KeyValueList);
