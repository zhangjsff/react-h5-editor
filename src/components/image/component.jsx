require('./style.less');

import React, {PropTypes} from 'react';

export default class Image extends React.Component {

  static get defaultProps(){
    return {
      name : 'react-h5-image',
      props:{
        url : false,
        desc: 'image desc'
      }
    }
  }

  constructor(props) {
    super(props);

  }

  render() {
    let props = this.props.props
    let itemProps = this.props['data-props'];

    return (
      <div {...props} className="react-h5-image react-h5-playground-item" >
        <span className="react-h5-image-box">
          {this._renderImage()}
        </span>
        <p className="react-h5-image-desc">
          {itemProps.desc}
        </p>
        {this.props.children}
      </div>


    );
  }

  _renderImage(){
    let props = this.props['data-props']
    if(props.url){
      return <img src={props.url} />
    }else{
      return <div style={{
        height:200,
        background:'#ccc',
        color:'white',
        textAlign:'center',
        lineHeight:'200px'
      }}> 图片 </div>
    }
  }
}

import _info from './info.jsx'
export {_info as info}

Image.propTypes = {
  name:PropTypes.string,
  props:PropTypes.object,
};
