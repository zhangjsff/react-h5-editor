import React, {PropTypes} from 'react';

import PlayGround from '../../src/playground.jsx'
import EditorGround from '../../src/edtiorground.jsx'

const exampleData = []

export default class MyEditorExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data : exampleData,
      currentEditIndex : null,
    }
  }

  onChange = (newElementData) => {
    let data = this.state.data
    data[this.state.currentEditIndex] = newElementData
    this.setState({data})
  }

  onElementClick = (currentEditIndex,item) => {
    this.setState({currentEditIndex})
  }

  render() {
    let editElement = this.state.data[this.state.currentEditIndex]
    return (
      <div>
        <PlayGround data={this.state.data} onElementClick={this.onElementClick}/>
        <br/>
        <EditorGround elementData={editElement} onChange={this.onChange}/>
      </div>
    );
  }
}
