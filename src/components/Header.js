import React, { Component } from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';

// $(".addToCart").click(function () {
//     $("#cartNum").html(++cartNum);
// });
// let isDealModalTriggered = false;

// function triggerDealModal() {
//     if (!isDealModalTriggered && $("#dropdownMenuLink").attr('aria-expanded') == "false") {
//         $("#dealsModal").modal("show");
//         isDealModalTriggered = true;
//     }
// }
// $("html").mouseleave(function () {
//     triggerDealModal();
// });
// setTimeout(triggerDealModal, 10000);

class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <header>
                    <div className="container">
                        <div className="row row-content justify-content-between">
                            <div className="col col-lg-auto col-12 align-self-center">
                                <div className="row row-content align-items-center order-lg-2 order-first">
                                    <div className="col col-auto">
                                        <img src="img/logo.svg" alt="" height="100px" />
                                    </div>
                                    <div className="col col-auto">
                                        <h1>FurnitureNow!</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="col-auto align-self-end order-last">
                                <a id="cartLink" role="button" className="btn btn-link" href="checkout.html" data-toggle="tooltip"
                                    data-placement="top" title="Checkout"><i className="fa fa-shopping-cart"></i><span className="pl-1"
                                        id="cartNum">0</span></a>
                            </div>
                        </div>
                    </div>
                </header>
                <Navbar dark sticky="top">
                <div className="container">
                        <NavbarBrand href="/">NuCamp</NavbarBrand>
                    </div>
                </Navbar>
                <nav className="navbar navbar-expand-md navbar-dark sticky-top">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-5 mt-2 mt-0">
                            <li className="nav-item active">
                                <a className="nav-link" href="#dealsCarousel">Home <span className="sr-only">(current)</span></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#tablesChairs">Tables and Chairs</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#couches">Couches</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#beds">Beds</a>
                            </li>
                        </ul>
                        <div className="row row-content align-items-center">
                            <div className="col-auto d-none" id="welcomeMessage">
                                <p>Welcome, adsfasdf@sdfasdf.com</p>
                            </div>
                            <div className="col-auto">
                                <div className="dropdown show" id="loginContainer">
                                    <a className="btn dropdown-toggle orangeButton" href="#" role="button" id="dropdownMenuLink"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Log in!
                        </a>
                                    <form className="dropdown-menu px-4 py-3">
                                        <div className="form-group">
                                            <label htmlFor="loginEmail">Email address</label>
                                            <input type="email" className="form-control" id="loginEmail"
                                                placeholder="email@example.com" />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="loginPass">Password</label>
                                            <input type="password" className="form-control" id="loginPass" placeholder="Password" />
                                        </div>
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="rememberMeCheck" />
                                            <label className="form-check-label" htmlFor="rememberMeCheck">
                                                Remember me
                                </label>
                                        </div>
                                        <p className="d-none errorMessage" id="loginErrorMessage">Username or password incorrect!</p>
                                        <button type="button" className="btn orangeButton" id="signInButton">Sign in</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </React.Fragment>
        );
    }
}
//modal
/* <div className="modal fade" id="dealsModal" tabindex="-1" role="dialog">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h1 className="modal-title">Special Offer!</h1>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <img src="img/celebrate.jpg" className="w-100" />
                <p>30% off when you use coupon code <span className="font-weight-bold">DEAL</span>.</p>
            </div>
        </div>
    </div>
</div> */

export default Header;