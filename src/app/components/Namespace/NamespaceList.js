import React, {Component} from 'react';

import Namespace from './Namespace';

class NamespaceList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        {
          this.props.namespaces.map((namespace, i) => {
            return (
              <Namespace key={i} namespace={namespace}/>
            );
          })
        }
      </div>
    );
  }
}

NamespaceList.propTypes = {
  namespaces: React.PropTypes.array.isRequired
};

export default NamespaceList;
