/*
 * HomeScreen Messages
 *
 * This contains all the text for the HomeScreen
 */

import { defineMessages } from "react-intl";

export const scope = "app.screens.HomeScreen";

export default defineMessages({
  title: {
    id: `${scope}.title`,
    defaultMessage: "Home Screen",
  },
  description: {
    id: `${scope}.description`,
    defaultMessage: "This is the basic starter project for react",
  },
 
});
