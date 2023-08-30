import React from "react";
import DefaultHeader from "../../components/layout/DefaultHeader";
import DownloadFacilitators from "../../components/layout/DownloadFacilitators";
import Input from "../../components/shared/Input";
import Select from "../../components/shared/Select";


const PageCardsIssued: React.FC = () => {

    return (
        <>
            <DefaultHeader sessionTheme="Cartões emitidos" />

            <div className="container-titular">
                <Input info="Titular:" />
            </div>

            <div className="container-dates-doubles">

                <Input info="Código da conta:" />

                <Select info={"Descrição status:"} name="cardType" onChange={() => { }} >
                    <option selected>Selecione um status...</option>
                    <option value="Tarja">Em produção</option>
                    <option value="Chip">Chip</option>
                </Select>

            </div>

            <div className="container-dates-doubles">

                <Input info="Data da ordem de prótocolo inicial:" type="date" />

                <Input info="Data da ordem de prótocolo final:" type="date" />

            </div>


            <div className="container-dates-doubles">
                <Select info={"Selecione um tipo de envio:"} name="cardType" onChange={() => { }} >
                    <option selected>Selecione um tipo de envio...</option>
                    <option value="Tarja">Tarja</option>
                    <option value="Chip">Chip</option>
                </Select>

                <Input info="Código do cartão:" icon="search" />
            </div>



            <DownloadFacilitators textButton="Pesquisar" />

            
        </>
    )
}


export default PageCardsIssued;