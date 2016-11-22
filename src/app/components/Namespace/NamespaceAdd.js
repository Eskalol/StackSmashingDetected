import React, {Component} from 'react';

class NamespaceAdd extends Component {

  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="row">
        <div className="col-lg-12">
          <div className="container info">
            <div className="row">
              <div className="col-md-8">
                <div className="align-left">
                  <input type="text" className="input-line" placeholder="Namespace name..."/>
                </div>
              </div>
              <div className="col-md-4">
                <div className="align-right">
                  <i className="fa fa-plus fa-2x"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NamespaceAdd;
