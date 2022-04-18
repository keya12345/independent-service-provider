import React from "react";

const Blog = () => {
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
          2)Why we use firebase? What other options do you have to implement
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
        <p>Other option is react-firebase-hooks to implement authentication.</p>
      </div>
      <div>
        <h6 className="text-primary">
          3)What other services does firebase provide other than authentication
        </h6>
        <p>
          a)Firebase manages all data real-time in the database.So, the exchange
          of data and from the database is easy and quick.Hence,if we are
          looking to develop mobile apps such as live streaming,chat
          messaging,etc.,we can use Firebase.
        </p>
        <p>
          b)Firebase offers integration to Google Ads,AdMob,DoubleClick,Play
          Store,Data Studio,BigQuery,and Slack, to make our app development with
          efficient and accurate management and maintenace.
        </p>
        <p>
          c)Everything from databases,analytics to crashing reports are included
          in Firebase.So,the app development teams can stay focused on improving
          the user experience.
        </p>
      </div>
    </div>
  );
};

export default Blog;
