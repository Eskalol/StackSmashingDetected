import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as KeyValueActions from '../../actions/keyValue';

export class EditValue extends Component {

  constructor(props) {
    super(props);

    this.handleEdit = this.handleEdit.bind(this);
    this.handleSubmitEnter = this.handleSubmitEnter.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
  }

  componentWillMount() {
    this.state = {editValue: this.props.keyObject.value};
  }

  handleChange(event) {
    this.setState({editValue: event.target.value});
  }

  handleEdit() {
    this.props.actions.toggleEditWrapper(this.props.keyObject.id);
  }

  handleSubmitEnter(event) {
    if (event.which === 13) {
      this.props.actions.putValue(this.props.namespace, this.props.keyObject.key, this.props.keyObject.id, this.state.editValue);
      this.handleEdit();
    }
  }

  handleSubmitClick() {
    this.props.actions.putValue(this.props.namespace, this.props.keyObject.key, this.props.keyObject.id, this.state.editValue);
  }

  render() {
    return (
      <div className="container">
        <div className="col-sm-3">
          <div className="align-left">
            <h4>{this.props.keyObject.key}</h4>
          </div>
        </div>
        <div className="col-sm-8">
          <div className="align-left">
            {
            !this.props.keyObject.overflow &&
              <input
                className="input-line"
                defaultValue={this.props.keyObject.value}
                size={this.props.keyObject.value.length}
                onKeyDown={this.handleSubmitEnter}
                onChange={this.handleChange}
                />
            }
            {
            this.props.keyObject.overflow &&
              <textarea
                className="text-area"
                rows="10"
                cols="30"
                defaultValue={this.props.keyObject.value}
                onKeyDown={this.handleSubmitEnter}
                onChange={this.handleChange}
                />
            }
          </div>
        </div>
        <div className="col-sm-1">
          <div className="align-right">
            <i className="fa fa-times fa-2x fa-foreground fa-padding" aria-hidden="true" onClick={this.handleEdit}/>
            <i className="fa fa-check fa-2x fa-foreground fa-padding" aria-hidden="true" onClick={this.handleSubmitClick}/>
          </div>
        </div>
      </div>
    );
  }
}

EditValue.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(EditValue);
