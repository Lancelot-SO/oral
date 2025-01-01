import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import blogbanner from "../assets/blog/blogbanner.png"
import Blog1 from "../assets/blog/blog1.png"
import Blog2 from "../assets/blog/blog2.png"
import Blog3 from "../assets/blog/blog3.png"
import Blog4 from "../assets/blog/blog4.png"
import Blog5 from "../assets/blog/blog5.png"
import Blog6 from "../assets/blog/blog6.png"
import security from "../assets/hero/security.png"




const blogPosts = [
    {
        id: 1,
        title: "Our work ends immediately Attorney-General is appointed – ORAL team",
        excerpt: "The Chair of the Operations Recover All Loot (ORAL), Samuel Okudzeto Ablakwa, has said that their work will end immediately after an Attorney-General...",
        image: Blog1,
        date: "December 21, 2024 10:49 am",
        category: "Politics",
        readmore: "https://3news.com/news/our-work-ends-immediately-attorney-general-is-appointed-oral-team/",

    },
    {
        id: 2,
        title: "ORAL receives info on alleged ghost names...",
        excerpt: "He said “With regards to ORAL, I announced the preparatory committee and people are confused. We are receiving a lot of information on things that are going wrong, corruption scandals and all that., some send me texts on my phones, some call me, others pass through other people...",
        image: Blog2,
        date: "December 20, 2024 18:19",
        category: "News",
        readmore: "https://www.graphic.com.gh/news/general-news/team-oral-receives-dossier-on-alleged-ghost-names-at-national-service-authority.html#google_vignette",

    },
    {
        id: 3,
        title: "ORAL is a populist idea – GII’s Mary...",
        excerpt: "However, she said “We are people who must be guided by the past about what has happened…we have seen similar committees being formed before. Akufo-Addo put in place several committees..",
        image: Blog3,
        date: "December 21, 2024 8:47 am",
        category: "News",
        readmore: "https://3news.com/news/oral-is-a-populist-idea-giis-mary-addah/",
    },
    {
        id: 4,
        title: "The day of accountability is coming for NPP –",
        excerpt: "Despite the challenges, Tameklo noted Mahama’s unwavering resolve to ensure justice prevailed, stating that Mahama famously declared, “The wrongdoing must be investigated.”",
        image: Blog4,
        date: "December 22, 2024 10:28 am",
        category: "News",
        readmore: "https://3news.com/news/the-day-of-accountability-is-coming-for-npp-edudzi-tameklo/",

    },
    {
        id: 5,
        title: "ORAL is not going to investigate anybody...",
        excerpt: "He said “With regards to ORAL, I announced the preparatory committee and people are confused. We are receiving a lot of information on things that are going wrong, corruption scandals and all that., some send me texts on my phones, some call me, others pass through other people.",
        image: Blog5,
        date: "December 19, 2024 5:28 pm",
        category: "Politics",
        readmore: "https://3news.com/news/oral-is-not-going-to-investigate-anybody-mahama-clarifies/",

    },
    {
        id: 6,
        title: "Ablekuma North MP backs ORAL team’s...",
        excerpt: "However, she said “We are people who must be guided by the past about what has happened…we have seen similar committees being formed before. Akufo-Addo put in place several committees..",
        image: Blog6,
        date: "December 21, 2024",
        category: "Politics",
        readmore: "https://www.ghanaweb.com/GhanaHomePage/NewsArchive/Ablekuma-North-MP-backs-ORAL-team-s-decision-to-work-without-allowances-1964897",

    },
];

const latestBlog = blogPosts[0]; // Assuming the first blog is the latest

