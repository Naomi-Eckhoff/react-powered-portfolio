import React from 'react';
import MyResume from '../../assets/pdf/resume.pdf';
import KUCert from '../../assets/images/KUCert.jpg';

function Resume() {
  return (
    <section id="resume" class="my-resume">
      <div class="leftHeader">
        <h2>My Resume</h2>
      </div>
      <div class="mainContents">
        <h3>My Resume</h3>
        <br />
        <p>
          Below is a copy of my resume. If you click
          <a
            href={MyResume} download> resume </a>
          you can download a copy
        </p>
        <br />
        <div>
          <embed src={MyResume} type="application/pdf" width="100%" height="1125px" />
        </div>
        <br />
        <h3>My Certificates</h3>
        <img src={KUCert} alt="This is the certificate from KU's coding bootcamp" class="certifications" />
      </div>
    </section>
  )

}

export default Resume;