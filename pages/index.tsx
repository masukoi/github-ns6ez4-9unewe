import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ProductCard from './components/ProductCard';

const Home: NextPage = () => {
  // Luodaan tyhjä lista ja funktio sen alustamiseen
  const [products, setProducts] = useState([]);
  // Reactin useEffectiä kutsutaan sivun renderöinnissä, jolloin haetaan tuotteet fakestoreapista
  useEffect(() => {
    // Haetaan tuotteet, asetetaan JSONiksi, asetetaan tuotteet listaan
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => setProducts(json));
    // Tyhjä lista [] parametrina varmistaa, että tuotteet haetaan vain kerran, eikä jos jokin state muuttuu
  }, []);

  return (
    // Juurielementti
    <div>
      {/* w-full: leveys 100%, p-4: tyhjää tilaa tekstin ympärille, bg-blue: taustaväri */}
      <div className="w-full text-center text-4xl p-4 bg-blue">
        Aleksin nettikauppa
      </div>
      {/* flex: täyttää saatavilla olevan tilan, flex-wrap: sallii elementtien sijoittumisen usealle riville
          dark: dark moden asetukset */}
      <div className="flex flex-wrap bg-blue-light dark:bg-gray-800">
        {/* Käydään tuotteet läpi ja tehdään jokaisesta tuotteesta oma ProductCard elementti */}
        {products.map((product, index) => (
          <ProductCard product={product} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
