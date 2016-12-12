import React, {PropTypes} from 'react';
import * as comps from './components/comps.jsx'

export default class Playground extends React.Component {

  static get defaultProps() {
    return {
      conf:{
        comps:['text']
      },
      data : [],
      onElementClick:()=>{},
    }
  }

  constructor(props) {
    super(props);

    this.state = {

    }
  }

  onElementClick(index,item){
    this.props.onElementClick(index,item)
  }

  render() {
    return (
      <div>
        {this._renderComponents()}
      </div>
    );
  }

  _renderComponents(){

    return this.props.data.map((item,index) => {
      let comp = comps[item.compName]
      return React.createElement(comp,{key:index,props:item.props,onClick:this.onElementClick.bind(this,index,item)})
    })
  }
}
