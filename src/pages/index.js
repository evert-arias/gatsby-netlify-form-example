import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ContactForm from "../components/ContactForm";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ContactForm/>
  </Layout>
)

export default IndexPage
