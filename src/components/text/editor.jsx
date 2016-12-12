import React, {PropTypes} from 'react';

export default class TextEditor extends React.Component {
  defaultProps = {
    onChange(){}
  }
  constructor(props) {
    super(props);
  }

  onChange = (e) => {
    this.props.onChange({
      props : {
        text: e.target.value
      }
    })
  }

  render() {
    let props = this.props.props;
    return (
      <div className="react-h5-text-editor">
        <input type="text" value={props.text} onChange={this.onChange}/>
      </div>
    );
  }
}
