import React, {Component} from 'react';

export class Namespace extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  getNamespaceUrl() {
    return `/namespace?name=${this.props.namespace}`;
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <a href={this.getNamespaceUrl()}>
            <div className="container hover">
              <div className="align-left">
                <h3>{this.props.namespace}</h3>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

Namespace.propTypes = {
  namespace: React.PropTypes.string.isRequired
};

export default Namespace;
