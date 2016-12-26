import React, {PropTypes} from 'react';

export default class Space extends React.Component {
  defaultProps = {
    onChange(){}
  }
  constructor(props) {
    super(props);

  }

  onChange = ({target:{value}}) =>{
    let props = this.props.props;
    props.height = parseInt(value);
    if(Number.isNaN(props.height)){return}

    this.props.onChange({props})
    
  }

  render() {
    let props = this.props.props;
    return (
      <div className="react-h5-scenic-editor">
        <label>高度</label>
        <br/>
          <div className="search-box">
            <input type="text" value={props.height} onChange={this.onChange} placeholder="高度(整数)" />
          </div>
        <br/>
      </div>
    );
  }



}
