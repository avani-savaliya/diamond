import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import DiamondMainCategory from "./DiamondMainCategory";
const Diamond = () => {
    const [data, setdata] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(12);
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    //   const { category } = useSelector((state) => state.category)

    //   const payload = {
    //     page,
    //     limit: rowsPerPage,
    //     search,
    //   };
    //   useEffect(() => {
    //     dispatch(categoryGet({ ...payload, command: false }));
    //   }, [page, rowsPerPage, search]);

    //   useEffect(() => {
    //     dispatch(categoryGet({ ...payload, command: true }));
    //   }, []);


    //   useEffect(() => {
    //     setdata(category);
    //   }, [category]);

    const handleCategoryClick = (categoryId) => {
        navigate("/collection/category", { state: { categoryId: categoryId } })
    }

    const handleChange = () => {
        navigate('/productAll')
    }

    return (
        <div>
            <Routes>
                {/* <Route path="/" element={<MainCollection />} /> */}
                <Route path="/category" element={<DiamondMainCategory />}></Route>
            </Routes>
        </div>
    );
};

export default Diamond;
