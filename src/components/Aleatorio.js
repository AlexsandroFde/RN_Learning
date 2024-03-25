import React from "react";
import { Text } from "react-native";
import Estilo from "./estilo";

export default ({v1, v2}) => {
    const aleatorio = parseInt(Math.random() * (v2 - v1 + 1)) + v1
    
    return (
        <Text style={Estilo.txtG}>
            O número aleatório entre {v1} e {v2} é {aleatorio.toFixed(0)}!
        </Text>
    )
}