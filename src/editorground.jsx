import React, {PropTypes} from 'react';
import * as compEditors from './components/compEditors.jsx'


export default class EditorGround extends React.Component {
  static get defaultProps(){
    return {
      conf:{},
      elementData:undefined,
      onChange(){},
    }
  }

  constructor(props) {
    super(props);
  }

  onChange = (newElementData) => {
    newElementData.compName = this.props.elementData.compName
    this.props.onChange(newElementData);
  }

  render() {

    return (
      <div>
        {this._renderEditor()}
      </div>
    );
  }

  _renderEditor(){
    if(!this.props.elementData){ return }

    let editor = this.props.elementData;
    return React.createElement(
      compEditors[editor.compName + 'Editor'],
      {
        compName : editor.compName,
        props : editor.props,
        onChange : this.onChange
      }
    )
  }
}
