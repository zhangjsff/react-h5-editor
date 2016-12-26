import React, {PropTypes} from 'react';
import RcUpload from 'rc-upload';

import GlobalService from '../../../../service/globalService.js'

export default class ScenicEditor extends React.Component {
  defaultProps = {
    onChange(){}
  }
  constructor(props) {
    super(props);

    this.state = {
      searchResults : [],
      name : ''
    }
  }

  onSearch = (e) => {
    let value = e.target.value;
    if(e.keyCode == 13){
      this.doSearch(value)
    }
  }

  doSearch(value){

    if(this.searchRequest){
      this.searchRequest.abort();
    }

    this.searchRequest =
    GlobalService.searchScenic({title:value}).then(resp => {
      this.searchRequest = false;
      this.setState({
        searchResults : resp.content.list
      })
    })
  }

  itemClick(item){
    let props = this.props.props;
    props = Object.assign(props,{...item})
    this.props.onChange({props})
    this.setState({
      searchResults : []
    })
  }

  render() {
    let props = this.props.props;
    return (
      <div className="react-h5-scenic-editor">
        <label>搜索景区</label>
        <br/>
          <div className="search-box">
            <input type="text" onKeyDown={this.onSearch} placeholder="搜索景区名称" />
            {this._renderSearchResults()}
          </div>
        <br/>
        <label>已选景区</label>
        <br/>
          <input type="text" value={props.name} placeholder="请在上方搜索并选择" disabled/>
      </div>
    );
  }

  _renderSearchResults(){
    return (
      <div className="react-h5-scenic-search-results">
        {this.state.searchResults.map((item,index) => {
          return (
            <div className="react-h5-scenic-search-item" key={index} onClick={this.itemClick.bind(this,item)}>
              <div className="react-h5-scenic-thumb" style={{
                backgroundImage : `url(${item.img}@80h_2o)`
              }}></div>
              <div className="react-h5-scenic-name">
                {item.name}
              </div>
            </div>
          )
        })}
      </div>
    )
  }


}
