import React from "react";
import { MDBMask, MDBView, MDBContainer, MDBRow, MDBCol } from "mdbreact";

class HoverPage extends React.Component {
  render() {
    return (
      <MDBContainer className="mt-5">
        <MDBRow>
          <MDBCol md="4">
            <MDBView hover>
              <img
                src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="red-strong">
                <p className="white-text">Strong overlay</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="4">
            <MDBView hover>
              <img
                src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="red-light">
                <p className="white-text">Light overlay</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="4">
            <MDBView hover>
              <img
                src="https://mdbootstrap.com/img/Others/documentation/forest-sm-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center" overlay="red-slight">
                <p className="white-text">Super light overlay</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
        </MDBRow>
        <MDBRow className="mt-4">
          <MDBCol md="6">
            <MDBView hover zoom>
              <img
                src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg"
                className="img-fluid"
                alt=""
              />
              <MDBMask className="flex-center">
                <p className="white-text">Zoom effect</p>
              </MDBMask>
            </MDBView>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="text-center">Shadow effect</h5>
            <img
              src="https://mdbootstrap.com/img/Others/documentation/4.jpg"
              className="img-fluid rounded-circle hoverable"
              alt=""
            />
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default HoverPage;