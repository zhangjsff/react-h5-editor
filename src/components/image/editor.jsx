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
export default class ImageEditor extends React.Component {
  defaultProps = {
    onChange(){}
  }
  constructor(props) {
    super(props);


    if(props.config.uploadPath){
      this.uploadPorps = {
        action : props.config.uploadPath,
        name : props.config.uploadName || 'image',
        data : props.config.data,
        // onProgress : this._onUploadProgress,
        onSuccess : this._onUploadSuccess.bind(this)
      }
    }
  }

  _onUploadSuccess(resp){
    let url = '';

    if(!this.props.config.onSuccess){
      url = resp
    }

    url = this.props.config.onSuccess(resp);

    let props = this.props.props;
    props.url = url;
    this.props.onChange({props})

  }

  onChangeUrl = (e) => {
    let props = {...this.props.props};
    props.url = e.target.value;
    this.props.onChange({props})
  }

  onChangeDesc = (e) => {
    let props = {...this.props.props};
    props.desc = e.target.value;
    this.props.onChange({props})
  }

  render() {
    let props = this.props.props;
    return (
      <div className="react-h5-image-editor">
        <label>图片地址：</label>
        <br/>
        <input type="text" value={props.url} onChange={this.onChangeUrl}/>
        <br/>
        {this._renderUploadBtn()}
        <br/>
        <label>图片描述：</label>
        <br/>
        <input type="text" value={props.desc} onChange={this.onChangeDesc}/>
      </div>
    );
  }

  _renderUploadBtn(){
    if(this.uploadPorps){
      return (
        <RcUpload {...this.uploadPorps} style={{textAlign:'right',display:'block',width:300}}>
            <div className="btn" style={{marginTop:10}}>添加</div>
        </RcUpload>
      )
    }
  }
}
