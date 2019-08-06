import React from "react"

const styles={
    alignment: {
        marginTop: "50px",
    }
}

function Container({ children }) {
    return (
        <div>
            <div className="container" style={styles.alignment}>
        


                {children}
            </div>

        </div>
    )
}

export default Container