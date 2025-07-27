import React from 'react'

function Card({username,btnText}) {
  console.log("props",username);
  return (
    <a className="p-8 max-w-lg border border-indigo-300 rounded-2xl hover:shadow-xl hover:shadow-indigo-50 flex flex-col items-center"
    href="#">
    <img src="https://images.pexels.com/photos/32934635/pexels-photo-32934635.jpeg" className="shadow rounded-lg overflow-hidden border" />
    <div className="mt-8">
        <h4 className="font-bold text-xl">{username}</h4>
        <p className="mt-2 text-gray-600">Create Exercises for any subject with the topics you and your students care about.
        </p>
        <div className="mt-5">
            <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-gray-800 px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-gray-900">{btnText}</button>
        </div>
    </div>
</a>
  )
}

export default Card