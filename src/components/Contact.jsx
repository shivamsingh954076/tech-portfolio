import React, { useState, state, setState } from "react";
import axios from "axios"



const Contact = () => {
  const [data, setData] = useState({
    "fname": "", "lname": "", "email": "", "phone": "", "budget": 0, "description": ""
  })
  const onChangeHandler = (e) => {
    let { name, value } = e.target;
    setData({ ...data, [name]: value });
  };


  const handleSubmit = (e) => {
    e.preventDefault();
console.log(data)

    if (!data.fname) {
      console.log('fname')
    }

    else if (!data.lname) {
      console.log('lname')
    }
    else if (!data.email) {
      console.log('enter email')
    }
    else if (!data.phone) {
      console.log('enter phone')
    }
    else if (!data.lname) {
      console.log('enter budget')

    } else if (!data.description) {
      console.log('enter description')
    }


    else {
      axios.post('http://techeruditedev.xyz:3253/api/contact/send', data)
        .then(res => {
          console.log(res.data)
          console.log("Submit Succeessfully")
          setData({
            "fname": "", "lname": "", "email": "", "phone": "", "budget": 0, "description": ""
          })
        })
        .catch(err => {
          console.log(err)
        })
    }
  };

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">

          <p className="mb-8 lg:mb-2 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
            Get in Touch
          </p>
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Contact Us
          </h2>
          <form action="#" className="space-y-8">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label
                  for="name"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  First Name
                </label>
                <input
                  name="fname"
                  type="text"
                  id="1"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Name*"
                  onChange={onChangeHandler}
                  value={data.fname}
                  required

                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Last Name
                </label>
                <input
                  name="lname"
                  type="text"
                  id="2"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Last Name*"
                  onChange={onChangeHandler}
                  value={data.lname}
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Email*
                </label>
                <input
                  name="email"
                  type="email"
                  id="3"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="email*"
                  onChange={onChangeHandler}
                  value={data.email}
                  required
                />
              </div>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Phone*
                </label>
                <input
                  name="phone"
                  type="number"
                  id="4"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="phone*"
                  onChange={onChangeHandler}
                  value={data.phone}
                  required
                />
              </div>
            </div>

            <div>
              <label
                for="subject"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Budget*
              </label>
              <input
                name="budget"
                type="number"
                id="5"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="budget*"
                onChange={onChangeHandler}
                value={data.budget}
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="6"
                rows="6"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Your Message*" name="description" onChange={onChangeHandler} value={data.description}
              ></textarea>
            </div>

            <div className="w-full flex justify-center">
              <button type="button" onClick={handleSubmit} className="text-white bg-purple-700 hover:bg-orange-800 focus:outline-none focus:ring-4 focus:ring-orange-300 font-medium rounded-full text-sm px-5 py-2.5 text-center mb-2 dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-purple-900">Submit</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
