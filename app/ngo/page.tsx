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


    const [ngoName, setNgoName] = useState<string>("");
    const [ngoPhone, setNgoPhone] = useState<number>(0);
    const [ngoEmail, setNgoEmail] = useState<string>("");
    const [proofOfNgo, setProffOfNgo] = useState<string>("")
    const [proofOfNgoLocation, setProffOfNgoLocation] = useState<string>("");
    const [ngoLocation, setNgoLocation] = useState<string>("");
    const [ngoDescription, setNgoDescription] = useState<string>("");


    const createNGO = () => {
        if (ngoName.length <= 3) return false;
        if (ngoEmail.length <= 5) return false;
        if (!ngoPhone) return false;
        if (proofOfNgo.length <= 3) return false;
        if (proofOfNgoLocation.length <= 5) return false;
        if (ngoLocation.length <= 3) return false;
        if (ngoDescription.length <= 5) return false;

        return true;
    }

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
                                            setNgoName(e.target.value)
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label
                                    className="block text-sm font-medium text-gray-700"
                                    htmlFor="phone"
                                >
                                    Phone
                                </label>

                                <div className="mt-1">
                                    <Input
                                        id="phone"
                                        type="number"
                                        placeholder="Provide your project email"
                                        value={ngoPhone}
                                        onChange={(e) => {
                                            setNgoPhone(Number(e.target.value))
                                        }}

                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label
                                    className="block text-sm font-medium text-gray-700"
                                    htmlFor="pfn"
                                >
                                    Proof of NGO
                                </label>

                                <div className="mt-1">
                                    <Input
                                        id="pfn"
                                        type="text"
                                        placeholder="Provide your NGO certificate proff"
                                        value={proofOfNgo}
                                        onChange={(e) => {
                                            setProffOfNgo(e.target.value)
                                        }}

                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-6">
                                <label
                                    className="block text-sm font-medium text-gray-700"
                                    htmlFor="prl"
                                >
                                    Proof of Location
                                </label>

                                <div className="mt-1">
                                    <Input
                                        id="prl"
                                        type="text"
                                        placeholder="Provide your NGO location proff"
                                        value={proofOfNgoLocation}
                                        onChange={(e) => {
                                            setProffOfNgoLocation(e.target.value)
                                        }}

                                    />
                                </div>
                            </div>


                            <div className="sm:col-span-6">
                                <label
                                    className="block text-sm font-medium text-gray-700"
                                    htmlFor="project-email"
                                >
                                    Email
                                </label>

                                <div className="mt-1">
                                    <Input
                                        id="project-email"
                                        type="email"
                                        placeholder="Provide your project email"
                                        value={ngoEmail}
                                        onChange={(e) => {
                                            setNgoEmail(e.target.value)
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
                                    // onValueChange={(value) => {
                                    //     setInterestedTowards(value);
                                    // }}
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
                                        value={ngoLocation}
                                        onChange={(e) => {
                                            setNgoLocation(e.target.value)
                                        }}
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
                                        value={ngoDescription}
                                        onChange={(e) => {
                                            setNgoDescription(e.target.value);
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
                                        onClick={() => createNGO()}
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
