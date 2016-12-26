require('./style.less');

import React, {PropTypes} from 'react';

export default class Title extends React.Component {

  static get defaultProps(){
    return {
      name : 'react-h5-title',
      props:{
        text: 'title'
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
      <div {...props} className={`react-h5-title react-h5-playground-item ${itemProps.level}`} >
        {itemProps.text}
        {this.props.children}
      </div>
    );
  }
}

import _info from './info.jsx'
export {_info as info}

Image.propTypes = {
  name:PropTypes.string,
  props:PropTypes.object,
};
