"use client";
import React, { useState, useEffect } from "react";

// Define the Project type
interface Project {
    projectName: string;
    startDate: string;
    endDate: string;
    fund: string;
    carbonEmission: string;
    description: string;
    ngoName: string;
}

const Log = () => {
    // Initial list of projects
    const initialProjects: Project[] = [
        {
            projectName: "Green Energy Initiative",
            startDate: "2023-01-01",
            endDate: "2024-01-01",
            fund: "$500,000",
            carbonEmission: "Reduced by 1,000 tons",
            description: "A project to install solar panels in rural areas.",
            ngoName: "Eco Future",
        },
        {
            projectName: "Clean Water Project",
            startDate: "2022-06-01",
            endDate: "2023-06-01",
            fund: "$250,000",
            carbonEmission: "N/A",
            description: "Providing access to clean water in underdeveloped regions.",
            ngoName: "Water for All",
        },
        {
            projectName: "Urban Forestation",
            startDate: "2021-03-01",
            endDate: "2022-09-01",
            fund: "$300,000",
            carbonEmission: "Reduced by 500 tons",
            description: "Planting trees in urban areas to reduce pollution.",
            ngoName: "Green City",
        },
        {
            projectName: "Renewable Energy Education",
            startDate: "2022-09-01",
            endDate: "2023-09-01",
            fund: "$150,000",
            carbonEmission: "N/A",
            description: "Educational programs about renewable energy sources.",
            ngoName: "Energy Savers",
        },
        {
            projectName: "Wildlife Conservation",
            startDate: "2021-05-01",
            endDate: "2022-05-01",
            fund: "$400,000",
            carbonEmission: "N/A",
            description: "Protecting endangered species through habitat preservation.",
            ngoName: "Wildlife Guardians",
        },
        {
            projectName: "Community Recycling Program",
            startDate: "2022-04-01",
            endDate: "2023-04-01",
            fund: "$100,000",
            carbonEmission: "Reduced by 200 tons",
            description: "Implementing a community-wide recycling initiative.",
            ngoName: "Recycle Today",
        },
        {
            projectName: "Energy Efficient Homes",
            startDate: "2021-07-01",
            endDate: "2022-07-01",
            fund: "$350,000",
            carbonEmission: "Reduced by 600 tons",
            description: "Retrofitting homes to be more energy-efficient.",
            ngoName: "Home Green Home",
        },
        {
            projectName: "Sustainable Agriculture",
            startDate: "2023-02-01",
            endDate: "2024-02-01",
            fund: "$200,000",
            carbonEmission: "Reduced by 300 tons",
            description: "Promoting sustainable farming practices.",
            ngoName: "Farm Sustainably",
        },
        {
            projectName: "Air Quality Improvement",
            startDate: "2022-01-01",
            endDate: "2023-01-01",
            fund: "$450,000",
            carbonEmission: "Reduced by 700 tons",
            description: "Initiatives to improve air quality in urban areas.",
            ngoName: "Clean Air Now",
        },
        {
            projectName: "Marine Conservation",
            startDate: "2021-11-01",
            endDate: "2022-11-01",
            fund: "$600,000",
            carbonEmission: "N/A",
            description: "Protecting marine ecosystems and reducing plastic pollution.",
            ngoName: "Ocean Protectors",
        },
    ];

    // State for search input and filtered projects
    const [searchInput, setSearchInput] = useState<string>("");
    const [filteredProjects, setFilteredProjects] = useState<Project[]>(initialProjects);

    // Handle input change
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setSearchInput(value);
    };

    // Filter projects based on search input
    useEffect(() => {
        const filtered = initialProjects.filter(project =>
            project.projectName.toLowerCase().includes(searchInput.toLowerCase())
        );
        setFilteredProjects(filtered);
    }, [searchInput]);

    return (
        <div className="h-full w-full bg-white text-black flex flex-col p-8">
            <h1 className="text-5xl font-semibold border-l-8 border-black pl-2 rounded-sm">
                Find the projects that are available to donate
            </h1>
            <div className="flex flex-col space-y-1 w-full justify-center items-center mt-6">
                <input
                    className="w-10/12 font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans custom-placeholder no-border outline-none"
                    type="text"
                    aria-label="search"
                    placeholder="Search NGO Program"
                    value={searchInput}
                    onChange={handleInputChange}
                    style={{ color: "black" }}
                />
                <div className="w-10/12 h-0.5 bg-primary"></div>
                <div className="min-h-4"></div>
            </div>
            <div className="flex flex-wrap justify-center items-center py-8">
                {filteredProjects.map(ngoProject => (
                    <div
                        className="flex flex-col w-2/5 space-y-2 border p-4 m-3 cursor-pointer"
                        key={ngoProject.projectName}
                    >
                        <div className="flex flex-col">
                            <span className="text-lg font-semibold">{ngoProject.projectName}</span>
                            <span className="text-sm text-gray-500">
                                By {ngoProject.ngoName} {` / Ends at ${ngoProject.endDate}`}
                            </span>
                        </div>
                        <span className="text-sm text-gray-500">
                            Carbon Emission {ngoProject.carbonEmission}
                        </span>
                        <span className="text">{ngoProject.description}</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Log;
