require('./style.less');

import React, {PropTypes} from 'react';

export default class Space extends React.Component {

  static get defaultProps(){
    return {
      name : 'react-h5-space',
      props:{
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
      <div {...props} className="react-h5-space react-h5-playground-item" >
        <div style={{height:itemProps.height}}></div>
        {this.props.children}
      </div>
    );
  }

}

Space.propTypes = {
  name:PropTypes.string,
  props:PropTypes.object,
};
