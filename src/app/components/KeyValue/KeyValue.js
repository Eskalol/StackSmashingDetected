import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Loading from '../Loading/Loading';
import * as KeyValueActions from '../../actions/keyValue';

class KeyValue extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    const {actions} = this.props;
    actions.getValue(this.props.keyObject.key, this.props.namespace, this.props.keyObject.id);
  }

  render() {
    return (
      <div className="row center">
        <div className="col-lg-12">
          <div className="container">
            <div className="col-lg-6">
              <div className="align-left">
                {this.props.keyObject.key}
              </div>
            </div>
            <div className="col-lg-6">
              <div>
                {this.props.items[this.props.keyObject.id].loading && <Loading/>}
                {
                  !this.props.items[this.props.keyObject.id] &&
                    <input className="input-line" value={this.props.items[this.props.keyObject.id].value} disabled/>
                }
              </div>
              <div className="align-right">
                <i className="fa fa-times fa-2x fa-foreground" aria-hidden="true"/>
                <i className="fa fa-pencil fa-2x fa-foreground" aria-hidden="true"/>
                <i className="fa fa-tag fa-2x fa-foreground" aria-hidden="true"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

KeyValue.propTypes = {
  keyObject: React.PropTypes.object.isRequired,
  namespace: React.PropTypes.string.isRequired,
  actions: React.PropTypes.object.isRequired,
  items: React.PropTypes.array.isRequired
};
function mapStateToProps(state) {
  return {items: state.keyValues};
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, KeyValueActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(KeyValue);
