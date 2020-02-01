import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="mt-0 border border-blue-800 py-0 w-full h-full" >
      <header className="flex md:justify-between p-8">
          <div className="flex align-items-center">
              <svg className="sm:w-12 w-10 inline mr-3" fill="#00c9db" version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 586.5 586.5" ><polygon points="471.75,89.25 369.75,89.25 168.3,410.55 102,293.25 216.75,89.25 114.75,89.25 0,293.25 114.75,497.25 216.75,497.25 418.2,175.95 484.5,293.25 369.75,497.25 471.75,497.25 586.5,293.25"/></svg>
              <h1 className="inline sm:text-3xl text-2xl font-bold"><a href="/">Cryptocurrency Chart</a></h1>
          </div>
          <div className="lg:flex md:text-white hidden">
              <ul className="align-items-center pt-2">
                  <li className="ml-4 p4"><a href="">Home</a></li>
              </ul>
          </div>
      </header>
      <section className="px-2 lg:px-0 mt-16 sm:mt-32 flex w-full container mx-auto pb-16">
        <div className="w-full flex justify-center md:justify-start text-center md:text-left">
          <div className="md:w-1/2 w-full">
            {children}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Layout;