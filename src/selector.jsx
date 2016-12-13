import React, {PropTypes} from 'react';
import * as comps from './components/comps.jsx'

export default class ComponentSelector extends React.Component {
  defaultProps = {
    data : [],
    onSelect(){}
  }
  constructor(props) {
    super(props);
  }

  onClick(info){
    let newElement = {
      compName : info.compName,
      props: info.props
    }

    let newData = this.props.data;
    newData.push(newElement);
    this.props.onUpdate(newData);
  }

  render() {
    return (
      <div>
        <ul>
          {this._renderList()}
        </ul>
      </div>
    );
  }

  _renderList(){
    let list = [];
    for(let i in comps){
      let info = comps[i].info;
      list.push(<ul key={i} onClick={() => this.onClick(info)}>{info.cn_name}</ul>)
    }

    return list
  }
}
