import React, {useState} from 'react';
import {Accordion, Col, Container, Dropdown, Form, FormControl, InputGroup, Row} from 'react-bootstrap';
import './DropdownInput.css';
import citiesJson from '../../assets/citiesJson.json';
import googleLogo from '../../assets/images/google.png';
import myMovingReviewsLogo from '../../assets/images/my-moving-reviews.png';
import trustPilotLogo from '../../assets/images/trustpilot.png';
import transportReviewsLogo from '../../assets/images/transport-reviews.png';
import Testimonial from "../Testimonial";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
    faClipboardList, faHouse,
    faLocationDot,
} from '@fortawesome/free-solid-svg-icons';

const Home = () => {

    const [showPickupLocation, setShowPickupLocation] = useState(false);
    const [showDeliveryLocation, setShowDeliveryLocation] = useState(false);
    const [selectedPickupLocation, setSelectedPickupLocation] = useState('');
    const [selectedDeliveryLocation, setSelectedDeliveryLocation] = useState('');
    const [cities, setCities] = useState(citiesJson);
    const handleSelectPickupLocation = (selectedValue: string | null) => {
        if (selectedValue) {
            console.log(selectedValue.split(',')[2])
            setSelectedPickupLocation(selectedValue);
            setShowPickupLocation(false);
        }
    };
    const handleSelectDeliveryLocation = (selectedValue: string | null) => {
        if (selectedValue) {
            console.log(selectedValue.split(',')[2])
            setSelectedDeliveryLocation(selectedValue);
            setShowDeliveryLocation(false);
        }
    };

    const filteredItemsPickup = cities.filter(
        city =>
            city.name.toLowerCase().includes(selectedPickupLocation.toLowerCase()) ||
            city.city.toLowerCase().includes(selectedPickupLocation.toLowerCase()) ||
            city.state.toLowerCase().includes(selectedPickupLocation.toLowerCase())
    );

    const filteredItemsDelivery = cities.filter(
        city =>
            city.name.toLowerCase().includes(selectedDeliveryLocation.toLowerCase()) ||
            city.city.toLowerCase().includes(selectedDeliveryLocation.toLowerCase()) ||
            city.state.toLowerCase().includes(selectedDeliveryLocation.toLowerCase())
    );

    const testimonialList = [
        {
            name: "Alex Harris",
            rating: 5,
            socialNetworkLink: "google.com",
            socialNetworkLogo: googleLogo,
            aosDelayTime: 100,
            feedback: "Absolutely fantastic service provided by Anthony at Fobros. I was on a tight timeline for having a vintage truck picked up, I tried to go through a big shipping corp, but was getting the run around, and they couldn’t commit to a pick up date. When I messaged Fobros, Anthony handled the entire process quickly and was easily reachable by text message! Super smooth transaction and super fast pick up and delivery! Would absolutely recommend Fobros and specifically Anthony!"
        },
        {
            name: "Marko Canepa",
            rating: 5,
            socialNetworkLink: "https://www.trustpilot.com/",
            socialNetworkLogo: trustPilotLogo,
            aosDelayTime: 200,
            feedback: "Fast and accessible service! Yesterday the driver picked up the car in Colorado and today it was delivered to Texas. The person who helped me with the process and everything was Tony Davis, I truly recommend this place to anyone who is looking for a vehicle transportation"
        },
        {
            name: "Lena Marcia",
            rating: 5,
            socialNetworkLink: "https://www.transportreviews.com/",
            socialNetworkLogo: transportReviewsLogo,
            aosDelayTime: 300,
            feedback: "I had the pleasure of working with James Smith as my broker and I couldn't have asked for a better experience. James was always professional, reliable, and prompt with his communication, which made my job as a driver so much easier. He provided clear instructions and made sure everything was taken care of from start to finish. Thanks to James's excellent service, I was able to deliver my shipment on time and with ease. I highly recommend James to anyone looking for a top-notch auto transport broker"
        },
        {
            name: "Nill Hollins",
            rating: 5,
            socialNetworkLink: "https://www.mymovingreviews.com/",
            socialNetworkLogo: myMovingReviewsLogo,
            aosDelayTime: 400,
            feedback: "I'm incredibly grateful for Stephen's assistance with Fobros. He assisted me all the way from Houston to California. Stephen watched the movement until it reached California, so I didn't have to wait too long for my automobile to show up. I appreciate his helpful customer service. I'm incredibly pleased."
        },
    ];

    const [activePanel, setActivePanel] = useState('');

    const handlePanelToggle = (panelId: any) => {
        setActivePanel(activePanel === panelId ? '' : panelId);
    };

    const renderButtonIcon = (panelId: any) => {
        return activePanel === panelId ? '-' : '+';
    };
    return (
        <>
            <div className="marquee">
              <span>
                Ship your vehicle safely and securely with Fobros Group LLC. Get a <a href="quote.html"
                                                                                      style={{color: "#F89D13FF"}}>Quote</a> now and experience hassle-free auto transport services
              </span>
            </div>
            <div className="site-wrap">
                <div className="site-mobile-menu">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle"/>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body"></div>
                </div>
                {/* -- HEADER -- */}
                <header className="site-navbar py-3" role="banner">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-11 col-xl-2">
                                <h1 className="mb-0">
                                    <a href="index.html" className="text-white h2 mb-0">
                                        Fobros Group
                                    </a>
                                </h1>
                            </div>
                            <div className="col-12 col-md-10 d-none d-xl-block">
                                <nav
                                    className="site-navigation position-relative text-right"
                                    role="navigation"
                                >
                                    <ul className="site-menu js-clone-nav mx-auto d-none d-lg-block">
                                        <li className="active">
                                            <a href="index.html">Home</a>
                                        </li>
                                        <li>
                                            <a href="about.html">About Us</a>
                                        </li>
                                        <li className="has-children">
                                            <a href="#">Company</a>
                                            <ul className="dropdown">
                                                <li>
                                                    <a href="#">Reviews</a>
                                                </li>
                                                <li>
                                                    <a href="#">Vision and Mission</a>
                                                </li>
                                                <li>
                                                    <a href="#">Leadership Team</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <a href="blog.html">Blog</a>
                                        </li>
                                        <li>
                                            <a href="contact.html">Contact</a>
                                        </li>
                                        <li id="quote-btn">
                                            <a href="quote.html">Get a Quote</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div
                                className="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
                                style={{position: "relative", top: 3}}
                            >
                                <a href="#" className="site-menu-toggle js-menu-toggle text-white">
                                    <span className="icon-menu h3"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </header>
                <div
                    className="site-blocks-cover overlay"
                    style={{backgroundImage: "url(./src/assets/images/home-page.jpg)"}}
                    data-aos="fade"
                    data-stellar-background-ratio="0.5"
                >
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-md-8" data-aos="fade-up" data-aos-delay={400}>
                                <h1 className="text-white font-weight-light mb-5 text-uppercase font-weight-bold">
                                    Worldwide Freight Services
                                </h1>
                                <p>
                                    <a href="quote.html" className="btn btn-primary py-3 px-5 text-white">
                                        Get a Quote!
                                    </a>
                                </p>
                            </div>
                            <div className="col-md-4">
                                <div className="form-panel">
                                    <Form>
                                        <p style={{color: "#666"}}>Start your Free Quote</p>
                                        {/* === PICKUP LOCATION === */}
                                        <Form.Group className="mb-3" controlId="quoteFrom.pickupLocation">
                                            <Form.Label>Pickup location</Form.Label>
                                            <InputGroup onClick={() => {
                                                setShowPickupLocation(!showPickupLocation)
                                                setShowDeliveryLocation(false)
                                            }}>
                                                <FormControl
                                                    style={{fontSize: 12}}
                                                    placeholder="Enter zip code or city"
                                                    value={selectedPickupLocation}
                                                    onChange={(e) => setSelectedPickupLocation(e.target.value)}
                                                />
                                                <InputGroup>
                                                    <Dropdown show={showPickupLocation}
                                                              onSelect={handleSelectPickupLocation}>
                                                        {/*<Dropdown.Toggle split variant="outline-secondary" id="dropdown-split-basic" />*/}

                                                        <Dropdown.Menu className="dropdown-scrollable">
                                                            {filteredItemsPickup.map((item, idx) => (
                                                                <Dropdown.Item
                                                                    eventKey={`${item.name}, ${item.city}, ${item.state}`}
                                                                    key={idx}>
                                                                    {`${item.name}, ${item.city}, ${item.state}`}
                                                                </Dropdown.Item>
                                                            ))}
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </InputGroup>
                                            </InputGroup>
                                        </Form.Group>
                                        {/* === DELIVERY LOCATION === */}
                                        <Form.Group className="mb-3" controlId="quoteFrom.deliveryLocation">
                                            <Form.Label>Delivery location</Form.Label>
                                            <InputGroup onClick={() => {
                                                setShowDeliveryLocation(!showDeliveryLocation)
                                                setShowPickupLocation(false)
                                            }}>
                                                <FormControl
                                                    style={{fontSize: 12}}
                                                    placeholder="Enter zip code or city"
                                                    value={selectedDeliveryLocation}
                                                    onChange={(e) => setSelectedDeliveryLocation(e.target.value)}
                                                />
                                                <InputGroup>
                                                    <Dropdown show={showDeliveryLocation}
                                                              onSelect={handleSelectDeliveryLocation}>
                                                        <Dropdown.Menu className="dropdown-scrollable">
                                                            {filteredItemsDelivery.map((item, idx) => (
                                                                <Dropdown.Item
                                                                    eventKey={`${item.name}, ${item.city}, ${item.state}`}
                                                                    key={idx}>
                                                                    {`${item.name}, ${item.city}, ${item.state}`}
                                                                </Dropdown.Item>
                                                            ))}
                                                        </Dropdown.Menu>
                                                    </Dropdown>
                                                </InputGroup>
                                            </InputGroup>
                                        </Form.Group>
                                        <div className="question">
                                            <label>Select Transport type</label>
                                            <div className="question-answer">
                                                <div className="d-flex">
                                                    <div className="col-md-4">
                                                        <input
                                                            type="radio"
                                                            defaultValue="none"
                                                            id="radio_1"
                                                            name="transportType"
                                                        />
                                                        <label htmlFor="radio_1" className="radio">
                                                            <span>Open</span>
                                                        </label>
                                                    </div>
                                                    <div className="col-md-4">
                                                        <input
                                                            type="radio"
                                                            defaultValue="none"
                                                            id="radio_2"
                                                            name="transportType"
                                                        />
                                                        <label htmlFor="radio_2" className="radio">
                                                            <span>Enclosed</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="btn-block">
                                            <button type="submit">
                                                SUBMIT
                                            </button>
                                        </div>
                                    </Form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/*todo: write more content*/}
                {/* SECTIONS */}

                {/*TESTIMONIALS*/}
                <div className="site-section border-bottom">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-md-7 text-center border-primary">
                                <h3 className="font-weight-bold text-primary" data-aos="fade">
                                    Testimonials
                                </h3>
                            </div>
                        </div>
                        <div className="row">
                            {testimonialList.map(
                                value => <Testimonial
                                    key={value.name}
                                    name={value.name}
                                    rating={value.rating}
                                    socialNetworkLink={value.socialNetworkLink}
                                    socialNetworkLogo={value.socialNetworkLogo}
                                    aosDelayTime={value.aosDelayTime}
                                    feedback={value.feedback}
                                />
                            )}
                        </div>
                    </div>
                </div>

                {/*Steps to Book with Fobros Group LLC*/}
                <div className="site-section">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-md-7 text-center border-primary">
                                <h3 className="mb-0 font-weight-bold text-primary">Steps to Book with Fobros Group
                                    LLC</h3>
                                <p className="color-black-opacity-5"></p>
                            </div>
                        </div>
                        <div className="row align-items-stretch">
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="unit-4 d-flex">
                                    <div className="unit-4-icon mr-4">
                                        <FontAwesomeIcon icon={faClipboardList} size="2x" style={{color: 'orange'}}/>
                                    </div>
                                    <div>
                                        <h3>Get a Quote</h3>
                                        <p>Our simple online quote system streamlines your car shipping experience.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="unit-4 d-flex">
                                    <div className="unit-4-icon mr-4">
                                        <FontAwesomeIcon icon={faLocationDot} size="2x" style={{color: 'orange'}}/>
                                    </div>
                                    <div>
                                        <h3>Pickup Process</h3>
                                        <p>Our Professional team expertly loads and secures your vehicle.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                                <div className="unit-4 d-flex">
                                    <div className="unit-4-icon mr-4">
                                        <FontAwesomeIcon icon={faHouse} size="2x" style={{color: 'orange'}}/>
                                    </div>
                                    <div>
                                        <h3>Receive your vehicle</h3>
                                        <p>Thorough inspection ensures your car arrives in perfect condition.</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/*Frequently asked questions*/}
                <div className="site-section bg-light">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-md-7 text-center border-primary">
                                <h2 className="font-weight-light text-primary">Frequently asked questions</h2>
                                <p className="color-black-opacity-5">We Offer The Following Services</p>
                            </div>
                        </div>
                        <div className="accordion" id="accordionExample">
                            <div className="card">
                                <div className="card-header" id="headingOne">
                                    <h2 className="mb-0">
                                        <button
                                            className="btn btn-link btn-block text-left"
                                            type="button"
                                            onClick={() => handlePanelToggle('collapseOne')}
                                            aria-expanded={activePanel === 'collapseOne'}
                                            aria-controls="collapseOne"
                                        >
                                            How much does it cost to ship with Fobros Group LLC ?
                                        </button>
                                        <button
                                            className="btn btn-link btn-toggle"
                                            type="button"
                                            onClick={() => handlePanelToggle('collapseOne')}
                                            aria-expanded={activePanel === 'collapseOne'}
                                            aria-controls="collapseOne"
                                        >
                                            {renderButtonIcon('collapseOne')}
                                        </button>
                                    </h2>
                                </div>

                                <div
                                    id="collapseOne"
                                    className={`collapse ${activePanel === 'collapseOne' ? 'show' : ''}`}
                                    aria-labelledby="headingOne"
                                    data-parent="#accordionExample"
                                >
                                    <div className="card-body">
                                        The cost of shipping an automobile with Fobros Group LLC is determined by various criteria, including the distance of the shipment, the type of vehicle, and the level of service you desire. We provide reasonable prices and free quotations to assist you get a better understanding of the cost.

                                        <code>.show</code> class.
                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="headingTwo">
                                    <h2 className="mb-0">
                                        <button
                                            className="btn btn-link btn-block text-left collapsed"
                                            type="button"
                                            onClick={() => handlePanelToggle('collapseTwo')}
                                            aria-expanded={activePanel === 'collapseTwo'}
                                            aria-controls="collapseTwo"
                                        >
                                            How long does it take to ship a car?

                                        </button>
                                        <button
                                            className="btn btn-link btn-toggle"
                                            type="button"
                                            onClick={() => handlePanelToggle('collapseTwo')}
                                            aria-expanded={activePanel === 'collapseTwo'}
                                            aria-controls="collapseTwo"
                                        >
                                            {renderButtonIcon('collapseTwo')}
                                        </button>
                                    </h2>
                                </div>
                                <div
                                    id="collapseTwo"
                                    className={`collapse ${activePanel === 'collapseTwo' ? 'show' : ''}`}
                                    aria-labelledby="headingTwo"
                                    data-parent="#accordionExample"
                                >
                                    <div className="card-body">
                                        When you place an order, you will receive an estimated transit time for your shipment. This will give you a window for when your car will be delivered. Transit times depend on moving distance. With each delivery being unique, it is possible that your car would be delivered faster than the estimated transit time provided.

                                    </div>
                                </div>
                            </div>

                            <div className="card">
                                <div className="card-header" id="headingThree">
                                    <h2 className="mb-0">
                                        <button
                                            className="btn btn-link btn-block text-left collapsed"
                                            type="button"
                                            onClick={() => handlePanelToggle('collapseThree')}
                                            aria-expanded={activePanel === 'collapseThree'}
                                            aria-controls="collapseThree"
                                        >
                                            Is my vehicle insured during transport?

                                        </button>
                                        <button
                                            className="btn btn-link btn-toggle"
                                            type="button"
                                            onClick={() => handlePanelToggle('collapseThree')}
                                            aria-expanded={activePanel === 'collapseThree'}
                                            aria-controls="collapseThree"
                                        >
                                            {renderButtonIcon('collapseThree')}
                                        </button>
                                    </h2>
                                </div>

                                <div
                                    id="collapseThree"
                                    className={`collapse ${activePanel === 'collapseThree' ? 'show' : ''}`}
                                    aria-labelledby="headingThree"
                                    data-parent="#accordionExample"
                                >
                                    <div className="card-body">
                                        Yes, your vehicle will be covered by the carrier’s cargo insurance. Additionally, we have our own contingent cargo insurance, which protects you for up to $250,000 should the truckers policy fail to fully cover a valid claim.

                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <div className="card-header" id="headingFour">
                                    <h2 className="mb-0">
                                        <button
                                            className="btn btn-link btn-block text-left collapsed"
                                            type="button"
                                            onClick={() => handlePanelToggle('collapseFour')}
                                            aria-expanded={activePanel === 'collapseFour'}
                                            aria-controls="collapseFour"
                                        >
                                            Can I pack items in my car?


                                        </button>
                                        <button
                                            className="btn btn-link btn-toggle"
                                            type="button"
                                            onClick={() => handlePanelToggle('collapseFour')}
                                            aria-expanded={activePanel === 'collapseFour'}
                                            aria-controls="collapseFour"
                                        >
                                            {renderButtonIcon('collapseFour')}
                                        </button>
                                    </h2>
                                </div>

                                <div
                                    id="collapseFour"
                                    className={`collapse ${activePanel === 'collapseFour' ? 'show' : ''}`}
                                    aria-labelledby="headingThree"
                                    data-parent="#accordionExample"
                                >
                                    <div className="card-body">
                                        You can put personal items up to 200 lbs. in a box or single piece of luggage that will be in the trunk of the car during transport.

                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row align-items-stretch">
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                                <div className="unit-4 d-flex">
                                    <div className="unit-4-icon mr-4"><span
                                        className="text-primary flaticon-travel"></span></div>
                                    <div>
                                        <h3>Air Air Freight</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis
                                            molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                                <div className="unit-4 d-flex">
                                    <div className="unit-4-icon mr-4"><span
                                        className="text-primary flaticon-sea-ship-with-containers"></span></div>
                                    <div>
                                        <h3>Ocean Freight</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis
                                            molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                                <div className="unit-4 d-flex">
                                    <div className="unit-4-icon mr-4"><span
                                        className="text-primary flaticon-frontal-truck"></span></div>
                                    <div>
                                        <h3>Ground Shipping</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis
                                            molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                                <div className="unit-4 d-flex">
                                    <div className="unit-4-icon mr-4"><span
                                        className="text-primary flaticon-barn"></span></div>
                                    <div>
                                        <h3>Warehousing</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis
                                            molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                                <div className="unit-4 d-flex">
                                    <div className="unit-4-icon mr-4"><span
                                        className="text-primary flaticon-platform"></span></div>
                                    <div>
                                        <h3>Storage</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis
                                            molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 mb-4 mb-lg-4">
                                <div className="unit-4 d-flex">
                                    <div className="unit-4-icon mr-4"><span
                                        className="text-primary flaticon-car"></span></div>
                                    <div>
                                        <h3>Delivery Van</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis quis
                                            molestiae vitae eligendi at.</p>
                                        <p><a href="#">Learn More</a></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*    FOOTER   */
                }
                <footer className="site-footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col-md-3">
                                        <h2 className="footer-heading mb-4">Quick Links</h2>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="#">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#">Services</a>
                                            </li>
                                            <li>
                                                <a href="#">Testimonials</a>
                                            </li>
                                            <li>
                                                <a href="#">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3">
                                        <h2 className="footer-heading mb-4">Products</h2>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="#">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#">Services</a>
                                            </li>
                                            <li>
                                                <a href="#">Testimonials</a>
                                            </li>
                                            <li>
                                                <a href="#">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3">
                                        <h2 className="footer-heading mb-4">Features</h2>
                                        <ul className="list-unstyled">
                                            <li>
                                                <a href="#">About Us</a>
                                            </li>
                                            <li>
                                                <a href="#">Services</a>
                                            </li>
                                            <li>
                                                <a href="#">Testimonials</a>
                                            </li>
                                            <li>
                                                <a href="#">Contact Us</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="col-md-3">
                                        <h2 className="footer-heading mb-4">Follow Us</h2>
                                        <a href="#" className="pl-0 pr-3">
                                            <span className="icon-facebook"/>
                                        </a>
                                        <a href="#" className="pl-3 pr-3">
                                            <span className="icon-twitter"/>
                                        </a>
                                        <a href="#" className="pl-3 pr-3">
                                            <span className="icon-instagram"/>
                                        </a>
                                        <a href="#" className="pl-3 pr-3">
                                            <span className="icon-linkedin"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <h2 className="footer-heading mb-4">Subscribe Newsletter</h2>
                                <form action="#" method="post">
                                    <div className="input-group mb-3">
                                        <input
                                            type="text"
                                            className="form-control border-secondary text-white bg-transparent"
                                            placeholder="Enter Email"
                                            aria-label="Enter Email"
                                            aria-describedby="button-addon2"
                                        />
                                        <div className="input-group-append">
                                            <button
                                                className="btn btn-primary text-white"
                                                type="button"
                                                id="button-addon2"
                                            >Send
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="row pt-5 mt-5 text-center">
                            <div className="col-md-12">
                                <div className="border-top pt-5">
                                    <p>Copyright © All rights reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>


            </div>

        </>
    )
        ;
};

export default Home;