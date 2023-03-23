import React, { useState } from "react";
import matchingresult from "./matchingResults";
import { useRouter } from "next/router";
import NavbarDark from "../components/NavbarDark";
import axios from "axios";
// import classNames from "classnames";

const cuisines = ["Any", "Indian", "Seafood", "italian", "Japanese", "Sushi", "Chinese", "Mexican", "Thai", "French", "Middle Eastern", "Vietnamese", "Hamburger", "Pizza"]
const activities = ["parks", "museums", "galleries", "shopping centers", "theaters", "amusement_parks", "swimming_pools", "sports_clubs", "salons", "cinemas", "bars", "restaurants", "clubs", "cafes"]
const payments = ["$", "$$", "$$$", "$$$$"];

const matching = () => {
    // const router = useRouter()
    const [data,setData]=useState(null)
    const [showResults, setShowResults] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        time: "1",
        cuisine: "",
        activity1: "",
        activity2: "",
        activity3: "",
        budget: 1000,
        payment: "",
    });
    let first5members=[];
    console.log('formdata ', formData)
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        let response = await axios.post("http://127.0.0.1:8000/getMatching", formData);
        setData(response.data)
        setShowResults(true)
        // first5members=response.data.matches.length>5?response.data.matches.slice(0,5):response.data.matches;
        // router.push("http://localhost:3000/matchingResults")
    };

    const { name, time, cuisine, activity1, activity2, activity3, budget, payment } = formData;

    return (
        <>
            <NavbarDark />
            {!showResults ? (<form onSubmit={handleSubmit} className="pt-20 pl-10 bg-gray-100">
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
                <label htmlFor="activity1" className="block mb-2 font-bold text-gray-700">
                    Activities
                </label>
                <select
                    id="activity1"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={activity1}
                    onChange={(e) => setFormData({ ...formData, activity1: e.target.value })}
                >
                    <option value="">Select an activity</option>
                    {activities.map((activity) => (
                        <option key={activity} value={activities.indexOf(activity)} >{activity}</option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="activity2" className="block mb-2 font-bold text-gray-700">
                    Activities
                </label>
                <select
                    id="activity2"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={activity2}
                    onChange={(e) => setFormData({ ...formData, activity2: e.target.value })}
                >
                    <option value="">Select an activity</option>
                    {activities.map((activity) => (
                        <option key={activity} value={activities.indexOf(activity)} >{activity}</option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="activity3" className="block mb-2 font-bold text-gray-700">
                    Activities
                </label>
                <select
                    id="activity3"
                    className="w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                    value={activity3}
                    onChange={(e) => setFormData({ ...formData, activity3: e.target.value })}
                >
                    <option value="">Select an activity</option>
                    {activities.map((activity) => (
                        <option key={activity} value={activities.indexOf(activity)} >{activity}</option>
                    ))}
                </select>
            </div>
            
            {formData["activity1"] == 11 || formData["activity2"] == 11 || formData["activity3"] == 11 ? (
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
            ) : (
                <></>
            )}

            {formData["activity1"] == 10 || formData["activity2"] == 10 || formData["activity3"] == 10 ? (
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

                <div className="mb-4">
                    <input type="submit" className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded"></input>
                </div>
            </form>) : (
                <>
                    <div className="mt-40 w-full">
                        <h1 className="text-center text-5xl mb-4">Results</h1>
                        <h2 className="text-center text-xl">You have been matched with:</h2>
                        <div className="text-center text-2xl">{data["matches"].map((item,index)=>{
                            console.log(item)
                            if(index>5){
                                return(
                                    <></>
                                )
                            }
                            return(
                                <span> {item}, </span>
                            )
                        })}</div>
                        <h2 className="text-center text-xl mt-4">and you should go to:</h2>
                        <div className="text-center text-2xl">{data["recommended"].map((item)=>{
                            return(
                                <span>{item}, </span>
                            )
                        })}</div>
                    </div>
                </>
            )}
        </>
    )
}

export default matching;