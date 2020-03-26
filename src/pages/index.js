import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ContactForm from "../components/ContactForm"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}))

const IndexPage = () => {
  const classes = useStyles();
  return (
    <Layout>
    <SEO title="Home" />
    <div className={classes.root}>
      {" "}
      <ContactForm />
    </div>
  </Layout>
  )
}

export default IndexPage
