var React = require("react");
var ReactDOM = require("react-dom");

var TodoSearch = React.createClass({
  handleSearch: function(){
    var showCompleted = this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted, searchText);

  },
  render: function(){
    return (
      <div className="container__header">
        <div>
          <input ref="searchText" type="search" placeholder="Search todos" onChange={this.handleSearch} />
        </div>
        <div>
          <label>
            <input ref="showCompleted" onChange={this.handleSearch} type="checkbox"/>
            Show completed todos
          </label>
        </div>
      </div>
    );
  }
});

module.exports = TodoSearch;
