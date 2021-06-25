import React from "react";
// import CardChart from "../components/cards/CardChart";
import ProductTable from "../components/products/ProductTable";

const Performance:React.FC = () => {
    return(
        <>
         <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6 md:ml-64">
            <div className="w-full  px-4">
               {/* <CardChart /> */}
               <ProductTable />
            </div>
        </div>
        </>
    );
}

export default Performance;