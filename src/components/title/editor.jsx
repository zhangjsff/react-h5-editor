import React, {PropTypes} from 'react';

export default class TitleEditor extends React.Component {
  defaultProps = {
    onChange(){}
  }
  constructor(props) {
    super(props);
  }

  onChange = (e) => {
    let props = this.props.props;
    props.text = e.target.value;
    this.props.onChange({props})
  }

  onLevelChange = (e) => {
    let props = this.props.props;
    props.level = e.target.value;
    this.props.onChange({props})
  }

  render() {
    let props = this.props.props;
    return (
      <div className="react-h5-title-editor">
        <label>标题</label>
        <br/>
        <input type="text" value={props.text} onChange={this.onChange}/>
        <br/>
        <label>级别</label>
        <br/>
        <select type="text" value={props.level} onChange={this.onLevelChange}>
          <option value="level1">主标题</option>
          <option value="level2">副标题</option>
          <option value="level3">三级标题</option>
          <option value="level4">四级标题</option>
        </select>
      </div>
    );
  }
}
