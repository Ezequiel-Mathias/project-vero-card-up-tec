import React, { useState } from "react";
import DefaultHeader from "../../components/layout/DefaultHeader";
import Input from "../../components/shared/Input";
import DownloadFacilitators from "../../components/layout/DownloadFacilitators";
import Select from "../../components/shared/Select";

const PageProductionReport: React.FC = () => {

    const [formValues, setFormValues] = useState({
        InitialProcessingDate: "",
        FinalProcessingDate: "",
        InitialShippingDate: "",
        FinalShippingDate: ""
    });

    const handleChange = (e : any) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        })
    }

    
    return (
        <>
            <DefaultHeader sessionTheme="Relatorio de produção" />

            <div className="container-production-report">
                <div className="container-inputs">
                    <Input placeholder='Arquivo...' info="Arquivo:" />
                    
                    <div className="inputs-date">
                        <Input type="date" name="InitialProcessingDate" info="Data de processamento inicial:" onChange={handleChange} />
                        <Input type="date" name="FinalProcessingDate" info="Data de processamento final:" />
                    </div>

                    <div className="inputs-date">
                        <Input type="date" name="InitialShippingDate" info="Data de expedição inicial:" />
                        <Input type="date" name="FinalShippingDate" info="Data de expedição final:" />
                    </div>

                </div>

                <DownloadFacilitators />
            </div>

        </>
    )
}

export default PageProductionReport;