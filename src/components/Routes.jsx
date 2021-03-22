import React from "react";
import { Switch, Route } from "react-router-dom";
import NeoNasaView from "./pages/NeoNasaView";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={NeoNasaView} />
    </Switch>
  );
}
