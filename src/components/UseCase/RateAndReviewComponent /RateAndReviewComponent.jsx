import React, { useState } from "react";
import RatingComponent from "./../../Base/RatingComponent";
import IconButtonComponent from "../../Base/IconButton";
import StackComponent from "../../Base/StackComponent";
import MultiLineTextAreaComponent from "../../Base/MultiLineTextAreaComponent";
import ButtonComponent from "../../Base/ButtonComponent";
import { useLocation, useNavigate } from "react-router";
import { rateAndReview } from "../../../services";
import { ERROR, SUCCESS } from "../../../config/constants";
import { useNotification } from "../../../hooks";

const RateAndReviewComponent = ({ job_id }) => {
  const navigate = useNavigate();

  const { showNotification } = useNotification();
  const [rating, setRating] = useState(3);
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);
  return (
    <StackComponent direction="column">
      <RatingComponent
        sx={{ alignSelf: "center", mb: "42px" }}
        value={rating}
        onChange={(e) => setRating(e)}
      />
      <MultiLineTextAreaComponent
        value={review}
        label="Your Review"
        placeholder="Your Review About Customer"
        containerStyles={{ marginBottom: "26px" }}
        onChange={(e) => setReview(e)}
      />
      <ButtonComponent
        disabled={loading}
        onClick={(e) => {
          e.preventDefault();
          setLoading(true);
          rateAndReview(job_id, { rating, review })
            .then((res) => {
              if (res.error) {
                return showNotification("Some error occured", ERROR);
              }
              showNotification("Rated Successfully!", SUCCESS);
              navigate("/completed-jobs");
            })
            .catch((err) => {
              console.error(err.message);
              return showNotification("Some error occured", ERROR);
            })
            .finally(() => {
              setLoading(false);
            });
        }}
        styleOverrides={{ alignSelf: "flex-end" }}
      >
        Submit
      </ButtonComponent>
    </StackComponent>
  );
};

export default RateAndReviewComponent;
