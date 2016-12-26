import React, {PropTypes} from 'react';
import * as comps from './components/comps.jsx'
import FindParent from 'find-parent';

const switchElement = (from,to,data) => {
  let newData = data;
  let fromData = data[from-1]
  newData[from-1] = null;

  if(from > to){
    newData.splice(to-1,0,fromData)
  }else{
    newData.splice(to,0,fromData)
  }

  return newData.filter(item => !!item)
}

export default class Playground extends React.Component {

  static get defaultProps() {
    return {
      conf:{
        comps:{},
      },
      extendComps : {},
      data : [],
      onElementClick(){},
      onUpdate:false,
    }
  }

  constructor(props) {
    super(props);
    this.comps = {...props.extendComps, ...comps}
  }

  onElementClick(index,item){
    if(index == this.props.currentIndex){
      index = -1;
    }
    this.props.onElementClick(index,item)
  }

  onDelete(index){
    let newData = this.props.data;
    newData[index] = null;
    this.props.onUpdate(newData.filter(item => !!item))
  }

  _dragEnd(e){

    if(this.over && this.over.dataset.index > 0){
      let from = this.dragged.dataset.index;
      let to = this.over.dataset.index;
      let newData = switchElement(from,to,this.props.data)
      this.props.onUpdate(newData)
    }
  }

  _dragStart(e){
    this.dragged = e.currentTarget
    e.dataTransfer.setData("text/html", e.currentTarget);
  }

  _dragOver(e){
    e.preventDefault();
    if(e.target.className.indexOf('react-h5-playground') >=0){
      this.over = e.target;
    }else{
      this.over = FindParent.byClassName(e.target,'react-h5-playground-item');
    }
  }


  render() {
    return (
      <div className="react-h5-playground" onDragOver={this._dragOver.bind(this)}>
        {this._renderComponents()}
      </div>
    );
  }

  _renderComponents(){

    return this.props.data.map((item,index) => {

      let comp = this.comps[item.compName].comp
      let isSelected = (index == this.props.currentIndex)
      return React.createElement(comp,{
        key:index,
        props:{
          draggable:true,
          'data-index':index+1,
          'data-selected' : isSelected,
          onDragEnd:this._dragEnd.bind(this),
          onDragStart:this._dragStart.bind(this),
          onClick:this.onElementClick.bind(this,index,item)
        },
        "data-props":item.props,
        children:(<div className="react-h5-editor-children">
                    {this._renderDelete(index)}
                    {this._renderMask()}
                  </div>)
      })
    })
  }

  _renderDelete(index){
    if(this.props.onUpdate){
      return <div className="react-h5-editor-delete" onClick={this.onDelete.bind(this,index)}>X</div>
    }
  }

  _renderMask(){
    if(this.props.onUpdate){
      return <div className="react-h5-editor-mask"></div>
    }
  }
}
