import React, {Component} from 'react';
import {connect} from 'react-redux';
// import Namespace from './Namespace';
import Loading from '../Loading/Loading';

class NamespaceList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div>
        {this.props.isFetching && <Loading/>}
        {
          this.props.items.map((value, i) => <div key={i}>{value}</div>)
        }
      </div>
    );
  }
}

NamespaceList.propTypes = {
  items: React.PropTypes.array.isRequired,
  isFetching: React.PropTypes.bool.isRequired
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
