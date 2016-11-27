import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import JSONTree from 'react-json-tree';
import * as KeyValueActions from '../../actions/keyValue';

export class Value extends Component {
  constructor(props) {
    super(props);

    // Bind handleShowValue
    this.handleShowValue = this.handleShowValue.bind(this);
    this.handleMetadata = this.handleMetadata.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.getTheme = this.getTheme.bind(this);
  }

  componentWillMount() {
    // Check overflow
    if (this.props.keyObject.value.toString().length > 100) {
      this.props.actions.toggleShowValueWrapper(this.props.keyObject.id);
      this.props.actions.toggleOverflowWrapper(this.props.keyObject.id);
    }
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

  getTheme() {
    return {
      scheme: 'chalk',
      author: 'chris kempson (http://chriskempson.com)',
      base00: '#151515',
      base01: '#202020',
      base02: '#303030',
      base03: '#505050',
      base04: '#b0b0b0',
      base05: '#d0d0d0',
      base06: '#e0e0e0',
      base07: '#f5f5f5',
      base08: '#fb9fb1',
      base09: '#eda987',
      base0A: '#ddb26f',
      base0B: '#acc267',
      base0C: '#12cfc0',
      base0D: '#6fc2ef',
      base0E: '#e1a3ee',
      base0F: '#deaf8f'
    };
  }

  render() {
    return (
      <div className="container">
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
                  <span>Data length: {JSON.stringify(this.props.keyObject.value).length}</span></div>)
              }
              {
              this.props.keyObject.overflow && this.props.keyObject.showValue &&
                (<div><JSONTree data={this.props.keyObject.value} theme={this.getTheme()}/>
                  <i className="fa fa-chevron-circle-up fa-2x fa-foreground" onClick={this.handleShowValue}/></div>)
              }
              {!this.props.keyObject.overflow && (<JSONTree data={this.props.keyObject.value} theme={this.getTheme()}/>)}
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
