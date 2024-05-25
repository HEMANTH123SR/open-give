

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

const OrganizationPage = () => {
    const [organizationName, setOrganizationName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [website, setWebsite] = useState<string>("");
    const [carbonEmission, setCarbonEmission] = useState<string>("");
    const [status, setStatus] = useState<string>("Individual");
    const [description, setDescription] = useState<string>("");

    const createOrganization = () => {
        if (organizationName.length <= 3) return false;
        if (email.length <= 5) return false;
        if (website.length <= 5) return false;
        if (!carbonEmission) return false;
        if (description.length < 500 || description.length > 600) return false;

        // Simulate successful form submission
        console.log("Organization created successfully:", {
            organizationName,
            email,
            website,
            carbonEmission,
            status,
            description,
        });

        return true;
    }

    const handleSubmit = () => {
        if (createOrganization()) {
            // Handle successful submission (e.g., display a success message, clear the form, etc.)
            alert("Organization created successfully!");
        } else {
            // Handle validation errors
            alert("Form validation failed. Please check your input.");
        }
    }

    return (
        <div className="min-h-screen bg-white pt-6 px-4 sm:px-6 lg:px-8 pb-36">
            <div className="w-full">
                <h2 className="text-3xl font-extrabold text-gray-900">Organization Register</h2>
                <p className="mt-2 text-sm text-gray-600">
                    Register your organization and share your mission with the world! Sign up and manage your organizations profile easily.
                </p>
                <hr className="bg-primary h-[2px] my-6" />
                <div className="mt-12 flex flex-col lg:flex-row">
                    <div className="flex-1 bg-white px-6">
                        <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6 lg:mx-12">
                            <div className="sm:col-span-6">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="organization-name">
                                    Organization Name
                                </label>
                                <div className="mt-1">
                                    <Input
                                        id="organization-name"
                                        type="text"
                                        placeholder="Your Organization name"
                                        value={organizationName}
                                        onChange={(e) => setOrganizationName(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="email">
                                    Email
                                </label>
                                <div className="mt-1">
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Provide your email id"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="website">
                                    Website
                                </label>
                                <div className="mt-1">
                                    <Input
                                        id="website"
                                        type="url"
                                        placeholder="Provide your Organization website"
                                        value={website}
                                        onChange={(e) => setWebsite(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="carbon-emission">
                                    Carbon Emission
                                </label>
                                <div className="mt-1">
                                    <Input
                                        type="number"
                                        id="carbon-emission"
                                        placeholder="Provide your Organization carbon emission in percentage"
                                        value={carbonEmission}
                                        onChange={(e) => setCarbonEmission(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-6">
                                <label className="block text-sm font-medium text-gray-700" htmlFor="status">
                                    Status
                                </label>
                                <div className="mt-1">
                                    <Select
                                        onValueChange={(value) => setStatus(value)}
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
                                <label className="block text-sm font-medium text-gray-700" htmlFor="description">
                                    Description
                                </label>
                                <div className="mt-1">
                                    <Textarea
                                        id="description"
                                        placeholder="Tell us about your organization and its mission."
                                        rows={6}
                                        value={description}
                                        onChange={(e) => setDescription(e.target.value)}
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
                                        onClick={handleSubmit}
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

export default OrganizationPage;
