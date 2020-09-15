import React, { useState } from "react";
import { Typography, Grid, Button, Paper, Input, Slider } from "@material-ui/core";
import "./App.css";

function App() {
  const [dir, setDir] = useState("column");

  const toggle = () => {
    if (dir === "column") {
      return setDir("row");
    }

    return setDir("column");
  };

  return (
    <div className="App">
      <Typography variant="h2">Hello Material UI</Typography>

      <Button onClick={toggle} color="primary" variant="contained">
        Toggle Appearance
      </Button>

      <Grid direction={dir} container spacing={3} justify="center" alignItems="center">
        <Grid item>
          <Paper variant="elevation">foo</Paper>
        </Grid>

        <Grid item>
          <Paper variant="elevation">bar</Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
