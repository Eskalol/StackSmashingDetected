import React, {Component} from 'react';

class Namespace extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="container center hover">
        <div className="row">
          <div className="col col-md-5">
            <span>{this.props.namespace.name}</span>
          </div>
        </div>
      </div>
    );
  }
}

Namespace.propTypes = {
  namespace: React.PropTypes.object.isRequired
};

export default Namespace;
