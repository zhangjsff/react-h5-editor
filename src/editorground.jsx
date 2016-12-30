import React, {PropTypes} from 'react';
import * as comps from './components/comps.jsx'
import CompSelecor from './selector.jsx'

export default class EditorGround extends React.Component {
  static get defaultProps(){
    return {
      config:{},
      extendComps:{},
      data : [],
      currentIndex:undefined,
      onUpdate(){},
    }
  }

  constructor(props) {
    super(props);

    this.comps = {...props.extendComps, ...comps}
  }

  componentWillUpdate(nextProps){
    this.elementData = nextProps.data[nextProps.currentIndex]

    console.log(this.elementData)
    return true
  }

  onChange = (newElementData) => {
    newElementData.compName = this.elementData.compName

    let newData = this.props.data;

    newData[this.props.currentIndex] = newElementData

    this.props.onUpdate([...newData],this.props.currentIndex);
  }

  render() {

    return (
      <div className="react-h5-editor-ground">
        {this._renderEditor()}
      </div>
    );
  }

  _renderEditor(){
    if(!this.elementData){
      return <p>添加组件，或者在预览中选择组件进行编辑</p>
    }

    let editor = this.elementData;
    let comp =   this.comps[editor.compName].editor;

    let config = this.props.config[editor.compName];

    return React.createElement(
      comp,
      {
        compName : editor.compName,
        props : editor.props,
        onChange : this.onChange,
        config: config || {}
      }
    )
  }

}
