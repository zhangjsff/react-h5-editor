import React, {PropTypes} from 'react';
import * as comps from './components/comps.jsx'

export default class ComponentSelector extends React.Component {
  defaultProps = {
    data : [],
    extendComps:{},
    currentIndex:0,
    onSelect(){}
  }
  constructor(props) {
    super(props);

    this.comps = {...comps,...props.extendComps}

  }

  onClick(info,customerIndex = false){
    let newElement = {
      compName : info.compName,
      props: info.props
    }

    let newData = this.props.data;
    let currentIndex = this.props.currentIndex >= 0 ? (this.props.currentIndex + 1) : newData.length
    if(typeof customerIndex == 'number'){currentIndex = customerIndex }

    newData.splice(currentIndex,0,newElement);

    this.props.onUpdate(newData,currentIndex);
  }

  render() {
    return (
      <div className="react-h5-selector">
        <ul>
          {this._renderList()}
        </ul>
      </div>
    );
  }

  _renderList(){
    let list = [];
    for(let i in this.comps){
      let info = this.comps[i].info;
      let index = this.comps[i].info.index;
      list.push(<li key={i} onClick={() => this.onClick(info,index)}>{info.cn_name}</li>)
    }

    return list
  }
}
