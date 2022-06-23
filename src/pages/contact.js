import * as React from "react"
import ContactComponent from "../components/contact"
import Layout from "../components/layout"

const ContactPage = ({ location }) => {
    return (
        <Layout location={location}>
            <ContactComponent/>
        </Layout>
    )
}

export default ContactPage