import React from "react"
import {
  FaFacebookSquare,
  FaLinkedin,
  FaRegEnvelope,
  FaTwitterSquare,
} from "react-icons/fa"

const data = [
  {
    id: 1,
    icon: <FaFacebookSquare className="social-icon"></FaFacebookSquare>,
    url: "https://www.facebook.com/Art-Out-102873792103901",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.twitter.com",
  },
  {
    id: 3,
    icon: <FaTwitterSquare className="social-icon"></FaTwitterSquare>,
    url: "https://www.twitter.com",
  },
  {
    id: 4,
    icon: <FaRegEnvelope className="social-icon"></FaRegEnvelope>,
    url: `/contact`,
  },
]

export default data
