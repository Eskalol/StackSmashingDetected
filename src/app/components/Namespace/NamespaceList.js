import React, {Component} from 'react';
import {connect} from 'react-redux';
// import Namespace from './Namespace';

class NamespaceList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        {
          this.props.items.map((value, i) => <div key={i}>{value}</div>)
        }
      </div>
    );
  }
}

NamespaceList.propTypes = {
  items: React.PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return state.namespaces;
}

export default connect(mapStateToProps)(NamespaceList);

        // {
        //   this.props.namespaces.map((namespace, i) => {
        //     return (
        //       <Namespace key={i} namespace={namespace}/>
        //     );
        //   })
        // }
