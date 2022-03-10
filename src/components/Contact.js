import React from "react"
import Button from "./Buttons/Button"

const Contact = () => {
  return (
    <div className="">
      <form
        action="https://formsubmit.co/747dc9e76769e944cd50d47db53ec514"
        method="POST"
      >
        <div className="flex flex-col justify-between text-left overflow-hidden">
          <div className="px-4 py-5 sm:p-6">
            <div className="flex flex-col">
              <input
                type="hidden"
                name="_subject"
                value="WebContract Deal 💙"
              />
              <input
                type="hidden"
                name="_next"
                value="https://www.webcontract.io/thankyou"
              />
              <div className="flex flex-col md:flex-row justify-between">
                <div className="my-2 md:my-auto mx-2 md:w-1/2">
                  <label
                    htmlFor="Name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="Name"
                    id="Name"
                    autoComplete="given-name"
                    placeholder="What's your name?"
                    required
                    className="mt-1 p-2 focus:ring-turbo-yellow-500 focus:border-turbo-yellow-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm"
                  />
                </div>

                <div className="my-2 md:my-auto mx-2 md:w-1/2">
                  <label
                    htmlFor="Email address"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Email address
                  </label>
                  <input
                    type="email"
                    name="Email address"
                    id="Email address"
                    autoComplete="email"
                    placeholder="Please enter a valid email address"
                    required
                    className="mt-1 p-2 focus:ring-turbo-yellow-500 focus:border-turbo-yellow-500 block w-full shadow-sm sm:text-sm border-turbo-yellow-300 rounded-sm"
                  />
                </div>
              </div>

              <div className="mt-8 mx-2 w-full">
                <label
                  htmlFor="Message"
                  className="block text-sm font-medium text-gray-700"
                >
                  How can I help you?
                </label>
                <div className="mt-1">
                  <textarea
                    id="Message"
                    name="Message"
                    rows={6}
                    className="shadow-sm w-full mt-1 p-2 block sm:text-sm rounded-sm"
                    placeholder="Please describe your request. Contacting for a Landing Page, E-commerce shop, Marketing Website, Blogging Website? "
                    defaultValue={""}
                    required
                  />
                </div>
                <p className="mt-1 text-xs italic text-gray-300">
                  Brief Message for your request*
                </p>
              </div>
            </div>
          </div>
          <div className="my-3 mx-auto ">
            <button type="submit" className="inline-flex justify-center">
              <Button content={`Send Message`} />
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Contact
