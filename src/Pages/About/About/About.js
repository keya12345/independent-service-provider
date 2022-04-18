import React from "react";

const About = () => {
  return (
    <div>
      <div>
        <h6 className="text-primary">
          1) Difference between authorization and authentication:
        </h6>
        <p>
          Authentication: Someone, something, someone's something (which is
          claimed to be correct)The process of determining whether it is
          actually true (Giving Assurance)
        </p>
        <p>
          Authorization: The process of giving someone permission to do
          something or to use a resource.
        </p>
      </div>
      <div>
        <h6 className="text-primary">
          Why we use firebase? What other options do you have to implement
          authentication?
        </h6>
        <p>
          Firebase:Firebase is a backend system which offers a link between
          mobile applications and web to the backend cloud storage and backend
          APIs.Firebase is a remote database. Store images,messages,user data
          etc.for your app. Easer,faster owned by google.Firebase allow syncing
          the real-time data across all the device-Android,iOS,and the web
          without refreshing the screen.
        </p>
      </div>
    </div>
  );
};

export default About;
