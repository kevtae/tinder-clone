import React, { useState, useEffect } from "react";
import database from "../firebase/firebase-config";
import TinderCard from "react-tinder-card";

import "./tinderCard.css";

const TinderCards = () => {
  const [people, setPeople] = useState([]);

  //piece of code which runs based on a condition - removes all of the lifecycle method
  useEffect(() => {
    //this will run once when the component loads, and never again
    const unsubscribe = database
      .collection("people")
      .onSnapshot((snapshot) =>
        setPeople(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      unsubscribe();
    };
  }, [people]);

  return (
    <div>
      <h1>Tinder cards</h1>

      <div className="tindercards__cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
          >
            <div
              style={{ backgroundImage: `url(${person.url})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default TinderCards;
