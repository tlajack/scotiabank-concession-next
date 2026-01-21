'use client';

import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const MenuItem = styled.div`
  display: grid;

  * {
    margin: 0;
  }

  grid-template-columns: 5fr 1fr;
  margin-bottom: 2rem;

  h2 {
    align-self: center;
    font-size: 1.2rem;
  }
  .price {
    align-self: center;
    font-family: 'Proza Libre', sans-serif;
  }

  .description {
    grid-column: 1/2;
  }
  .menuPhoto {
    grid-column: 1/3;
    margin-bottom: 1em;
  }
`;

const Drinks = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  h1 {
    text-align: left !important;
  }
  .photo {
    grid-column: 1/2;
  }
  .description {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .drinkType {
  }
  .wide {
    grid-column: 1/3;
    margin-right: 1em;
  }
  .drinkPrice {
    padding-right: 1em;
  }

  @media (max-width: 768px) {
    font-size: 0.8em !important;
    line-height: 1em;
    p {
      margin: 0 0 1em;
      font-size: 1.1em !important;
      line-height: 1.4em;
    }
    h1 {
      font-size: 1.5em !important;
      line-height: 1.5em !important;
    }
  }
`;

const MenuContainer = styled.div`
  max-width: 620px;
  background-color: #341a0f;
  padding: 1rem;
  margin: auto;
  color: white;
  .notes {
    font-size: 0.8em;
  }
  h1 {
    color: var(--red);
    font-size: 1.8rem;
    margin-top: 2.5rem;
    text-align: center;
    text-transform: uppercase;
  }

  .sectionTitle {
    color: black !important;
    font-size: 2em !important;
    grid-column: 1/3;
  }

  .logo {
    width: 100%;
    display: block !important;
    margin: auto;
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

const DraughtDeck = styled.div`
  background-color: #eee;
  color: black;
  .notes {
    margin: 0 1em;
    font-size: 1em;
  }

  .centered {
    text-align: center;
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

const Liquor = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  .liquorTitle {
    grid-column: 1/2;
    text-align: center;
  }
  .liquorPrice {
    grid-column: 2/3;
    margin-left: 1em;
  }
  h2 {
    color: var(--red);
    grid-column: 1/3;
    text-align: center;
  }
`;

const Layout = styled.div<{ $bgColour?: string }>`
  background-color: ${(props) => props.$bgColour || 'white'};
  min-height: 100vh;
`;

export default function DraughtDeckPage() {
  const [menuState, setMenuState] = useState(false);

  function clickHandler() {
    setMenuState(!menuState);
  }

  return (
    <Layout $bgColour="#341a0f">
      <MenuContainer>
        <Image
          className="logo"
          src="/images/logo-CherrySt.png"
          alt="Cherry St. Logo"
          width={620}
          height={200}
          style={{ width: '100%', height: 'auto' }}
        />
        <h1 id="entree">Entree</h1>
        <MenuItem>
          <Image
            className="menuPhoto"
            src="/images/CherrySt-.jpg"
            alt="Prime Rib Sandwich"
            width={620}
            height={400}
            style={{ width: '100%', height: 'auto', gridColumn: '1/3', marginBottom: '1em' }}
          />
          <h2>Prime Rib Sandwich</h2>
          <p className="price">25.50</p>
          <div className="description">
            <p>
              Hand Carved AAA Prime Rib Sandwich served on a Fresh Onion Bun
              with Kettle Chips
            </p>
            <p>
              <strong>Add Fries for $5.00</strong>
            </p>
          </div>
        </MenuItem>
        <MenuItem>
          <Image
            className="menuPhoto"
            src="/images/CherrySt-7.jpg"
            alt="Brisket Sandwich"
            width={620}
            height={400}
            style={{ width: '100%', height: 'auto', gridColumn: '1/3', marginBottom: '1em' }}
          />
          <h2>Cherry Street Brisket Sandwich</h2>
          <p className="price">21.50</p>
          <div className="description">
            <p>
              Texas Style Beef Brisket smoked over white oak, Pickles, Onions
              and House BBQ sauce on a Toasted Potato Scallion Bun
            </p>
            <p>
              <strong>Add Fries for $5.00</strong>
            </p>
          </div>
        </MenuItem>
        <MenuItem>
          <Image
            className="menuPhoto"
            src="/images/CherrySt-8.jpg"
            alt="Cherry Street Double Stack Burger"
            width={620}
            height={400}
            style={{ width: '100%', height: 'auto', gridColumn: '1/3', marginBottom: '1em' }}
          />
          <h2>Cherry Street Double Stack Burger</h2>
          <p className="price">20.00</p>
          <div className="description">
            <p>
              Two 4oz USDA Prime Brisket Patties, Lettuce, Tomato, Onion,
              Pickles, Cherry Street Special Sauce on a Toasted Potato Scallion
              Roll
            </p>
            <p>
              <strong>Add Fries for $5.00</strong>
            </p>
          </div>
        </MenuItem>
        <MenuItem>
          <Image
            className="menuPhoto"
            src="/images/CherrySt-2.jpg"
            alt="Pulled Pork Sandwich"
            width={620}
            height={400}
            style={{ width: '100%', height: 'auto', gridColumn: '1/3', marginBottom: '1em' }}
          />
          <h2>Cherry Street Pulled Pork Sandwich</h2>
          <p className="price">18.50</p>
          <div className="description">
            <p>
              Slow Smoked Pork Shoulder, Slaw, Pickle and BBQ Sauce on a Toasted
              Potato Scallion Bun
            </p>
            <p>
              <strong>Add Fries for $5.00</strong>
            </p>
          </div>
        </MenuItem>
        <MenuItem>
          <Image
            className="menuPhoto"
            src="/images/CherrySt-9.jpg"
            alt="Cherry Street Porchetta Sausage"
            width={620}
            height={400}
            style={{ width: '100%', height: 'auto', gridColumn: '1/3', marginBottom: '1em' }}
          />
          <h2>Cherry Street Porchetta Sausage</h2>
          <p className="price">14.50</p>
          <div className="description">
            <p>
              <strong>Add Fries for $5.00</strong>
            </p>
          </div>
        </MenuItem>
        <MenuItem>
          <Image
            className="menuPhoto"
            src="/images/CherrySt-10.jpg"
            alt="Cherry Street BBQ Empanadas"
            width={620}
            height={400}
            style={{ width: '100%', height: 'auto', gridColumn: '1/3', marginBottom: '1em' }}
          />
          <h2>Cherry Street BBQ Empanadas </h2>
          <p className="price">13.00</p>
          <div className="description">
            <p>
              <strong>Add Fries for $5.00</strong>
            </p>
          </div>
        </MenuItem>
        <p className="notes">Prices exclude all applicable taxes</p>
        <h1 id="nonalcoholic">NON-ALCOHOLIC</h1>
        <MenuItem>
          <h2>32oz Collector Cup</h2>
          <p className="price">12.25</p>
          <div className="description">
            <p>Coke, Diet Coke, Sprite, Coke Zero Sugar, Fanta</p>
          </div>
        </MenuItem>
        <MenuItem>
          <h2>Coca-Cola Fountain Beverages</h2>
          <p className="price">7.75</p>
          <div className="description">
            <p>Coke, Diet Coke, Sprite, Coke Zero Sugar, Fanta</p>
          </div>
        </MenuItem>
        <MenuItem>
          <h2>Coca-Cola Bottled Beverages</h2>
          <p className="price">7.75</p>
          <div className="description">
            <p>Root Beer, Nestea, Apple Juice, AHA&nbsp;Sparkling Water</p>
          </div>
        </MenuItem>
        <MenuItem>
          <h2>smartwater</h2>
          <p className="price">7.25</p>
        </MenuItem>
        <MenuItem>
          <h2>Red Bull</h2>
          <p className="price">8.00</p>
          <div className="description">
            <p>Regular or Sugar Free</p>
          </div>
        </MenuItem>
        <p className="notes">Prices exclude all applicable taxes</p>
        <h1 id="snacks">SNACKS</h1>
        <MenuItem>
          <h2>Bagged Popcorn</h2>
          <p className="price">10.50</p>
        </MenuItem>
        <MenuItem>
          <h2>Bagged Chocolate</h2>
          <p className="price">12.25</p>
        </MenuItem>
        <MenuItem>
          <h2>Bagged Candy</h2>
          <p className="price">10.50</p>
        </MenuItem>
        <p className="notes">Prices exclude all applicable taxes</p>
        <DraughtDeck id="alcohol">
          <Image
            className="logo"
            src="/images/coorsChillZone.png"
            alt="Coors Chill Zone"
            width={620}
            height={200}
            style={{ width: '100%', height: 'auto' }}
          />
          <p className="notes centered">
            You must be 19 years of age or older to purchase and consume
            alcohol. Please have your ID ready. Scotiabank Arena has a 2-drink
            limit.
          </p>
          <Drinks>
            <div>
              <Image src="/images/drink-01a.png" alt="Coors Light" width={150} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
              <h1>Coors Light</h1>
              <div className="description">
                <p className="drinkType">DRAUGHT</p>
                <p className="drinkPrice">
                  625ml - $14.50
                  <br />
                  725ml - $17.50
                </p>
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$13.25</p>
              </div>
            </div>
          </Drinks>

          <Drinks>
            <div>
              <Image src="/images/drink-01.png" alt="Molson Canadian" width={150} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
              <h1>Molson Canadian</h1>
              <div className="description">
                <p className="drinkType">DRAUGHT</p>
                <p className="drinkPrice">
                  625ml - $14.50
                  <br />
                  725ml - $17.50
                </p>
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$13.25</p>
              </div>
            </div>
          </Drinks>

          <Drinks>
            <div>
              <Image src="/images/drink-02.png" alt="Coors Original" width={150} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
              <h1>Coors Original</h1>
              <div className="description">
                <p className="drinkType">DRAUGHT</p>
                <p className="drinkPrice">
                  625ml - $15.25
                  <br />
                  725ml - $18.25
                </p>
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$14.25</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <Image src="/images/drink-03-alt.png" alt="BLUE MOON" width={150} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
              <h1>BLUE MOON</h1>
              <div className="description">
                <p className="drinkType">DRAUGHT</p>
                <p className="drinkPrice">
                  625ml - $15.25
                  <br />
                  725ml - $18.25
                </p>
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$14.25</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <Image src="/images/drink-04.png" alt="Hop Valley IPA" width={150} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
              <h1>Hop Valley IPA</h1>
              <div className="description">
                <p className="drinkType">DRAUGHT</p>
                <p className="drinkPrice">
                  625ml - $15.25
                  <br />
                  725ml - $18.25
                </p>
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$14.25</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <Image src="/images/drink-05.png" alt="CREEMORE LAGER" width={150} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
              <h1>CREEMORE LAGER</h1>
              <div className="description">
                <p className="drinkType">DRAUGHT</p>
                <p className="drinkPrice">
                  625ml - $15.25
                  <br />
                  725ml - $18.25
                </p>
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$14.25</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <Image src="/images/drink-05-IPA.png" alt="CREEMORE IPA" width={150} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
              <h1>CREEMORE IPA</h1>
              <div className="description">
                <p className="drinkType">DRAUGHT</p>
                <p className="drinkPrice">
                  625ml - $15.25
                  <br />
                  725ml - $18.25
                </p>
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$14.25</p>
              </div>
            </div>
          </Drinks>

          <Drinks>
            <div>
              <Image src="/images/drink-13.png" alt="Miller Lite" width={150} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
              <h1>Miller Lite</h1>
              <div className="description">
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$13.25</p>
              </div>
            </div>
          </Drinks>

          <Drinks>
            <div>
              <Image src="/images/drink-07-alt.png" alt="CREEMORE PILSNER" width={150} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
              <h1>CREEMORE PILSNER</h1>
              <div className="description">
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$14.25</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <Image src="/images/drink-08.png" alt="Sol" width={150} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
              <h1>Sol</h1>
              <div className="description">
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$14.25</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <Image src="/images/drink-09.png" alt="HEINEKEN" width={150} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
              <h1>HEINEKEN</h1>
              <div className="description">
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$14.75</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <Image src="/images/drink-10.png" alt="strongbow cider" width={150} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
              <h1>strongbow cider</h1>
              <div className="description">
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$14.75</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <Image src="/images/drink-28.png" alt="Madri Exceptional" width={150} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
              <h1>Madri Exceptional</h1>
              <div className="description">
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$14.75</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <Image src="/images/drink-11-alt.png" alt="Vizzy" width={150} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
              <h1>Vizzy Hard Seltzer</h1>
              <div className="description">
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$14.25</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <Image src="/images/drink-15.png" alt="Smirnoff Ice" width={150} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
              <h1>Smirnoff Ice</h1>
              <div className="description">
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$14.25</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <Image src="/images/drink-27.png" alt="Arizona Hard Ice Tea" width={150} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
              <h1>Arizona Hard Ice Tea</h1>
              <div className="description">
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$14.25</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <Image src="/images/drink-29.png" alt="Coors Seltzer" width={150} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
              <h1>Coors Seltzer</h1>
              <div className="description">
                <p className="drinkType">TALL CAN</p>
                <p className="drinkPrice">$14.25</p>
              </div>
            </div>
          </Drinks>

          <Drinks>
            <div>
              <Image src="/images/drink-24.png" alt="Heineken 0.0" width={150} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
              <h1>Heineken 0.0</h1>
              <div className="description">
                <p className="drinkType">Non-Alcoholic Beer</p>
                <p className="drinkPrice"></p>
                <p className="drinkType">330ml CAN</p>
                <p className="drinkPrice">$8.50</p>
              </div>
            </div>
          </Drinks>
          <h1 className="sectionTitle">Signature Cocktails</h1>

          <Drinks>
            <div>
              <Image src="/images/drink-25.png" alt="Mango Tango " width={150} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
              <h1>Mango Tango </h1>
              <div className="description">
                <p className="drinkType wide">
                  1.5oz CIROC Mango, Cranberry Juice, Lemonade, Sprite
                </p>
                <p className="drinkPrice">$20.00</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <Image src="/images/drink-21.png" alt="Peach Punch" width={150} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
              <h1>Peach Punch</h1>
              <div className="description">
                <p className="drinkType wide">
                  1.5oz CIROC Peach, Cranberry Juice, Orange Juice, Lime
                </p>
                <p className="drinkPrice">$20.00</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <Image src="/images/drink-26.png" alt="Pineapple Breezer" width={150} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
              <h1>Pineapple Breezer</h1>
              <div className="description">
                <p className="drinkType wide">
                  1.5oz CIROC Pineapple, Grapefruit Juice, Sprite
                </p>
                <p className="drinkPrice">$20.00</p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <Image src="/images/drink-22.png" alt="Buzzer Beater" width={150} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
              <h1>Buzzer Beater</h1>
              <div className="description">
                <p className="drinkType wide">
                  Smirnoff Vodka, Watermelon Red Bull, Lime
                </p>
                <p className="drinkPrice">
                  1oz&emsp;$17.75
                  <br />
                  2oz&emsp;$27.50
                </p>
              </div>
            </div>
          </Drinks>
          <Drinks>
            <div>
              <Image src="/images/drink-23.png" alt="Citrus Sling" width={150} height={300} style={{ width: '100%', height: 'auto' }} />
            </div>
            <div>
              <h1>
                Citrus Sling <br />
                <small>(mocktail)</small>
              </h1>
              <div className="description">
                <p className="drinkType wide">
                  Seedlip Non-Alcoholic Spirits, Lemonade, Tonic, Lemon
                </p>
                <p className="drinkPrice">$12.50</p>
              </div>
            </div>
          </Drinks>

          <Liquor>
            <h1 className="sectionTitle">Liquor</h1>
            <p className="liquorTitle">PREMIUM</p>
            <p className="liquorPrice">
              1oz - $13.25
              <br />
              2oz - $24.50
            </p>
            <p className="liquorTitle">DELUXE</p>
            <p className="liquorPrice">
              1oz - $13.75
              <br />
              2oz - $25.50
            </p>
            <p className="liquorTitle">ULTRA-PREMIUM</p>
            <p className="liquorPrice">
              1oz - $14.50
              <br />
              2oz - $27.00
            </p>
            <p className="liquorTitle">DON JULIO BLANCO TEQUILA</p>
            <p className="liquorPrice">
              1oz - $18.00
              <br />
              2oz - $34.00
            </p>

            <h1 className="sectionTitle">WINE</h1>
            <p className="liquorTitle">HOUSE</p>
            <p>
              <em>
                FOLONARI PINOT GRIGIO <br />
                YELLOW TAIL CABERNET SAUVIGNON
              </em>
            </p>
            <p className="liquorPrice">9oz - $20.50</p>
            <p className="liquorTitle">PREMIUM</p>
            <p>
              <em>
                VILLA MARIA SAUVIGNON BLANC <br />
                BREAD & BUTTER CABERNET SAUVIGNON <br />
                BREAD & BUTTER CHARDONNAY
              </em>
            </p>
            <p className="liquorPrice">9oz - $23.50</p>
          </Liquor>
        </DraughtDeck>
        <p className="notes">Prices exclude all applicable taxes</p>
        &nbsp;
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
                href="#entree"
              >
                Entree
              </a>
            </li>
            <li>
              <a
                role="button"
                tabIndex={-3}
                onClick={clickHandler}
                onKeyDown={clickHandler}
                href="#nonalcoholic"
              >
                Non-Alcoholic
              </a>
            </li>
            <li>
              <a
                role="button"
                tabIndex={-4}
                onClick={clickHandler}
                onKeyDown={clickHandler}
                href="#snacks"
              >
                Snacks
              </a>
            </li>
            <li>
              <a
                role="button"
                tabIndex={-5}
                onClick={clickHandler}
                onKeyDown={clickHandler}
                href="#alcohol"
              >
                Alcohol
              </a>
            </li>
          </ul>
        </FlyingMenuContainer>
      </MenuContainer>
    </Layout>
  );
}
