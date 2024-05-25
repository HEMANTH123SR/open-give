import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const Faq = () => {
    return (
        <div className=" w-full flex flex-col  px-5  py-14 sm:px-16 space-y-14  text-white">
            <h3 className="text-center text-4xl md:text-6xl ">FAQS</h3>
            <Accordion type="single" collapsible className="w-full  px-5 border">
                <AccordionItem value="item-1">
                    <AccordionTrigger>What is the core objective of this platform?</AccordionTrigger>
                    <AccordionContent>
                    Our platform is designed to cultivate trust and transparency among businesses and donors by integrating cutting-edge concepts such as tip-based donations, carbon offsetting, and blockchain technology for secure identity management.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2">
                    <AccordionTrigger>How does the tip concept work?</AccordionTrigger>
                    <AccordionContent>
                    The tip concept empowers users to express appreciation or support by contributing small amounts of money voluntarily. These micro-donations aggregate to drive significant impact on supported initiatives.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="hidden md:block">
                    <AccordionTrigger>
                    What is carbon offsetting and how does it relate to this website?
                    </AccordionTrigger>
                    <AccordionContent>
                    Carbon offsetting involves compensating for carbon emissions by investing in projects that reduce or remove greenhouse gases from the atmosphere. By incorporating carbon offsetting into our platform, we ensure that donations contribute to environmental sustainability..
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4">
                    <AccordionTrigger>
                    How does blockchain technology ensure transparency and traceability of funds?
                    </AccordionTrigger>
                    <AccordionContent>
                    Blockchain technology provides a decentralized and immutable ledger that records all transactions. By integrating blockchain, we ensure that all donation transactions are transparent, traceable, and secure, thereby enhancing trust among stakeholders.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5">
                    <AccordionTrigger>
                    What is the role of the Digital Identity Platform?
                    </AccordionTrigger>
                    <AccordionContent>
                    The Digital Identity Platform enables NGOs to publish user identities publicly, allowing citizens to verify the authenticity of organizations before making donations or partnerships. This platform also facilitates NGOs in verifying each others identities before collaborating, thereby enhancing accountability and trust within the sector.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6">
                    <AccordionTrigger>
                    How does the Smart Chain contribute to the overall objective and enhancement of the platform?
                    </AccordionTrigger>
                    <AccordionContent>
                    The Smart Chain technology enables efficient and secure management of identities and transactions within the blockchain network. This ensures tamper-proof and verifiable interactions, reinforcing trust and accountability for all users.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7">
                    <AccordionTrigger>
                    How can users ensure donations reach intended beneficiaries?
                    </AccordionTrigger>
                    <AccordionContent>
                    Our transparent donation process, powered by blockchain, enables users to track donations from inception to impact. Additionally, our Digital Identity Platform assures authenticity, directing contributions to credible initiatives.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8">
                    <AccordionTrigger>
                    How can businesses benefit from participating in this initiative?
                    </AccordionTrigger>
                    <AccordionContent>
                    Businesses can enhance their corporate social responsibility efforts by aligning with transparent and impactful donation practices. By engaging with our platform, businesses demonstrate their commitment to social causes, bolstering trust and credibility among stakeholders.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                    <AccordionTrigger>
                    Can individuals or organizations contribute to specific causes of their choice?
                    </AccordionTrigger>
                    <AccordionContent>
                        Yes, our platform allows donors to choose from a variety of causes and initiatives to support. Whether its environmental conservation, education, healthcare, or social welfare, donors have the flexibility to direct their contributions towards causes that resonate with them.
                    </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-9">
                    <AccordionTrigger>
                    How can one engage or learn more about this initiative?
                    </AccordionTrigger>
                    <AccordionContent>
                    To participate or delve deeper into our initiative, visit our user-friendly website or reach out to our team directly. We invite individuals, businesses, and organizations to join us in fostering trust, transparency, and positive societal impact.
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    )
}