import disneyMoviesData from '../public/data/disneyPlusMoviesData.json';

// Function to return movies data array grouped by movie type
export function getMoviesTypeDataArray() {
    const moviesData = [];
    const recommends = [];
    const newDisney = [];
    const originals = [];
    const trending = [];
    Object.entries(disneyMoviesData.movies).forEach((movie) => {
        const [key, value] = movie;
        moviesData.push({ id: key, ...value });
      });

    // add movies in each movie type array according to movie type
    moviesData.map(movie => {
        switch(movie.type) {
          case "recommend": 
            recommends.push({...movie});
            break;
          case "new":
            newDisney.push({...movie});
            break;
          case "original":
            originals.push({...movie});
            break;
          case "trending":
            trending.push({...movie});
            break;
          default :
            console.log("something wrong in switch case");
        }
        return moviesData;
    });

    return [recommends, newDisney, originals, trending];
}

export function getMoviesDataObject(id){
    let movieData ={};
    Object.entries(disneyMoviesData.movies).forEach((movie) => {
        const [key, value] = movie;
        if(id === key){
            movieData = {...value};
        }
      });
    
    return movieData;
}

export function getViewerData(){
    let viewerData = [];
    Object.entries(disneyMoviesData.viewer).forEach((movie) => {
        const [key, value] = movie;
        viewerData.push({ id: key, ...value });
      });
    
      return viewerData;
}

// Function to return movies data in array
export function getMoviesDataArray(){
  const moviesData = [];

  Object.entries(disneyMoviesData.movies).forEach((movie) => {
    const [key, value] = movie;
    moviesData.push({ id: key, ...value });
  });

  return moviesData;
}

export function getMoviesData(id){
  const movie = getMoviesDataObject(id);
  // Combine data with the id
  return {
    id,
    ...movie,
  }
}

export function getAllMoviesIds() {
  const moviesData = getMoviesDataArray();
  // Returns an array that looks like this:
  // [
  //   {
  //     params: {
  //       id: '1'
  //     }
  //   },
  //   {
  //     params: {
  //       id: '2'
  //     }
  //   }
  // ]
  return moviesData.map((movie) => {
      return {
          params: {
              id: movie.id,
          }
      }
  });
}