import React from "react";
import Icon from "../../shared/Icon";


const DownloadFacilitators: React.FC = () => {

    return (

        <div className="container-download-facilitators">
            <div className="container-icon"><Icon name="print"/></div>
            <div className="container-icon"><img src="https://firebasestorage.googleapis.com/v0/b/project-vero-card-up.appspot.com/o/filecvs.svg?alt=media&token=f3dba8c9-f780-4881-a7e6-251cecd8e014" alt="" /></div>
            <div className="container-icon"><img src="https://firebasestorage.googleapis.com/v0/b/project-vero-card-up.appspot.com/o/fileexcel.svg?alt=media&token=2fd5a236-58cf-4bae-a541-e566087a064a" alt="" /></div>
            <div className="container-icon"><img src="https://firebasestorage.googleapis.com/v0/b/project-vero-card-up.appspot.com/o/fileword.svg?alt=media&token=85be50dc-584d-4650-9011-46eac56cdd1d" alt="" /></div>
        </div>

    )
}

export default DownloadFacilitators