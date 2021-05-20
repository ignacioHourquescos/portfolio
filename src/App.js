
import './App.css';
import MetaTags from 'react-meta-tags';
import "animate.css/animate.min.css";
import Work from './Components/Work/Work';
import Header from './Components/Header/Header';
import camara from './images/camara2.png';
import lagalera from './images/lagalera.png';
import renova from './images/renova.png';
import libreria from './images/libreria770.png'
import polosales from './images/polosales.png'
import pedidos from './images/sistemaDePedidos.png'
import almacen from './images/almacen.png'
import gangadeco from './images/gangaDeco.webp'
import elfuerte from  './images/elfuerte.webp'
import quehacemoshoy from './images/quehacemoshoy.png'
import Footer from './Components/Footer/Footer';
import Language from './Components/LanguageButton/Language';
import Contact from './Components/Contact/Contact';
 import Title from './Components/Title/Title';
 import yo from './images/yoyo2.png';
import { AppProvider } from './Context/UseAppContext'


function App() {

    
  return (<>
  		<AppProvider>
        <Header/>
        <Language/>
        <Title/>
        <MetaTags>
            <title>Ignacio Hourquescos</title>
            <meta name="description" content="Portfolio" />
            <meta property="og:title" content="Ignacio Hourquescos" />
            <meta property="og:image" content={yo} />
          </MetaTags>
        <Work project={portfolio[0]}/>
        <Work project={portfolio[1]}/>
        <Work project={portfolio[2]}/>
        <Work project={portfolio[3]}/>
        <Work project={portfolio[4]}/>
        <Work project={portfolio[5]}/>
        <Work project={portfolio[6]}/>
        <Work project={portfolio[7]}/>
        <Work project={portfolio[8]}/>
        <Work project={portfolio[9]}/>
       
        <Contact/>
        <Footer/>

        </AppProvider>
   

    </>
  );
}

export default App;


