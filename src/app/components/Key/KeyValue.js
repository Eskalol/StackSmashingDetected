import React, {Component} from 'react';
import {connect} from 'react-redux';

class KeyValue extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col col-md-5 container center hover">
          <span> {this.props.keyName} </span>
        </div>
      </div>
    );
  }
}

KeyValue.propTypes = {
  keyName: React.PropTypes.object.isRequired,
  key: React.PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return state.keyValues;
}

export default connect(mapStateToProps)(KeyValue);
