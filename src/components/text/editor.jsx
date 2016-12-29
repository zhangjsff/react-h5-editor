import React, {PropTypes} from 'react';
var ReactQuill = require('react-quill');
export default class TextEditor extends React.Component {
  defaultProps = {
    onChange(){}
  }
  constructor(props) {
    super(props);

    this.state = {
      value : ''
    }
  }

  componentWillMount(){
    let props = this.props.props;
    console.log(props)
    this.setState({
      value : props.text
    })
  }

  onTextChange = (value) => {

    this.setState({ value:value });

  }

  onChange = () => {

    this.props.onChange({
      props : {
        text: this.state.value
      }
    })
  }

  setBolder = () => {

  }

  render() {
    let props = this.props.props;
    return (
      <div className="react-h5-text-editor">
        <br/>
        <div className="text-editor-gournd">
          <ReactQuill theme='snow' value={this.state.value} onChange={this.onTextChange} />
        </div>
        <br/>
        <div className="btn" onClick={this.onChange} >同步并暂存</div>
        {/* <textarea id="text-editor-rich" type="text" value={props.text} onChange={this.onChange} /> */}
      </div>
    );
  }
}
