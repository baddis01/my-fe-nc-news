import React, { useEffect, useState } from "react";
import * as api from "../utils/api";

const NavBar = () => {
  const [topic, setTopic] = useState();

  useEffect(() => {
    api.getTopics().then((topic) => {
      setTopic(topic);
    });
  });

  return;
};

export default NavBar;
