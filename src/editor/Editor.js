import React from 'react'
import {
    MDBInput,
    MDBCardBody,
    MDBCardTitle,
    MDBCardSubTitle,
    MDBCardLink,
    MDBCardText,
    MDBBtn,
    MDBCard,
} from 'mdb-react-ui-kit'

export default class Editor extends React.Component {
    onClickSubmit = () => {
        this.props.save_note()
    }
    render() {
        return (
            <div>
                <MDBInput
                    label="Title"
                    id="typeText"
                    type="text"
                    value={this.props.editor_title}
                    onChange={this.props.handle_input_change}
                />
                <MDBCard>
                    <MDBCardBody>
                        <MDBCardTitle>
                            {this.props.selected_post.source_name}
                        </MDBCardTitle>
                        <MDBCardSubTitle>
                            {this.props.selected_post.created_at}{' '}
                            <MDBCardLink href={this.props.selected_post.link}>
                                Original
                            </MDBCardLink>
                        </MDBCardSubTitle>
                        <MDBCardText>
                            {this.props.selected_post.content}
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
                <MDBInput
                    label="Response"
                    id="textAreaExample"
                    textarea
                    rows={10}
                    value={this.props.editor_response}
                    onChange={this.props.handle_input_change}
                />
                <MDBBtn onClick={this.onClickSubmit}>Save</MDBBtn>
            </div>
        )
    }
}
