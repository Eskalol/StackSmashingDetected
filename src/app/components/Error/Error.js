import React, {Component} from 'react';

class Error extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sx-12">
          <div className="align-left text-error">
            <i className="fa fa-times fa-padding"/> {this.props.msg}
          </div>
        </div>
      </div>
    );
  }
}

Error.propTypes = {
  msg: React.PropTypes.string.isRequired
};

export default Error;
