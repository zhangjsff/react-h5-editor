import React, {PropTypes} from 'react';
import {PlayGround,EditGround,EditSelector} from '../../src/index.js';

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

  onUpdate = (newData) => {
    this.setState({data:newData})
  }

  onElementClick = (currentEditIndex,item) => {
    this.setState({currentEditIndex})
  }

  render() {
    let editElement = this.state.data[this.state.currentEditIndex]
    return (
      <div>
        <PlayGround
          data={this.state.data}
          currentIndex={this.state.currentEditIndex}
          onElementClick={this.onElementClick}
          onUpdate={this.onUpdate} />
        <br/>
        <EditGround
          data={this.state.data}
          currentIndex={this.state.currentEditIndex}
          onUpdate={this.onUpdate} />
        <br/>
        <EditSelector
          data={this.state.data}
          onUpdate={this.onUpdate} />
      </div>
    );
  }
}
