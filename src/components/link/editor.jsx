import React, {PropTypes} from 'react';
import RcUpload from 'rc-upload';

//upload setting
// {
//   config: {
//     uploadPath,
//     uploadName,
//     onSuccess:function(resp){
//       return url
//     }
//   }
// }
export default class LinkEditor extends React.Component {
  defaultProps = {
    onChange(){}
  }
  constructor(props) {
    super(props);
  }


  onChangeUrl = (e) => {
    let props = this.props.props;
    props.url = e.target.value;
    this.props.onChange({props})
  }

  onChangeLabel = (e) => {
    let props = this.props.props;
    props.label = e.target.value;
    this.props.onChange({props})
  }

  render() {
    let props = this.props.props;
    return (
      <div className="react-h5-image-editor">
        <label>链接地址：</label>
        <br/>
        <input type="text" value={props.url} onChange={this.onChangeUrl}/>
        <br/>
        <label>链接文字：</label>
        <br/>
        <input type="text" value={props.label} onChange={this.onChangeLabel}/>
      </div>
    );
  }
}
