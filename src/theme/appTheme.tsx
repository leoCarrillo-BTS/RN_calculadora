import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    fondo: {
        flex: 1,
        backgroundColor: 'black',

    },
    resultado: {
        color: 'white',
        fontSize: 64,
        textAlign: 'right',
        marginBottom: 8,
    },
    resultadoPequenio: {
        color: 'rgba(255,255,255,0.5)',
        fontSize: 16,
        textAlign: 'right'
    },
    calculadoraContainer: {
        paddingHorizontal: 22,
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'flex-end'
    },

    boton: {
        height: 80,
        width: 80,
        backgroundColor: '#2d2d2d',
        borderRadius: 100,
        justifyContent: 'center',
        marginHorizontal: 8,
    },
    botonTexto: {
        textAlign: 'center',
        padding: 10,
        fontSize: 30,
        color: 'white',
        fontWeight: '300',
    },

    fila: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 16,
        paddingHorizontal: 8,
    },



});