import React from 'react'
import {useSection} from '../../Hooks/useSection';
import Boards from '../../Components/Boards/Boards';
import Introduction from '../../Section/Topologia/Introduction';
import SectionOne from '../../Section/Topologia/SectionOne';
const TopologiaBasica = () => {
  const { regular } = useSection();
  console.log('regular',regular);
  return (
    <Boards tittle="Topología Básica">
      { regular==='introduction' && <Introduction /> }
      { regular==='SectionOne' && <SectionOne /> }
    </Boards>
  )
}

export default TopologiaBasica