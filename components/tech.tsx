import IconCloud from "@/components/magicui/icon-cloud";

const slugs = [
    "typescript",
    "javascript",
    //  "dart",
    //  "java",
    "react",
    // "flutter",
    // "android",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    //  "firebase",
    //    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    // "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    // "androidstudio",
    // "sonarqube",
    "figma",
];

export const TechSection = () => {
    return (
        <div className="h-[90vh] w-full flex justify-between items-center border-y-[2px]  border-blue-100/20"
            style={{
                backgroundImage: "url('/background.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat"
            }}
        >
            <div className="flex flex-col pl-14 w-1/2 space-y-4">
                <h4 className="text-6xl font-bold bg-gradient-to-r from-[#FFD439] to-[#FF7A00] bg-clip-text text-transparent">Our Tech Stack <span className="text-white">.</span></h4>
                <p className="text-white ">On Open/Give, we specialize in facilitating seamless transactions and collaborations between NGOs and large corporations, leveraging blockchain technology for transparency and efficiency. Our platform serves as the intermediary, offering a range of services tailored to meet the unique needs of both sectors. Our dedicated team of blockchain experts ensures top-notch solutions for your projects, ensuring code excellence every step of the way. Let us empower your software initiatives with the power of Open/Give.</p>
            </div>
            <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden  px-20 pb-20 pt-8 ">
                <IconCloud iconSlugs={slugs} />
            </div>
        </div>
    );
}
