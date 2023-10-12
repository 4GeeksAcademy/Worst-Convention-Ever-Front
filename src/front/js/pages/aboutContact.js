import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { ContactUs } from "../component/contactUs";
import "../../styles/aboutContact.css";
import spawn from "../../img/spawn.jpg";

export const AboutContact = () => {
    const { store, actions } = useContext(Context);
    const params = useParams();

    return (
        <>
            <div className="container text-center">
                <div className="row spawnBackground">
                    <div className="aboutJumbotron bg-light p-4 rounded-lg m-3">
                        <img src={spawn} />
                        <div className="jumbotronContent text-start">
                            <h1 className="badaboom font-spidey-lightRed textBorderDarkBlue fs4p0 ms-1">About the Convention!</h1>
                            <h2 className="fs2p0 font-white textBorderBlack">Everything you could ever want to know about the Worst Convention EverCon</h2>
                            <h4 className="fs1p25 font-white textBorderBlack">Here you will find some (hopefully) interesting history, facts, and other super intriguing information about the wonderful people behind the scenes of the Worst Convention EverCon. We will share our interests, what drove us to spearhead making this convention and what the future could look like!</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-1">
                        &nbsp;
                    </div>
                    <div className="col-10 text-start mt-3">
                        {/* div link header to open/close collapsable content */}
                        <a type="button" className="container button-55 bgLightBlue borderYellow mt-3" data-bs-toggle="collapse" href="#how-we-got-started-collapse-component" role="button" aria-expanded="false" aria-controls="how-we-got-started-collapse-component">
                            <div className="container text-start">
                                <div className="row">
                                    <div className="col-9 text-start text-uppercase fs2p0 badaboom font-spidey-yellow textBorderBlack align-self-center">
                                        How We Got Started
                                    </div>
                                    <div className="col-3 text-end font-spidey-yellow">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                        {/* collapsable content */}
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col aboutDropdownSpacer">                                    
                                </div>
                                <div className="col m-0 p-0">
                                    <div className="collapse mb-3" id="how-we-got-started-collapse-component">
                                        <div className="card card-body bgLightestYellow mt-2 font-spidey-darkBlue">
                                            <p>Once upon a time four totally disconnected nerds (<i>huge nerds</i>) all happened to stumble into the same Full Stack Web Developer Bootcamp (made with <i className="fa fa-heart text-danger" /> by 4Geeks). Four unique timelines merged to form perhaps the greatest, most influential, and most fantastic four person group of individuals ever known within the comic community (hey, maybe not but at least we aren't the fantastic four individuals responsible for <a href="https://www.rottentomatoes.com/m/fantastic_four_2015" className="darkRedLinks" target="_blank">this piece of cinema</a> right here.</p>
                                            <p>All kidding aside, we all met in a wonderful Coding Academy and really meshed well! We delved into out love for science fiction, art, pop culture, and more specifically, COMICS and decided to have our powers combine to <s>summon captain planet...</s> &nbsp;&nbsp; <s>morph into a megazord...</s> &nbsp;&nbsp; <s>make a funny pop culture reference...</s> &nbsp;&nbsp; provide an awesome resource to our friends and allies for the absolute, hands down, BEST comic convention on the planet made for nerds by nerds! And so, the Worst Convention EverCon was born.</p>
                                            <p><h3>THIS IS THE WAY.</h3></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col aboutDropdownSpacer">                                                                  
                                </div>
                            </div>
                        </div>
                        {/* div link header to open/close collapsable content */}
                        <a type="button" className="container button-55 bgLightBlue borderYellow mt-3" data-bs-toggle="collapse" href="#who-we-are-collapse-component" role="button" aria-expanded="false" aria-controls="who-we-are-collapse-component">
                            <div className="container text-start">
                                <div className="row">
                                    <div className="col-9 text-start text-uppercase fs2p0 badaboom font-spidey-yellow textBorderBlack align-self-center">
                                        Who We Are
                                    </div>
                                    <div className="col-3 text-end font-spidey-yellow">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                        {/* collapsable content */}
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col aboutDropdownSpacer">                                    
                                </div>
                                <div className="col m-0 p-0">
                                    <div className="collapse mb-3" id="who-we-are-collapse-component">
                                        <div className="card card-body bgLightestYellow mt-2 font-spidey-darkBlue">
                                            <p>Well, we aren't the Ghostbusters or the Avengers, and we probably aren't as iconic as a Princess, Athlete, Criminal, Brain and Basket Case, but we'd like to think we were pretty cool in our own way.</p>
                                            <p>We are <a href="https://github.com/NJCampbell" className="darkRedLinks" target="_blank">Nancy</a> (who I put first because she hates it), <a href="https://github.com/thatreligionmajor" className="darkRedLinks" target="_blank">Theresa</a>, <a href="https://github.com/Mpineiro20" className="darkRedLinks" target="_blank">Marc</a>, and <a href="https://github.com/labs404" className="darkRedLinks" target="_blank">Jay</a>! We are 4Nerds <sup>™ ® © ℠ all rights reserved, patent pending, etc.</sup></p>
                                            <p><strong>Nancy</strong>, for the record, has read the documentation. Nancy is dilligent and unwavering in the face of a challenge. Nancy is a level-capped necromancer, an avid gamer, artist, dog mom, and doesn't realize it (this was written while we were coding), but the full reason our backend exists and works.</p>
                                            <p><strong>Theresa</strong> is a polymath and multipotentialite (my words, not hers) who speaks more languages than most senior devs can program in. Theresa only rolls d20, is stylistically in an ascended realm of her own, and was born with a passive +4 to all attributes. If you see an impressive layout or unique design -- it likely has Theresa's signature on it.</p>
                                            <p><strong>Marc</strong> is an unintentional workaholic who always pushes through. Marc takes great interest in understanding the inner workings and behind the scenes of code. The instant he gets traction and inspiration you can be sure the flow of code will break the dam. Marc pushed more code while he had COVID than I did when I accidentally took my wifes adderal.</p>
                                            <p><strong>Jay</strong> is unremarkable, but takes full responsibility for this page and this description. Jay always takes an interest in other peoples projects, likes to theorycraft how a feature might work, and loves to debug and problem solve. Jay is probably responsible for finding the misplaced comma or missing closing bracket that crashed the whole project (and possibly responsible for it being there in the first place). </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col aboutDropdownSpacer">                                                                  
                                </div>
                            </div>
                        </div>
                        {/* div link header to open/close collapsable content */}
                        <a type="button" className="container button-55 bgLightBlue borderYellow mt-3" data-bs-toggle="collapse" href="#mission-statement-collapse-component" role="button" aria-expanded="false" aria-controls="mission-statement-collapse-component">
                            <div className="container text-start">
                                <div className="row">
                                    <div className="col-9 text-start text-uppercase fs2p0 badaboom font-spidey-yellow textBorderBlack align-self-center">
                                        Worst Convention EverCon Mission Statement
                                    </div>
                                    <div className="col-3 text-end font-spidey-yellow">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                        {/* collapsable content */}
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col aboutDropdownSpacer">                                    
                                </div>
                                <div className="col m-0 p-0">
                                    <div className="collapse mb-3" id="mission-statement-collapse-component">
                                        <div className="card card-body bgLightestYellow mt-2 font-spidey-darkBlue">
                                            <p>The Worst Convention EverCon is decicated to exposing geeks and non-geeks alike to a welcoming and inclusive experience highlighting an array of artists, comics, exhibits and more.</p>
                                            <p>Plus we really wanted to make a rad project that could highlight and express everything we learned and our front and back-end capabilities.</p>
                                            <h5>Yes, this is a shameless attempt to intice you into hiring us as junior developers!</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col aboutDropdownSpacer">                                                                  
                                </div>
                            </div>
                        </div>
                        {/* div link header to open/close collapsable content */}
                        <a type="button" className="container button-55 bgLightBlue borderYellow mt-3" data-bs-toggle="collapse" href="#whats-next-collapse-component" role="button" aria-expanded="false" aria-controls="whats-next-collapse-component">
                            <div className="container text-start">
                                <div className="row">
                                    <div className="col-9 text-start text-uppercase fs2p0 badaboom font-spidey-yellow textBorderBlack align-self-center">
                                        What's Next for the Con?
                                    </div>
                                    <div className="col-3 text-end font-spidey-yellow">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>
                        {/* collapsable content */}
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col aboutDropdownSpacer">                                    
                                </div>
                                <div className="col m-0 p-0">
                                    <div className="collapse mb-3" id="whats-next-collapse-component">
                                        <div className="card card-body bgLightestYellow mt-2 font-spidey-darkBlue">                                            
                                            <p>After hosting the greatest convention of all time (a.k.a. the Worst Convention EverCon) Marc, Theresa, Nancy, and Jay will simply walk into Mordor and cast the one ring into the fires of Mount Doom.</p>
                                            <p>Once the convention and festivities have concluded we plan to host a forum to crowd-source information via various polls and elaboration topics in order to get a ground-level insight into what our friends, peers, and guests are looking for, what can be improved, and what hit the mark.</p>
                                            <p>After enough information is gathered we will host a digital conference that will serve to reiterate the poll findings and promote discussion and questions. Future iterations and versions of the conference will aim to be open-source where fans and attendees can "meet the geeks", contribute, and help us build the future. We will be accepting of all sorts of productive feedback to further provide future attendees with the upgrades and features they deserve on behalf of their collective Asgardian birthright.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col aboutDropdownSpacer">                                                                  
                                </div>
                            </div>
                        </div>


{/* email thing */}

                        {/* <a type="button" className="container button-55 bgLightBlue borderYellow mt-3" data-bs-toggle="collapse" href="#contact-us-collapse-component" role="button" aria-expanded="false" aria-controls="contact-us-collapse-component">
                            <div className="container text-start">
                                <div className="row">
                                    <div className="col-9 text-start text-uppercase fs2p0 badaboom font-spidey-yellow textBorderBlack align-self-center">
                                        Contact Us!
                                    </div>
                                    <div className="col-3 text-end font-spidey-yellow">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" className="bi bi-chevron-expand" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd" d="M3.646 9.146a.5.5 0 0 1 .708 0L8 12.793l3.646-3.647a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 0-.708zm0-2.292a.5.5 0 0 0 .708 0L8 3.207l3.646 3.647a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 0 0 0 .708z" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <div className="container-fluid mt-3">
                            <div className="row">
                                <div className="col aboutDropdownSpacer">                                    
                                </div>
                                <div className="col m-0 p-0">
                                    <div className="collapse mb-3" id="contact-us-collapse-component">
                                        <div className="container contactUsEnvelope border border-danger bgLightYellow mb-5">
                                            <div className="row">
                                                <div className="col">
                                                    <ContactUs />
                                                </div>
                                            </div> 
                                        </div>
                                    </div>
                                </div>
                                <div className="col aboutDropdownSpacer">                                                                  
                                </div>
                            </div>
                        </div> */}




                    </div>
                    <div className="col-1">
                        &nbsp;
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 my-4"></div>
                </div>
            </div>

            <div className="container my-5">
                <div className="row">
                    <div className="col-1">
                        &nbsp;
                    </div>
                    <div className="col-10 contactUsEnvelope border border-danger bgLightYellow">
                        <ContactUs />
                    </div>
                    <div className="col-1">
                        &nbsp;
                    </div>
                </div> 
            </div>
        </>
    );
};
