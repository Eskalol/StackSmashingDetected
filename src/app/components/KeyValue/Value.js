import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as KeyValueActions from '../../actions/keyValue';

class Value extends Component {
  constructor(props) {
    super(props);

    // Bind handleShowValue
    this.handleShowValue = this.handleShowValue.bind(this);
  }

  componentWillMount() {
    // Check overflow
    if (this.props.keyObject.value.toString().length > 100) {
      this.props.actions.toggleShowValueWrapper(this.props.keyObject.id);
      this.props.actions.toggleOverflowWrapper(this.props.keyObject.id);
    }
  }

  handleShowValue() {
    console.log("handle show value fires");
    this.props.actions.toggleShowValueWrapper(this.props.keyObject.id);
  }

  render() {
    return (
      <div>
        {
        this.props.keyObject.overflow && !this.props.keyObject.showValue &&
          (<div><i className="fa fa-chevron-circle-down fa-2x fa-foreground" onClick={this.handleShowValue}/>
            <span>Data length: {this.props.keyObject.value.length}</span></div>)
        }
        {
        this.props.keyObject.overflow && this.props.keyObject.showValue &&
          (<div><textarea className="text-area" rows="10" cols="30" value={this.props.keyObject.value} disabled/>
            <i className="fa fa-chevron-circle-up fa-2x fa-foreground" onClick={this.handleShowValue}/></div>)
        }
        {!this.props.keyObject.overflow && (<p>{this.props.keyObject.value}</p>)}
      </div>
    );
  }
}

Value.propTypes = {
  keyObject: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return state.keyValues;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(Object.assign({}, KeyValueActions), dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Value);
