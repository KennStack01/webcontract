import React from "react"

const Button = ({ content }) => {
  return (
    <div className={`bg-turbo-yellow-500 rounded-md font-bold p-2`}>
      {content}
    </div>
  )
}

export default Button
