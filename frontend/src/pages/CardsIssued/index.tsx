import React from "react";
import DefaultHeader from "../../components/layout/DefaultHeader";
import DownloadFacilitators from "../../components/layout/DownloadFacilitators";


const PageCardsIssued: React.FC = () => {

    return(
        <>
         <DefaultHeader sessionTheme="Cartões emitidos"/> 

         <DownloadFacilitators />  
        </>
    )
}

export default PageCardsIssued;