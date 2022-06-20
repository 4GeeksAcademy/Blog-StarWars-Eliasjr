import React, { useState, useEffect, useContext } from "react";
import propTypes from "prop-types";
import "../../styles/home.css";
import Card from "../views/cardCharacter";
import CardPlanets from "../views/cardPlanets";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";
import luke from "../../img/luke.jpg"
import "../../styles/index.css";

export const Character = () => {
  const[people, setPeople] = useState([""]);
  const[name, setName] = useState([""]);
  const[birth, setBirth] = useState([""]);
  const[gender, setGender] = useState([""]);
  const[height, setHeight] = useState([""]);
  const[skin, setSkin] = useState([""]);
  const[eye, setEye] = useState([""]);


  function People() {

    console.log("loading");
    fetch("https://www.swapi.tech/api/people/1", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
	.then(response => {
		var contentType = response.headers.get("content-type");
		if(contentType && contentType.includes("application/json")) {
		  return response.json();
		}
		throw new TypeError("Sorry, There's no JSON here!");
	  })
	.then((data) => {
	  console.log(data.result.properties.name);
	  
	  setPeople(data.result.properties);
	  console.log(people)
    setName(data.result.properties.name)
    setBirth(data.result.properties.birth_year)
    setGender(data.result.properties.gender)
    setHeight(data.result.properties.height)
    setSkin(data.result.properties.skin_color)
    setEye(data.result.properties.eye_color)
        //this.setState({ totalReactPackages: data.total })
      });
  }

  useEffect(() => {
	console.log(process.env.BACKEND_URL);
	People();
  }, []);

  function showCharacter() {
	console.log(people)
	console.log(people.name)
	if (people == '') { 
    return (
  
      <div className="container flex text-center">
      <h1>LOADING PAGE</h1>
      <img className="w-100 p-3" src="https://payload.cargocollective.com/1/4/144792/10818195/vaderlukeREVISE.gif"/>
      </div>);
    
  } else {
	return (
  
<div className="container flex">
<div className="row g-4">
   <div className="col-md-6">
      <img className="w-100 p-3" src="https://i.pinimg.com/564x/09/a8/5a/09a85a7ab3e13c880159b1e12029381b.jpg"/>
    </div>

    <div className="col-md-6">
      <h5 className="card-title">{name} </h5>
      <p className="card-text">{name} is a character of Star Wars with {skin} skin color and {eye} eyesi</p>
      
      <p>Loremo ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur porttitor massa, vitae condimentum turpis ornare a. Praesent nec quam at elit semper malesuada. Aliquam ullamcorper orci id orci imperdiet placerat. Curabitur efficitur semper enim, ornare commodo libero sodales eget. Sed ullamcorper diam eros, id egestas enim congue sed. Morbi elementum nisi non dapibus dictum. Integer eget hendrerit dolor, eget pulvinar nisi.</p>

      <p>Aliquam semper nec tortor id finibus. Fusce rhoncus, turpis nec dictum imperdiet, est neque molestie enim, ut auctor nulla lorem a dolor. Aliquam mollis semper mi non congue. Sed laoreet, tellus ut accumsan laoreet, leo lorem molestie elit, non posuere justo massa posuere orci. Morbi tempus enim at porta vulputate. Suspendisse non lacus eu mauris malesuada bibendum ac id nisl. Aenean ullamcorper hendrerit velit, a tempus mauris iaculis non.</p>
     </div>           

          <div><hr className="redBar"/></div>
          <div className="d-flex bd-highlight red">
  <div className="p-2 flex-fill bd-highlight">
    <p><strong>Name</strong></p>
    <p>{name}</p></div>
  <div className="p-2 flex-fill bd-highlight">
    <p><strong>Birth Year</strong></p>
    <p>{birth}</p></div>
  <div className="p-2 flex-fill bd-highlight">
    <p><strong>Gender</strong></p>
    <p>{gender}</p></div>
  <div className="p-2 flex-fill bd-highlight">
    <p><strong>Height</strong></p>
    <p>{height}</p></div>
  <div className="p-2 flex-fill bd-highlight">
    <p><strong>Skin Color</strong></p>
  <p>{skin}</p></div>
  <div className="p-2 flex-fill bd-highlight">
    <p><strong>Eye Color</strong></p>
  <p>{eye}</p></div>
  </div>
  </div>
    </div>);
  }
  }
    return(
        <div className="container">
              {showCharacter()}
        </div>
    );
};

