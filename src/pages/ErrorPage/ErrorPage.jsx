import React from 'react'
import { ContainerError, DivTextImg, ImgError, TextError } from './errorPageStyled'
import { ButtonPokedex, DivHeader, ImgLogo } from '../../components/Header/headerStyle'
import logo from '../../assets/logo.png'
import imgError from '../../assets/imgError.gif'
import {goToPokemonsListPage} from '../../routes/coordinator'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate()


  return (
    <ContainerError>
        <DivHeader>
        <ButtonPokedex onClick={() => goToPokemonsListPage(navigate)}>
            Voltar para Pokémons
        </ButtonPokedex>
        <ImgLogo src={logo} />
        </DivHeader>
        
        <DivTextImg>
            <TextError>Ops! Essa página não existe.</TextError>
            <ImgError src={imgError}/>
        </DivTextImg>
    </ContainerError>
  )
}

export default ErrorPage