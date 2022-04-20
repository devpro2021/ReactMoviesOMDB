import React, { Component } from "react";

export default class Search extends Component {
  state = {
    search: "",
    type: "all",
  };
  handleKey = (e) => {
    if (e.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };
  handeFilter = (e) => {
    this.setState(
      () => ({ type: e.target.dataset.type }),
      () => {
        this.props.searchMovies(this.state.search, this.state.type);
      }
    );
  };
  render() {
    return (
      <div className='row'>
        <div className='input-field col s12'>
          <input
            id='search'
            className='validate'
            type='search'
            placeholder='search'
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKey}
          />
          <p>
            <label>
              <input
                className='with-gap'
                name='type'
                type='radio'
                data-type='all'
                onChange={this.handeFilter}
                checked={this.state.type === "all"}
              />
              <span>All</span>
            </label>
            <label>
              <input
                className='with-gap'
                name='type'
                type='radio'
                data-type='movie'
                onChange={this.handeFilter}
                checked={this.state.type === "movie"}
              />
              <span>Movies only</span>
            </label>
            <label>
              <input
                className='with-gap'
                name='type'
                type='radio'
                data-type='series'
                onChange={this.handeFilter}
                checked={this.state.type === "series"}
              />
              <span>Series only</span>
            </label>
          </p>
          <button
            className='btn search-btn'
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
          >
            Search
          </button>
        </div>
      </div>
    );
  }
}
