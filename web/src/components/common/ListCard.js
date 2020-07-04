import React from "react";
import PropTypes from "prop-types";
import { Card, CardHeader, CardBody } from "shards-react";

const ListCard = ({ listTitle, listTitleIcon, ListItem, listArrayOfItems }) => {
  return (
    <Card small className="blog-comments">
      <CardHeader className="border-bottom">
        <h6 className="m-0">
          {listTitle} {listTitleIcon}
        </h6>
      </CardHeader>
      <CardBody className="p-0 my-2 mx-2">
        {listArrayOfItems.map((item, idx) => (
          <ListItem itemProps={item} key={idx} />
        ))}
      </CardBody>
    </Card>
  );
};

ListCard.propTypes = {
  listTitle: PropTypes.string,
  listTitleIcon: PropTypes.element,
  ListItem: PropTypes.element,
  listArrayOfItems: PropTypes.array,
};

ListCard.defaultProps = {
  listTitle: "Titulo",
  listTitleIcon: null,
};

export default ListCard;
