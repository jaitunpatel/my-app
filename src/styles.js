import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundImage: 'url(https://source.unsplash.com/1600x900/?food)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      color: 'white',
    },
    heading: {
      marginBottom: '15px',
    },
    button: {
      marginTop: '20px',
      borderRadius: '25px',
      padding: '10px 30px',
      letterSpacing: '2px',
      fontWeight: 'bold',
    },
  }));

  export default useStyles;
  