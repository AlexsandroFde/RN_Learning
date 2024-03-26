import React from "react"
import { View, StyleSheet } from "react-native"

import MinMax from "./components/MinMax"
import Comp, {Comp1, Comp2 } from "./components/Multi"
import Primeiro from "./components/Primeiro"
import Aleatorio from "./components/Aleatorio"
import Titulo from "./components/Titulo"
import Botao from "./components/Botao"

export default () => (
    <View style={style.App}>
        <Botao/>
        {/*<Titulo principal="Cadastro Produto" secundario="Tela de Cadastro do Produto"/>
        <MinMax min={3} max={20}/>
        <Aleatorio v1={0} v2={100}/>
         <Comp />
        <Comp1 />
        <Comp2 />
        <Primeiro /> */}
    </View>
)

const style = StyleSheet.create({
    App: {
        backgroundColor: "#d3d3d3",
        flexGrow: 1,
        justifyContent: "center",
        alignItems:"center",
        padding: 50
    }
})