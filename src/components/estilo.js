import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  txtG: {
    fontSize: 24,
    marginBottom: 10,
  },
  botoesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botao: {
    marginHorizontal: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  botaoTexto: {
    fontSize: 18,
    color: 'white',
  },
  botaoMais: {
    backgroundColor: 'green',
  },
  botaoMenos: {
    backgroundColor: 'red',
  },
});
