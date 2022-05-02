import React, { useState, useEffect, useRef } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import useMediaQuery from "@mui/material/useMediaQuery";

import styles from "./index.module.scss";
import { medium } from "~services/mediaQuery";

import Footer from "~components/Footer";

const Experience = () => {
  const [value, setValue] = useState(0);
  const isMobile = useMediaQuery(medium);

  const handleChange = (e, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={styles.screen}>
      <div className={styles.container}>
        <div className={styles.contentContainer}>
          <Tabs
            orientation={isMobile ? "horizontal" : "vertical"}
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={styles.tabsContainer}
            scrollButtons={true}
            allowScrollButtonsMobile
          >
            <Tab label="Fight™" className={styles.tab} />
            <Tab label="Curastory" className={styles.tab} />
            <Tab label="NomɅd" className={styles.tab} />
            <Tab label="BrikPay" className={styles.tab} />
          </Tabs>

          {value === 0 && (
            <div className={styles.tabPanel}>
              <h2>
                <span>Fight™</span> - Chief Technology Officer
              </h2>
              <h3>February 2021 - Present</h3>
              <h2>- Frontend Software Developer Intern</h2>
              <h3>January 2021 - February 2021</h3>
              <ul>
                <li>
                  <span>In-game Overlay:</span> Designed, developed, and
                  integrated an Overwolf overlay desktop application for Fight™
                  gamers to communicate, share statistics, configure profiles,
                  and supplement gameplay.
                </li>
                <li>
                  <span>User Settings:</span> Designed and integrated
                  fully-featured user settings.
                </li>
                <li>
                  <span>Notifications:</span> Designed and integrated a
                  notification system allowing users to push and receive
                  notifications.
                </li>
              </ul>
            </div>
          )}
          {value === 1 && (
            <div className={styles.tabPanel}>
              <h2>
                <span>Curastory</span> - Frontend Engineer Intern
              </h2>
              <h3>June 2021 - August 2021</h3>
              <ul>
                <li>
                  <span>Auto Bidding:</span> Built full user interface and
                  backend integrations for a bidding system in which users can
                  setup automatic campaign preferences to place bids on
                  promising up-and-coming athletic videos.
                </li>
                <li>
                  <span>Bug Fixes:</span> Addressed various bugs within the
                  platform to improve UX.
                </li>
              </ul>
            </div>
          )}
          {value === 2 && (
            <div className={styles.tabPanel}>
              <h2>
                <span>NomɅd</span>{" "}
                <span className={styles.subText}>(formerly VHomes)</span> - Head
                of Design Frontend Developer
              </h2>
              <h3>March 2021 - June 2021</h3>
              <h2>- Frontend Web Developer/Product Designer Intern</h2>
              <h3>January 2021 - March 2021</h3>
              <ul>
                <li>
                  <span>Reviews:</span> Developed a review system allowing the
                  UI to reflect review stars and comments left by customers.
                </li>
                <li>
                  <span>Redesign:</span> Redesigned and refactored every page,
                  creating an attractive and structured layout that provides an
                  enhanced UX.
                </li>
                <li>
                  <span>Featured Listings:</span> Connected backend routes to
                  the UI to show a carousel of the website&apos;s most viewed
                  listings.
                </li>
              </ul>
            </div>
          )}
          {value === 3 && (
            <div className={styles.tabPanel}>
              <h2>
                <span>BrikPay</span> - Frontend Web Developer Intern
              </h2>
              <h3>February 2021 - June 2021</h3>
              <ul>
                <li>
                  <span>Transactions: </span>Utilized Dwolla and Plaid to
                  integrate and manage incoming and outgoing bank transactions
                  via connected bank accounts.
                </li>
                <li>
                  <span>User Interface: </span> Used Bubble to build UI and
                  improve flow of pages.
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Experience;
