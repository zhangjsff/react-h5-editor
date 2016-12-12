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
    let props = this.props.props;
    return (
      <div className="react-h5-text" onClick={this.props.onClick}>
        {props.text}
      </div>
    );
  }
}

Text.propTypes = {
  name:PropTypes.string,
  props:PropTypes.object,
};
