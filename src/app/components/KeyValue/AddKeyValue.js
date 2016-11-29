import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';
import Error from '../Error/Error';
import * as KeyValueActions from '../../actions/keyValue';

export class AddKeyValue extends Component {
  constructor(props) {
    super(props);

    this.state = {
      key: "",
      value: "",
      keyError: false,
      valueError: false,
      error: false,
      message: ""
    };

    // Bindings
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleKeyInput = this.handleKeyInput.bind(this);
    this.handleValueInput = this.handleValueInput.bind(this);
  }

  handleSubmit() {
    let keyError = false;
    let valueError = false;
    let message = "";
    let error = false;

    if (!this.state.key) {
      console.log("lol");
      error = true;
      keyError = true;
      message = "Key missing!";
    }

    if (!this.state.value) {
      console.log("no value");
      error = true;
      valueError = true;
      message += " Value missing!";
    }

    this.setState({error, keyError, valueError, message});
    if (this.state.key && this.state.value) {
      this.props.actions.postValue(this.props.namespace, this.state.key, this.state.value);
    }
  }

  handleKeyInput(event) {
    this.setState({key: event.target.value});
  }

  handleValueInput(event) {
    this.setState({value: event.target.value});
  }

  render() {
    const keyClasses = classNames('input-line', {error: this.state.keyError || this.props.error});
    const valueClasses = classNames('input-line', {error: this.state.valueError || this.props.error});
    const containerClasses = classNames('container', {error: this.state.error || this.props.error});
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className={containerClasses}>
            <div className="row">
              <div className="col-sm-3">
                <div className="align-left">
                  <input
                    className={keyClasses}
                    placeholder="key..."
                    onChange={this.handleKeyInput}
                    />
                </div>
              </div>
              <div className="col-sm-8">
                <div className="align-left">
                  <input
                    className={valueClasses}
                    placeholder="value..."
                    onChange={this.handleValueInput}
                    />
                </div>
              </div>
              <div className="col-sm-1">
                <div className="align-right">
                  <i
                    className="fa fa fa-check fa-2x fa-foreground fa-padding"
                    aria-hidden="true"
                    onClick={this.handleSubmit}
                    />
                  <i
                    className="fa fa-times fa-2x fa-foreground fa-padding"
                    aria-hidden="true"
                    onClick={this.props.actions.handleToggleAdd}
                    />
                </div>
              </div>
            </div>
            {this.state.error && <Error msg={this.state.message}/>}
            {this.props.error && <Error msg={this.props.message}/>}
          </div>
        </div>
      </div>
    );
  }
}

AddKeyValue.propTypes = {
  namespace: React.PropTypes.string.isRequired,
  actions: React.PropTypes.object.isRequired,
  error: React.PropTypes.bool.isRequired,
  message: React.PropTypes.string.isRequired
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
