import React from "react";
import NavbarDark from "../components/NavbarDark";

const data = {
  matches: [
    "Quinn",
    "Emily",
    "Zoe",
    "Ella",
    "David",
    "Frank",
    "Madison",
    "Kaitlyn",
    "Xavier",
    "William",
    "Nathan",
    "Sophia",
    "Thomas",
    "Isaac",
    "Wyatt",
    "Riley",
    "Avery",
    "Hannah",
    "Alice",
    "Violet",
    "Bob",
    "Samuel",
    "Penelope",
    "Liam",
    "Mia",
    "Xander",
    "Landon",
    "Benjamin",
    "Grace",
    "Harry",
    "Uriel",
    "Olivia",
    "Gabriel",
    "Rose",
    "Isabella",
    "Piper",
    "Noah",
    "Caleb",
    "Ursula",
    "Yara",
    "Faith",
    "Quentin",
    "Dylan",
    "Victoria",
    "Owen",
    "Tessa",
    "Charlie",
    "Karen",
    "Jack",
    "Jacob",
  ],
  recommended: "Bar le Lab",
};

function matchingresult() {
  let peoplematched = data["matches"];
  if (data["matches"].length > 5) {
    peoplematched = data["matches"].slice(0, 5);
  }
  console.log("peoplematched", peoplematched);
  return (
    <>
      <div>
        <NavbarDark />
        <div className="mt-40 w-full">
          <h1 className="text-center text-5xl mb-4">Results</h1>
          <h2 className="text-center text-xl">You have been matched with:</h2>
          <div className="text-center text-2xl">{peoplematched.map((person) => (
            <option key={person} value={peoplematched.indexOf(person)}>
              {person}
            </option>
          ))}</div>
          <h2 className="text-center text-xl mt-4">and you should go to:</h2>
          <div className="text-center text-2xl">{data["recommended"]}</div>
        </div>
      </div>
    </>
  );
}

export default matchingresult;
