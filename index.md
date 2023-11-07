---
title: About | Balint Biro
layout: template
filename: index
--- 

<h2 class="main-title">About</h2>


<div class="box" style="width: auto; background-color: #181c21;border: 10px solid #181c21;border-radius: 10px;height: 300px;display: flex;color: white;margin: 0px 2px;">
    <div>
        <img src="static/images/cv_photo.jpg" alt="CV photo" style="max-width: 100%; max-height: 100%; display: block; border-radius: 10px;">
    </div>
    <div style="padding: 20px; width: 60%;">
        <p>Hi, my name is Balint Biro and welcome to my personal website!</p>
        <p>This website is a reflection of my passions, interests, and experiences. I am a full-time Product Owner, currently living in Budapest with my beautiful girlfriend, Anna and our crazy black cat, Dante.</p>
        <p>Through these pages, I'll be sharing a piece of my world and the stories that shape it.</p>
        <p>Please also find me on:</p>
        <a class="contact-option" href="mailto:birobalint95@gmail.com" style="margin-right: 16px;"><i class="fa fa-envelope"></i></a>
        <a class="contact-option" href="https://www.linkedin.com/in/balintbiro" style="margin-right: 16px;"><i class="fa fa-linkedin-square"></i></a>
        <a class="contact-option" href="https://www.facebook.com/biro95" style="margin-right: 16px;"><i class="fa fa-facebook-square"></i></a>
        <a class="contact-option" href="https://www.instagram.com/birobalint"><i class="fa fa-instagram"></i></a>
    </div>
</div>

