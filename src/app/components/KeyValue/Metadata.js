import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as KeyValueActions from '../../actions/keyValue';

export class Metadata extends Component {
  constructor(props) {
    super(props);
    this.handleMetadata = this.handleMetadata.bind(this);
  }

  handleMetadata() {
    this.props.actions.toggleMetadataWrapper(this.props.keyObject.id);
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="container-header info">
            <h4>{this.props.keyObject.key}</h4>
          </div>
          <div className="container info">
            <div className="row">
              <div className="col-md-3"><h4>created:</h4> {this.props.keyObject.metadata.created}</div>
              <div className="col-md-3"><h4>externalAccess: </h4>{this.props.keyObject.metadata.externalAccess}</div>
              <div className="col-md-3"><h4>id: </h4>{this.props.keyObject.metadata.id}</div>
              <div className="col-md-3"><h4>lastUpdated: </h4>{this.props.keyObject.metadata.lastUpdated}</div>
            </div>
            <div className="row">
              <i className="fa fa-arrow-left fa-2x fa-foreground fa-padding" aria-hidden="true" onClick={this.handleMetadata}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Metadata.propTypes = {
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

export default connect(mapStateToProps, mapDispatchToProps)(Metadata);
