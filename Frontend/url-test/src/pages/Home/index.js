import "./style.scss";
import React from "react";
import Header from "../../Components/Header/index.js"
import CheckUrl from "../../Components/CheckUrl/index.js"
import DataTable from "../../Components/DataTable/index.js"
import Footer from "../../Components/Footer/index.js"
import DataTableUrl from "../../Components/DataTableUrl/index.js"

const Home = () => {
    return (
    <div>
    <Header />
    <CheckUrl />
    <DataTable />
    <DataTableUrl />
    <Footer />

</div>
    )
};

export default Home;


