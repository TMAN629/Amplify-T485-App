import React from 'react';

import { Amplify } from 'aws-amplify';
import { Authenticator,useTheme,Heading, Text } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from '../aws-exports';
Amplify.configure(awsExports);

function Events() {
  return (
    <div className="container-fluid photo-section color-scheme-alt">
      <h3 className="section-heading">Events for January</h3>
      <Authenticator hideSignUp={true}>
        {({ signOut, user }) => (
          <>
            <button onClick={signOut}>Sign out</button>
            <div className="events">
            <br />
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Monday</th>
                    <th scope="col">Tuesday</th>
                    <th scope="col">Wednesday</th>
                    <th scope="col">Thursday</th>
                    <th scope="col">Friday</th>
                    <th scope="col">Saturday</th>
                    <th scope="col">Sunday</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Event</td>
                    <td>Event</td>
                    <td>Event</td>
                    <td>Event</td>
                    <td>Event</td>
                    <td>Event</td>
                    <td>Event</td>
                  </tr>
                  <tr>
                    <td>Event</td>
                    <td>Event</td>
                    <td>Event</td>
                    <td>Event</td>
                    <td>Event</td>
                    <td>Event</td>
                    <td>Event</td>
                  </tr>
                  <tr>
                    <td>Event</td>
                    <td>Event</td>
                    <td>Event</td>
                    <td>Event</td>
                    <td>Event</td>
                    <td>Event</td>
                    <td>Event</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        )}
      </Authenticator>
    </div>
  );
}

export default Events;
