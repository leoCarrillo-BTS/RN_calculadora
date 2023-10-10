import React, { useRef, useState } from 'react'


enum Oepradores {
    sumar,
    restar,
    multiplicar,
    dividir
}

export const useCalculadora = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('0')
    const [numero, setNumero] = useState('0')

    const ultimaOperacion = useRef<Oepradores>()

    const limpiar = () => {
        setNumeroAnterior('0')
        setNumero('0')
    }

    const armarNumero = (numeroTexto: string) => {

        // no aceptar doble punto
        if (numero.includes('.') && numeroTexto === '.') return;


        if (numero.startsWith('0') || numero.startsWith('-0')) {

            //  punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto)

                // evaluar si es otro cero, y hay un punto
            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto)

                // evaluar si es direrenta  cero y nu tiene un punto
            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto)

                // evitar el 00000.0
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero)
            } else {
                setNumero(numero + numeroTexto)
            }

        } else {
            setNumero(numero + numeroTexto)
        }



        // setNumero(numero + numeroTexto)
    }

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''))
        } else {
            setNumero('-' + numero)
        }
    }

    const btnDel = () => {

        let negativo = ''
        let numeroTemp = numero
        if (numero.includes('-')) {
            negativo = '-'
            numeroTemp = numero.substring(1)
        }

        if (numeroTemp.length > 1) {
            setNumero(negativo + numeroTemp.slice(0, -1))
        } else {
            setNumero('0')
        }
    }

    const cambiarNumPorAnterior = () => {

        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0, -1))
        } else {
            setNumeroAnterior(numero)
        }
        setNumero('0')
    }

    const btnDividir = () => {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Oepradores.dividir
    }

    const btnMultiplicar = () => {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Oepradores.multiplicar
    }

    const btnRestar = () => {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Oepradores.restar
    }

    const btnSumar = () => {
        cambiarNumPorAnterior()
        ultimaOperacion.current = Oepradores.sumar
    }

    const calcular = () => {

        const num1 = Number(numero)
        const num2 = Number(numeroAnterior)

        switch (ultimaOperacion.current) {
            case Oepradores.sumar:
                setNumero(`${num1 + num2}`)
                break;

            case Oepradores.restar:
                setNumero(`${num2 - num1}`)
                break;

            case Oepradores.multiplicar:
                setNumero(`${num1 * num2}`)
                break;

            case Oepradores.dividir:
                setNumero(`${num2 / num1}`)
                break;

            default:
                break;
        }

        setNumeroAnterior('0')
    }

    return {
        numero,
        numeroAnterior,
        limpiar,
        positivoNegativo,
        btnDel,
        btnDividir,
        btnMultiplicar,
        btnRestar,
        btnSumar,
        armarNumero,
        calcular
    }
}
