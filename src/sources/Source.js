import React from 'react'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardSubTitle,
    MDBCardText,
    MDBCardTitle,
    MDBIcon,
} from 'mdb-react-ui-kit'
export default class Source extends React.Component {
    onClickDelete = () => {
        this.props.delete_source(this.props.info.source_id)
    }

    render() {
        return (
            <MDBCard>
                <MDBCardBody>
                    <MDBCardTitle>
                        {this.props.info.name}{' '}
                        <MDBBtn floating tag="a" onClick={this.onClickDelete}>
                            <MDBIcon fas icon="times" />
                        </MDBBtn>
                    </MDBCardTitle>
                    <MDBCardSubTitle>
                        Social network: {this.props.info.social_network_name}
                    </MDBCardSubTitle>
                    <MDBCardText>
                        Link: {this.props.info.link} <br />
                        Rubric: <i>{this.props.info.rubric}</i>
                    </MDBCardText>
                </MDBCardBody>
            </MDBCard>
        )
    }
}
