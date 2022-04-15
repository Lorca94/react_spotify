/**
 * Función para devolver y separar el token de la URL
 * @returns devuelve el token de la url
 */
const getTokenFromUrl = () => {
    // Devuelve la url desde # hasta el final
    return window.location.hash
    // extrae el primer caracter, y devuelve el resto de la cadena hasta el final (quita la #)
    .substring(1)
    // separamos en un array usando el conector ("&")
    .split('&')
    // Funcion reductora sobre cada elemento del array y devuelve el token
    .reduce((token, item) => {
        // parts => separamos en un array usando el conector ("=")
        const parts = item.split('=');
        // indicamos que parts = otro array donde vamos a obtener ["access_token"] = ["token"] ...
        token[parts[0]] = decodeURIComponent(parts[1]);
        return token;
    }, {});
};

const endpoint = 'https://accounts.spotify.com/authorize';
const clientID = '181a6e80f36a4cc2b31d05439b5f688b';
const redirectUri = 'https://thriving-centaur-b5fb72.netlify.app/';
const scopes = ['user-read-currently-playing',
'user-read-recently-played',
'user-read-playback-state',
'user-top-read',
'user-modify-playback-state'];
const loginURL = `${endpoint}?client_id=${clientID}
&response_type=token
&redirect_uri=${redirectUri}
&scope=${scopes.join('%20')}
&show_dialog=true`;

export { loginURL, getTokenFromUrl };
