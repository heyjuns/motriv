class Highlight extends HTMLElement {
    set selectedMovie(selected){
        this._selectedMovie = selected;
        console.log(this._selectedMovie);
        this.render();
    }
    render(){
        const styleJumbotron = document.querySelector(".jumbotron");
        styleJumbotron.style.backgroundImage = `url(https://image.tmdb.org/t/p/original${this._selectedMovie.poster_path})`;
        this.innerHTML = "";
        this.innerHTML += `
        <div class="row align-items-center">
        <div class="col">
          <div class="img-container">
            <img class="img-fluid" src="https://image.tmdb.org/t/p/w780/${this._selectedMovie.poster_path}" alt="Card image">
          </div>
        </div>
        <div class="col-sm-9">
          <div class="highlight-card">
            <div class="card-body text-left">
            <div class="highlight-title">
            <h5 class="card-title title">${this._selectedMovie.title}</h5>
            </div>
              <div class="highlight-rating">
              <h6 class="card-subtitle mb-2">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-star-half" fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M5.354 5.119L7.538.792A.516.516 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.537.537 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.519.519 0 0 1-.146.05c-.341.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.171-.403.59.59 0 0 1 .084-.302.513.513 0 0 1 .37-.245l4.898-.696zM8 12.027c.08 0 .16.018.232.056l3.686 1.894-.694-3.957a.564.564 0 0 1 .163-.505l2.906-2.77-4.052-.576a.525.525 0 0 1-.393-.288L8.002 2.223 8 2.226v9.8z" />
                </svg>
                ${this._selectedMovie.vote_average}
              </h6>
              <h6 class="card-subtitle mb-2">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-calendar-event-fill" fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M4 .5a.5.5 0 0 0-1 0V1H2a2 2 0 0 0-2 2v1h16V3a2 2 0 0 0-2-2h-1V.5a.5.5 0 0 0-1 0V1H4V.5zM0 5h16v9a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5zm12.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z" />
                </svg>
                ${this._selectedMovie.release_date}
              </h6>
              <h6 class="card-subtitle mb-2">
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-award-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0l1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864 8 0z"/>
              <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
            </svg>
              ${this._selectedMovie.popularity}
              <h6 class="card-subtitle mb-2">
              <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-graph-up" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0h1v16H0V0zm1 15h15v1H1v-1z"/>
              <path fill-rule="evenodd" d="M14.39 4.312L10.041 9.75 7 6.707l-3.646 3.647-.708-.708L7 5.293 9.959 8.25l3.65-4.563.781.624z"/>
              <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4h-3.5a.5.5 0 0 1-.5-.5z"/>
            </svg>
              ${this._selectedMovie.vote_count}
              </div>
            </h6>
              <div class="highlight-overview">
              <h5>Overview</h5>
              <p class="card-text">${this._selectedMovie.overview}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        `
    }
}
customElements.define("high-light", Highlight);
export default Highlight;