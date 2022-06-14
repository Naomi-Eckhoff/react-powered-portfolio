import React from 'react';
import MyResume from '../../assets/pdf/resume.pdf';

function Resume() {
  return (
    <section id="resume" class="my-resume">
      <div class="leftHeader">
        <h2>My Resume</h2>
      </div>
      <div class="mainContents">
        <p>
          Below is a copy of my resume. If you click
          <a
            href={MyResume} download> resume </a>
          you can download a copy
        </p>
        <br />
        <embed src={MyResume} type="application/pdf" width="100%" height="1200px" />
      </div>
    </section>
  )

}

export default Resume;