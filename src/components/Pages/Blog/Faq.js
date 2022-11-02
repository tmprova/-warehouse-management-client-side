import { useState } from "react";

const Item = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b">
      <button
        type="button"
        aria-label="Open item"
        title="Open item"
        className="flex items-center justify-between w-full p-4 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-lg font-medium">{title}</p>
        <svg
          viewBox="0 0 24 24"
          className={`w-3 text-gray-600 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <polyline
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeMiterlimit="10"
            points="2,7 12,17 22,7"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="p-4 pt-0">
          <p className="text-gray-700">{children}</p>
        </div>
      )}
    </div>
  );
};

export const Faq = () => {
  return (
    <div class="px-4 py-16 mx-auto sm:max-w-md md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <div class="max-w-xl sm:mx-auto lg:max-w-2xl">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p class="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              <lottie-player
                src="https://assets7.lottiefiles.com/private_files/lf30_hxryccqj.json"
                background="transparent"
                speed="1"
                style={{ width: "130px", height: "80px" }}
                loop
                autoplay
              ></lottie-player>
            </p>
          </div>
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span class="relative inline-block">
              <span class="relative">The</span>
            </span>{" "}
            Questions given in task description
          </h2>
          <p class="text-base text-gray-700  md:text-lg ">is answered below</p>
        </div>
        <div class="space-y-4">
          <Item title="Difference between javascript and nodejs">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 rounded-full bg-teal-accent-400">
              JavaScript is a client-side scripting language that is
              lightweight, cross-platform, and interpreted. Both Java and HTML
              include it. Node.js, on the other hand, is a V8-based server-side
              programming language. JavaScript is a simple programming language
              that can be used with any browser that has the JavaScript Engine
              installed. Node.js, on the other hand, is an interpreter or
              execution environment for the JavaScript programming language. Any
              engine may run JavaScript. As a result, writing JavaScript is
              incredibly easy, and any working environment is similar to a
              complete browser. Node.js, on the other hand, only enables the V8
              engine.
            </p>
          </Item>
          <Item title="When should you use nodejs and when should you use mongodb">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 rounded-full bg-teal-accent-400">
              Nodejs is a Javascript engine that one can write any application
              he/she want with (by programming in the Javascript language).It
              runs on Javascript code.MongoDB is a database engine. Coded within
              some application or server uses MongoDB to save, query or update
              data in a database.The summary is MongoDB is a database where
              developers can store data and NodeJS helps them to connect their
              client site to database by it's server site.
            </p>
          </Item>
          <Item title=" Differences between sql and nosql databases.">
            <div className="grid grid-cols-1 gap-8 row-gap-4 lg:grid-cols-2 sm:grid-cols-2 px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 rounded-full bg-teal-accent-400">
              <div>
                <p className="font-bold text-lg">SQL</p>
                <p>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS).</p>
                <p>
                  These databases have fixed or static or predefined schema.
                </p>
                <p>
                  These databases are not suited for hierarchical data storage.
                </p>
                <p>These databases are best suited for complex queries.</p>
                <p>Vertically Scalable.</p>
              </div>
              <div>
                <p className="font-bold text-lg">NoSQL</p>
                <p>Non-relational or distributed database system.</p>
                <p>They have dynamic schema.</p>
                <p>
                  These databases are best suited for hierarchical data storage.
                </p>
                <p>These databases are not so good for complex queries.</p>
                <p>Horizontally scalable.</p>
              </div>
            </div>
          </Item>
          <Item title="What is the purpose of jwt and how does it work">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 rounded-full bg-teal-accent-400">
              JWT, or JSON Web Token, is an open standard used to share security
              information between two parties — a client and a server. Each JWT
              contains encoded JSON objects, including a set of claims. JWTs are
              signed using a cryptographic algorithm to ensure that the claims
              cannot be altered after the token is issued. JWTs differ from
              other web tokens in that they contain a set of claims. Claims are
              used to transmit information between two parties. What these
              claims are depends on the use case at hand. For example, a claim
              may assert who issued the token, how long it is valid for, or what
              permissions the client has been granted.A JWT is a string made up
              of three parts, separated by dots (.), and serialized using
              base64. In the most common serialization format, compact
              serialization, the JWT looks something like this:
              xxxxx.yyyyy.zzzzz.
            </p>
          </Item>
        </div>
      </div>
    </div>
  );
};
