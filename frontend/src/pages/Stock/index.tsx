import React from "react";
import DefaultHeader from "../../components/layout/DefaultHeader";
import Input from "../../components/shared/Input";


const PageStock: React.FC = () => {
    return (
        <>
            <DefaultHeader sessionTheme="Estoque"/>

            <Input info="Ativo"/>
            <Input info="Produto" placeholder="Produto..."/>
            <Input info="Código do produto" placeholder="Código produto..."/>
        </>
    )
}

export default PageStock;