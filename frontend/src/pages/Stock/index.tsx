import React from "react";
import DefaultHeader from "../../components/layout/DefaultHeader";
import Input from "../../components/shared/Input";
import DownloadFacilitators from "../../components/layout/DownloadFacilitators";


const PageStock: React.FC = () => {
    return (
        <>
            <DefaultHeader sessionTheme="Estoque" />
            <div className="container-stock">

                <Input info="Ativo" />

                <div className="inputs-info-products">
                    <Input info="Produto" placeholder="Produto..." />
                    <Input info="Código do produto" placeholder="Código produto..." />
                </div>
                
                <DownloadFacilitators/>

            </div>

        </>
    )
}

export default PageStock;