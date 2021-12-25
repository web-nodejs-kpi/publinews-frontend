import React from 'react'
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardSubTitle,
    MDBCardText,
    MDBCardLink,
    MDBBtn,
} from 'mdb-react-ui-kit'

export default class Post extends React.Component {
    onClickPost = e => {
        e.preventDefault()
        this.props.select_post(this.props.info)
    }

    render() {
        return (
            <MDBCard>
                <MDBCardBody>
                    <MDBCardTitle>{this.props.info.source_name}</MDBCardTitle>
                    <MDBCardSubTitle>
                        {this.props.info.created_at}{' '}
                        <MDBCardLink href={this.props.info.link}>
                            Original
                        </MDBCardLink>
                    </MDBCardSubTitle>
                    <MDBCardText>{this.props.info.content}</MDBCardText>
                    <MDBBtn onClick={this.onClickPost}>Create note</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        )
    }
}
