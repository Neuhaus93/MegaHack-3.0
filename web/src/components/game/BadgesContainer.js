import React from "react";
import { Card, CardHeader, CardBody } from "shards-react";

import BadgeInProgress from "./BadgeInProgress";

import badgesInProgress from "../../data/badges-in-progress";

const BadgesContainer = () => {
  return (
    <Card small className="blog-comments">
      <CardHeader className="border-bottom">
        <h6 className="m-0">Badges em Progresso</h6>
      </CardHeader>
      <CardBody className="p-0 my-2 mx-2">
        {badgesInProgress.map((badgesInProgress, idx) => (
          <BadgeInProgress badgeProps={badgesInProgress} key={idx} />
        ))}

        {/* <BadgeInProgress /> */}
      </CardBody>
    </Card>
  );
};

export default BadgesContainer;
