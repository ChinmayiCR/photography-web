import {products } from "../constants/index.js";
import { useNavigate } from "react-router-dom";
import {
    IconSpice,
    IconPickle,
    IconChutney,
    IconOther,
} from "../components/CategoryIcons.jsx";


const categories = [
    {
        title: "Powders & Paste",
        icon: <IconSpice />,
        slug: "Powders and Paste",
    },
    {
        title: "Pickles",
        icon: <IconPickle />,
        slug: "pickles",
    },
    {
        title: "Chutney Powders",
        icon: <IconChutney />,
        slug: "Chutney Powders",
    },
    {
        title: "Others",
        icon: <IconOther />,
        slug: "Others",
    },
];

const Features = () => {
    const newLaunchProducts = products.filter(
        (product) => product.newLaunch === true
    );
    const navigate = useNavigate();

    return (
        <section className="border-t border-[#d8d1c7] sm:py-12">

            {/* New Launch */}
            {newLaunchProducts.length > 0 && (
                <div>
                    <div className="mb-8">
                        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#6f7661]">
                            Fresh from our kitchen
                        </p>

                        <h2 className="editorial-serif text-3xl leading-none text-[#403d38] sm:text-4xl">
                            New Launch
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 sm:gap-8">
                        {newLaunchProducts.map((product) => (
                            <a
                                key={product.id}
                                href={`/item/${product.id}`}
                                className="group block"
            >
                <div className="relative overflow-hidden bg-[#f6f3ee]">
                    <img
                        src={product.link}
                        alt={product.title}
                        className="h-auto w-full object-contain transition-transform duration-500 group-hover:scale-105"
                    />

                    <span className="absolute left-3 top-3 z-10 rounded-full bg-[#27251f] px-3 py-1 text-xs text-white">
                        New Launch
                    </span>
                </div>

                <h3 className="editorial-serif mt-3 text-base text-[#403d38] sm:text-lg">
                    {product.title}
                </h3>

                <p className="mt-1 text-xs text-[#726e68] sm:text-sm">
                    {product.category}
                </p>

                <span className="mt-3 inline-block border-b border-[#403d38] pb-1 text-xs text-[#403d38]">
                    View product →
                </span>
            </a>
        ))}
    </div>
</div>
)}

{/* Shop by Categories */}
<div className="mt-8">
    <div className="mb-8">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-[#6f7661]">
            Explore our new launch
        </p>

        <h2 className="editorial-serif text-3xl leading-none text-[#403d38] sm:text-4xl">
            Shop by categories
        </h2>
    </div>


    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
        {categories.map((category) => (
            <button
                key={category.slug}
                onClick={() =>
                    navigate("/shop", {
                        state: {
                            selectedCategory: category.slug,
                        },
                    })
                }
                className="group flex flex-col items-center justify-center gap-4 border border-[#d8d1c7] bg-[#f6f3ee] px-4 py-8 text-center transition-colors hover:bg-[#ebe5dc] sm:py-12"
            >
                <span className="text-[#6f7661] transition-transform duration-300 group-hover:-translate-y-1">
                    {category.icon}
                </span>

                <span className="editorial-serif text-base text-[#403d38] sm:text-lg">
                    {category.title}
                </span>
            </button>
        ))}
    </div>

</div>

</section>
);
};

export default Features;
