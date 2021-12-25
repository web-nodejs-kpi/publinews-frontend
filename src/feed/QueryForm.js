import React from 'react'
import { MDBBtn } from 'mdb-react-ui-kit'

export default class QueryForm extends React.Component {
    onClickSubmit = () => {
        this.props.refresh_feed()
    }

    render() {
        return (
            <div className="QueryForm">
                <MDBBtn onClick={this.onClickSubmit}>Get latest posts</MDBBtn>
                <br />
                <br />
                <label>
                    Rubric:
                    <select
                        name="selected_rubric"
                        value={this.props.selected_rubric}
                        onChange={this.props.handle_input_change}
                    >
                        {this.props.rubrics.map(rubric => {
                            return (
                                <option key={rubric} value={rubric}>
                                    {rubric}
                                </option>
                            )
                        })}
                    </select>
                </label>
            </div>
        )
    }
}
