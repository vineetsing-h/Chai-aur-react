import React from 'react';

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:w-5/12 lg:w-5/12">
            <img
              src="https://images.pexels.com/photos/4022083/pexels-photo-4022083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Fresh Produce Delivery"
            />
          </div>
          <div className="md:w-7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Freshness Delivered to Your Doorstep
            </h2>
            <p className="mt-6 text-gray-600">
              At Deego, we are dedicated to bringing the freshest fruits and vegetables directly from local farms to your home. Our mission is to provide you with high-quality, farm-fresh produce that supports healthy living and sustainable farming practices.
            </p>
            <p className="mt-4 text-gray-600">
              Experience the convenience of online ordering with our user-friendly platform. Choose from a wide variety of seasonal produce, customize your box to suit your preferences, and enjoy timely deliveries that fit your schedule.
            </p>
            <a
              href="https://deego.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 text-blue-600 hover:underline"
            >
              Learn more about Deego
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
