import React from "react";
import { notification } from "antd";
import { SmileOutlined } from "@ant-design/icons";
import { wishDateMaker } from "../helpers/dateHelpers";

const BirthdayNotification = (user) => {
  notification.open({
    message: "Happy Birth Day",
    description:
      "May your birthday be the start of a year filled with good luck, good health and much happiness.",
    icon: <SmileOutlined style={{ color: "#108ee9" }} />,
    onClose: () => {
      const nextDate = wishDateMaker(new Date(), "next");
      let allUser = localStorage.getItem("All_User");
      allUser = JSON.parse(allUser);
      const updatedUserList = allUser.map((data) => {
        if (data.email === user.email) {
          data.nextWishDate = nextDate;
          return data;
        } else {
          return data;
        }
      });
      console.log("nextDate", nextDate);

      let values_serialized = JSON.stringify(updatedUserList);
      localStorage.setItem("All_User", values_serialized);
    },
  });
};

export default BirthdayNotification;
