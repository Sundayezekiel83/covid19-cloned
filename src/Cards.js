import React from 'react'
import Countup from 'react-countup'

import {Typography, CardContent, Card, Grid, LinearProgress, CircularProgress} from '@material-ui/core';
import styles from './Card.module.css';
import cx from 'classnames'
const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
   
    if(!recovered){

        return ( <CircularProgress />
                        )
    }

    return (
        <div className={styles.container}>

          <Grid container spacing={3} justify="center" >
              {/* number of infected people cases */}
              <Grid component={Card} item  xs={10} md={3} className={cx(styles.card, styles.infected)}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                      Infected
                      </Typography>  

                      <Typography variant="h5" gutterBottom>

                            <Countup
                            start={0}
                            end={confirmed.value}
                            separator=','
                            duration={3.0}
                            />
                                             
                      </Typography>   

                      <Typography variant="h6" color="textSecondary" gutterBottom>
                           {new Date(lastUpdate).toDateString()}
                      </Typography>
                      
                      <Typography variant="body2" color="textSecondary" gutterBottom>
                            Number of active cases of Covid19
                      </Typography> 

                </CardContent>

              </Grid>
              {/* end of number of infected people cases */}





               {/* number of Recovered people cases */}
               <Grid component={Card} item  xs={10} md={3} className={cx(styles.card, styles.recovered)}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Recovered
                      </Typography>  

                      <Typography variant="h5" gutterBottom>
                      <Countup
                            start={0}
                            end={recovered.value}
                            separator=','
                            duration={3.0}
                            />
                      </Typography>   

                      <Typography variant="h6" color="textSecondary" gutterBottom>
                      {new Date(lastUpdate).toDateString()}
                      </Typography>
                      
                      <Typography variant="body2" color="textSecondary" gutterBottom>
                            Number of Recovered cases of Covid19
                      </Typography> 

                </CardContent>

              </Grid>
              {/* end of number of infected people cases */}
              


                {/* Recieving Treatment Currently  */}
                <Grid component={Card} item  xs={10} md={3} className={cx(styles.card, styles.treatment)}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Recieving Treatment
                      </Typography>  

                      <Typography variant="h5" gutterBottom>

                      <Countup
                            start={0}
                            end={confirmed.value - `${recovered.value + deaths.value }` }
                            separator=','
                            duration={3.0}
                            />
                      </Typography>   

                      <Typography variant="h6" color="textSecondary" gutterBottom>
                      {new Date(lastUpdate).toDateString()}
                      </Typography>
                      
                      <Typography variant="body2" color="textSecondary" gutterBottom>
                            Number of infected Recieving Treatment
                      </Typography> 

                </CardContent>

              </Grid>
              {/* end of number of infected people cases */}
              
              
               {/* number of death people cases */}
               <Grid component={Card} item  xs={10} md={3} className={cx(styles.card, styles.death)}>
                <CardContent>
                  <Typography color="textSecondary" gutterBottom>
                    Deaths
                      </Typography>  

                      <Typography variant="h5" gutterBottom>
                      <Countup
                            start={0}
                            end={deaths.value}
                            separator=','
                            duration={3.0}
                            />
                      </Typography>   

                      <Typography variant="h6" color="textSecondary" gutterBottom>
                      {new Date(lastUpdate).toDateString()}
                      </Typography>
                      
                      <Typography variant="body2" color="textSecondary" gutterBottom>
                            Number of death caused by Covid19
                      </Typography> 

                </CardContent>

              </Grid>
              {/* end of number of infected people cases */}
              


             
        </Grid>      
                   
        </div>
    )
}

export default Cards
