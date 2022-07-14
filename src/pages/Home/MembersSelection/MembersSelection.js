import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./MembersSelection.scss";

const MembersSelection = () => {
  return (
    <section className="membersSelectionSection">
      <div className="membersSelectionContainer">
        {/* Text Content */}
        <div className="textContent">
          <div className="sectionHeaderText">
            <span className="icon">
              <FontAwesomeIcon icon={faUser} />
            </span>
            MEMBER'S SELECTION
          </div>
          <h1>
            A peek into <br /> Scandinavia's origin
          </h1>
          <p>
            Scandinavia and Scandinavian entered usage in the late 18th century,
            being introduced by the early linguistic and cultural Scandinavist
            movement.
          </p>
          <div className="authorInfo">
            <img
              src="https://heimdall.xaes.dev/content/images/2021/12/6483010.jpeg"
              alt=""
            />
            <div className="authorName">
              <span>by</span>
              <p>Diego Balmaceda</p>
            </div>
          </div>
        </div>
        {/* IMG */}
        <img
          src="https://images.unsplash.com/photo-1521336575822-6da63fb45455?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMTc3M3wwfDF8c2VhcmNofDEzfHxub3J3YXl8ZW58MHx8fHwxNjM4NjM1ODUx&ixlib=rb-1.2.1&q=80&w=2000"
          alt=""
        />
      </div>
    </section>
  );
};

export default MembersSelection;
