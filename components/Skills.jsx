"use client"
import { useState } from 'react'
import { motion, AnimatePresence } from "framer-motion";
export default function AboutUs() {
    return (
        <motion.div
            key="skills"
            initial={ { opacity: 0, y: 20 } }
            animate={ { opacity: 1, y: 0 } }
            exit={ { opacity: 0, y: 20 } }
            transition={ { duration: 0.4 } }
            className="bg-white rounded-lg shadow-lg p-6"
        >
            <h3 className="text-2xl font-bold mb-6 flex items-center">
                Technical Skills & Expertise
                <span className="ml-3 w-16 h-1 bg-pink-500 rounded"></span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <SkillItem title="Programming Languages & Frameworks" items={ ["NodeJS (NestJS, ExpressJS)", "PHP", "TypeScript"] } />
                    <SkillItem title="Cloud Platforms (AWS)" items={ ["AWS", "API Gateway", "DynamoDB", "EC2", "RDS", "S3", "Route53", "SNS", "Cognito"] } />
                    <SkillItem title="Messaging & Communication Protocols" items={ ["MQTT", "RabbitMQ"] } />
                    <SkillItem title="Version Control Systems" items={ ["GitHub"] } />
                    <SkillItem title="Development Tools" items={ ["JIRA", "VS Code", "Sublime Text"] } />
                </div>
                <div>
                    <SkillItem title="Web Technologies & Libraries" items={ ["ReactJS", "NextJS", "JavaScript"] } />
                    <SkillItem title="Databases" items={ ["MySQL", "PostgreSQL", "MongoDB (Mongoose)"] } />
                    <SkillItem title="Caching Solutions" items={ ["Redis", "Memcached"] } />
                    <SkillItem title="AI Code Assistants" items={ ["GitHub Copilot", "WindSurf"] } />
                    <SkillItem title="AI & Machine Learning APIs" items={ ["OpenAI"] } />
                </div>
            </div>
        </motion.div>
    );

    function SkillItem({ title, items }) {
        return (
            <div className="mb-5">
                <div className="font-semibold text-pink-600 mb-1">{ title }</div>
                <ul className="list-disc list-inside text-gray-700 ml-2">
                    { items.map((item, idx) => (
                        <li key={ idx } className="pl-1">{ item }</li>
                    )) }
                </ul>
            </div>
        );
    }
}
