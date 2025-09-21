// 
// numbers=[1,2,3,4,5]

// numbers.map((num)=>(html))
import NavBar from "./NavBar";
function Home() {

    const posts = [{
        id: 1,
        title: "Getting Started with React and Tailwind CSS",
        author: "Prem Sagar",
        timeRead:" 5 min read",
        postedOn: "Jan 10, 2024",
        content: "React and Tailwind CSS are a powerful combination for building modern web applications. In this article, we'll explore how to set up a React project with Tailwind CSS and create a simple responsive layout.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 2,
        title: "Understanding JavaScript Closures",
        author: "Asha Deepthi",
        timeRead:" 7 min read",
        postedOn: "Dec 05, 2023",
        content: "JavaScript closures are a fundamental concept that every developer should understand. In this article, we'll dive deep into closures, how they work, and practical examples of their usage.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 3,
        title: "A Guide to Responsive Web Design",
        author: "Alekhya Rani",
        timeRead:" 6 min read",
        postedOn: "Nov 20, 2023",
        content: "Responsive web design is essential in today's mobile-first world. This guide will walk you through the principles of responsive design and how to implement them using CSS and modern frameworks.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 4,
        title: "Exploring the New Features of ES2021",
        author: "Sravanthi",
        timeRead:" 8 min read",
        postedOn: "Oct 01, 2023",
        content: "ES2021 introduces several new features that enhance the JavaScript language. In this article, we'll explore these features and how they can improve your code.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 5,
        title: "Mastering Flexbox for Layout Design",
        author: "Leela Avinash",
        timeRead:" 10 min read",
        postedOn: "Sep 15, 2023",
        content: "Flexbox is a powerful layout module in CSS that allows for flexible and responsive design. This article will guide you through the basics of Flexbox and how to use it effectively in your projects.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }, {
        id: 6,
        title: "Introduction to TypeScript for JavaScript Developers",
        author:"Charan Teja",
        timeRead:" 9 min read",
        postedOn: "Aug 10, 2023",
        content: "TypeScript is a superset of JavaScript that adds static typing and other features to enhance developer productivity. This introduction will cover the basics of TypeScript and how to get started.",
        Image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        profilePic: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    }]

    return (
        <div className="min-h-screen flex flex-col items-center pt-5 bg-gray-50 sm:pt-2 md:pt-8 3xl:pt-16">
            <NavBar />
            <p className="text-4xl font-bold sm:text-2xl md:text-5xl 3xl:text-6xl">Welcome back, Dev Astra</p>
            <p className="text-lg text-gray-500 mt-4 sm:text-base md:text-xl 3xl:text-2xl"> Discover amazing stories, insights, and ideas from our community of writers.</p>
            <div className="flex gap-10 justify-around mt-5 sm:gap-4 md:gap-16 3xl:gap-24 sm:flex-col md:flex-row 3xl:flex-row"><object data="" type=""></object>
                <button className="px-10 py-4 cursor-pointer bg-blue-700 hover:bg-blue-900 shadow-md text-white rounded-md sm:px-4 sm:py-2 md:px-8 md:py-3 3xl:px-16 3xl:py-6">Write a New Post</button>
                <button className="px-10 py-4 cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-md sm:px-4 sm:py-2 md:px-8 md:py-3 3xl:px-16 3xl:py-6" >View My Posts</button>
            </div>
            <div className="mt-5 flex gap-10 flex-wrap justify-center w-full rounded-lg shadow-lg pb-5 sm:gap-4 md:gap-16 3xl:gap-24 sm:w-full md:w-5/6 3xl:w-3/4">
                {
                    posts.map((post) => (
                        <div className="w-96 bg-white shadow-lg rounded-lg sm:w-full md:w-2/3 3xl:w-1/2" key={post.id}>
                            <div className="relative">
                                <img className="rounded-t-lg shadow-lg h-52 w-96 sm:h-32 sm:w-full md:h-64 md:w-full 3xl:h-96 3xl:w-full" src={post.Image} alt="Writing" />
                                <button className="p-3 text-sm bg-white rounded-full absolute cursor-pointer right-4 top-3 sm:p-1 sm:text-xs md:p-2 md:text-base 3xl:p-6 3xl:text-lg">Save</button>
                            </div>
                            <div className="flex gap-5 mt-3 px-2 sm:gap-2 md:gap-8 3xl:gap-12 sm:px-1 md:px-4 3xl:px-8">
                                <img className="rounded-full shadow-lg h-12 w-12 sm:h-8 sm:w-8 md:h-16 md:w-16 3xl:h-24 3xl:w-24" src={post.profilePic} alt="Writing" />
                                <div>
                                    <p className="font-semibold sm:text-sm md:text-lg 3xl:text-2xl">{post.author}</p>
                                    <p className="text-gray-500 sm:text-xs md:text-base 3xl:text-xl">{post.postedOn} - {post.timeRead}</p>
                                </div>
                            </div>
                            <div className="mt-3 px-3 flex flex-col gap-3 sm:mt-1 sm:px-1 md:mt-6 md:px-6 3xl:mt-12 3xl:px-12">
                                <p className="text-2xl font-bold sm:text-lg md:text-3xl 3xl:text-5xl">{post.title}</p>
                                <p className="text-gray-600 sm:text-xs md:text-base 3xl:text-xl">
                        
                         {post.content}
                                </p>
                            </div>
                            <div className="mt-3 mb-3 px-3 flex justify-end sm:mt-1 sm:mb-1 sm:px-1 md:mt-6 md:mb-6 md:px-6 3xl:mt-12 3xl:mb-12 3xl:px-12">
                                <button className="text-blue-500 hover:underline cursor-pointer sm:text-xs md:text-base 3xl:text-xl">Read more</button>
                            </div>
                        </div>))
                }

            </div>
        </div>
    )
}

export default Home;