import React from "react"

const Button = ({ content }) => {
  return (
    <div
      className={`bg-turbo-yellow-500 hover:shadow-lg shadow-turbo-yellow-500 hover:ring-turbo-yellow-500 hover:ring-offset-2 hover:ring-2 rounded-md font-semibold p-2 animate`}
    >
      {content}
    </div>
  )
}

export default Button
