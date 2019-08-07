import React from "react"

const styles={
    alignment: {
        marginTop: "50px",
    }
}

function Container({ children }) {
    return (
        <main>
            <div className="container" style={styles.alignment}>
        


                {children}
            </div>

        </main>
    )
}

export default Container