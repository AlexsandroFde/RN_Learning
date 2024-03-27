import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import PropTypes from 'prop-types';
import estilo from "./estilo";

const Contador = ({inicial = 0, passo = 1}) => {
    const [numero, setNumero] = useState(inicial)

    const inc = () => setNumero(numero + passo)
    const dec = () => setNumero(numero - passo >= 0 ? numero - passo : 0)

    return (
        <View style={estilo.container}>
            <Text style={estilo.txtG}>{numero}</Text>
            <View style={estilo.botoesContainer}>
                <TouchableOpacity style={[estilo.botao, estilo.botaoMais]} onPress={inc}>
                    <Text style={estilo.botaoTexto}>+</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[estilo.botao, estilo.botaoMenos]} onPress={dec}>
                    <Text style={estilo.botaoTexto}>-</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

Contador.propTypes = {
    inicial: PropTypes.number,
    passo: PropTypes.number
}

export default Contador;
