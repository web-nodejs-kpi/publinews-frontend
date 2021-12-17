import React from 'react'

export default class QueryForm extends React.Component {
    onClickSubmit = e => {
        e.preventDefault()
        this.props.refresh_feed()
    }

    render() {
        return (
            <div className="QueryForm">
                <form onSubmit={this.onClickSubmit}>
                    <h5>Get fresh posts</h5>
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
                    <input type="submit" value="GET" />
                </form>
            </div>
        )
    }
}
