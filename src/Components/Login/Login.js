import React from "react";
import "./Login.css";
import {Button} from "@mui/material";
import {loginUrl} from "../../Common/spotify";


export default function Login() {
    return <div className={"login"}>
        <img
            className={"logo"}
            src={"https://upload.wikimedia.org/wikipedia/commons/5/56/Spotify_logo_horizontal_black.jpg"}
            alt={""}/>
     <a href={loginUrl}>
         <Button variant={"contained"}>login with spotify</Button>
     </a>
    </div>
}