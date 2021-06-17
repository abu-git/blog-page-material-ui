import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { Card, Container, Grid, CardActionArea, CardMedia, CardContent, CardActions } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  appbar: {
    backgroundColor: '#fff',
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1558981852-426c6c22a060?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80')`,
    height: '450px',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontSize: '4rem'
  },
  blogsContainer: {
    paddingTop: theme.spacing(3),
  },
  blogTitle: {
    fontWeight: 800,
    paddingBottom: theme.spacing(3)
  },
  card: {
    maxWidth: '100%'
  },
  media: {
    height: 240
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      {/*----Navbar-----*/}
      <AppBar className={classes.appbar} position="static">
        <Toolbar>
          <Typography variant="h6" color="primary">
            Blog
          </Typography>
        </Toolbar>
      </AppBar>
      {/*----Landing Section-----*/}
      <Box className={classes.hero}>
        <Box>React Blog</Box>
      </Box>

      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Articles
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    React useContext
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>

          </Grid>
          <Grid item xs={12} sm={6} md={4}>

          </Grid>
          <Grid item xs={12} sm={6} md={4}>

          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
