import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import classNames from 'classnames';
import * as KeyValueActions from '../../actions/keyValue';

export class Value extends Component {
  constructor(props) {
    super(props);

    // Bind handleShowValue
    this.handleShowValue = this.handleShowValue.bind(this);
    this.handleMetadata = this.handleMetadata.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleMetadata() {
    this.props.actions.getMetadata(this.props.namespace, this.props.keyObject.key, this.props.keyObject.id);
  }

  handleEdit() {
    this.props.actions.toggleEditWrapper(this.props.keyObject.id);
  }

  handleDelete() {
    this.props.actions.deleteKeyValuePair(this.props.namespace, this.props.keyObject.key, this.props.keyObject.id);
  }

  handleShowValue() {
    this.props.actions.toggleShowValueWrapper(this.props.keyObject.id);
  }

  render() {
    const containerClassNames = classNames('container', {success: this.props.keyObject.new});
    return (
      <div className={containerClassNames}>
        <div className="row">
          <div className="col-sm-3">
            <div className="align-left">
              <h4>{this.props.keyObject.key}</h4>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="align-left">
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
          </div>
          <div className="col-sm-1">
            <div className="align-right">
              <i className="fa fa-pencil fa-2x fa-foreground fa-padding" aria-hidden="true" onClick={this.handleEdit}/>
              <i className="fa fa-tag fa-2x fa-foreground fa-padding" aria-hidden="true" onClick={this.handleMetadata}/>
              <i className="fa fa-times fa-2x fa-foreground fa-padding" aria-hidden="true" onClick={this.handleDelete}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Value.propTypes = {
  keyObject: React.PropTypes.object.isRequired,
  actions: React.PropTypes.object.isRequired,
  namespace: React.PropTypes.string.isRequired
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
