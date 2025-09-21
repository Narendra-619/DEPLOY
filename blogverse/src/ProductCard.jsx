
import NavBar from "./NavBar";
const ProductCard = () => {
    return (
        <div className="m-2 flex flex-wrap justify-center min-h-screen gap-10 rounded-lg bg-purple-100 sm:gap-2 md:gap-8 3xl:gap-16 sm:p-2 md:p-8 3xl:p-16">
            <NavBar />
            <div className="w-64 border flex flex-col rounded-lg p-4 h-90 items-center bg-gray-100 sm:w-full md:w-1/2 3xl:w-1/3 sm:p-2 md:p-8 3xl:p-16">
                <img src="vite.svg" alt="Sample Product" className="w-32 h-32 rounded-full border-2 border-blue-500 sm:w-16 sm:h-16 md:w-24 md:h-24 3xl:w-48 3xl:h-48" />
                <h2 className="text-xl font-bold text-blue-800 sm:text-lg md:text-2xl 3xl:text-4xl">Sample Product</h2>
                <p className="text-md font-semibold text-gray-600 text-center sm:text-xs md:text-base 3xl:text-xl">This is a sample product description.</p>
                <p className="text-2xl font-bold text-green-700 sm:text-lg md:text-3xl 3xl:text-5xl">$29.99</p>
                <button className="border mt-3 py-3 text-white bg-blue-600 hover:bg-blue-800 cursor-pointer w-full rounded-md sm:py-1 md:py-4 3xl:py-8">Add to Cart</button>
            </div>
            <div className="w-64 border flex flex-col rounded-lg p-4 h-90 items-center bg-gray-100 sm:w-full md:w-1/2 3xl:w-1/3 sm:p-2 md:p-8 3xl:p-16">
                <img src="vite.svg" alt="Sample Product" className="w-32 h-32 rounded-full border-2 border-blue-500 sm:w-16 sm:h-16 md:w-24 md:h-24 3xl:w-48 3xl:h-48" />
                <h2 className="text-xl font-bold text-blue-800 sm:text-lg md:text-2xl 3xl:text-4xl">Sample Product</h2>
                <p className="text-md font-semibold text-gray-600 text-center sm:text-xs md:text-base 3xl:text-xl">This is a sample product description.</p>
                <p className="text-2xl font-bold text-green-700 sm:text-lg md:text-3xl 3xl:text-5xl">$29.99</p>
                <button className="border mt-3 py-3 text-white bg-blue-600 hover:bg-blue-800 cursor-pointer w-full rounded-md sm:py-1 md:py-4 3xl:py-8">Add to Cart</button>
            </div>
            <div className="w-64 border flex flex-col rounded-lg p-4 h-90 items-center bg-gray-100 sm:w-full md:w-1/2 3xl:w-1/3 sm:p-2 md:p-8 3xl:p-16">
                <img src="vite.svg" alt="Sample Product" className="w-32 h-32 rounded-full border-2 border-blue-500 sm:w-16 sm:h-16 md:w-24 md:h-24 3xl:w-48 3xl:h-48" />
                <h2 className="text-xl font-bold text-blue-800 sm:text-lg md:text-2xl 3xl:text-4xl">Sample Product</h2>
                <p className="text-md font-semibold text-gray-600 text-center sm:text-xs md:text-base 3xl:text-xl">This is a sample product description.</p>
                <p className="text-2xl font-bold text-green-700 sm:text-lg md:text-3xl 3xl:text-5xl">$29.99</p>
                <button className="border mt-3 py-3 text-white bg-blue-600 hover:bg-blue-800 cursor-pointer w-full rounded-md sm:py-1 md:py-4 3xl:py-8">Add to Cart</button>
            </div>
            <div className="w-64 border flex flex-col rounded-lg p-4 h-90 items-center bg-gray-100 sm:w-full md:w-1/2 3xl:w-1/3 sm:p-2 md:p-8 3xl:p-16">
                <img src="vite.svg" alt="Sample Product" className="w-32 h-32 rounded-full border-2 border-blue-500 sm:w-16 sm:h-16 md:w-24 md:h-24 3xl:w-48 3xl:h-48" />
                <h2 className="text-xl font-bold text-blue-800 sm:text-lg md:text-2xl 3xl:text-4xl">Sample Product</h2>
                <p className="text-md font-semibold text-gray-600 text-center sm:text-xs md:text-base 3xl:text-xl">This is a sample product description.</p>
                <p className="text-2xl font-bold text-green-700 sm:text-lg md:text-3xl 3xl:text-5xl">$29.99</p>
                <button className="border mt-3 py-3 text-white bg-blue-600 hover:bg-blue-800 cursor-pointer w-full rounded-md sm:py-1 md:py-4 3xl:py-8">Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductCard;