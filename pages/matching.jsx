import React, { useState } from "react";
// import classNames from "classnames";

const cuisines = ["Italian", "Mexican", "Japanese", "Chinese", "Indian"];
const activities = ["Hiking", "Swimming", "Sightseeing", "Museum", "Shopping"];
const paymentOptions = ["Cheap", "Moderate", "Expensive", "Luxury"];

const matching = () => {
    const [formData, setFormData] = useState({
        name: "",
        time: "1",
        activity: "",
        cuisine: "",
        budget: "",
        selectedPayment: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const { name, time, cuisine, activity, budget, selectedPayment } = formData;

    return (
        <form onSubmit={handleSubmit} className="pt-20 pl-10 bg-gray-100">
            <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-bold text-gray-700">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
            </div>

            <div className="mb-4">
                <label htmlFor="time" className="block mb-2 font-bold text-gray-700">
                    Time
                </label>
                <select
                    id="time"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={time}
                    onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                >
                    <option value="1">1 hour</option>
                    <option value="2">2 hours</option>
                    <option value="3">3 hours</option>
                    <option value="4">4 hours</option>
                    <option value="5">5 hours</option>
                    <option value="6">6 hours</option>
                </select>
            </div>
            
            <div className="mb-4">
                <label htmlFor="activity" className="block mb-2 font-bold text-gray-700">
                    Activity
                </label>
                <select
                    id="activity"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={activity}
                    onChange={(e) => setFormData({ ...formData, activity: e.target.value })}
                >
                    <option value="">Select an activity</option>
                    {activities.map((activity) => (
                        <option key={activity} value={activities.indexOf(activity)} />
                    ))}
                </select>
            </div>
            
            {formData["activity"] == 11 ? (
                <div className="mb-4">
                <label htmlFor="cuisine" className="block mb-2 font-bold text-gray-700">
                    Cuisines
                </label>
                <select
                    id="cuisine"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={cuisine}
                    onChange={(e) => setFormData({ ...formData, cuisine: e.target.value })}
                >
                    <option value="">Select a cuisine</option>
                    {cuisines.map((cuisine) => (
                        <option key={cuisine} value={cuisine} />
                    ))}
                </select>
            </div>
            ) : (
                <></>
            )}

            <div className="mb-4">
                <label htmlFor="budget" className="block mb-2 font-bold text-gray-700">
                    Budget
                </label>
                <input
                    type="number"
                    id="budget"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                />
            </div>

        </form>
    )
}

export default matching;