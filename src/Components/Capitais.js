import React, { useEffect, useState } from 'react'
import { makeStyles } from '@material-ui/core'

const styles = makeStyles({
    capitalsGroup: {
        display: 'flex',
        marginLeft: '6rem',
        
    },
    capitals: {
        width: '13rem',
        textAlign: 'left',
        color: 'white',
    },
    span: {
        marginLeft: '0.8rem',  
    },
    span__tittle: {
        marginLeft: '0.4rem',
    }, 
    "@media (max-width: 760px)": {
        capitalsGroup: {
            display: 'flex',
            marginLeft: '0.5rem',
        }
    }
})

function Capitais() {

    const [capitalsService1, setCapitalService1] = useState()
    const [capitalsService2, setCapitalService2] = useState()
    const classes = styles()

    useEffect(() => {
        const capitalsId1= "3448439,3470127,3451190,3469058,3450554"
        const capitalsId2= "3405870,6322752,6320062,3663517,3397277"
        const APIkey = "22077a9606dc4caf6305b618c12e07cf"
        fetch(`https://api.openweathermap.org/data/2.5/group?id=${capitalsId1}&units=metric&APPID=${APIkey}`)
        .then(res => res.json())
        .then( res => setCapitalService1(res.list))

        fetch(`https://api.openweathermap.org/data/2.5/group?id=${capitalsId2}&units=metric&APPID=${APIkey}`)
        .then(res => res.json())
        .then( res => setCapitalService2(res.list))
    }, [])

    return(
        <div>
            <div className={classes.capitalsGroup}>

                <div className={classes.capitals}>      
                    <span className={classes.span__tittle}>Min</span>
                    <span className={classes.span__tittle}>Max</span>
                    <span className={classes.span__tittle}></span>          
                    {capitalsService1 && capitalsService1.map( (capital, index) => {
                        return(
                            <div key={index}>
                                <span className={classes.span}>{capital.main.temp_min.toFixed(0)}</span>
                                <span className={classes.span}>{capital.main.temp_max.toFixed(0)}</span>
                                <span className={classes.span}>{capital.name}</span>
                            </div>
                        )
                    } )}
                </div>
                <div className={classes.capitals}>      
                    <span className={classes.span__tittle}>Min</span>
                    <span className={classes.span__tittle}>Max</span>
                    <span className={classes.span__tittle}></span>          
                    {capitalsService2 && capitalsService2.map( (capital, index) => {
                        return(
                            <div key={index}>
                                <span className={classes.span}>{capital.main.temp_min.toFixed(0)}</span>
                                <span className={classes.span}>{capital.main.temp_max.toFixed(0)}</span>
                                <span className={classes.span}>{capital.name}</span>
                            </div>
                        )
                    } )}
                </div>
            </div>
        </div>
    )
}

export default Capitais