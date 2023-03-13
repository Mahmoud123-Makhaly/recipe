import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Details.css";
const Details = () => {
  const [Active, setActive] = useState(true);
  const params = useParams();

  const [details, setDetails] = useState([]);
  const getDetails = async () => {
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=adca3df82aab4a66bbb744c2c16dba9a`
    );
    const data = await api.json();
    setDetails(data);
  };
  useEffect(() => {
    getDetails();
  }, [params.id]);
  console.log("details", details);
  return (
    <div className="details">
      <div className="row ">
        <div className="col-md-5">
          <div className="card mb-5 mb-lg-3">
            <img src={details.image} />
          </div>
        </div>
        <div className=" col-md-7">
          <div className="details-btns text-center mt-5">
            <button
              className={Active === true ? "activ" : ""}
              onClick={() => {
                setActive(true);
              }}
            >
              Instructios
            </button>
            <button
              className={Active === false ? "activ" : ""}
              onClick={() => {
                setActive(false);
              }}
            >
              Ingredients
            </button>
          </div>

          {Active === true ? (
         <div>
              <p
                style={{ textAlign: "left", marginTop: "20px" }}
                dangerouslySetInnerHTML={{ __html: details.summary }}
              ></p>
              <p
                style={{ textAlign: "left", marginTop: "20px" }}
                dangerouslySetInnerHTML={{ __html: details.instructions }}
              ></p>
              </div>
          ) : (
            <ul className="list-unstyled">
              {details.extendedIngredients.map((item) => {
                return (
                  <li>
                    ({item.id}) {item.aisle}
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Details;
