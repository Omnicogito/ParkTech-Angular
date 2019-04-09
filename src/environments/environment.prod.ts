export let ApiUrl = '';

switch (window.location.hostname) {
  case 'rmw-parkstndtech.herokuapp.com':
    ApiUrl += 'https://parksandtech.azurewebsites.net/';
    break;
  default:
  ApiUrl += 'http://localhost:50913/';

}

export const environment = {
  production: true
};
