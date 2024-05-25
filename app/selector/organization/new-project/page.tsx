"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const OrganizationPage = () => {
    const [projectName, setProjectName] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [fund, setFund] = useState("");
    const [carbonEmission, setCarbonEmission] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = () => {
        // Gather all the form data
        const formData = {
            projectName,
            startDate,
            endDate,
            fund,
            carbonEmission,
            description
        };

        // Here you would typically send the form data to a server
        console.log("Form submitted:", formData);

        // Clear the form
        setProjectName("");
        setStartDate("");
        setEndDate("");
        setFund("");
        setCarbonEmission("");
        setDescription("");
    };

    return (
        <div className="min-h-screen bg-white pt-6 px-4 sm:px-6 lg:px-8 pb-36">
            <div className="w-full">
                <h2 className="text-3xl font-extrabold text-gray-900">New Project Registration</h2>
                <p className="mt-2 text-sm text-gray-600">
                    Creating a new project for an NGO, make sure to fill the details carefully and verify the details twice.
                </p>
                <hr className="bg-primary h-[2px] my-6" />
                <div className="mt-12 flex flex-col lg:flex-row">
                    <div className="flex-1 bg-white px-6">
                        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 lg:mx-12">
                            <div className="sm:col-span-6">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="project-name">
                                    Project Name
                                </label>
                                <div className="mt-1">
                                    <Input
                                        id="project-name"
                                        type="text"
                                        placeholder="Your Project name"
                                        value={projectName}
                                        onChange={(e) => setProjectName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="start-date">
                                    Start Date
                                </label>
                                <div className="mt-1">
                                    <Input
                                        id="start-date"
                                        type="date"
                                        value={startDate}
                                        onChange={(e) => setStartDate(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="end-date">
                                    End Date
                                </label>
                                <div className="mt-1">
                                    <Input
                                        id="end-date"
                                        type="date"
                                        value={endDate}
                                        onChange={(e) => setEndDate(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="fund">
                                    Fund Required for the Project
                                </label>
                                <div className="mt-1">
                                    <Input
                                        type="number"
                                        id="fund"
                                        placeholder="Fund required"
                                        value={fund}
                                        onChange={(e) => setFund(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="carbon-emission">
                                    Carbon Emission Goal if Any
                                </label>
                                <div className="mt-1">
                                    <Input
                                        type="number"
                                        id="carbon-emission"
                                        placeholder="Carbon emission goal"
                                        value={carbonEmission}
                                        onChange={(e) => setCarbonEmission(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="description">
                                    Description
                                </label>
                                <div className="mt-1">
                                    <Textarea
                                        id="description"
                                        placeholder="Tell us about your project and its mission."
                                        rows={6}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
                                    />
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                    Min 500 words and Maximum 600 words.
                                </p>
                            </div>
                            <div className="sm:col-span-6">
                                <div className="flex justify-center items-center w-full">
                                    <Button
                                        className="mt-10 w-2/5 font-semibold"
                                        onClick={handleSubmit}
                                    >
                                        Upload Project
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrganizationPage;
