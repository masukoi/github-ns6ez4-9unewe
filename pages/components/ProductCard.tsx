function Product({
  product: { title, price, description, category, image },
}: any) {
  return (
    /* flex: täyttää saatavilla olevan tilan, p-2: lisää tyhjää tilaa reunoille
      w-full: oletusleveys 100%, loput määrittelee leveyden näytön koosta riippuvaiseksi (skaalautuminen ikkunan leveyteen) */
    <div className="flex p-2 w-full sm:w-1/2 md:w-1/3 xl:w-1/4">
      {/* bg-white: taustaväri valkoinen, rounded-lg: pyöristetyt kulmat, dark: dark mode asetukset, hover-2xl: elementin hover tilalle varjo */}
      <div className="flex w-full bg-white rounded-lg dark:bg-gray-300 hover:shadow-2xl">
        {/* overflow-hidden: piilotetaan elementin kuvan osat, mitkä ylittää elementin rajat */}
        <div className="w-1/3 p-2 overflow-hidden rounded-lg dark:bg-white">
          {/* KUVA */}
          <div
            // lisätään taustakuvaksi tuotteen kuva
            style={{ backgroundImage: `url(${image})` }}
            // bg-contain: taustakuvan skaalaus ilman rajausta tai venytystä, bg-no-repeat: näytä taustakuva vain kerran, äläkä täytä aluetta kuvilla
            // hover tilalle zoomaus ja kestoksi 300ms
            className="bg-contain bg-no-repeat bg-center w-full h-full hover:transform hover:scale-150 duration-300"
          ></div>
        </div>
        {/* TEKSTI */}
        <div className="w-2/3 p-1 ">
          {/* otsikolle iso teksti ja ensimmäiset 40 merkkiä */}
          <h1 className="text-2xl">{title.substr(0, 40)}</h1>
          {/* kategorialle eri värinen teksti */}
          <h3 className="text-blue dark:text-gray-700">{category}</h3>
          {/* my-2: marginaali y-akselille */}
          <p className="text-blue-shock my-2 text-2xl">{price}$</p>
          {/* kuvauksen ensimmäiset 100 merkkiä */}
          <div>{description.substr(0, 100)}</div>
        </div>
      </div>
    </div>
  );
}
export default Product;
