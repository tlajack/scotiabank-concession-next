'use client';

import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const Container = styled.div`
  padding: 1em;
  h1,
  h2 {
    text-align: center;
  }

  h1 {
    font-size: 2em;
    margin-top: -0.8em;
  }

  h2 {
    font-size: 1.5em;
  }
  .scotiaBank {
    display: flex;
    justify-content: space-evenly;
  }
  .notice {
    text-align: center;
  }
  .icons {
    display: flex;
    justify-content: space-evenly;
    margin: 3em 0;
  }
  .offerings {
    margin: 3em auto;
    display: grid;
    grid-template-columns: 1fr 3fr;
    .title {
      grid-column: 1/3;
      h3 {
        display: inline-block;
      }
      display: flex;
      flex-direction: row;
      justify-content: center;
      .titleIcon {
        margin-left: 1em;
        height: 60px;
      }
    }
    .eventGrid {
      margin-top: 1em;
      grid-column: 1/3;
      justify-content: center;
      display: grid;
      grid-template-columns: 1fr 3fr;
      strong {
        font-family: 'Proza Libre', sans-serif;
        font-weight: bold;
        color: black;
        font-size: larger;
      }

      .level {
        background-color: lightgray;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        min-height:7em;
        h4 {
          display: inline-block;
          transform: rotate(-90deg);
        }
      }
      .content {
        padding: 1em;
      }
    }
  }
  .menuButton {
    background-color: var(--primary-dark);
    color: white;
    display: block;
    position: fixed;
    right: 20px;
    bottom: 20px;
    text-align: center;
    padding: 1em 2em;
    border-radius: 6px;
    z-index: 100;
    cursor: pointer;
  }
  div.active {
    display: block;
  }

  div.inactive {
    display: none;
  }
`;

const FlyingMenuContainer = styled.div`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 100%;
  max-width: 300px;
  padding: 0 8px 10px;
  background-color: #f8f9fa;
  box-shadow: 0 0 20px rgb(0 0 0 / 15%);
  z-index: 200;
  overflow: auto;
  background-color: var(--primary-dark);

  ul {
    width: 100%;
    height: 100%;
    margin-block-start: 0;
    padding: 8px 0 8px;
  }
  li {
    display: flex;
    flex-direction: column;
    background-color: white;
    text-align: center;
    font-family: var(--titleFont);
    margin-bottom: 8px;
    &:hover {
      background-color: var(--grey-dark);
      a {
        color: white;
      }
    }
  }
  a {
    text-decoration: none;
    padding: 23px 0;
    height: 100%;
    color: var(--primary-dark);
  }
  &.active {
    display: block;
  }

  &.inactive {
    display: none;
  }
`;

