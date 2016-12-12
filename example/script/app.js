import React, {PropTypes} from 'react';

import PlayGround from '../../src/playground.jsx'
import EditorGround from '../../src/editorground.jsx'

const exampleData = [
  {
    compName : 'text',
    props : {
      text : 'hello world'
    }
  },
  {
    compName : 'text',
    props : {
      text : 'hello world 2'
    }
  },
  {
    compName : 'text',
    props : {
      text : 'hello world 3'
    }
  },
  {
    compName : 'text',
    props : {
      text : 'hello world 4'
    }
  },
  {
    compName : 'text',
    props : {
      text : 'hello world 5'
    }
  },
]

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

  onElementDrag = (newData) => {
    this.setState({data:newData})
  }

  render() {
    let editElement = this.state.data[this.state.currentEditIndex]
    return (
      <div>
        <PlayGround data={this.state.data} onElementClick={this.onElementClick} onElementDrag={this.onElementDrag}/>
        <br/>
        <EditorGround elementData={editElement} onChange={this.onChange}/>
      </div>
    );
  }
}
