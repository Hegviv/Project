const data = {
    products: [
      {
        id: '1',
        name: 'Pad mee sua',
        price: 1500,
        image: 'https://hot-thai-kitchen.com/wp-content/uploads/2018/08/pad-mee-tiew-sm.jpg',
        leiras:"Tészta, fokhagyma, tofu, káposzta, sárgarépa, shiitake gomba"
      },
      {
        id: '2',
        name: 'Pad Woon Sen',
        price: 1490,
        image: 'https://delishar.com/wp-content/uploads/2016/05/5-Pad-woon-sen-1.jpg',
        leiras:"tészta, fokhagyma, tojás, csirek, Osztrigaszósz"
      },
      {
        id: '3',
        name: 'Panang',
        price: 1800,
        image: 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/b65af6ca9a16994fc79a10bedef4a2eb/Derivates/5358dd4f68ecee8fc51f5c4459dc6db2bafa2d83.jpg',
        leiras:"mogyoróvaj, csirkemell, kaliforniai paprika, gyömbér, fokhagyma, kókusztej, halszósz, rizs"

      },
      {
        id: '4',
        name: 'Phad King Sod',
        price: 1790,
        image: 'https://upload.wikimedia.org/wikipedia/commons/0/09/Kai_phat_khing.jpg',
        leiras:"Reszelt gyömbér, fafülgomba, hagyma, zöldhagyma, szójabab, hús"
      },
      {
        id: '5',
        name: 'Phad Priew Wan',
        price: 1690,
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwN70pKccNJ78v8QVFf8-vUT7iH0YbB6_mvw&usqp=CAU',
        leiras:"Zöldség, csirke, marha, csirke, tenger gyümölcsei, hal"
      },
      {
        id: '6',
        name: 'Kaeng Ped',
        price: 1750,
        image: 'https://cdn.shopify.com/s/files/1/0418/4018/1404/products/10-1_2_1445x.jpg?v=1593614977',
        leiras:"Cihis vörös curry, kókusztej leves, vágott hús"
      },
      {
        id: '7',
        name: 'Sashimi',
        price: 1980,
        image: 'https://leroyexpress.hu/wp-content/uploads/2019/06/tal-vegyes-sashimi-768x469.jpg',
        leiras:"3 lazac, 3 tonhal, 3 tigrisrák, 3 hamachi, lazackaviár"
      },
      {
        id: '8',
        name: 'Nigiri',
        price: 990,
        image: 'https://i.recipetypes.com/images/254261/image-2.jpg',
        leiras:"Lazac, rizs"
      },
      {
        id: '9',
        name: 'Ramen',
        price: 1750,
        image: 'https://diningguide.hu/wp-content/uploads/2016/04/biwako2-1.jpg',
        leiras:"Miso, shiitake gomba, fokhagyma, chilipaszta, juharszirup, mungóbabcsíra, főtt tojás, tofu, tészta "
      },
      {
        id: '10',
        name: 'Tori Harumaki',
        price: 1990,
        image: 'https://images.japancentre.com/recipes/pics/249/main/249-harumaki-spring-rolls.jpg?1469572983',
        leiras:"Rántott tavaszi tekercs csirkehússal, shiitake gombával, sárgarépával"
      },
      {
        id: '11',
        name: 'Ebi Amai saláta',
        price: 3190,
        image: 'https://www.planetsushi.hu/wp-content/uploads/Ebi-Amai.jpg',
        leiras:"Grillezett rák, avokadóval és friss salátaágyon, spenóttal, mézes wasabi szósszal, shichimi-vel fűszerezve"
      },
      {
        id: '12',
        name: 'Karai Sake',
        price: 990,
        image: 'https://scontent-vie1-1.xx.fbcdn.net/v/t45.5328-4/19886495_1772498889446864_5338538997675196416_n.jpg?stp=c0.68.960.960a_dst-jpg&_nc_cat=106&ccb=1-5&_nc_sid=c48759&_nc_ohc=OEPvp_sYi74AX81O09r&_nc_ht=scontent-vie1-1.xx&oh=00_AT-atalef_E-y6-wKM352VFT93bw_jaWgZx4tTw4bE_Sfg&oe=626E5134',
        leiras:"Citromlé, Majonéz, sriracha szósz, Szezám olaj, Hínárlap, lazac"
      },
      {
        id: '13',
        name: 'Édes-savanyú leves',
        price: 990,
        image: 'https://kep.cdn.indexvas.hu/1/0/2910/29100/291006/29100635_58f1195c3e2be378bcf9ce3aee9b398e_wm.jpg',
        leiras:"Sertéshús, szárított fafülgomba, Tofu, bambuszrügy,tojsás, újhagyma, gombás szójaszósz "
      },
      {
        id: '14',
        name: 'Tofu leves rizstésztával',
        price: 990,
        image: 'https://veganblog.hu/wp-content/uploads/2019/10/egyszeru%CC%8B-miso-leves-recept-vega%CC%81nblog.jpg',
        leiras:"Tofu, földimogyoró olaj, újhagym, vöröshagyma, sárga kaliforniai paprika, zellerlevé, zöldség alaplé, limelé, szójaszós, curry paszta, rizstészt, koriander "
      },
      {
        id: '15',
        name: 'Mogyorós csirke pirított zöldséggel',
        price: 2500,
        image: 'https://kep.cdn.index.hu/1/0/2926/29265/292658/29265845_2246341_e1d505de2c874d343903f638223d816e_wm.jpg',
        leiras:"Fokhagyma, sárgarép, kaliforniai paprika, csirkemel, szójaszó, méz, gyömbér"
      },
      {
        id: '16',
        name: 'Pekingi kacsa',
        price: 2500,
        image: 'https://595050-1923799-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2018/12/pekingi-kacsa-1.jpg',
        leiras:"Kacsa, méz, újhagyma, uborka, mézz, ketchup, szójaszós, erős paprika, "
      },   
       {
        id: '17',
        name: 'Gong Bao polip',
        price: 2700,
        image: 'https://kep.cdn.index.hu/1/0/2926/29265/292658/29265845_2246341_e1d505de2c874d343903f638223d816e_wm.jpg',
        leiras:"polip, fehérbor, szójaszós,  chili paszta, Zöldhagyma, fokhagyma, gesztenye, földimogyoró"
      },

    ],
  };
  export default data;