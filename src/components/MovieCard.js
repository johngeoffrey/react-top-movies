import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import './MovieCard.css';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};


class MovieCard extends React.Component{

	selectMovie = () => {
		const { movie, selectMovie } = this.props;
		selectMovie(movie);
	};

	
	render(){
		const {movie} = this.props;

		return <Card className='movie-card'>
        <CardMedia
          className='movie-image'
          image={`http://image.tmdb.org/t/p/w300${movie.backdrop_path}`}
          title={movie.title}
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {movie.title}
          </Typography>
          <Typography component="p">
            {movie.overview}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={this.selectMovie}>
            Learn More
          </Button>
        </CardActions>
      </Card>

		//return(<div>{movie.title}</div>)
	}
}


export default MovieCard;