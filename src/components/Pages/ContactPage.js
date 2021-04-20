import React, { Component } from "react"
import "../../css/ContactPage.css"

const ContactPage = () => {
    return (
        <div>
            <style>{"body{background-color: MediumSeaGreen}"}</style>

            <h1 style={{ backgroundColor: "lightgreen", textAlign: "center" }}> Connect with Us!</h1>

            <div id="discordLink">
                <h3>Discord Link</h3>
                <iframe src="https://discord.com/widget?id=521957275204845578&theme=dark"
                    width="800"
                    height="600"
                    allowtransparency="true"
                    frameborder="0"
                    scrolling="yes"
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
                </iframe>
            </div>

        </div>

    )
}

export default ContactPage