const portfolio=[
   {   
      title:
          {
              es:"GangaDeco",
              en:"GangaDeco ",
              pt:"GangaDeco "
          },
      type:{  
              es:"E-commerce", 
              en:"E-commerce",
              pt:"E-commerce"
          },
      desc:{  
              es:"E-commerce armado para tienda de articulos de bazar y decoracion",
              en:"deco e-commerce",
              pt:"E-commerce de produtos de decoracao"
          },
      link:"https://gangadeco.vercel.app",
      img:gangadeco,
      icons:{html:1, css:0, react:1, node:0, bootstrap:0, mysql:0, firebase:1, sass:1, js:0, google:1, next:1, firebase:1 },
      color: "yellow",
      postion:1
  },
  {   
   title:
       {
           es:"Mayorista El Fuerte",
           en:"Mayorista El Fuerte",
           pt:"Mayorista El Fuerte",
       },
   type:{  
           es:"Web design", 
           en:"Web design",
           pt:"Web design"
       },
   desc:{  
           es:"Web para distribuidora mayorista. Se hizo foco en el diseño de un sistema de lista de precios agiles",
           en:"WEb design for food wholesaler. Focused on builidng a dynamic price list for clients ",
           pt:"Disenho web para atacadista de produtos naturais. Foco em lista de precos"
       },
   link:"https://www.mayoristaelfuerte.com",
   img:elfuerte,
   icons:{html:1, css:1, react:1, node:0, bootstrap:0, mysql:0, firebase:0, sass:0, js:0, google:1, next:0, firebase:0},
   color: "yellow",
   postion:1
},
  
   {   
      title:
          {
              es:"Camara Gastronomica ",
              en:"Gastronomic Chamber ",
              pt:"Câmara Gastronomica "
          },
      type:{  
              es:"web Design", 
              en:"web Design",
              pt:"web Design"
          },
      desc:{  
              es:"Primera etapa de proyecto que agrupa agentes gastronomicos con el fin de compartir información para mejorar la competitividad del sector",
              en:"First phase of a long term plan which seekes to group gastonomic agents which share information in order to improve competitiveness",
              pt:"Primeira etapa do projeto que reúne agentes gastronômicos com o objetivo de compartilhar informações para melhorar a competitividade do setor"
          },
      link:"https://camaraquilmes.netlify.app",
      img:camara,
      icons:{html:1, css:0, react:1, node:0, bootstrap:0, mysql:0, firebase:1, sass:1, js:0, google:1 },
      color: "yellow",
      postion:1
  },
    {   
        title:
        {
            es:"La Galera Market",
            en:"La Galera Market",
            pt:"La Galera Market"
        },
        type:{  
            es:"E-commerce", 
            en:"E-commerce",
            pt:"E-commerce"
        },
        desc:{  
            es:"Diseño centrado en el usuario que permite agregar y quitar productos de manera dinamica, y poder visualizar promociones de manera efectiva",
            en:"User-centered desgin which allows to add or elminate products from cart, and clearly visualize specific promotions ",
            pt:"Disenho centrado no usuario que permite adicionar e remover produtos de forma dinâmica, e poder visualizar as promoções de forma eficaz"
        },
        link:"https://lagalera.netlify.app",
        img:lagalera,
        icons:{html:1, css:0, react:1, node:0, bootstrap:0, mysql:0, firebase:0, sass:1, js:0 , google:1, firebase:1},
        color: "blue",
        postion:0
    },
    {   
        title:
        {
            es:"Distribuidora autopartes",
            en:"Car Wholesaler",
            pt:"Distribuidor autopeças"
        },
        type:{es:"web App"},
        desc:{  
            es:"A partir de un sistema de gestión en SQL, se hizo una conexión via Node.js, generando una vista web para mostrar precios y stock de manera dinámica",
            en:"Web view for ERP software based on SQL. Using Node.js a friendly interface was built for clients to access key information",
            pt:"A partir de um sistema de gestão em SQL, se fez uma conexão via Node.js, gerando uma vista web para mostrar preços e estoque de forma dinâmica"
        },       
        link:"https://listasrenova.netlify.app/views/html/indexofertas.html",
        img:renova,
        icons:{html:1, css:1, react:0, node:1, bootstrap:1, mysql:1, firebase:0, sass:0, js:1 },
        color: "orange",
        postion:1
    },

    {   
        title:
        {
            es:"Librería Mayorista",
            en:"Office supplies Wholesaler",
            pt:"Livrería de atacado "
        },
        type:{es:"Web Design"},
        desc:{  
            es:"Web comercial para librería. Se armaron secciones de ofertas de productos puntuales para diferentes tipos de clientes",
            en:"Commercial web for office supplies company. Specific section were designed for different tpo of clients",
            pt:"Site comercial para livraría. Seções de ofertas de produtos específicos foram disenhadas para diferentes tipos de clientes"
        },
        link:"https://www.libreria770.com",
        img:libreria,
        icons:{html:1, css:1, react:0, node:0, bootstrap:1, mysql:0, firebase:0, sass:0, js:1 },
        color: "grey",
        postion:0
    },
    {   
        title:
        {
            es:"Polo Sales",
            en:"Polo Sales",
            pt:"Polo Sales"
        },
 
        type:{es:"Rapid prototyping"},
        desc:{  
            es:"Prototipo funcional de plataforma de remate de caballos. Se busco generar un producto rápido, para corroborar demanda del mismo e iterar la version",
            en:"Polo horses auctioning rapid prototype. aimed to rapidly generate a version, in order to test demand and iterate it",
            pt:"Protótipo funcional de plataforma de leilão de cavalos. O objetivo era gerar um produto rápido, para confirmar a demanda e logo iterar a versão"
        },
        link:"https://polosales.netlify.app",
        img:polosales,
        icons:{html:1, css:1, react:0, node:0, bootstrap:1, mysql:0, firebase:0, sass:0, js:1 },
        color: "grey",
        postion:0
    },
    {   
        title:
        {
            es:"Sistema de Pedidos",
            en:"Micro logisitcs",
            pt:"Sistema de Peididos"
        },
        type:{es:"UX/UI Prototyping"},
        desc:{  
            es:"Prototipo funcional para sistema de pedidos logísticos de distribuidora mayorista",
            en:"Prototype to manage intern wholesaler logistics ",
            pt:"Protótipo funcional para o sistema de pedidos de logística de distribuidor de atacado"
        },
        link:"https://www.behance.net/gallery/94688655/_",
        img:pedidos,
        icons:{html:1, css:1, react:0, node:0, bootstrap:0, mysql:0, firebase:0, sass:0, js:1 },
        color: "grey",
        postion:0
    },


    {   
        title:
        {
            es:"Almacen de Productores",
            en:"Almacen de Productores",
            pt:"Almacen de Productores"
        },

        type:{es:"Web design"},
        desc:{  
            es:"Showroom virtual de productos regionales. Se hizo foco en la estética de la presentacién del producto, marca y branding",
            en:"Virtual showroom for dely prodcuts. Aimed to develop unique design & branding",
            pt:"Showroom virtual de produtos regionais. O foco foi feito na estética da apresentação do produto, marca e branding"
        },
        link:"https://www.behance.net/gallery/94639591/Almacen-de-Productores",
        img:almacen,
        icons:{html:1, css:1, react:0, node:0, bootstrap:0, mysql:0, firebase:0, sass:0, js:1 },
        color: "grey",
        postion:0
    },


    {   
        title:
        {
            es:"Que Hacemos Hoy",
            en:"Que Hacemos Hoy",
            pt:"Que Hacemos Hoy"
        },

        type:{es:"UX/UI Prototyping"},
        desc:{  
            es:"Prototipo funcional de apliación de información de eventos culturales",
            en:"App prototype for cultural events and gatherings",
            pt:"Showroom virtual de produtos regionais. O foco foi feito na estética da apresentação do produto, marca e branding"
        },
        link:"https://www.behance.net/gallery/96068307/QueHacemosHoy",
        img:quehacemoshoy,
        icons:{html:1, css:1, react:0, node:0, bootstrap:0, mysql:0, firebase:0, sass:0, js:1 },
        color: "grey",
        postion:0
    },

]
