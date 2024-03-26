import React from "react";
import { Text } from "react-native";
import estilo from "./estilo";

export default props => (
    <React.Fragment>
        <Text style={estilo.txtG}>{props.principal}</Text>
        <Text>{props.secundario}</Text>
    </React.Fragment>
)