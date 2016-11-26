import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as KeyValueActions from '../../actions/keyValue';

class AddKeyValue extends Component {
  constructor(props) {
    super(props);

    // Bindings
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyInput = this.handleKeyInput.bind(this);
    this.handleValueInput = this.handleValueInput.bind(this);

    // Is there a better way to do this?
    this.key = "";
    this.value = "";
  }

  handleSubmit() {
    if (this.key.length > 0 && this.value.length > 0) {
      this.props.actions.postValue(this.props.namespace, this.key, this.value);
    }
  }

  handleKeyInput(e) {
    this.key = e.target.value;
  }

  handleValueInput(e) {
    this.value = e.target.value;
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="align-left">
                  <input
                    className="input-line"
                    defaultValue="key"
                    onKeyDown={this.handleKeyInput}
                    />
                </div>
              </div>
              <div className="col-sm-8">
                <div className="align-left">
                  <input
                    className="input-line"
                    defaultValue="value"
                    onKeyDown={this.handleValueInput}
                    />
                </div>
              </div>
              <div className="col-sm-1">
                <div className="align-right">
                  <i
                    className="fa fa-envelope-open fa-2x fa-foreground"
                    aria-hidden="true"
                    onClick={this.handleSubmit}
                    />
                  <i
                    className="fa fa-times fa-2x fa-foreground"
                    aria-hidden="true"
                    onClick={this.props.actions.handleToggleAdd}
                    />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

AddKeyValue.propTypes = {
  namespace: React.PropTypes.string.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(AddKeyValue);