<div class="content-section">
    <group id="group-of-details" style="position: -webkit-sticky; position: sticky; top: 90px; background-color: #232931; z-index: 99;">
        <a id="about-skills" class="detail-category selected" href="#" onclick="selectAboutDetailTab(this)">Skills</a>
        <a id="about-certifications" class="detail-category" href="#" onclick="selectAboutDetailTab(this)">Certifications</a>
        <a id="about-studies" class="detail-category" href="#" onclick="selectAboutDetailTab(this)">Studies</a>
        <a id="about-hobbies" class="detail-category" href="#" onclick="selectAboutDetailTab(this)">Hobbies</a>
    </group>
    <div id="rounded-spacer-for-tab-contents"></div>
    <div id="tab-content-skills-about" title="about-skills" class="tab-content displayed">
        <p style="padding-left: 40px; margin-bottom: 0px; margin-top: 0px;">Languages</p>
        <section id="language-skill-cards-section" class="skill-cards" style="color: black;"></section>
        <p style="padding-left: 40px; margin-bottom: 0px; margin-top: 0px;">Methodologies and frameworks</p>
        <section id="methodology-skill-cards-section" class="skill-cards" style="color: black;"></section>
        <p style="padding-left: 40px; margin-bottom: 0px; margin-top: 0px;">Management and ownership</p>
        <section id="management-skill-cards-section" class="skill-cards" style="color: black;"></section>
    </div>
    <div id="tab-content-certifications-about" title="about-certifications" class="tab-content">
        <section id="certification-cards-section" class="certification-cards"></section>
    </div>
    <div id="tab-content-studies-about" title="about-studies" class="tab-content">
        <div class="container-of-timeline-of-studies">
            <div class="timeline-of-studies">
                <ul class="list-of-studies">
                    <li class="study-item selected" ng-repeat="itembx">
                        <a id="university-degree-study" href="javascript:void(0)" onclick="getStudyDetails(this.id)">
                            <div class="education-result">University degree</div>
                            <div class="education-location">
                                University of Technology<br>Budapest, Hungary
                            </div>
                        </a>
                    </li>
                    <li class="study-item" ng-repeat="itembx">
                        <a id="language-learning-study" href="javascript:void(0)" onclick="getStudyDetails(this.id)">
                            <div class="education-result">Language learning</div>
                            <div class="education-location">
                                De La Salle Gymnasium<br>Vienna, Austria
                            </div>
                        </a>
                    </li>
                    <li class="study-item" ng-repeat="itembx">
                        <a id="school-leaving-study" href="javascript:void(0)" onclick="getStudyDetails(this.id)">
                            <div class="education-result">School leaving exam</div>
                            <div class="education-location">
                                Bolyai Janos High School<br>Szombathely, Hungary
                            </div>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div id="content-of-roles" class="container-of-content-of-studies">
            <div title="university-degree-study" class="study-content displayed">
                <div class="study-title-section">
                    <h2 class="study-title">University degree
                        <span class="study-date">2014 Sep - 2018 Jun</span>
                    </h2>
                    <h4 class="study-location">University of Technology, Budapest, Hungary</h4>
                </div>
                <div class="study-description-section">
                    <div id="study-description-university-degree" class="study-description">
                        <p>My thesis was about designing a steering actuator for our driverless electric race car at BME Formula Racing Team. To achieve this, I went with the traditional waterfall method as it fit into the approach we have followed on vehicle level. This included the following actions:</p>
                        <ul>
                            <li>Collecting requirements (from the aspects of regulations and team needs)</li>
                            <li>Benchmarking and literature research</li>
                            <li>Conceptual design creation</li>
                            <li>Calculations to validate the concept</li>
                            <li>Pre-design, choosing off-the-shelf products</li>
                            <li>Structural design creation</li>
                            <li>Manufacturing and ordering products</li>
                            <li>Assembling and testing</li>
                            <li>Suggestions for improvement, summary</li>
                        </ul>
                        <p>Downloadable links:
                            <a class="cv-download" title="download CV" id="download" href="static/pdfs/CV_eng.pdf" target="_blank" style="margin-left: 8px;">
                                <svg class="download-icon" width="13" height="16" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="download-arrow" d="M13 9L9 13M9 13L5 9M9 13V1" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                <span> Thesis</span>
                            </a>
                            <a class="cv-download" title="download CV" id="download" href="static/pdfs/CV_eng.pdf" target="_blank" style="margin-left: 8px;">
                                <svg class="download-icon" width="13" height="16" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="download-arrow" d="M13 9L9 13M9 13L5 9M9 13V1" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                <span> Drawings (zip)</span>
                            </a>
                            <a class="cv-download" title="download CV" id="download" href="static/pdfs/CV_eng.pdf" target="_blank" style="margin-left: 8px;">
                                <svg class="download-icon" width="13" height="16" viewBox="0 0 18 22" fill="none" xmlns="http://www.w3.org/2000/svg"><path class="download-arrow" d="M13 9L9 13M9 13L5 9M9 13V1" stroke-linecap="round" stroke-linejoin="round"></path><path d="M1 17V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H14C14.7956 21 15.5587 20.6839 16.1213 20.1213C16.6839 19.5587 17 18.7956 17 18V17" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                <span> Presentation</span>
                            </a>
                        </p>
                        <p>Please forgive me that they are written only in Hungarian.</p>
                        <img src="static/videos/steering_actuator.gif" style="max-width: 100%; max-height: 100%;">
                    </div>
                </div>
            </div>
            <div title="language-learning-study" class="study-content">
                <div class="study-title-section">
                    <h2 class="study-title">Language learning
                        <span class="study-date">2012 Sep - 2013 Sep</span>
                    </h2>
                    <h4 class="study-location">De La Salle Gymnasium, Vienna, Austria</h4>
                </div>
                <div class="study-description-section">
                    <div id="study-description-language-learning" class="study-description">
                        <p>Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla?</p>
                    </div>
                </div>
            </div>
            <div title="school-leaving-study" class="study-content">
                <div class="study-title-section">
                    <h2 class="study-title">School leaving exam
                        <span class="study-date">2002 Sep - 2014 Jun</span>
                    </h2>
                    <h4 class="study-location">Bolyai Janos High School, Szombathely, Hungary</h4>
                </div>
                <div class="study-description-section">
                    <div id="study-description-school-leaving" class="study-description">
                        <p>Eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla?</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div id="tab-content-hobbies-about" title="about-hobbies" class="tab-content" style="color: black;">
        <section id="hobby-cards-section" class="hobby-cards"></section>
    </div>
</div>
