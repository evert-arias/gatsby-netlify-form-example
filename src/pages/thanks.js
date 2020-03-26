import React from "react"
import Layout from "../components/layout"
import { makeStyles } from "@material-ui/core/styles"
import { Alert, AlertTitle } from "@material-ui/lab"


const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}))

const Thanks = () => {
  const classes = useStyles()
  return (
    <Layout>
      <div className={classes.root}>
        <Alert severity="success">
          <AlertTitle>Success</AlertTitle>
          Your info has been submitted!
        </Alert>
      </div>
    </Layout>
  )
}

export default Thanks
