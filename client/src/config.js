import auth0 from 'auth0-js'

export default {
  auth: new auth0.WebAuth({
    domain: 'book-swap.eu.auth0.com',
    clientID: 'yyBbpa1RZRTMPwCHlRWx8LtIV7UALTHb',
    redirectUri: 'http://localhost:8080/LoginCallback',
    audience: 'https://book-swap.eu.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  })
}
