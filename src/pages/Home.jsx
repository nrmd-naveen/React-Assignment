import { useEffect, useState } from "react";
import Product from "../components/Product";
import { Search } from "../assets/SearchIcon";

const Home = () => {
    const [productData, setProductData] = useState([]);
    const [filteredData, setFilteredData] = useState([]); 
    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch("https://api.sampleapis.com/beers/ale");
            const data = await response.json();
            console.log(data);
            const filteredData = data.filter(data => !(data.name.toLowerCase().includes('{') || data.price.toLowerCase().includes('{')) );
            setProductData(filteredData);
            setFilteredData(filteredData);
        };
        fetchData();
    }, []);
    
    //improved search based on querry change
    useEffect(() => {
        setFilteredData(
            productData.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))
        );
    }, [query, productData]);

    //probably not needed
    const handleSearch = (query) => {
        console.log(query);
        const filteredData = data.filter(item => item.name && item.price && typeof item.price === "string");
        setFilteredData(filteredData);
    };
    return <>
        <div className=" bg-white sticky top-0 flex  py-4 px-8 md:px-40 gap-4">
            <input
                className="border p-2 rounded w-full"
                type="text"
                placeholder="Search beers..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button
                className="cursor-pointer bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-lg"
                onClick={() => handleSearch(query)}
            >
                <Search
                    className="h-5 w-5"
                />
            </button>        
        </div>

        <div className="min-h-screen flex flex-wrap gap-4 justify-center items-center">
            {filteredData.length > 0 ?
                filteredData.map((data) => {
                    return <Product data={data} key={data.id} />
                }) : (
                    <p className="text-gray-600">
                        {productData.length <= 0 ? " Please wait ..." : " No Product Found "}
                    </p>
                )}
        </div>
    </>
};

export default Home;
