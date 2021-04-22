import React, { Component } from "react"
import "../../css/ContactPage.css"
import Container from 'react-bootstrap/Container'


const ContactPage = () => {
    return (
        <div className = "contactPage">
            <style>{"body{background-color: gainsboro}"}</style>
            <Container>

                <h1 id="connectTitle"> Connect with Us!</h1>

                <div id="discordLink">
                    <h3>Discord Link</h3>
                    <iframe src="https://discord.com/widget?id=521957275204845578&theme=dark"
                        width="900"
                        height="700"
                        allowtransparency="true"
                        frameborder="0"
                        scrolling="yes"
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
                    </iframe>
                </div>

                <div id="adminInfo">
                    <h3>Admin Contact: uflgda@gmail.com</h3>
                </div>
            </Container>

        </div>

    )
}

export default ContactPage
