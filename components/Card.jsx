import React from 'react'

function Card(props) {
    return (
        <div class="flex flex-col rounded-lg bg-white shadow-lg dark:bg-neutral-700 md:max-w-l md:flex-row">
        <img
          class="h-66 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src="https://i.ibb.co/qgW54Cv/FM7-8632-vert.jpg"
          alt=""
        />
        <div class="flex flex-col justify-start p-6">
          <h5 class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
            {props.name}
          </h5>
          <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            
          </p>{" "}
          <br></br> <br></br>
          <p class="text-xs text-neutral-500 dark:text-neutral-300">
            Rating: {props.rating} stars
          </p>
        </div>
      </div>
    )
}

export default Card