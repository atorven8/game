import React, { useState } from "react";
import Tictactoe from './components/Tictactoe';
import 'bootstrap/dist/css/bootstrap.css';
export const Game = (props) => {
    return (
        <div>
            <Tictactoe />
        </div>
    )
}