import React, { useContext } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Divider,
} from "@material-ui/core";
import Form from "./Form/Form";
import List from "./List/List";
import useStyles from "./styles";
import { ExpenseTrackerContext } from "../../context/context";
import InfoCard from "../infoCard";

const Main = () => {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);
  return (
    <Card className={classes.root}>
      <CardHeader title="slice." subheader="Powered by Speechly" />
      <CardContent>
        <Typography align="center" variant="h5">
          Total Balance ${balance}
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ lineHeight: "1.5em", marginTop: "20px" }}
        >
          <InfoCard />
        </Typography>
        <Divider />
        <Form />
      </CardContent>
      <CardContent className={classes.CardContent}>
        <Grid item xs={12}>
          <List />
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Main;
