require('./style.less');

import React, {PropTypes} from 'react';

export default class Text extends React.Component {

  static get defaultProps(){
    return {
      name : 'react-h5-text',
      props:{
        text : 'test text is here'
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
      <div {...props} className="react-h5-text react-h5-playground-item" >
        {itemProps.text}
      </div>
    );
  }
}

import _info from './info.jsx'
export {_info as info}

Text.propTypes = {
  name:PropTypes.string,
  props:PropTypes.object,
};
