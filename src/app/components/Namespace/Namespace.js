import React, {Component} from 'react';

class Namespace extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col col-md-5 container center hover">
          <span>{this.props.namespace}</span>
          <button className="col-md-2 right" type="button">
            Analyse
          </button>
        </div>
      </div>
    );
  }
}

Namespace.propTypes = {
  namespace: React.PropTypes.object.isRequired
};

export default Namespace;
