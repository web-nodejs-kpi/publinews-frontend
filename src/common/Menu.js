import React from 'react'
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBCollapse,
} from 'mdb-react-ui-kit'

export default class Menu extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showBasic: false,
        }
    }

    render() {
        return (
            <MDBNavbar expand="lg" light bgColor="light">
                <MDBContainer>
                    <MDBNavbarBrand>Publinews</MDBNavbarBrand>

                    <MDBNavbarToggler
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        onClick={() =>
                            this.setState({ showBasic: !this.state.showBasic })
                        }
                    >
                        <MDBIcon icon="bars" fas />
                    </MDBNavbarToggler>

                    <MDBCollapse navbar show={this.state.showBasic}>
                        <MDBNavbarNav className="mr-auto mb-2 mb-lg-0">
                            <MDBNavbarItem>
                                {this.props.current_menu === 'notes' ? (
                                    <MDBNavbarLink active>Notes</MDBNavbarLink>
                                ) : (
                                    <MDBNavbarLink
                                        name="notes"
                                        onClick={this.props.handle_menu}
                                    >
                                        Notes
                                    </MDBNavbarLink>
                                )}
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                {this.props.current_menu === 'feed' ? (
                                    <MDBNavbarLink active>Feed</MDBNavbarLink>
                                ) : (
                                    <MDBNavbarLink
                                        name="feed"
                                        onClick={this.props.handle_menu}
                                    >
                                        Feed
                                    </MDBNavbarLink>
                                )}
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                {this.props.current_menu === 'sources' ? (
                                    <MDBNavbarLink active>
                                        Sources
                                    </MDBNavbarLink>
                                ) : (
                                    <MDBNavbarLink
                                        name="sources"
                                        onClick={this.props.handle_menu}
                                    >
                                        Sources
                                    </MDBNavbarLink>
                                )}
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        )
    }
}
