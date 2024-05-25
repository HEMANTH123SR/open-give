"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
    SelectValue,
    SelectTrigger,
    SelectItem,
    SelectContent,
    Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const NGOPage = () => {
    const [error, setError] = useState<string | null>(null);
    const [uid, setUid] = useState<string | undefined>(undefined);
    const [ngoName, setNgoName] = useState("");
    const [projectName, setProjectName] = useState("");
    const [projectId, setProjectId] = useState("");
    const [projectEmail, setProjectEmail] = useState("");
    const [description, setDescription] = useState("");
    const [potentialCredits, setPotentialCredits] = useState(0);
    const [interestedTowards, setInterestedTowards] = useState("");

    return (
        <div className="min-h-screen bg-white pt-6  px-4 sm:px-6 lg:px-8 pb-36">
            <div className=" w-full">
                <h2 className="text-3xl font-extrabold text-gray-900">NGO Register</h2>
                <p className="mt-2 text-sm text-gray-600">
                    Register your NGO and share your mission with the world! Sign up and manage your NGO  profile easily.
                </p>
                <hr className="bg-primary h-[2px] my-6" />
                <div className="mt-12 flex flex-col lg:flex-row ">
                    <div className="flex-1 bg-white px-6">
                        <div className=" grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 lg:mx-12">
                            <div className="sm:col-span-6">
                                <label
                                    className="block text-sm font-medium text-gray-700"
                                    htmlFor="ngo-name"
                                >
                                    NGO Name
                                </label>

                                <div className="mt-1">
                                    <Input
                                        id="ngo-name"
                                        type="text"
                                        placeholder="Your NGO name"
                                        value={ngoName}
                                        onChange={(e) => {
                                            setNgoName(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label
                                    className="block text-sm font-medium text-gray-700"
                                    htmlFor="project-name"
                                >
                                    Project Name
                                </label>

                                <div className="mt-1">
                                    <Input
                                        id="project-name"
                                        type="text"
                                        placeholder="Your Project Name"
                                        value={projectName}
                                        onChange={(e) => {
                                            setProjectName(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label
                                    className="block text-sm font-medium text-gray-700"
                                    htmlFor="project-id"
                                >
                                    Project ID
                                </label>

                                <div className="mt-1">
                                    <Input
                                        id="project-id"
                                        type="text"
                                        placeholder="Your Project ID"
                                        value={projectId}
                                        onChange={(e) => {
                                            setProjectId(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label
                                    className="block text-sm font-medium text-gray-700"
                                    htmlFor="project-email"
                                >
                                    Project Email
                                </label>

                                <div className="mt-1">
                                    <Input
                                        id="project-email"
                                        type="email"
                                        placeholder="Provide your project email"
                                        value={projectEmail}
                                        onChange={(e) => {
                                            setProjectEmail(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label
                                    className="block text-sm font-medium text-gray-700"
                                    htmlFor="potential-credits"
                                >
                                    Potential Credits
                                </label>

                                <div className="mt-1">
                                    <Input
                                        type="number"
                                        id="potential-credits"
                                        placeholder="Provide potential credits"
                                        value={potentialCredits}
                                        onChange={(e) => {
                                            setPotentialCredits(Number(e.target.value));
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label
                                    className="block text-sm font-medium text-gray-700"
                                    htmlFor="interested-towards"
                                >
                                    Interested Towards
                                </label>
                                <div className="mt-1">
                                    <Select
                                        onValueChange={(value) => {
                                            setInterestedTowards(value);
                                        }}
                                    >
                                        <SelectTrigger id="interested-towards">
                                            <SelectValue placeholder="Select your interest" />
                                        </SelectTrigger>
                                        <SelectContent position="popper">
                                            <SelectItem value="Environment">Environment</SelectItem>
                                            <SelectItem value="Education">Education</SelectItem>
                                            <SelectItem value="Health">Health</SelectItem>
                                            <SelectItem value="Community Development">Community Development</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                    Choose the area your NGO is most interested in.
                                </p>
                            </div>
                            <div className="sm:col-span-6">
                                <label
                                    className="block text-sm font-medium text-gray-700"
                                    htmlFor="ngo-address"
                                >
                                    Ngo Address
                                </label>

                                <div className="mt-1">
                                    <Textarea
                                        id="ngo-address"
                                        placeholder="Tell us about your NGO "
                                        rows={2}
                                    />
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                    Min 500 words and Maximum 600 words.
                                </p>
                            </div>
                            <div className="sm:col-span-6">
                                <label
                                    className="block text-sm font-medium text-gray-700"
                                    htmlFor="description"
                                >
                                    Description
                                </label>

                                <div className="mt-1">
                                    <Textarea
                                        id="description"
                                        placeholder="Tell us about your NGO and its mission."
                                        rows={6}
                                        value={description}
                                        onChange={(e) => {
                                            setDescription(e.target.value);
                                        }}
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
                                    >
                                        Submit Application
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

export default NGOPage;
