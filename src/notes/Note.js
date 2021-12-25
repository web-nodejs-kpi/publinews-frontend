import React from 'react'
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardLink,
    MDBCardSubTitle,
    MDBCardText,
    MDBCardTitle,
    MDBIcon,
} from 'mdb-react-ui-kit'

export default class Note extends React.Component {
    onClickDelete = () => {
        this.props.delete_note(this.props.info.note_id)
    }

    render() {
        return (
            <MDBCard>
                <MDBCardBody>
                    <MDBCardTitle>
                        {this.props.info.headline}{' '}
                        <MDBBtn floating tag="a" onClick={this.onClickDelete}>
                            <MDBIcon fas icon="times" />
                        </MDBBtn>
                    </MDBCardTitle>
                    <MDBCardSubTitle>
                        {this.props.info.created_at}{' '}
                        <MDBCardLink href={this.props.info.link}>
                            Original
                        </MDBCardLink>
                    </MDBCardSubTitle>
                    <MDBCardText>{this.props.info.content}</MDBCardText>
                </MDBCardBody>
            </MDBCard>
        )
    }
}
