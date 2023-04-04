import "./style.scss";
import React from "react";
import Header from "../../Components/Header/index.js"
import CheckUrl from "../../Components/CheckUrl/index.js"
import Table from "../../Components/Table/index.js"

const Home = () => {
    return (
    <div>
    <Header />
    <CheckUrl />
    <Table />

</div>
    )
};

export default Home;


