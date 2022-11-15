import './App.css';
import Login from "./Components/Login/Login";
import {useEffect} from "react";
import {getTokenFromUrl} from "./Common/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./Components/Player/Player";
import {useDataLayerValue} from "./Common/DataLayer";

const spotify = new SpotifyWebApi();

function App() {

    const [ {   user,token}, dispatch] = useDataLayerValue();

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const _token = hash.access_token;

        if (_token) {
            dispatch({
                type: "SET_TOKEN",
                token: _token,
            })

            spotify.setAccessToken(_token)

            spotify.getMe().then(user => {
                console.log(user)
                dispatch({
                    type: 'SET_USER',
                    user: user
                });
            });
        }
        console.log("I have a Token", token)

    }, []);

    console.log("person", user)
    return <div className={"app"}>

        {
            token ? (
                    <Player/>
                ) :
                (
                    <Login/>
                )
        }

    </div>
}

export default App;
