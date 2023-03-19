import React, { useState } from "react";
// import classNames from "classnames";

const cuisines = ["Italian", "Mexican", "Japanese", "Chinese", "Indian"];
const activities = ["Hiking", "Swimming", "Sightseeing", "Museum", "Shopping"];
const payments = ["$","$$","$$$","$$$$"];

const matching = () => {
    const [formData, setFormData] = useState({
        name: "",
        time: "1",
        cuisine: "",
        activity: 1,
        budget: 1000,
        payment: "",
    });
    console.log('formdata ',formData)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleActivitiesChange = (e) => {
        const { value } = e.target;
        setFormData((prevFormData) => {
            const { selectedActivities: prevSelectedActivities } = prevFormData;
            if (prevSelectedActivities.includes(value)) {
                return {
                    ...prevFormData,
                    selectedActivities: prevSelectedActivities.filter((selected) => selected !== value),
                };
            }
            return {
                ...prevFormData,
                selectedActivities: [...prevSelectedActivities, value],
            };
        });
    };

    const { name, time, cuisine, activity, budget, payment } = formData;

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
                        <option key={cuisine} value={cuisine} >{cuisine}</option>
                    ))}
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="payment" className="block mb-2 font-bold text-gray-700">
                    Payment
                </label>
                <select
                    id="payment"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={payment}
                    onChange={(e) => {setFormData({ ...formData, payment: e.target.value })}}
                >
                    <option value="">Select your payment limit</option>
                    {payments.map((level) => {
                        console.log(level)
                        return(
                        <option key={level} value={level} >{level}</option>    
                    )})}
                </select>
            </div>
        </form>
    )
}

export default matching;