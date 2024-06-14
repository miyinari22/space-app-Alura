import {GlobalContext} from "react"
import { useContext } from "../context/GlobalContext"

function useFotoModal(){
    const {state, dispatch} = useContext(GlobalContext);

    const abrirModal= (foto) =>{
        dispatch({type: "ALTERNAR_FAVORITO", payload: foto});
    }

    const cerraModal= () =>{
        dispatch({type: 'SET_FOTO_SELECCIONADA', payload: null});
    }

    const fotoSeleccionada = state.fotoSeleccionada;
    const estaAbiertoModal = state.modalAbierto;

    return{fotoSeleccionada, estaAbiertoModal, abrirModal, cerraModal}
}

export default useFotoModal