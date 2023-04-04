import "./style.scss";
import React from "react";
import Header from "../../Components/Header/index.js"
import CheckUrl from "../../Components/CheckUrl/index.js"
import Table from "../../Components/Table/index.js"
import Footer from "../../Components/Footer/index.js"

const Home = () => {
    return (
    <div>
    <Header />
    <CheckUrl />
    <Table />
    <Footer />

</div>
    )
};

export default Home;


