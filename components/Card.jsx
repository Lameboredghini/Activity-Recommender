import React from 'react'

function Card(props) {
    return (
        <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden p-3 m-2">
            <div className="sm:flex sm:items-center px-6 py-4">
                {/* <img className="block mx-auto sm:mx-0 sm:flex-shrink-0 h-16 sm:h-24 rounded-full" src={props.image} alt="Profile picture"/> */}
                    <div className="mt-4 sm:mt-0 sm:ml-4 text-center sm:text-left">
                        <p className="text-xl leading-tight">{props.name}</p>
                        <p className="text-sm leading-tight text-gray-600">{props.rating} stars </p>
                    </div>
            </div>
        </div>

    )
}

export default Card