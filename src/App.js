import React from "react";
import './App.css';
import FilterBar from './components/FilterBar';
import Header from './components/Header.js'
import Albums from './components/Albums.js'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titleFilter: "",
      artistFilter: "",
      descFilter: "",
      ratingFilter: "",
      sortTitle: false,
      sortArtist: false,
      sortDesc: false,
      sortRating: false,
      ascTitle: false,
      ascArtist: false,
      ascDesc: false,
      ascRating: false,
    };
  }

  handleFilterTitleChange(event) {
    this.setState({titleFilter: event.target.value});
  }

  handleFilterArtistChange(event) {
    this.setState({artistFilter: event.target.value});
  }

  handleFilterDescChange(event) {
    this.setState({descFilter: event.target.value});
  }

  handleFilterRatingChange(event) {
    this.setState({ratingFilter: event.target.value});
  }

  onSortTitle() {
    this.setState({
      sortTitle: true,
      ascTitle: !this.state.ascTitle,
    });
  }

  onSortArtist() {
    this.setState({
      sortArtist: true,
      ascArtist: !this.state.ascArtist,
    });
  }

  onSortDesc() {
    this.setState({
      sortDesc: true,
      ascDesc: !this.state.ascDesc,
    });
  }

  onSortRating() {
    this.setState({
      sortRating: true,
      ascRating: !this.state.ascRating,
    });
    console.log("sortRating: " + this.state.sortRating);
    console.log("ascRating: " + this.state.ascRating);
  }

  resetFilters() {
    this.setState({
      sortTitle: false,
      sortArtist: false,
      sortDesc: false,
      sortRating: false,
      ascTitle: false,
      ascArtist: false,
      ascDesc: false,
      ascRating: false,
    });
  }

  render() {
      return (
      <>
        <Header />
        <FilterBar 
          handleFilterTitleChange={this.handleFilterTitleChange.bind(this)} 
          handleFilterArtistChange={this.handleFilterArtistChange.bind(this)} 
          handleFilterDescChange={this.handleFilterDescChange.bind(this)} 
          handleFilterRatingChange={this.handleFilterRatingChange.bind(this)}

          onSortTitle={this.onSortTitle.bind(this)}
          onSortArtist={this.onSortArtist.bind(this)}
          onSortDesc={this.onSortDesc.bind(this)}
          onSortRating={this.onSortRating.bind(this)}

          resetFilters={this.resetFilters.bind(this)}
        />
        <Albums 
          titleFilter={this.state.titleFilter} 
          artistFilter={this.state.artistFilter} 
          descFilter={this.state.descFilter} 
          ratingFilter={this.state.ratingFilter}

          sortTitle={this.state.sortTitle}
          sortArtist={this.state.sortArtist}
          sortDesc={this.state.sortDesc}
          sortRating={this.state.sortRating}

          ascTitle={this.state.ascTitle}
          ascArtist={this.state.ascArtist}
          ascDesc={this.state.ascDesc}
          ascRating={this.state.ascRating}
        />
      </>
    );
  }
}
