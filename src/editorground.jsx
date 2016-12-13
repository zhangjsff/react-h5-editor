import React, {PropTypes} from 'react';
import * as comps from './components/comps.jsx'
import CompSelecor from './selector.jsx'

export default class EditorGround extends React.Component {
  static get defaultProps(){
    return {
      conf:{},
      data : [],
      elementIndex:undefined,
      onUpdate(){},
    }
  }

  constructor(props) {
    super(props);
  }

  componentWillUpdate(nextProps){
    this.elementData = nextProps.data[nextProps.currentIndex]
    return true
  }

  onChange = (newElementData) => {
    newElementData.compName = this.elementData.compName
    let newData = this.props.data;
    newData[this.props.elementIndex] = newElementData
    this.props.onUpdate(newData);
  }

  render() {

    return (
      <div>
        {this._renderEditor()}        
      </div>
    );
  }

  _renderEditor(){
    if(!this.elementData){ return }

    let editor = this.elementData;
    let comp =   comps[editor.compName].editor;

    //todo if !comp try customer comp
    if(!comp){

    }

    return React.createElement(
      comp,
      {
        compName : editor.compName,
        props : editor.props,
        onChange : this.onChange
      }
    )
  }

}
