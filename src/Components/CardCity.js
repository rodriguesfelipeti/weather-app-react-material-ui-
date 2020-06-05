import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  cardContent: {
    marginLeft: '2rem'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
    textAlign: "left",
  },
  titleDetails: {
    fontSize: 30,
    textAlign: "left",
    fontWeight: "bold"
  },
  pos: {
    marginBottom: 12,
  },
  img: {
    position: "relative",
    top: "1rem"
  },        
  colorIcon: {
      color: "orange"
  },
  hr: {
      height: "0.1rem",
      backgroundColor: "orange"
  }
});

const CardCity = (cityInfo) => {
  const classes = useStyles();
  const iconurl = "http://openweathermap.org/img/w/" + cityInfo.cityInfo.weather[0].icon + ".png";
  const city = cityInfo.cityInfo

  return (
    <Card className={classes.root}>
      <CardContent className={classes.cardContent}>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            {city.name}
        </Typography>
        <Typography className={classes.titleDetails}>
            <img className={classes.img} src={iconurl} alt={city.weather[0].icon} />
            {city.main.temp.toFixed(0)}°C Nublado 
        </Typography>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
            <ArrowDownwardIcon className={classes.colorIcon} />{city.main.temp_min.toFixed(0)}
            <ArrowUpwardIcon className={classes.colorIcon}/>{city.main.temp_max.toFixed(0)} 
        </Typography>
        <hr className={classes.hr}/>
      </CardContent>
    </Card>
  );
}           

export default CardCity