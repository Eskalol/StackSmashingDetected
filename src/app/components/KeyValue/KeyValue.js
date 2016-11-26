import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Loading from '../Loading/Loading';
import * as KeyValueActions from '../../actions/keyValue';

class KeyValue extends Component {
  constructor(props) {
    super(props);

    // Bindings
    this.handleMetaData = this.handleMetaData.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    const {actions} = this.props;
    actions.getValue(this.props.keyObject.key, this.props.namespace, this.props.keyObject.id);
  }

  /* Handlers */
  handleMetaData() {
    this.props.actions.getMetaData(this.props.namespace, this.props.keyObject.key, this.props.keyObject.id);
  }

  handleEdit() {
    this.props.actions.toggleEdit(this.props.keyObject.id);
  }

  /*
    TODO: Fix input field to stretch along with typed input
    TODO: Fix naming
  */

  handleSubmit(e) {
    if (e.which === 13) {
      this.props.actions.putValue(this.props.namespace, this.props.keyObject.key, this.props.keyObject.id, e.target.value);
    }
  }

  handleDelete() {
    this.props.actions.deleteKeyValuePair(this.props.namespace, this.props.keyObject.key, this.props.keyObject.id);
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="container">
            <div className="row">
              <div className="col-sm-3">
                <div className="align-left">
                  {this.props.keyObject.key}
                </div>
              </div>
              <div className="col-sm-8">
                <div className="align-left">
                  {this.props.keyObject.loading && <Loading/>}
                  {
                    !this.props.keyObject.loading && this.props.keyObject.edit &&
                      <input
                        className="input-line"
                        defaultValue={this.props.keyObject.value}
                        size={this.props.keyObject.value.length}
                        onKeyDown={this.handleSubmit}
                        />
                  }
                  {
                    !this.props.keyObject.loading && !this.props.keyObject.edit &&
                      (<div>{this.props.keyObject.value}</div>)
                  }
                </div>
              </div>
              <div className="col-sm-1">
                <div className="align-right">
                  <i className="fa fa-times fa-2x fa-foreground" aria-hidden="true" onClick={this.handleDelete}/>
                  <i className="fa fa-pencil fa-2x fa-foreground" aria-hidden="true" onClick={this.handleEdit}/>
                  <i className="fa fa-tag fa-2x fa-foreground" aria-hidden="true" onClick={this.handleMetaData}/>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(KeyValue);
