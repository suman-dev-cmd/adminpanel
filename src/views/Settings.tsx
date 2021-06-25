import React from "react";
import ProductTable from "../components/products/ProductTable";

const Settings:React.FC = () => {
    return(
        <>
         <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6 md:ml-64">
            <div className="w-full  px-4">
                <ProductTable />    
               
            </div>
        </div>
        </>
    );
}

export default Settings;