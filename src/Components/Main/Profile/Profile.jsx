/* eslint-disable linebreak-style */
import React from 'react';
import styleProfile from './Profile.module.css';
import logo from './../../img/logoo.png';
// eslint-disable-next-line require-jsdoc
function Profile() {
  return (
    <main className={styleProfile.profile}>
      <div className={styleProfile.information}>
        <div className={styleProfile.logoBox}>
          <img className={styleProfile.logo} src={logo} />
        </div>
        <div className={styleProfile.infoBox}>
          <div className={`${styleProfile.info} ${styleProfile.name}`}>
            {' '}
            Name: Timur
          </div>
          <div className={`${styleProfile.info} ${styleProfile.surname}`}>
            Surname: Kamalov
          </div>
          <div className={`${styleProfile.info} ${styleProfile.age}`}>
            Age: 18
          </div>
          <div className={`${styleProfile.info} ${styleProfile.gender}`}>
            Gender: Male
          </div>
          <div className={`${styleProfile.info} ${styleProfile.solvedTasks}`}>
            Solved Tasks: 53
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;