const Blog = () => {
    const postsPerPage = 3; // Number of posts per page
    const [currentPage, setCurrentPage] = useState(1);


    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const currentPosts = blogPosts.slice(startIndex, endIndex);

    // Calculate total pages
    const totalPages = Math.ceil(blogPosts.length / postsPerPage);

    // Function to handle page change
    const handlePageChange = (page) => {
        setCurrentPage(page);
    };


    return (
        <div>
            {/* Blog Banner */}
            <div className="relative">
                <img
                    src={blogbanner}
                    alt="about"
                    className="object-cover w-full h-[300px] sm:h-[400px] md:h-[500px]"
                    loading="lazy"
                />
                <div className="absolute top-[60%] sm:top-[65%] md:top-[54%] left-4 sm:left-8 md:left-[60px] transform -translate-y-1/2 sm:-translate-y-0 w-[90%] sm:w-[80%] md:w-[758px] h-auto flex flex-col gap-2 px-4">
                    <h2 className="text-2xl sm:text-4xl font-bold text-white">
                        John Mahama set up five-member team for Operation Recover All Loot to get Ghana stolen money
                    </h2>
                    <p className="text-white text-sm sm:text-base md:text-lg">
                        This was announced by the leader of the team, Samuel Okudzeto Ablakwa
                        on Friday, December 20..
                    </p>
                </div>
            </div>

            {/* Latest Blog */}
            <div className="w-full flex justify-center my-6 sm:my-10 h-auto">
                <div className="px-4 sm:px-6 flex flex-col w-full max-w-[1130px] h-auto">
                    <div className="mb-6 sm:mb-8">
                        <h2 className="font-bold text-2xl sm:text-[30px] leading-[36px] sm:leading-[44px] text-center sm:text-left">
                            Explore All Articles
                        </h2>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                        {/* Image Section */}
                        <div className="w-full lg:w-[40%]">
                            <img
                                src={latestBlog.image}
                                alt={latestBlog.title}
                                loading="lazy"
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="w-full lg:w-[60%] flex flex-col justify-center">
                            {/* Category and Date */}
                            <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                                <span>{latestBlog.category}</span>
                                <span>•</span>
                                <span>{latestBlog.date}</span>
                            </div>

                            {/* Title */}
                            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                                {latestBlog.title}
                            </h2>

                            {/* Excerpt */}
                            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-4 sm:mb-6 line-clamp-3">
                                {latestBlog.excerpt}
                            </p>

                            {/* Read More Button */}
                            <div>
                                <a href={latestBlog.readmore}
                                    target="_blank"
                                    className="text-green-500 font-semibold hover:text-green-700"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* Blog Posts */}
            <div className="py-6 sm:py-10 flex flex-col items-center justify-center">
                <div className="w-full px-4 sm:px-6 max-w-[1130px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {currentPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col"
                        >
                            {/* Image Section */}
                            <img
                                src={post.image}
                                alt={post.title}
                                loading="lazy"
                                className="w-full h-auto object-cover"
                            />

                            {/* Content Section */}
                            <div className="p-4 flex flex-col flex-1">
                                {/* Category and Date */}
                                <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                                    <span>{post.category}</span>
                                    <span>•</span>
                                    <span>{post.date}</span>
                                </div>

                                {/* Title */}
                                <h3 className="font-bold text-base sm:text-lg mb-2 text-gray-800">
                                    {post.title}
                                </h3>

                                {/* Excerpt */}
                                <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                {/* Read More Link */}
                                <a
                                    href={post.readmore}
                                    target="_blank"
                                    className="text-green-500 font-semibold hover:text-green-700 cursor-pointer mt-auto"
                                >
                                    Read More
                                </a>
                            </div>
                        </div>
                    ))}
                </div>


                {/* Pagination */}
                <div className="flex gap-2 mt-4">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={`px-3 sm:px-4 py-1 sm:py-2 rounded-md ${currentPage === index + 1
                                ? "bg-green-600 text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            </div>

            <section>
                <div className="relative bg-black py-10">
                    <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 lg:px-16 mt-6 lg:mt-0">
                        {/* Left Section */}
                        <div className="text-white text-center lg:text-left mb-6 lg:mb-0">
                            <h2 className="text-[25px] sm:text-[30px] lg:text-[35px] font-medium w-full lg:w-[301px]">
                                YOUR SECURITY IS OUR PRIORITY
                            </h2>
                        </div>

                        {/* Right Section */}
                        <div className="flex flex-wrap justify-center lg:ml-[280px] ml-0 gap-6">
                            {/* Card 1 */}
                            <div className="w-full sm:w-[250px] h-[110px] bg-gradient-to-r from-[#161F21] to-[#387A69] p-4 sm:p-6 text-white">
                                <h3 className="text-[13px] font-semibold mb-2">END-TO-END ENCRYPTION</h3>
                                <p className="text-sm">All communications are fully encrypted and secured.</p>
                            </div>

                            {/* Card 2 */}
                            <div className="w-full sm:w-[250px] h-[110px] bg-gradient-to-r from-[#161F21] to-[#387A69] p-4 sm:p-6 text-white">
                                <h3 className="text-[13px] font-semibold mb-2">LEGAL PROTECTION</h3>
                                <p className="text-sm">Complete whistleblower protection under Act 720.</p>
                            </div>

                            {/* Card 3 */}
                            <div
                                className="w-full sm:w-[250px] h-[110px] bg-cover bg-center text-white p-4 flex flex-col justify-end"
                                style={{
                                    backgroundImage: `url(${security})`,
                                }}
                            >
                                <h3 className="text-[13px] font-semibold mb-1">PROFESSIONAL HANDLING</h3>
                                <p className="text-sm">Expert analysis and secure case management.</p>
                            </div>
                        </div>
                    </div>

                    {/* Floating Button */}
                    <div className="absolute right-2 lg:top-0 top-6 transform -translate-y-1/2">
                        <div className="bg-gradient-to-b from-[#387A69] to-[#161F21] text-white text-center rounded-full w-20 h-20 sm:w-28 sm:h-28 flex items-center justify-center shadow-md">
                            <span className="text-xs sm:text-sm font-semibold">Send YOUR Complaint</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blog;
