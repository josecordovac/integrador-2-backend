import app from './app';
import config from './config';


app.listen(config.port, config.host, () => {
  console.log('El servidor esta funcionando');
});

console.log('Server on port', config.port);


// app.listen(app.get('port'));

// console.log('Server on port', app.get('port'));
