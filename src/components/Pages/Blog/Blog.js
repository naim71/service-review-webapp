import React from 'react';

const Blog = () => {
    return (
        <div>
            <p className='md:text-4xl text-center font-medium text-slate-700 mt-16'>Questions & Answers</p>
            <section className="w-3/4 divide-y rounded divide-slate-200 mx-auto my-16">
                
                <details className="p-4 group" open>
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                    1. Difference between SQL and NoSQL
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac01 desc-ac01"
                        >
                            <title id="title-ac01">Open icon</title>
                            <desc id="desc-ac01">
                                icon that represents the state of the summary
                            </desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </summary>
                    <ul className="mt-4 text-slate-500">
                        <li>- SQL pronounced as “S-Q-L” or as “See-Quel” is primarily called RDBMS or Relational Databases, whereas NoSQL is a Non-relational or Distributed Database.</li>
                        <li>- Comparing SQL vs NoSQL databases, SQL databases are table-based databases, whereas NoSQL databases can be document-based, key-value pairs, and graph databases.</li>
                        <li>- SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.</li>
                        <li>- SQL databases have a predefined schema, whereas NoSQL databases use a dynamic schema for unstructured data.</li>
                        <li>- Comparing NoSQL vs SQL performance, SQL requires specialized DB hardware for better performance while NoSQL uses commodity hardware.</li>
                    </ul>
                </details>
                <details className="p-4 group">
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                    2. What is JWT, and how does it work?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac02 desc-ac02"
                        >
                            <title id="title-ac02">Open icon</title>
                            <desc id="desc-ac02">
                                icon that represents the state of the summary
                            </desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </summary>
                    <p className="mt-4 text-slate-500">
                    An open standard for sending data between parties securely as JSON objects is called JSON Web Token (JWT). It is small, readable, and digitally signed by the Identity Provider using a pair of public and private keys (IdP). In essence, the resource server decodes and validates the authenticity of the token using the public key, and the identity provider (IdP) generates a JWT validating user identification.
                    </p>
                </details>
                <details className="p-4 group">
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                    3. What is the difference between javascript and NodeJS?

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac03 desc-ac03"
                        >
                            <title id="title-ac03">Open icon</title>
                            <desc id="desc-ac03">
                                icon that represents the state of the summary
                            </desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </summary>
                    <p className="mt-4 text-slate-500">
                    Building dynamic HTML pages with interactive effects on a website requires the use of JavaScript, a small, object-oriented scripting language. While running in the V8 engine or through the node interpreter, Node.js typically represents a list of objects and methods accessible to JavaScript code.
                    </p>
                </details>
                <details className="p-4 group">
                    <summary className="relative cursor-pointer list-none pr-8 font-medium text-slate-700 transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
                    4. How does NodeJS handle multiple requests at the same time?
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="absolute right-0 w-4 h-4 transition duration-300 top-1 shrink-0 stroke-slate-700 group-open:rotate-45"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            aria-labelledby="title-ac04 desc-ac04"
                        >
                            <title id="title-ac04">Open icon</title>
                            <desc id="desc-ac04">
                                icon that represents the state of the summary
                            </desc>
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 4v16m8-8H4"
                            />
                        </svg>
                    </summary>
                    <p className="mt-4 text-slate-500">
                    Numerous client requests are received by NodeJS, which adds them to EventQueue. The event-driven architecture approach was used in the construction of NodeJS. The EventLoop in NodeJS is an infinite loop that accepts and processes requests.
                    </p>
                </details>
            </section>
        </div>
    );
};

export default Blog;