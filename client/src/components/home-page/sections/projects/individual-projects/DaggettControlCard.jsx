import { Link } from "react-router-dom"

import MockupImage from "../../../../../assets/png/project-mockup-masked/project-mockup-masked.png"


export default function DaggettControlCard() {



  return (
    <div className="projects__row">
      <div className="projects__row-img-cont">
        <img
          src={MockupImage}
          alt="Software Screenshot"
          className="projects__row-img"
          loading="lazy"
        />
      </div>
      <div className="projects__row-content">
        <h3 className="projects__row-content-title">Daggett Control Company Website</h3>
        <p className="projects__row-content-desc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          facilis tempora, explicabo quae quod deserunt eius sapiente
          praesentium.
        </p>
        <Link 
          to="/daggett-control"
          className="btn btn--med btn--theme dynamicBgClr"
          target="_blank"
        >Case Study</Link>
      </div>
    </div>
  )
}