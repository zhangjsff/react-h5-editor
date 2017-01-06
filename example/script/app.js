import React, {PropTypes} from 'react';
import {PlayGround,EditGround,EditSelector} from '../../src/index.js';
import * as text2 from './customer-component/text/info.jsx';
const extendComps = { text2 }

const editorConfig={
  image:{
    uploadPath:'http://yoursiteupload/path',

    uploadName :'image',
    onSuccess : (resp) => {
      return 'url';
    }
  }
}

const exampleData = [
  {
    compName : 'text',
    props : {
      text : 'hello world'
    }
  },
  {
    compName : 'title',
    props : {
      text : 'hello world 2'
    }
  },
  {
    compName : 'image',
    props : {
      url : 'http://img01.zhangtu.com/pic/201509/24/5603c2721ba26317_t_6340.jpg@700w.jpg',
      desc:'圆明园'
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
          onUpdate={this.onUpdate}
          extendComps={extendComps}
          />
        <br/>
        <EditGround
          data={this.state.data}
          currentIndex={this.state.currentEditIndex}
          onUpdate={this.onUpdate}
          config={editorConfig}
          extendComps={extendComps}
          />
        <br/>
        <EditSelector
          data={this.state.data}
          currentIndex={this.state.currentEditIndex}
          onUpdate={this.onUpdate}
          extendComps={extendComps} />
      </div>
    );
  }
}
