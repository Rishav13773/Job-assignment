import React from 'react'
import { useState, useEffect } from 'react'
import { MdOutlineAddReaction } from 'react-icons/md'
import axios from "axios";


const Hero = () => {
  const [users, setUser] = useState([])

  const fetchData = () => {
    return axios.get("https://dummyjson.com/posts")
      .then((response) => setUser(response.data.posts));
  }

  console.log(users)
  useEffect(() => {
    fetchData();
  }, [])

  return (
    <div className='heroWrap'>
      {
        users.map((ele) => {
          return (
            <div className='cardBody'>
              <div className='cardHeader'>
                <h6 className='tags'>#{ele.tags}</h6>
                <h2>{ele.title}</h2>
                <p>{ele.body}</p>
              </div>

              <div className='cardFooter'>
                <button>Read More</button>
                <div className='rIcon'>
                  <MdOutlineAddReaction />
                  <span>{ele.reactions}</span>
                </div>
              </div> {/*added this div to make the footer align row wise*/}
            </div> //Body of the whole card used as a container to hold all the tags and make responsive
          )
        })
      }

    </div> //this div for the BG color
  )
}

export default Hero