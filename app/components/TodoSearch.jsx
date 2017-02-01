var React = require('react');

var TodoSearch = React.createClass({
  handleSearch: function(){
    var showCompleted =  this.refs.showCompleted.checked;
    var searchText = this.refs.searchText.value;

    this.props.onSearch(showCompleted,searchText);//called in TodoApp

  },

  render: function () {
    return (
      <div>
        <div>
          <input type="search" ref="searchText" placeholder="Search Learnings" onChange={this.handleSearch}/>
        </div>
        <div>
          <label>
            <input type="checkbox" ref="showCompleted" onChange={this.handleSearch}/>
          </label>
        </div>
      </div>
    )
  }

  /*
  render :function(){
    return(
      <div>
        Search box
      </div>
    )
  }
*/
  });

module.exports = TodoSearch;
