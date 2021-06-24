import React from "react";
import HeaderStats from "../components/home/HeaderStats";
import CardPageVisits from '../components/cards/CardPageVisits';
import CardSocialTraffic from "../components/cards/CardSocialTraffic";
const Home:React.FC = () => {
    return(
        <div className="container mx-auto py-10 h-64 md:w-4/5 w-11/12 px-6 md:ml-64">
            
            <div className="w-full h-full rounded ">
                <HeaderStats />
            </div>
            <div className="flex flex-wrap mt-4">
                <div className="w-full xl:w-8/12 mb-12 xl:mb-0 px-4">
                <CardPageVisits />
                </div>
                <div className="w-full xl:w-4/12 px-4">
                <CardSocialTraffic />
                </div>
            </div>
        </div>
    );
}

export default Home;