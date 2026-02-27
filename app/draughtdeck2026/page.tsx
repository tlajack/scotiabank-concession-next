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
          <p className="price">26.75</p>
          <div className="description">
            <p>
              Hand Carved AAA Prime Rib Sandwich served on a Fresh Onion Bun
              with Kettle Chips
            </p>
            <p>
              <strong>SIDE MAC & CHEESE: $6.75</strong> <br/>
              <strong>ADD SIDE FRIES: $5.75</strong>
            </p>
          </div>
        </MenuItem>
        
        <MenuItem>
          <Image
            className="menuPhoto"
            src="/images/CherrySt-8.jpg"
            alt="Double Stack Burger"
            width={620}
            height={400}
            style={{ width: '100%', height: 'auto', gridColumn: '1/3', marginBottom: '1em' }}
          />
          <h2>Double Stack Burger</h2>
          <p className="price">24.25</p>
          <div className="description">
            {/* <p>
              Two 4oz USDA Prime Brisket Patties, Lettuce, Tomato, Onion,
              Pickles, Cherry Street Special Sauce on a Toasted Potato Scallion
              Roll
            </p> */}
            <p>
              <strong>SIDE MAC & CHEESE: $6.75</strong> <br/>
              <strong>ADD SIDE FRIES: $5.75</strong>
            </p>
          </div>
        </MenuItem>
        <MenuItem>
          <Image
            className="menuPhoto"
            src="/images/CherrySt-11.jpg"
            alt="SMOKED TURKEY SANDWICH"
            width={620}
            height={400}
            style={{ width: '100%', height: 'auto', gridColumn: '1/3', marginBottom: '1em' }}
          />
          <h2>SMOKED TURKEY SANDWICH</h2>
          <p className="price">20.25</p>
          <div className="description">

            <p>
              <strong>SIDE MAC & CHEESE: $6.75</strong> <br/>
              <strong>ADD SIDE FRIES: $5.75</strong>
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
          <p className="price">19.75</p>
          <div className="description">
            {/* <p>
              Slow Smoked Pork Shoulder, Slaw, Pickle and BBQ Sauce on a Toasted
              Potato Scallion Bun
            </p> */}
            <p>
              <strong>SIDE MAC & CHEESE: $6.75</strong> <br/>
              <strong>ADD SIDE FRIES: $5.75</strong>
            </p>
          </div>
        </MenuItem>
        <MenuItem>
          <Image
            className="menuPhoto"
            src="/images/CherrySt-12.jpg"
            alt="CHEDDAR & JALAPENO SAUSAGE"
            width={620}
            height={400}
            style={{ width: '100%', height: 'auto', gridColumn: '1/3', marginBottom: '1em' }}
          />
          <h2>CHEDDAR & JALAPENO SAUSAGE</h2>
          <p className="price">16.25</p>
          <div className="description">
            <p>
              <strong>SIDE MAC & CHEESE: $6.75</strong> <br/>
              <strong>ADD SIDE FRIES: $5.75</strong>
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
          <h2>Empanadas (Vegan or Chicken)</h2>
          <p className="price">17.25</p>
          <div className="description">
            <p>
              <strong>SIDE MAC & CHEESE: $6.75</strong> <br/>
              <strong>ADD SIDE FRIES: $5.75</strong>
            </p>
          </div>
        </MenuItem>
        <p className="notes">Prices exclude all applicable taxes</p>
        <h1 id="nonalcoholic">NON-ALCOHOLIC</h1>

        <MenuItem>
          <h2>Coca-Cola Bottled Beverages</h2>
          <p className="price">8.25</p>
          <div className="description">
            <p>Root Beer, Nestea, Apple Juice, AHA&nbsp;Sparkling Water</p>
          </div>
        </MenuItem>
        <MenuItem>
          <h2>smartwater</h2>
          <p className="price">7.75</p>
        </MenuItem>
        
        <p className="notes">Prices exclude all applicable taxes</p>
        <h1 id="snacks">SNACKS</h1>
        <MenuItem>
          <h2>Collector Popcorn Bucket</h2>
          <p className="price">18.75</p>
        </MenuItem>
        <MenuItem>
          <h2>Bagged Chocolate</h2>
          <p className="price">13.25</p>
        </MenuItem>
        <MenuItem>
          <h2>Bagged Candy</h2>
          <p className="price">11.25</p>
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
          <h1 className="sectionTitle">Draught</h1>
          <Liquor>
            <p className="liquorTitle">Domestic Draught</p>
            <p className="liquorPrice">
              625ml - $15.75
              <br />
              725ml - $18.75
            </p>
          </Liquor>
          <Image
            src="/images/buttons-group-1.png"
            alt="Domestic Draught options"
            width={1000}
            height={126}
            style={{ width: '80%', height: 'auto', display: 'block', margin: '0 auto 2em' }}
          />

          <Liquor>
            <p className="liquorTitle">Premium Draught</p>
            <p className="liquorPrice">
              625ml - $16.50
              <br />
              725ml - $19.50
            </p>
          </Liquor>
          <Image
            src="/images/buttons-group-2.png"
            alt="Premium Draught options"
            width={1000}
            height={126}
            style={{ width: '80%', height: 'auto', display: 'block', margin: '0 auto 2em' }}
          />

          <h1 className="sectionTitle">Tall Cans</h1>
          <Liquor>
            <p className="liquorTitle">Domestic Tall Can</p>
            <p className="liquorPrice">$14.25</p>
          </Liquor>
          <Image
            src="/images/buttons-group-3.png"
            alt="Domestic Tall Can options"
            width={1000}
            height={126}
            style={{ width: '80%', height: 'auto', display: 'block', margin: '0 auto 2em' }}
          />

          <Liquor>
            <p className="liquorTitle">Premium Tall Can</p>
            <p className="liquorPrice">$15.25</p>
          </Liquor>
          <Image
            src="/images/buttons-group-4.png"
            alt="Premium Tall Can options"
            width={1000}
            height={126}
            style={{ width: '80%', height: 'auto', display: 'block', margin: '0 auto 2em' }}
          />

          <Liquor>
            <p className="liquorTitle">Imported Tall Can</p>
            <p className="liquorPrice">$15.75</p>
          </Liquor>
          <Image
            src="/images/buttons-group-5.png"
            alt="Imported Tall Can options"
            width={1000}
            height={126}
            style={{ width: '80%', height: 'auto', display: 'block', margin: '0 auto 2em' }}
          />

          <Liquor>
            <h1 className="sectionTitle">Wine</h1>
            <p className="liquorTitle">9oz House</p>
            <p className="liquorPrice">$21.50</p>
            <p className="liquorTitle">
              <em>
                Yellow Tail Cabernet Sauvignon
                <br />
                Bolla Pinot Grigio
              </em>
            </p>
            <p></p>
            <p className="liquorTitle">9oz Premium</p>
            <p className="liquorPrice">$24.75</p>
            <p className="liquorTitle">
              <em>
                Villa Maria Sauvignon Blanc
                <br />
                Don David Reserve Malbec
                <br />
                Bolla Valpolicella Classico
              </em>
            </p>
            <p></p>
          </Liquor>

          <Liquor>
            <h1 className="sectionTitle">Coolers &amp; Seltzers</h1>
            <p className="liquorTitle">Coors Seltzer Grape Slushie</p>
            <p className="liquorPrice">$15.25</p>
            <p className="liquorTitle">Coors Seltzer Cherry Slushie</p>
            <p className="liquorPrice">$15.25</p>
            <p className="liquorTitle">Vizzy Blueberry Pomegranate</p>
            <p className="liquorPrice">$15.25</p>
            <p className="liquorTitle">Arizona Hard Iced Tea</p>
            <p className="liquorPrice">$15.25</p>
            <p className="liquorTitle">Arizona Half &amp; Half</p>
            <p className="liquorPrice">$15.25</p>
            <p className="liquorTitle">Simply Lemonade</p>
            <p className="liquorPrice">$15.25</p>
            <p className="liquorTitle">Simply Limeade</p>
            <p className="liquorPrice">$15.25</p>
            <p className="liquorTitle">Smirnoff Ice</p>
            <p className="liquorPrice">$15.25</p>
          </Liquor>

          <Liquor>
            <h1 className="sectionTitle">Liquor</h1>
            <p className="liquorTitle">Premium</p>
            <p className="liquorPrice">
              1oz - $14.50
              <br />
              2oz - $26.50
            </p>
            <p className="liquorTitle">Deluxe</p>
            <p className="liquorPrice">
              1oz - $15.00
              <br />
              2oz - $28.00
            </p>
            <p className="liquorTitle">Ultra-Premium</p>
            <p className="liquorPrice">
              1oz - $15.75
              <br />
              2oz - $29.00
            </p>
            <p className="liquorTitle">Don Julio Blanco</p>
            <p className="liquorPrice">
              1oz - $19.50
              <br />
              2oz - $37.25
            </p>
            <p className="liquorTitle">Matt &amp; Steve&apos;s Caesar</p>
            <p className="liquorPrice">
              1oz - $19.00
              <br />
              2oz - $30.25
            </p>
            <p className="liquorTitle">Signature Cocktail</p>
            <p className="liquorPrice">$21.25</p>
          </Liquor>

          <Liquor>
            <h1 className="sectionTitle">Non-Alcoholics</h1>
            <p className="liquorTitle">Heineken 0.0</p>
            <p className="liquorPrice">$9.00</p>
            <p className="liquorTitle">smartwater</p>
            <p className="liquorPrice">$7.75</p>
            <p className="liquorTitle">Red Bull</p>
            <p className="liquorPrice">$8.50</p>
            <p className="liquorTitle">24oz Fountain Pop &amp; Juice</p>
            <p className="liquorPrice">$8.25</p>
          </Liquor>

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
