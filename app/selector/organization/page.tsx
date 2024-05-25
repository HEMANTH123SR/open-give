"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input"
import {
    SelectValue,
    SelectTrigger,
    SelectItem,
    SelectContent,
    Select,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea"
const OrganizationPage = () => {
    const [error, setError] = useState<string | null>(null);
    const [uid, setUid] = useState<string | undefined>(undefined);
    const [oraganizationName, setOraganizationName] = useState("");
    const [oraganizationDescription, setOraganizationDescription] = useState("");
    const [oraganizationEmail, setOraganizationEmail] = useState("");
    const [carbonEmission, setCarbonEmission] = useState(0)
    const [isoraganization, setIsoraganization] = useState('')


    return (
        <div className="min-h-screen bg-white pt-6  px-4 sm:px-6 lg:px-8 pb-36">
            <div className=" w-full">
                <h2 className="text-3xl font-extrabold text-gray-900"> Oraganization Register</h2>
                <p className="mt-2 text-sm text-gray-600">
                    Register your organization and share your mission with the world! Sign up and manage your organizations profile easily.

                </p>
                <hr className="bg-primary h-[2px] my-6" />
                <div className="mt-12 flex flex-col lg:flex-row ">
                    <div className="flex-1 bg-white px-6">
                        <div className=" grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 lg:mx-12">
                            <div className="sm:col-span-6">
                                <label
                                    className="block text-sm font-medium text-gray-700"
                                    htmlFor="oraganization-name"
                                >
                                    Oraganization Name
                                </label>

                                <div className="mt-1">
                                    <Input
                                        id="oraganization-name"
                                        type="text"
                                        placeholder="Your Oraganization name"
                                        value={oraganizationName}
                                        onChange={(e) => {
                                            setOraganizationName(e.target.value)
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label
                                    className="block text-sm font-medium text-gray-700"
                                    htmlFor="email"
                                >
                                    Email
                                </label>

                                <div className="mt-1">
                                    <Input
                                        id="email"
                                        placeholder="Provide your email id"

                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label
                                    className="block text-sm font-medium text-gray-700"
                                    htmlFor="website"
                                >
                                    Website
                                </label>

                                <div className="mt-1">
                                    <Input
                                        id="website"
                                        placeholder="Provide your Oragnization website"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label
                                    className="block text-sm font-medium text-gray-700"
                                    htmlFor="carbon-emission"
                                >
                                    Carbon Emission
                                </label>

                                <div className="mt-1">
                                    <Input
                                        type="number"
                                        id="carbon-emission"
                                        placeholder="Provide your Oragnization carbon emission in percentage"
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label
                                    className="block text-sm font-medium text-gray-700"
                                    htmlFor="status"
                                >
                                    Status
                                </label>
                                <div className="mt-1">
                                    <Select
                                        onValueChange={(value) => {
                                            // setStatus(value as Status);
                                        }}
                                    >
                                        <SelectTrigger id="status">
                                            <SelectValue placeholder="Select the suitable case for you" />
                                        </SelectTrigger>
                                        <SelectContent position="popper">

                                            <SelectItem value="Individual">Individual</SelectItem>
                                            <SelectItem value="Organization">Organization</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                    Choose your current status: Individual or Organization. The default will be Individual.
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
                                        placeholder="Tell us about your favorite mangas."
                                        rows={6}
                                        value={oraganizationDescription}
                                        onChange={(e) => {
                                            setOraganizationDescription(e.target.value)
                                        }}

                                    />
                                </div>
                                <p className="mt-2 text-sm text-gray-500">
                                    Min 500 words and Maximum 600 words
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
        </div >
    );
};

export default OrganizationPage;
