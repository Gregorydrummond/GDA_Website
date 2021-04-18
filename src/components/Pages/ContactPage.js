const ContactPage = () => {
    return (
        <div classname="contactPage">
            <style>{
                "body{background-color: MediumSeaGreen}"
            }
            </style>
            <h1 style={{ backgroundColor: "lightgreen" }}> Connect with Us!</h1>
            <h3 style={{ textDecorationLine: "underline", color: "purple" }}>Discord Link</h3>
            <div classname="discordLink">
                <iframe src="https://discord.com/widget?id=521957275204845578&theme=dark"
                    width="650"
                    height="500"
                    allowtransparency="true"
                    frameborder="0"
                    scrolling="yes"
                    sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
                </iframe>
            </div>

            <div className="contactInfo">
                <h3 style={{ color: "purple", textDecorationLine: "underline" }}>Admin's Contact Information:</h3>
            </div>

        </div>

    )
}

export default ContactPage
