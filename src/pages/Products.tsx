import React, { useRef, useState, useEffect } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Title from '../components/Title'
import TopBar from '../components/TopBar'
import Menu2 from '../components/Menu2'
import SortMenu from '../components/SortMenu'
import { useOnHoverOutside } from "../hooks/useOnHoverOutside";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown, faArrowUp, faColumns, faList, faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'
import Card from '../components/Card'
import ReactPaginate from 'react-paginate'
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import { setVoituresData } from '../feature/voituresSlice'
import { setUsersData } from '../feature/usersSlice'


interface color {
    color: string
    total: number
}
interface structuredData {
    color: string,
    data: any[],
    length: number
}

interface voiture {
    id: number;
    title: string;
    electric: boolean;
    automatic: boolean;
    color: string;
    price: number;
    power: number;
    img: string;
    acceleration: string;
    desc: string;
}

const Products = () => {


    const dropdownRef = useRef(null); // Create a reference for dropdown container
    const dropdownRef2 = useRef(null); // Create a reference for dropdown container
    const dispatch = useDispatch()
    const data = useSelector((state: any) => state.voitures.voitures)
    const users = useSelector((state: any) => state.users.data)
    const [isMenuDropDownOpen, setMenuDropDownOpen] = useState(false);
    const [isMenuDropDownOpen2, setMenuDropDownOpen2] = useState(false);
    //Grid's orientation, we have V for vertical cards and H for horizontal cards, then for lists
    const [orientation, setOrientation] = useState<"V" | "H">("V");
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
            img: "/audi.png",
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
            img: "/bmw.png",
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
            img: "/Mercedes.png",
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
            img: "/audi.png",
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
            img: "/volw.png",
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
            img: "/bmw.png",
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
            img: "/Mercedes.png",
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
            img: "/volw.png",
            acceleration: "0-60 mph in just 3.1 seconds",
            desc: "Unparalleled traction and control sit amet purus gravida quis. Porta nibh venenatis ras sed. Vestibulum rhoncus pellentes elit ullamcorper est dignissim cras."
        }
    ]
    const [voituresFiltree, setVoituresFiltree] = useState<voiture[]>([
        {
            id: 1,
            title: "Audi RS7",
            electric: true,
            automatic: true,
            color: "black",
            price: 42800,
            power: 358,
            img: "/audi.png",
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
            img: "/bmw.png",
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
            img: "/Mercedes.png",
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
            img: "/audi.png",
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
            img: "/volw.png",
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
            img: "/bmw.png",
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
            img: "/Mercedes.png",
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
            img: "/volw.png",
            acceleration: "0-60 mph in just 3.1 seconds",
            desc: "Unparalleled traction and control sit amet purus gravida quis. Porta nibh venenatis ras sed. Vestibulum rhoncus pellentes elit ullamcorper est dignissim cras."
        }
    ])
    // toutes les couleurs de voiture dispo avec leur total
    const [colors, setColors] = useState<color[]>([{ color: "black", total: 3 }, { color: "blue", total: 2 }, { color: "gray", total: 1 }, { color: "red", total: 2 }, { color: "white", total: 2 }])
    const [filtreCouleurs, setFiltreCouleurs] = useState<string[]>([])
    const [min, setMin] = useState(0)
    const [max, setMax] = useState(50000)
    const [rangeValue, setRangeValue] = useState<number | any>(min)
    useEffect(() => {
        axios
            .get("http://localhost:5000/voitures")
            .then((res) => dispatch(setVoituresData(res.data)));
        axios
            .get("http://localhost:5000/users")
            .then((res) => dispatch(setUsersData(res.data)));
    }, []);

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

    function paginer(datas: voiture[], per_page: number) {

        const endOffset = itemOffset + per_page;
        const currentItems = datas.sort(ascendingSorting).slice(itemOffset, endOffset);
        const pageCount = Math.ceil(datas.length / per_page);

        const handlePageClick = (event: any) => {
            const newOffset = (event.selected * per_page) % datas.length;
            setItemOffset(newOffset);
        };

        return (<div className='flex flex-col gap-4'>
            <div className={`${orientation === "V" ? 'grid grid-cols-2 lg:gap-x-2 lg:gap-y-3 gap-x-2 gap-y-3' :
                'grid grid-cols-1 gap-4 p-4 '}`}>
                {currentItems.map((voiture, index) => <Card voiture={voiture} orientation={orientation} key={index} />)}
            </div>
            <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
                <ReactPaginate
                    previousLabel={
                        <div className=" rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20" >
                            <FontAwesomeIcon icon={faAngleLeft} className="" />
                            {/* xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" */}
                        </div>
                    }
                    nextLabel={
                        <div className=" rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20" >
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
                    containerClassName={"relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"}
                    activeClassName={"relative z-10 inline-flex items-center border border-indigo-300 bg-indigo-50 px-4 py-2 text-sm font-medium text-indigo-500 focus:z-20"}
                />
            </div>
        </div>)


    }

    //on applique le filtre de couleurs

    function filterColor(filtreCouleurs: any[]) {
        let tout: structuredData[] = []
        let result: any = {}
        let cols: color[] = []

        voitures.forEach((item: voiture) => {
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
        let v: voiture[] = []
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
        return (<div className='bg-green-500 text-white px-2 lg:px-3 py-1 lg:texte-base text-sm rounded flex justify-between items-center'><span>Active</span><span className='border py-1 px-3 border-transparent rounded-full hover:border-white cursor-pointer' title='Remove' onClick={
            () => {
                setFiltreCouleurs([])
            }}>x</span></div>)
    }

    const sortPrice = (a: voiture, b: voiture) => {
        if (a.price < b.price) {
            return -1;
        }
        if (a.price > b.price) {
            return 1;
        }
        return 0;
    }

    function ascendingSorting(a: any, b: any) {
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
    const handleSort = (index: string, textTri: string) => {
        setSortingCriteria(index)
        setTextTri(textTri)
    };
    const handlePage = (number: number) => {
        setSizePagination(number)
    };
    return (
        <div className='font-sans'>
            <TopBar light={true} />
            <Header />
            <Title page={"Товары"} />
            <div className='flex gap-4 bg-blue-500 justify-center p-2 lg:p-3 text-lg text-white mb-4 items-center'>
                <div className='lg:text-base md:text-sm text-[0.65rem]'>Покупаете впервые? Заранее поинтересуйтесь и получите финансирование!</div>
                <div><button className='bg-red-600 py-1 px-2 font-medium rounded text-[0.65rem] md:text-sm'>Применить сейчас</button></div>
            </div>
            <div className='flex flex-wrap-reverse justify-between gap-2 px-6 md:px-12 lg:px-16 py-4'>
                {/* Filters */}
                <div className='font-serif flex flex-col gap-4'>
                    <div className='md:text-sm text-[0.6rem] lg:text-base font-medium'>ФИЛЬТР ПО ЦВЕТУ</div>
                    {filtreCouleurs.length > 0 && colorFilters()}
                    <ul className='list-none flex flex-col text-sm gap-2'>
                        {colors.map((c, index) => {
                            return <li key={index} onClick={
                                () => {
                                    let val: string[] = [...filtreCouleurs]
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
                                <span className={`basis-1/6 border p-2 rounded-lg max-h-12 max-w-12 ${filtreCouleurs.includes(c.color) ? "ring-1" : ""} bg-${c.color !== ("white" && "black") ? c.color : c.color === "black" ? "black " : "white "}-700`}></span>
                                <span className='basis-2/3 font-normal capitalize'>{c.color}</span>
                                <span className='basis-1/6 text-blue-500'>({c.total})</span>
                            </li>
                        })}
                    </ul>
                    <div className='md:text-sm text-[0.6rem] lg:text-base font-medium'>ФИЛЬТР ПО ЦЕНЕ</div>
                    <div className='flex flex-col gap-4'>
                        <input type="range" min={min} max={max}
                            onChange={e => setRangeValue(e.target.value)}
                            defaultValue={max} />
                        <div className='flex gap-2 items-center text-sm'><button className='p-2 text-white bg-red-700 hover:bg-blue-500 rounded'>ФИЛЬТР</button><span className='text-blue-500'>Цены: ${min}  - ${rangeValue}</span></div>
                    </div>
                </div>
                {/* Products list */}
                <div className='flex-1 flex flex-col gap-4 col-span-3'>
                    <div className='flex gap-1 items-center'>
                        <div className='flex flex-col lg:text-sm text-[0.5rem] relative' ref={dropdownRef}>
                            <button className='flex items-center border' onMouseOver={() => setMenuDropDownOpen(true)}>
                                <span className='lg:px-2 px-1 md:py-2 py-1 flex-1'>Sort by <span className='font-semibold'>{textTri}</span> Order</span><span className='px-1 py-2'><FontAwesomeIcon icon={faArrowDown} className="" size={"xs"} /></span>
                            </button>
                            <div className='absolute md:top-7 lg:top-9 top-10 z-10 bg-white'>{isMenuDropDownOpen && <Menu2 onClickCallback={handleSort} />}</div>
                        </div>
                        <button className='px-3 py-2 border lg:text-sm text-[0.5rem] hover:bg-slate-200' onClick={() => setAscendingSort(!ascendingSort)}>{ascendingSort ? <FontAwesomeIcon icon={faArrowDown} className="" size={"xs"} /> : <FontAwesomeIcon icon={faArrowUp} className="" size={"xs"} />}</button>
                        <div className='flex flex-col lg:text-sm text-[0.5rem] relative' ref={dropdownRef2}>
                            <button className='flex items-center border' onMouseOver={() => setMenuDropDownOpen2(true)}>
                                <div className='md:px-3 px-1 py-1 col-span-4'>Show <span className='font-semibold'>{sizePagination} Products</span></div><span className='px-3 py-2'><FontAwesomeIcon icon={faArrowDown} className="" size={"xs"} /></span>
                            </button>
                            <div className='absolute top-9 z-10 bg-white'>{isMenuDropDownOpen2 && <SortMenu onClickCallback={handlePage} />}</div>
                        </div>
                        <div className='grid grid-cols-2 border divide-x lg:text-sm text-[0.5rem]'>
                            <button className={`${orientation === "V" ? 'px-1 md:px-3 py-2 hover:bg-slate-200 ring-1' : 'px-1 md:px-3 py-2 hover:bg-slate-200'}`} onClick={() => setOrientation("V")}><FontAwesomeIcon icon={faColumns} className="" size={"xs"} /></button>
                            <button className={`${orientation === "H" ? 'px-1 py-2 md:px-3 hover:bg-slate-200 ring-1' : 'px-1 md:px-3 py-2 hover:bg-slate-200'}`} onClick={() => setOrientation("H")}><FontAwesomeIcon icon={faList} className="" size={"xs"} /></button>
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