import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Observer } from "mobx-react-lite";
import { StoreContext } from "../../../../store";
import "./../assets/css/style.css";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const SearchedMatches = ({ data }) => {
  const store = useContext(StoreContext);
  const navigate = useNavigate();
  const [editFields, setEditFields] = useState(true);
  const [profileData, setProfile] = useState();
  const fieldDisablity = () => {
    setEditFields(!editFields);
  };
  async function profileView(viewed_id) {
    const token = localStorage.getItem("accessToken");
    const user = localStorage.getItem("user");
    const formData = new FormData();
    const viewer_id = JSON.parse(user)["id"];
    formData.append("viewer_id", viewer_id);
    formData.append("viewed_id", viewed_id);
    try {
      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      };
      console.log(formData);
      const response = await axios({
        method: "post",
        url: `${store.url}recent-visit`,
        data: formData,
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      }).then((response) => {
     
        const data = response.data;
        navigate("/public/profile/" + viewed_id);
      });
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    const user = localStorage.getItem("user");
    // setProfile(data)
    // console.log('data=============================>',data);
  }, []);

  return (
    <Observer>
      {() => (
        <>
          <section className="space-ptb">
            <div className="container mt-3">
              <div className="row">
              
           
              </div>
            </div>
          </section>
        </>
      )}
    </Observer>
  );
};

export default SearchedMatches;
