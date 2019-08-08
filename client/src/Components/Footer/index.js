import React from "react";
import { Link } from "react-router-dom"
import Button from '@material-ui/core/Button';

const styles= {
  button:{
    // background: "white",
    // color: "#D84169",
    // letterSpacing: '1px',
    // boxShaddow: "0px",
    // margin: "5px, 0px"

  }
}

const FooterBar = () => {

  return (
    <footer className="page-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 >Have an event to share with the world?</h5>
            <Link
              to="/event">
              <Button
                id="createEventBtn"
                style={styles.button}>Create Event</Button>
            </Link>
          </div>
          {/* <div className="col l4 offset-l2 s12">
          <h5 className="white-text">Links</h5>
          <ul>
            <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
            <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
          </ul>
        </div> */}
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
          zafaruh
      {/* <a className="grey-text text-lighten-4 right" href="#!">More Links</a> */}
        </div>
      </div>
    </footer>
  )

}
export default FooterBar