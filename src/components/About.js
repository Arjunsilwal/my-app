import React, {useState} from 'react'
import "../App.css";
import Footer from './Footer'
import Header from './Header'
import useData from '../services/useData'
import { Link } from "react-router-dom";


function About() {

    const {data} = useData(null);
    const [user, setUser] = useState()

    function renderUser(p) {
      if(p){
        return (
          <div key={p.id} className="user">
            <Link to={`/${p.id}`}>
              <h3>{p.name}</h3>
              <p>${p.username}</p>
            </Link>
          </div>
        );
      }
      }

      const filteredUser = user
      ? data.filter((p) => p.id === parseInt(user))
      : data;

      
    return (
        <div>
            <Header />
            <div>
              <h3>This page shows how to display the fetched data from API</h3>
              <p>More On hooks</p>
            <section id="filters">
              <label htmlFor="user">Filter by User:</label>{" "}
              <select
                id="user"
                value={user}
                onChange={(e) => setUser(e.target.value)}
              >
              <option value="">Select Id</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
               </select>

            </section>
            <section>{filteredUser && filteredUser.map(renderUser)}</section>

            </div>
            <Footer />
        </div>
    )
}

export default About
