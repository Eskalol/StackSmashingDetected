import React, {Component} from 'react';
import {connect} from 'react-redux';
import Loading from '../Loading/Loading';
import {KeyValue} from '../Key/KeyValue';

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
          this.props.keyNames.map((value, i) => <KeyValue key={i} />)
        }
      </div>
    );
  }
}

KeyValueList.propTypes = {
  keyNames: React.PropTypes.array.isRequired,
  isFetching: React.PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return state.keyValues;
}

export default connect(mapStateToProps)(KeyValueList);
