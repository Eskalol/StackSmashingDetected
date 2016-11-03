import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as HeaderActions from '../actions/header';

class Dhis extends Component {
  constructor(props) {
    super(props);
    const {actions} = this.props;
    actions.changeText("DHIS");
  }

  render() {
    return (
      <div className="main-container center">
        <div className="row flow">
          <div className="col-md-2">
            <div className="container-header error">Something</div>
            <div className="container error">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </div>
          </div>
          <div className="col-md-7 container success">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </div>
          <div className="col-md-2">
            <div className="container-header warning">input-line with warnings</div>
            <div className="container warning">
              <div className="row">
                <div className="col col-md-3">
                  Normal: <input type="text" className="input-line"/>
                </div>
              </div>
              <div className="row">
                <div className="col col-md-3">
                  Warning: <input type="text" className="input-line warning"/>
                </div>
              </div>
              <div className="row">
                <div className="col col-md-3">
                  Error: <input type="text" className="input-line error"/>
                </div>
              </div>
              <div className="row">
                <div className="col col-md-3">
                  Success: <input type="text" className="input-line success"/>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-2">
            <div className="container-header info">input-box with warnings</div>
            <div className="container info">
              <p>Normal: <input type="text" className="input-box"/></p>
              <p>Warning: <input type="text" className="input-box warning"/></p>
              <p>Error: <input type="text" className="input-box error"/></p>
              <p>Success: <input type="text" className="input-box success"/></p>
            </div>
          </div>
          <div className="col-md-2 container">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
          </div>
        </div>
      </div>
    );
  }
}

Dhis.propTypes = {
  actions: React.PropTypes.object.isRequired
};

/**
 * maps actions to props
 * @param  {dispatch} dispatch mapDispatchToProps
 * @return {json}              json object with action functions
 */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(HeaderActions, dispatch)
  };
}

export default connect(null, mapDispatchToProps)(Dhis);
