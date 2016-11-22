import React, {Component} from 'react';

class Namespace extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="container hover">
            <div className="row">
              <div className="col-lg-8">
                <div className="align-left">
                  {this.props.namespace}
                </div>
              </div>
              <div className="col-lg-4">
                <div className="align-right">
                  <i className="fa fa-times fa-2x fa-foreground" aria-hidden="true"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Namespace.propTypes = {
  namespace: React.PropTypes.string.isRequired
};

export default Namespace;
