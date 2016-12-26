require('./style.less');

import React, {PropTypes} from 'react';

export default class Link extends React.Component {

  static get defaultProps(){
    return {
      name : 'react-h5-link',
      props:{
        url : false,
        label: 'image desc'
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
      <div {...props} className="react-h5-link react-h5-playground-item" >
        <a href={itemProps.url} target="_blank">{itemProps.label}</a>
        {this.props.children}
      </div>
    );
  }

}

Link.propTypes = {
  name:PropTypes.string,
  props:PropTypes.object,
};
