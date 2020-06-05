import React, {useState } from 'react';
import './App.css';

import { Container, TextField, Typography, makeStyles } from '@material-ui/core'
import Capitais from './Components/Capitais'
import CardCity from './Components/CardCity'

const styles = makeStyles({
  header: {
    margin: '4rem',
  },
  text: {
    color: 'white',
    fontSize: '2.8rem',
    fontWeight: 'bold'
  },
  subtext: {
    color: 'white',
    fontSize: '1.8rem',
    fontWeight: 'bold'
  },
  textEntry: {
    width: '40vh'
  },
  hrLine: {
    marginBottom: '1rem',
    backgroundColor: 'white'
  }
})



const  App = () => {

  const classes = styles()
  const [city, setCity] = useState()
  const [display, setDisplay] = useState(false)

  const getWeather = (param) => {

    if(param.length >= 3) {
      
      const APIkey = "22077a9606dc4caf6305b618c12e07cf"
      console.log(`https://api.openweathermap.org/data/2.5/weather?q=+${param}&units=metric&APPID=${APIkey}`)
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=+${param}&units=metric&APPID=${APIkey}`)
      .then(res => res.json())
      .then(res => {
        setDisplay(display)
        if(res.cod === 200) {
          setCity(res)
          setDisplay(!display)
        }
      })
    }

  }
  

  return (
    <div className="App">
      <header className={classes.header}>
        <Typography className={classes.text}>
          Previsão do Tempo
        </Typography>
      </header>
      <Container maxWidth="sm">
        <TextField className={classes.textEntry} id="filled-basic" label="Digite o nome da Cidade" variant="filled" onChange={(event) => getWeather(event.target.value)} />
        <hr className={classes.hrLine}/>
        {display && <CardCity cityInfo={city}/>}
        <Typography className={classes.subtext}>Capitais</Typography>
        <Capitais />
      </Container>
    </div>
  );
}

export default App;
