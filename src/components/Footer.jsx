import React from 'react';

const Footer = () => {
  return (
    <footer className=" pt-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between p-4">
        <div className="mb-6 md:mb-0">
          <h3 className="text-2xl font-semibold mb-4">Subscribe To Our Meal Share</h3>
         <p className="text-sm" style={{ opacity: 0.5 }}>
  If you cannot feed a hundred people, then feed just one.
</p>

        </div>
        <div className="flex items-center">
          <input
            type="email"
            placeholder="Enter email address"
            className="border border-gray-700 rounded-full px-4 py-2 mr-4"
          />
          <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-full">
            Get Listed
          </button>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 bg-gray-800 text-white pt-8 pb-16">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
          </div>
          <div className="mb-6 md:mb-0 ">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="list-none text-sm ">
              <li className="mb-3"><a href="#" className="hover:text-gray-300">Home</a></li>
              <li className="mb-4"><a href="#" className="hover:text-gray-300">Donate Food</a></li>
              <li className="mb-4"><a href="#" className="hover:text-gray-300">Request Food</a></li>
              <li className="mb-4"><a href="#" className="hover:text-gray-300">How It Works</a></li>
              <li className="mb-4"><a href="#" className="hover:text-gray-300">Contact Us</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <p className="mb-4 text-sm">Email: Support@fds.com</p>
            <p className='mb-4 text-sm'>Phone: +1234567890</p>
            <p>Address: 123 Food St.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;