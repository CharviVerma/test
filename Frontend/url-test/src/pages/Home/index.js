import "./style.scss";
import React from "react";
import Header from "../../Components/Header/index.js"
import CheckUrl from "../../Components/CheckUrl/index.js"
import DataTable from "../../Components/DataTable/index.js"
import DataTableUrl from "../../Components/DataTableUrl/index.js"
import Footer from "../../Components/Footer/index.js"

const Home = () => {
    return (
    <div>
    <Header />
    <CheckUrl />
    <div className="table_scroll">
    <DataTable />
    <DataTableUrl />
    </div>
    <Footer />

</div>
    )
};

export default Home;


