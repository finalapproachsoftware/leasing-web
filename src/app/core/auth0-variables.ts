interface AuthConfig {
    clientID: string;
    domain: string;
    callbackURL: string;
}
  
export const AUTH_CONFIG: AuthConfig = {
    clientID: 'QMSUE4BV1j0Po5tc5zXUM3OuUN8PMUI3',
    domain: 'fas-leasing-app.auth0.com',
    callbackURL: 'http://localhost:4200/auth'
};
  