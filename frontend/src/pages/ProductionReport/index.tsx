import React from "react";
import DefaultHeader from "../../components/layout/DefaultHeader";
import Input from "../../components/shared/Input";
import DownloadFacilitators from "../../components/layout/DownloadFacilitators";



const PageProductionReport: React.FC = () => {
    return (
        <>
            <DefaultHeader sessionTheme="Relatorio de produção" />

            <div className="container-production-report">
                <div className="container-inputs">
                    <Input placeholder='Arquivo...' info="Arquivo:" />

                    <div className="inputs-date">
                        <Input placeholder="Data de processamento inicial..." info="Data de processamento inicial:" icon="calendar_month" />
                        <Input placeholder="Data de processamento final..." info="Data de processamento final:" icon="calendar_month" />
                    </div>

                    <div className="inputs-date">
                        <Input placeholder="Data de expedição inicial..." info="Data de expedição inicial:" icon="calendar_month" />
                        <Input placeholder="Data de expedição final..." info="Data de expedição final:" icon="calendar_month" />
                    </div>

                </div>

                <DownloadFacilitators/>
            </div>

        </>
    )
}

export default PageProductionReport;