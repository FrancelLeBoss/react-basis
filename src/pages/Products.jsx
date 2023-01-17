import React, { useRef, useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Title from '../components/Title'
import TopBar from '../components/TopBar'
import Menu2 from '../components/Menu2'
import SortMenu from '../components/SortMenu'
import { useOnHoverOutside } from "./../hooks/useOnHoverOutside";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faColumns, faList, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Audi from "../assets/audi.png"
import Bmw from "../assets/bmw.png"
import Mercedes from "../assets/Mercedes.png"
import Volw from "../assets/volw.png"
import Card from '../components/Card'
import ReactPaginate from 'react-paginate'
//import axios from "axios";

// const options = {
//     method: 'GET',
//     url: 'https://car-data.p.rapidapi.com/cars',
//     params: { limit: '10', page: '0' },
//     headers: {
//         'X-RapidAPI-Key': '6aae24c6c6msh547de85a80bb821p1051f8jsn75324878c16f',
//         'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
//     }
// };

const Products = () => {


    const dropdownRef = useRef(null); // Create a reference for dropdown container
    const dropdownRef2 = useRef(null); // Create a reference for dropdown container
    const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);
    const [isMenuDropDownOpen2, setMenuDropDownOpen2] = useState(false);
    //Grid's orientation, we have V for vertical cards and H for horizontal cards, then for lists
    const [orientation, setOrientation] = useState("V");
    const [ascendingSort, setAscendingSort] = useState(true);
    const [sortingCriteria, setSortingCriteria] = useState('id')
    const [textTri, setTextTri] = useState('Default')

    const [sizePagination, setSizePagination] = useState(6)
    const [itemOffset, setItemOffset] = useState(0);
    const voitures = [
        {
            id: 1,
            title: "Audi RS7",
            electric: true,
            automatic: true,
            color: "black",
            price: 42800,
            power: 358,
            img: Audi,
            acceleration: "0-60 mph in just 3.1 seconds",
            desc: "Unparalleled traction and control sit amet purus gravida quis. Porta nibh venenatis ras sed. Vestibulum rhoncus pellentes elit ullamcorper est dignissim cras."
        },
        {
            id: 2,
            title: "BMW M4",
            electric: false,
            automatic: true,
            color: "white",
            price: 50000,
            power: 514,
            img: Bmw,
            acceleration: "0-60 mph in just 3.1 seconds",
            desc: "Unparalleled traction and control sit amet purus gravida quis. Porta nibh venenatis ras sed. Vestibulum rhoncus pellentes elit ullamcorper est dignissim cras."
        },
        {

            id: 3,
            title: "Mercedes C63",
            electric: false,
            automatic: false,
            color: "gray",
            price: 20000,
            power: 189,
            img: Mercedes,
            acceleration: "0-60 mph in just 3.1 seconds",
            desc: "Unparalleled traction and control sit amet purus gravida quis. Porta nibh venenatis ras sed. Vestibulum rhoncus pellentes elit ullamcorper est dignissim cras."

        },
        {
            id: 4,
            title: "Audi RS7",
            electric: true,
            automatic: true,
            color: "black",
            price: 42800,
            power: 358,
            img: Audi,
            acceleration: "0-60 mph in just 3.1 seconds",
            desc: "Unparalleled traction and control sit amet purus gravida quis. Porta nibh venenatis ras sed. Vestibulum rhoncus pellentes elit ullamcorper est dignissim cras."
        },
        {
            id: 5,
            title: "Volkswagen  Passat",
            electric: false,
            automatic: true,
            color: "red",
            price: 30000,
            power: 289,
            img: Volw,
            acceleration: "0-60 mph in just 3.1 seconds",
            desc: "Unparalleled traction and control sit amet purus gravida quis. Porta nibh venenatis ras sed. Vestibulum rhoncus pellentes elit ullamcorper est dignissim cras."
        },
        {
            id: 8,
            title: "BMW M4",
            electric: false,
            automatic: true,
            color: "white",
            price: 50000,
            power: 514,
            img: Bmw,
            acceleration: "0-60 mph in just 3.1 seconds",
            desc: "Unparalleled traction and control sit amet purus gravida quis. Porta nibh venenatis ras sed. Vestibulum rhoncus pellentes elit ullamcorper est dignissim cras."
        },
        {
            id: 6,
            title: "Mercedes C63",
            electric: false,
            automatic: false,
            color: "gray",
            price: 20000,
            power: 189,
            img: Mercedes,
            acceleration: "0-60 mph in just 3.1 seconds",
            desc: "Unparalleled traction and control sit amet purus gravida quis. Porta nibh venenatis ras sed. Vestibulum rhoncus pellentes elit ullamcorper est dignissim cras."
        },
        {
            id: 7,
            title: "Volkswagen  Passat",
            electric: false,
            automatic: true,
            color: "red",
            price: 30000,
            power: 289,
            img: Volw,
            acceleration: "0-60 mph in just 3.1 seconds",
            desc: "Unparalleled traction and control sit amet purus gravida quis. Porta nibh venenatis ras sed. Vestibulum rhoncus pellentes elit ullamcorper est dignissim cras."
        }
    ]
    const [voituresFiltree, setVoituresFiltree] = useState([
        {
            id: 1,
            title: "Audi RS7",
            electric: true,
            automatic: true,
            color: "black",
            price: 42800,
            power: 358,
            img: Audi,
            acceleration: "0-60 mph in just 3.1 seconds",
            desc: "Unparalleled traction and control sit amet purus gravida quis. Porta nibh venenatis ras sed. Vestibulum rhoncus pellentes elit ullamcorper est dignissim cras."
        },
        {
            id: 2,
            title: "BMW M4",
            electric: false,
            automatic: true,
            color: "white",
            price: 50000,
            power: 514,
            img: Bmw,
            acceleration: "0-60 mph in just 3.1 seconds",
            desc: "Unparalleled traction and control sit amet purus gravida quis. Porta nibh venenatis ras sed. Vestibulum rhoncus pellentes elit ullamcorper est dignissim cras."
        },
        {

            id: 3,
            title: "Mercedes C63",
            electric: false,
            automatic: false,
            color: "gray",
            price: 20000,
            power: 189,
            img: Mercedes,
            acceleration: "0-60 mph in just 3.1 seconds",
            desc: "Unparalleled traction and control sit amet purus gravida quis. Porta nibh venenatis ras sed. Vestibulum rhoncus pellentes elit ullamcorper est dignissim cras."

        },
        {
            id: 4,
            title: "Audi RS7",
            electric: true,
            automatic: true,
            color: "black",
            price: 42800,
            power: 358,
            img: Audi,
            acceleration: "0-60 mph in just 3.1 seconds",
            desc: "Unparalleled traction and control sit amet purus gravida quis. Porta nibh venenatis ras sed. Vestibulum rhoncus pellentes elit ullamcorper est dignissim cras."
        },
        {
            id: 5,
            title: "Volkswagen  Passat",
            electric: false,
            automatic: true,
            color: "red",
            price: 30000,
            power: 289,
            img: Volw,
            acceleration: "0-60 mph in just 3.1 seconds",
            desc: "Unparalleled traction and control sit amet purus gravida quis. Porta nibh venenatis ras sed. Vestibulum rhoncus pellentes elit ullamcorper est dignissim cras."
        },
        {
            id: 8,
            title: "BMW M4",
            electric: false,
            automatic: true,
            color: "white",
            price: 50000,
            power: 514,
            img: Bmw,
            acceleration: "0-60 mph in just 3.1 seconds",
            desc: "Unparalleled traction and control sit amet purus gravida quis. Porta nibh venenatis ras sed. Vestibulum rhoncus pellentes elit ullamcorper est dignissim cras."
        },
        {
            id: 6,
            title: "Mercedes C63",
            electric: false,
            automatic: false,
            color: "gray",
            price: 20000,
            power: 189,
            img: Mercedes,
            acceleration: "0-60 mph in just 3.1 seconds",
            desc: "Unparalleled traction and control sit amet purus gravida quis. Porta nibh venenatis ras sed. Vestibulum rhoncus pellentes elit ullamcorper est dignissim cras."
        },
        {
            id: 7,
            title: "Volkswagen  Passat",
            electric: false,
            automatic: true,
            color: "red",
            price: 30000,
            power: 289,
            img: Volw,
            acceleration: "0-60 mph in just 3.1 seconds",
            desc: "Unparalleled traction and control sit amet purus gravida quis. Porta nibh venenatis ras sed. Vestibulum rhoncus pellentes elit ullamcorper est dignissim cras."
        }
    ])
    // toutes les couleurs de voiture dispo avec leur total
    const [colors, setColors] = useState([{ color: "black", total: 3 }, { color: "blue", total: 2 }, { color: "gray", total: 1 }, { color: "red", total: 2 }, { color: "white", total: 2 }])
    const [filtreCouleurs, setFiltreCouleurs] = useState([])
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(50000)
    const [rangeValue, setRangeValue] = useState(min)
    useEffect(() => {
        filterColor(filtreCouleurs)
        // axios.request(options).then(function (response) {
        //     console.log(response.data);
        // }).catch(function (error) {
        //     console.error(error);
        // });
        const v = filtreCouleurs.length < 1 ? voitures : voituresFiltree
        v.sort(sortPrice)
        setMin(v[0].price)
        setMax(v[v.length - 1].price)

    }, [filtreCouleurs])

    // Function to close dropdown
    const closeHoverMenu = () => {
        setMenuDropDownOpen(false);
    };
    const closeHoverMenu2 = () => {
        setMenuDropDownOpen2(false);
    };

    function paginer(datas, per_page) {

        const endOffset = itemOffset + per_page;
        const currentItems = datas.sort(ascendingSorting).slice(itemOffset, endOffset);
        const pageCount = Math.ceil(datas.length / per_page);

        const handlePageClick = (event) => {
            const newOffset = (event.selected * per_page) % datas.length;
            setItemOffset(newOffset);
        };

        return (<div className='flex flex-col gap-4'>
            <div className={`${orientation === "V" ? 'grid grid-cols-2 gap-x-4 gap-y-6' :
                'grid grid-cols-1 gap-4 p-4 '}`}>
                {currentItems.map((voiture, index) => <Card voiture={voiture} orientation={orientation} key={index} />)}
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                <ReactPaginate
                    previousLabel={
                        <div className=" rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <FontAwesomeIcon icon={faAngleLeft} className="" />
                        </div>
                    }
                    nextLabel={
                        <div className=" rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <FontAwesomeIcon icon={faAngleRight} className="" />
                        </div>
                    }
                    disableInitialCallback
                    breakLabel={"..."}
                    breakClassName={""}
                    pageCount={pageCount}
                    pageRangeDisplayed={5}
                    marginPagesDisplayed={2}
                    pageClassName={"relative z-10 inline-flex items-center border border-gray-300  px-4 py-2 text-sm font-medium text-indigo-500 focus:z-20"}
                    onPageChange={handlePageClick}
                    renderOnZeroPageCount={null}
                    containerClassName={"relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"}
                    activeClassName={"relative z-10 inline-flex items-center border border-indigo-300 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-500 focus:z-20"}
                />
            </div>
        </div>)


    }

    //on applique le filtre de couleurs

    function filterColor(filtreCouleurs) {
        let tout = []
        let result = {}
        let cols = []
        voitures.forEach((item) => {
            if (!result[item.color]) {
                result[item.color] = [];
            }
            result[item.color].push(item);
        })
        tout = Object.keys(result).map(item => {
            return {
                color: item,
                data: result[item],
                length: result[item].length
            }
        })

        tout.map((i) => {
            return cols.push({ color: i.color, total: i.length })
        })
        setColors(cols)
        //console.log({ tout })
        let v = []
        if (filtreCouleurs.length > 0) {
            tout.map((a) => {
                return filtreCouleurs.forEach((item) => {
                    if (a.color === item) {
                        a.data.forEach((i) => {
                            v.push(i)
                        })
                    }
                })
            })
            setVoituresFiltree(v)
        }
        else {
            tout.map((a) => {
                return a.data.forEach((i) => {
                    v.push(i)
                })
            })
            setVoituresFiltree(v)
        }
    }

    useOnHoverOutside(dropdownRef, closeHoverMenu); // Call the hook
    useOnHoverOutside(dropdownRef2, closeHoverMenu2); // Call the hook

    const colorFilters = () => {
        return (<div className='bg-green-500 text-white px-3 py-2 text-lg rounded flex justify-between items-center'><span>Active</span><span className='border py-1 px-3 border-transparent rounded-full hover:border-white cursor-pointer' title='Remove' onClick={
            () => {
                setFiltreCouleurs([])
            }}>x</span></div>)
    }

    const sortPrice = (a, b) => {
        if (a.price < b.price) {
            return -1;
        }
        if (a.price > b.price) {
            return 1;
        }
        return 0;
    }

    function ascendingSorting(a, b) {
        if (ascendingSort) {
            if (a[sortingCriteria] < b[sortingCriteria]) {
                return -1;
            }
            if (a[sortingCriteria] > b[sortingCriteria]) {
                return 1;
            }
            return 0;
        }
        else {
            if (a[sortingCriteria] > b[sortingCriteria]) {
                return -1;
            }
            if (a[sortingCriteria] < b[sortingCriteria]) {
                return 1;
            }
            return 0;
        }
    }
    const handleSort = (index, textTri) => {
        setSortingCriteria(index)
        setTextTri(textTri)
    };
    const handlePage = (number) => {
        setSizePagination(number)
    };
    return (
        <div className='font-sans'>
            <TopBar light={true} />
            <Header />
            <Title page={"Товары"} />
            <div className='flex gap-8 bg-blue-500 justify-center py-4 text-lg text-white mb-4 items-center'>
                <div>Покупаете впервые? Заранее поинтересуйтесь и получите финансирование!</div>
                <button className='bg-red-600 py-3 px-4 font-medium'>Применить сейчас</button>
            </div>
            <div className='grid grid-cols-4 gap-2 px-16 py-12'>
                {/* Filters */}
                <div className='col-span-1 font-serif flex flex-col gap-8'>
                    <div className='text-xl font-medium'>ФИЛЬТР ПО ЦВЕТУ</div>
                    {filtreCouleurs.length > 0 && colorFilters()}
                    <ul className='list-none flex flex-col gap-4'>
                        {colors.map((c, index) => {
                            return <li key={index} onClick={
                                () => {
                                    let val = [...filtreCouleurs]
                                    if (!val.includes(c.color)) {
                                        val.push(c.color)
                                    } else {
                                        let i
                                        i = val.indexOf(c.color)
                                        val.splice(i, 1)
                                    }
                                    setFiltreCouleurs(val)
                                }
                            } className='flex gap-2 items-center justify-end cursor-pointer border-b pb-4 hover:text-blue-500'>
                                <span className={`'basis-1/6 border p-4 rounded-lg max-h-12 max-w-12 ${filtreCouleurs.includes(c.color) ? "ring-1" : ""} bg-${c.color !== ("white" && "black") ? c.color : c.color === "white" ? "white " : "black "}-700`}></span>
                                <span className='basis-2/3 font-normal capitalize'>{c.color}</span>
                                <span className='basis-1/6 text-blue-500'>({c.total})</span>
                            </li>
                        })}
                    </ul>
                    <div className='text-xl font-medium'>ФИЛЬТР ПО ЦЕНЕ</div>
                    <div className='flex flex-col gap-4'>
                        <input type="range" min={min} max={max}
                            onChange={e => setRangeValue(e.target.value)}
                            defaultValue={max} />
                        {console.log({ rangeValue })}
                        <div className='flex gap-2 items-center text-base'><button className='p-2 text-white bg-red-700 hover:bg-blue-500 rounded'>ФИЛЬТР</button><span className='text-blue-500'>Цены: ${min}  - ${rangeValue}</span></div>
                    </div>
                </div>
                {/* Products list */}
                <div className='flex flex-col gap-12 col-span-3'>
                    <div className='flex gap-1 items-center'>
                        <div className='flex flex-col text-sm relative' ref={dropdownRef}>
                            <button className='grid grid-cols-5 divide-x-2 border' onMouseOver={() => setMenuDropDownOpen(true)}>
                                <span className='px-3 py-2 col-span-4'>Sort by <span className='font-semibold'>{textTri}</span> Order</span><span className='px-3 py-2'><FontAwesomeIcon icon={faArrowDown} className="" size={"xs"} /></span>
                            </button>
                            <div className='absolute top-9 z-10 bg-white'>{isMenuDropDownOpen && <Menu2 onClickCallback={handleSort} />}</div>
                        </div>
                        <button className='px-3 py-2 border text-sm hover:bg-slate-200' onClick={() => setAscendingSort(!ascendingSort)}>{ascendingSort ? <FontAwesomeIcon icon={faArrowDown} className="" size={"xs"} /> : <FontAwesomeIcon icon={faArrowUp} className="" size={"xs"} />}</button>
                        <div className='flex flex-col text-sm relative' ref={dropdownRef2}>
                            <button className='grid grid-cols-5 divide-x-2 border' onMouseOver={() => setMenuDropDownOpen2(true)}>
                                <div className='px-3 py-2 col-span-4'>Show <span className='font-semibold'>{sizePagination} Products</span></div><span className='px-3 py-2'><FontAwesomeIcon icon={faArrowDown} className="" size={"xs"} /></span>
                            </button>
                            <div className='absolute top-9 z-10 bg-white'>{isMenuDropDownOpen2 && <SortMenu onClickCallback={handlePage} />}</div>
                        </div>
                        <div className='grid grid-cols-2 border divide-x text-sm'>
                            <button className={`${orientation === "V" ? 'px-3 py-2 hover:bg-slate-200 ring-1' : 'px-3 py-2 hover:bg-slate-200'}`} onClick={() => setOrientation("V")}><FontAwesomeIcon icon={faColumns} className="" size={"xs"} /></button>
                            <button className={`${orientation === "H" ? 'px-3 py-2 hover:bg-slate-200 ring-1' : 'px-3 py-2 hover:bg-slate-200'}`} onClick={() => setOrientation("H")}><FontAwesomeIcon icon={faList} className="" size={"xs"} /></button>
                        </div>
                    </div>
                    {/* Cards */}
                    {filtreCouleurs.length > 0 && paginer(voituresFiltree, sizePagination)}
                    {filtreCouleurs.length < 1 && paginer(voituresFiltree, sizePagination)}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Products