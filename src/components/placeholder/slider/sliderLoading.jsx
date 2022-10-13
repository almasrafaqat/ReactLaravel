import React, { Fragment } from "react";
import Skeleton from "react-loading-skeleton";

const SliderLoading = () => {
  return (
    <Fragment>
      <div>
        <Skeleton height="60vh" />
      </div>
    </Fragment>
  );
};

export default SliderLoading;