export default function SpecialtyFoodPage() {
  const [menuState, setMenuState] = useState(false);

  function clickHandler() {
    setMenuState(!menuState);
  }

  return (
    <Container>
      <div className="scotiaBank">
        <Image
          src="/images/logo-scotiabankarena.png"
          alt="Scotiabank Arena Logo"
          width={300}
          height={200}
          style={{ height: '200px', width: 'auto' }}
        />
      </div>
      <h1>
        GLUTEN FRIENDLY, VEGETARIAN, VEGAN, HALAL &amp; KOSHER OFFERINGS
      </h1>
      <div className="icons">
        <Image
          src="/images/icon-gluten.png"
          alt="glutten free"
          width={50}
          height={50}
          style={{ height: '50px', width: 'auto' }}
        />
        <Image
          src="/images/icon-veg.png"
          alt="vegetarian"
          width={50}
          height={50}
          style={{ height: '50px', width: 'auto' }}
        />
        <Image
          src="/images/icon-vegan.png"
          alt="vegan"
          width={50}
          height={50}
          style={{ height: '50px', width: 'auto' }}
        />
        <Image
          src="/images/icon-halal.png"
          alt="halal"
          width={50}
          height={50}
          style={{ height: '50px', width: 'auto' }}
        />
        <Image
          src="/images/icon-kosher.png"
          alt="kosher"
          width={50}
          height={50}
          style={{ height: '50px', width: 'auto' }}
        />
      </div>
      <h2>Food Allergen Notice</h2>
      <p className="notice">
        Please inform our Concession Attendants of your allergy upon placing
        your order.
      </p>
      <p className="notice">
        Be advised we cannot guarantee that cross-contamination has not
        occurred during food preparation. If your allergy is severe, request
        to speak with a member of our Management team.{' '}
      </p>
      <p className="notice">
        Availability of specialty offerings is subject to change and during
        some concerts and special events, full menus may not be offered.
      </p>
      <div className="offerings" id="gluten">
        <div className="title">
          <h3>Gluten Friendly</h3>
          <Image
            className="titleIcon"
            src="/images/icon-gluten.png"
            alt="gluten"
            width={60}
            height={60}
            style={{ height: '60px', width: 'auto', marginLeft: '1em' }}
          />
        </div>

        <div className="eventGrid">
          <div className="level">
            <h4>
              EVENT <br /> LEVEL
            </h4>
          </div>
          <div className="content">
            <p>
              <strong>KIBO (Event Level)</strong> - Made to order upon request
              (select events only)
            </p>
          </div>
        </div>

        <div className="eventGrid">
          <div className="level">
            <h4>100 LEVEL</h4>
          </div>
          <div className="content">
            <p>
              <strong>St. Patties Burgers + Poutine (Section 122)</strong> –
              Cheese Please Burger (request GF bun), Smokehouse Burger (remove
              Onion Ring, request GF bun), Spice Box Burger (Remove Crispy
              Jalapeno, Request GF Bun), Vegan Burger (request GF bun), Fries
            </p>
          </div>
        </div>

        <div className="eventGrid">
          <div className="level">
            <h4>300 LEVEL</h4>
          </div>
          <div className="content">
            <p>
              <strong>Poutinerie (Section 322)</strong> – Fries
            </p>
          </div>
        </div>

        <div className="eventGrid">
          <div></div>
          <div className="content">
            <p>
              <strong>Gluten Friendly Snacks</strong> — Popcorn
            </p>
            <p>
              <strong>Strongbow Cider</strong> is available at most bars and
              concessions stands
            </p>
            <p>
              <strong>Ancestral Quinoa Beer</strong> is available at Coors
              Light Chill Zone at Section 314, as well as at bars located at
              Section 116, Section 118, Section 105, Section 111
            </p>
          </div>
        </div>
      </div>
      <div className="offerings" id="vegetarian">
        <div className="title">
          <h3>Vegetarian</h3>
          <Image
            className="titleIcon"
            src="/images/icon-veg.png"
            alt="vegetarian"
            width={60}
            height={60}
            style={{ height: '60px', width: 'auto', marginLeft: '1em' }}
          />
        </div>

        <div className="eventGrid">
          <div className="level">
            <h4>
              EVENT
              <br />
              LEVEL
            </h4>
          </div>
          <div className="content">
            <p>
              <strong>Aloette Go (Event Level)</strong> – Santa Fe Crunch
            </p>
            <p>
              <strong>KIBO (Event Level)</strong> – Vegetarian Maki, Spicy
              Vegetarian Maki, Spicy Mango Maki (select events only)
            </p>
          </div>
        </div>

        <div className="eventGrid">
          <div className="level">
            <h4>100 LEVEL</h4>
          </div>
          <div className="content">
            <p>
              <strong>Molson Market (Section 101)</strong> – KIBO vegan
              options available upon request (select events only), Vegan Power
              Bowl
            </p>
            <p>
              <strong>Hogtown (Section 103 &amp; 112)</strong> – Plant-Based
              Hot Dog
            </p>
            <p>
              <strong>Wicked Carib (Section 104)</strong> – Vegan Doubles
            </p>
            <p>
              <strong>Panini Shop (Section 106)</strong> Vegan Portobello
              Sandwich
            </p>
            <p>
              <strong>Real Sports (Section 109)</strong> Nacho Fries
            </p>
            <p>
              <strong>Mac & Cheese Boutique (Section 110)</strong> Classic mac
              &amp; Cheese, International Mac &amp; Cheese, Classic Grilled
              Cheese
            </p>
            <p>
              <strong>La Cantina (Section 120)</strong> – Vegan Chorizo
              Burrito, Loaded Nachos, French Fries
            </p>
            <p>
              <strong>Hot Stove Carve (Section 117)</strong> – Truffled
              Grilled Cheese
            </p>
            <p>
              <strong>Pizza Pizza (Section 121)</strong> – Cheese Slice,
              Vegetarian Slice
            </p>
            <p>
              <strong>St. Patties Burgers + Poutine (Section 122)</strong> –
              Vegan Burger, Fries, Vegan Mushroom Poutine, Fries & Gravy (ask
              for vegan gravy)
            </p>
          </div>
        </div>

        <div className="eventGrid">
          <div className="level">
            <h4>300 LEVEL</h4>
          </div>
          <div className="content">
            <p>
              <strong>Pizza Pizza (Section 307, Section 321)</strong> – Cheese
              Slice, Vegetarian Slice
            </p>
            <p>
              <strong>Hogtown (Section 320)</strong> – Plant-Based Hot Dog
            </p>
            <p>
              <strong>Poutinerie (Section 322)</strong> – Fries, Vegan
              Mushroom Poutine, Fries & Gravy (ask for vegan gravy)
            </p>
            <p>
              <strong>Food Junction (Section 324)</strong> Nacho Fries, Loaded
              Nachos
            </p>
          </div>
        </div>
        <div className="eventGrid">
          <div></div>
          <div className="content">
            <p>
              <strong>Vegetarian Snacks</strong> - Popcorn, Salted Pretzel,
              Plant-Based Drumstick (Section 321 only)
            </p>
          </div>
        </div>
      </div>{' '}
      {/* ########### vegan ############*/}
      <div className="offerings" id="vegan">
        <div className="title">
          <h3>Vegan</h3>
          <Image
            className="titleIcon"
            src="/images/icon-vegan.png"
            alt="vegan"
            width={60}
            height={60}
            style={{ height: '60px', width: 'auto', marginLeft: '1em' }}
          />
        </div>

        <div className="eventGrid">
          <div className="level">
            <h4>
              EVENT
              <br />
              LEVEL
            </h4>
          </div>
          <div className="content">
            <p>
              <strong>KIBO (Event Level)</strong> - Vegan options available
              upon request (select events only)
            </p>
          </div>
        </div>

        <div className="eventGrid">
          <div className="level">
            <h4>100 LEVEL</h4>
          </div>
          <div className="content">
            <p>
              <strong>Molson Market (Section 101)</strong> – KIBO vegan
              options available upon request (select events only), Vegan Power
              Bowl
            </p>
            <p>
              <strong>Hogtown (Section 103 &amp; 112)</strong> – Plant-Based
              Hot Dog
            </p>
            <p>
              <strong>Wicked Carib (Section 104)</strong> – Vegan Doubles
            </p>
            <p>
              <strong>Panini Shop (Section 106)</strong> – Vegan Portobello
              Sandwich
            </p>
            <p>
              <strong>La Cantina (Section 120)</strong> – Vegan Chorizo
              Burrito
            </p>
            <p>
              <strong>St. Patties Burgers + Poutine (Section 122)</strong> –
              Vegan Burger, Fries, Vegan Mushroom Poutine, Fries & Gravy (ask
              for vegan gravy)
            </p>
          </div>
        </div>
        <div className="eventGrid">
          <div className="level">
            <h4>300 LEVEL</h4>
          </div>
          <div className="content">
            <p>
              <strong>Hogtown (Section 320)</strong> – Plant-Based Hot Dog
            </p>
            <p>
              <strong>Poutinerie (Section 322)</strong> – Fries, Vegan
              Mushroom Poutine, Fries & Gravy (ask for vegan gravy)
            </p>
          </div>
        </div>
        <div className="eventGrid">
          <div></div>
          <div className="content">
            <p>
              <strong>Vegan Snacks</strong> - Popcorn, Salted Pretzel,
              Plant-Based Drumstick (Section 321 only)
            </p>
          </div>
        </div>
      </div>{' '}
      {/* ########### Halal ############*/}
      <div className="offerings" id="halal">
        <div className="title">
          <h3>Halal</h3>
          <Image
            className="titleIcon"
            src="/images/icon-halal.png"
            alt="halal"
            width={60}
            height={60}
            style={{ height: '60px', width: 'auto', marginLeft: '1em' }}
          />
        </div>

        <div className="eventGrid">
          <div className="level">
            <h4>
              EVENT
              <br /> LEVEL
            </h4>
          </div>
          <div className="content">
            <p>
              <strong>Hot Stove Carve (Event Level)</strong> – Prime Rib
              Sandwich
            </p>
            <p>
              <strong>Aloette Go (Event Level)</strong> – Fried Chicken
              Sandwich, Spicy Chicken Sandwich, Chicken Tenders
            </p>
          </div>
        </div>

        <div className="eventGrid">
          <div className="level">
            <h4>100 LEVEL</h4>
          </div>
          <div className="content">
            <p>
              <strong>Wicked Carib (Section 104)</strong> – Wicked Jerk
              Chicken Sandwich, Doubles, Wicked Jerk Chicken Roti Wrap, Wicked
              Beef & Oxtail Roti, Patty Sandwiches, Wicked BBQ Chicken
              Sandwich
            </p>
            <p>
              <strong>Gallery Bars (Section 108M, Section 117M)</strong> –
              Prime Rib Sandwich (select events only), Wicked Oxtail & Beef
              Patty Sandwich (select events only)
            </p>
            <p>
              <strong>Crispy (Section 107) </strong> – Chicken Drum Sticks (no
              potato waves), Chicken Tenders (no potato waves) Chicken
              Sandwich, Spicy Chicken Sandwich, Prime Rib Sandwich & Chips,
              Crispy KD Crunch
            </p>
            <p>
              <strong>La Cantina (Section 120) </strong> – Chicken Tenders &
              Fries, Buffalo Tenders & Fries, Chicken Burrito, Beef Burrito,
              Chicken Quesadilla, Beef Quesadilla, Loaded Nachos, Loaded Beef
              Nachos
            </p>
            <p>
              <strong>St. Patties Burgers + Poutine (Section 122)</strong> –
              Rotisserie Chicken Poutine (sub vegan gravy), Vegan Mushroom
              Poutine, Classic Poutine (sub vegan gravy), Fries & Gravy (sub
              vegan gravy)
            </p>
          </div>
        </div>

        <div className="eventGrid">
          <div className="level">
            <h4>300 LEVEL</h4>
          </div>
          <div className="content">
            <p>
              <strong>Crispy (Section 318) </strong> – Chicken Tenders (no
              potato waves) Chicken Sandwich, Spicy Chicken Sandwich, Crispy
              KD Crunch
            </p>
            <p>
              <strong>Poutinerie (Section 322)</strong> – Rotisserie Chicken
              Poutine (sub vegan gravy), Vegan Mushroom Poutine, Classic
              Poutine (sub vegan gravy), Fries & Gravy (sub vegan gravy)
            </p>
            <p>
              <strong>Food Junction (Section 324)</strong> – Fingers & Fries,
              Buffalo Fingers & Fries, Nacho Fries, Loaded Nachos, Prime Rib
              Sandwich & Chips
            </p>
          </div>
        </div>
      </div>{' '}
      {/* ########### Kosher ############*/}
      <div className="offerings" id="kosher">
        <div className="title">
          <h3>Kosher</h3>
          <Image
            className="titleIcon"
            src="/images/icon-kosher.png"
            alt="gluten"
            width={60}
            height={60}
            style={{ height: '60px', width: 'auto', marginLeft: '1em' }}
          />
        </div>
        <div className="eventGrid">
          <div className="level">
            <h4>100 LEVEL</h4>
          </div>
          <div className="content">
            <p>
              <strong>Bay St. Deli (Section 105)</strong> - Dedicated Kosher
              concession stand. Operating hours dependent on religious
              observation.
            </p>
          </div>
        </div>
      </div>{' '}
      {/* ########### Kosher ############*/}
      <div
        role="button"
        tabIndex={-1}
        onClick={clickHandler}
        onKeyDown={clickHandler}
        className="menuButton"
      >
        Menu
      </div>
      <FlyingMenuContainer className={menuState ? 'active' : 'inactive'}>
        <ul>
          <li>
            <a
              role="button"
              tabIndex={-2}
              onClick={clickHandler}
              onKeyDown={clickHandler}
              href="#gluten"
            >
              Gluten Friendly
            </a>
          </li>
          <li>
            <a
              role="button"
              tabIndex={-3}
              onClick={clickHandler}
              onKeyDown={clickHandler}
              href="#vegetarian"
            >
              Vegetarian
            </a>
          </li>
          <li>
            <a
              role="button"
              tabIndex={-4}
              onClick={clickHandler}
              onKeyDown={clickHandler}
              href="#vegan"
            >
              Vegan
            </a>
          </li>
          <li>
            <a
              role="button"
              tabIndex={-5}
              onClick={clickHandler}
              onKeyDown={clickHandler}
              href="#halal"
            >
              Halal
            </a>
          </li>
          <li>
            <a
              role="button"
              tabIndex={-5}
              onClick={clickHandler}
              onKeyDown={clickHandler}
              href="#kosher"
            >
              Kosher
            </a>
          </li>
        </ul>
      </FlyingMenuContainer>
    </Container>
  );
}
