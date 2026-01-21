'use client';

import { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';

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
  .price {
    text-align: right;
    color: rgba(255, 255, 255, 0.7);
  }

  .cocktail {
    background-color: rgba(0, 0, 0, 0.3);
    padding: 1em;
    border-radius: 1em;
    margin-bottom: 1em;
    h2 {
      text-align: center;
      margin-bottom: 0.5em;
    }
    p {
      text-align: center;
    }
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

const Layout = styled.div<{ $bgColour?: string }>`
  background-color: ${(props) => props.$bgColour || 'white'};
  min-height: 100vh;
`;

export default function CocktailPage() {
  const [menuState, setMenuState] = useState(false);

  function clickHandler() {
    setMenuState(!menuState);
  }

  return (
    <Layout $bgColour="#341a0f">
      <MenuContainer>
        <Image
          className="logo"
          src="/images/cocktail-header.png"
          alt="Signature Cocktail"
          width={620}
          height={200}
          style={{ width: '100%', height: 'auto' }}
        />

        <div className="cocktail">
          <Image
            className="logo"
            src="/images/cocktail-Sangria-red-2.png"
            alt="RED SANGRIA"
            width={400}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
          <h2>Red Sangria</h2>
          <p>
            Crown Royal Blackberry, Yellow Tail Cabernet Sauvignon, POM
            Pomegranate Juice, Ginger Ale, Apple Garnish
          </p>
        </div>
        <div className="cocktail">
          <Image
            className="logo"
            src="/images/cocktail-Sangria-white-2.png"
            alt="WHITE SANGRIA"
            width={400}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
          <h2>White Sangria</h2>
          <p>
            Smirnoff Lime Vodka, Bolla Pinot Grigio, Pineapple Juice, Fresca
            Grapefruit Sparkling Soda, Apple Garnish
          </p>
        </div>

        <div className="cocktail">
          <Image
            className="logo"
            src="/images/Pucker-Up.png"
            alt="Citrus Breeze"
            width={400}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
          <h2>Citrus Breeze</h2>
          <p>Smirnoff Pink Lemonade, Grapefruit Juice, Lemonade, Sprite</p>
        </div>
        <div className="cocktail">
          <Image
            className="logo"
            src="/images/Pomeberry-Punch.png"
            alt="Pomberry Punch"
            width={400}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
          <h2>Pomberry Punch</h2>
          <p>
            Crown Royal Blackberry, POM Pomegranate Juice, Lemonade, Ginger Ale
          </p>
        </div>
        <div className="cocktail">
          <Image
            className="logo"
            src="/images/Lime-Tide.png"
            alt="Lime Tide"
            width={400}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
          <h2>Lime Tide</h2>
          <p>
            Smirnoff Lime Vodka, Orange Juice, Pineapple Juice, Cranberry Juice,
            Sprite
          </p>
        </div>
        <div className="cocktail">
          <Image
            className="logo"
            src="/images/Triple-Berry-Smash.png"
            alt="Triple Berry Smash"
            width={400}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
          <h2>Triple Berry Smash</h2>
          <p>Smirnoff Raspberry Vodka, Cran-Grape Juice, Lemonade, Sprite</p>
        </div>
        <div className="cocktail">
          <Image
            className="logo"
            src="/images/ReposadoPaloma.png"
            alt="Paloma"
            width={400}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
          <h2>Paloma</h2>
          <p>
            Don Julio Reposado, Pink Grapefruit Juice, Fresca Grapefruit
            Sparkling Soda
          </p>
        </div>
        <div className="cocktail">
          <Image
            className="logo"
            src="/images/Sunset-Spritz.png"
            alt="Sunset Sprite (Mocktail)"
            width={400}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
          <h2>Sunset Sprite (Mocktail)</h2>
          <p>
            Seedlip Notas De Agave, Cranberry Juice, Fresca Grapefruit Sparkling
            Soda
          </p>
        </div>
        <div className="cocktail">
          <Image
            className="logo"
            src="/images/cocktail-caesar-matts.png"
            alt="Matt & Steve's Signature Caesar"
            width={400}
            height={400}
            style={{ width: '100%', height: 'auto' }}
          />
          <h2>Matt & Steve&apos;s Signature Caesar</h2>
          <p>
            Smirnoff Vodka, Carrol & Co Blood Mix, Matt & Steve&apos;s Caesar
            Juice, Matt & Steve&apos;s Extreme Pickle
          </p>
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
