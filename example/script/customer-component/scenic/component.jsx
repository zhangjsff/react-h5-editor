require('./style.less');

import React, {PropTypes} from 'react';

export default class Scenic extends React.Component {

  static get defaultProps(){
    return {
      name : 'react-h5-scenic',
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
      <div {...props} className="react-h5-scenic react-h5-playground-item" >
        <div className="react-h5-scenic-box">
          <a href={`http:/www.zhangtu.com/m/share/scenic?id=${itemProps.sn}`}>
            <div
              className="scenic-image"
              style={{
                backgroundImage : `url('${itemProps.img}@200h_2o')`
              }}
            ></div>
            <div className="scenic-title">{itemProps.name}</div>
          </a>
        </div>
        {this.props.children}
      </div>
    );
  }

}

Scenic.propTypes = {
  name:PropTypes.string,
  props:PropTypes.object,
};
