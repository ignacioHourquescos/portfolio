
import './App.css';
import "animate.css/animate.min.css";
import Work from './Components/Work/Work';
import Header from './Components/Header/Header';
import camara from './images/camara2.png';
import lagalera from './images/lagalera.png';
import renova from './images/renova.png';
import libreria from './images/libreria770.png'
import polosales from './images/polosales.png'
import almacen from './images/almacen.png'
import quehacemoshoy from './images/quehacemoshoy.png'
import Footer from './Components/Footer/Footer';

function App() {

  return (<>
        <Header/>
        <Work project={portfolio[0]}/>
        <Work project={portfolio[1]}/>
        <Work project={portfolio[2]}/>
        <Work project={portfolio[3]}/>
        <Work project={portfolio[4]}/>
        <Work project={portfolio[5]}/>
        <Work project={portfolio[6]}/>
        <Footer/>
   

    </>
  );
}

export default App;


const portfolio=[
    {   
        title:"Camara Gastronomica de Quilmes",
        type:"institucional",
        desc:"Pagina institucional, con adminsitracion de eventos y socios. Primera etapa de una de un proyecto en escala que busca agrupar agentes gastronomicos, compartiendo información para poder mejorar condiciones de negociacion con proveedores",
        link:"https://camaraquilmes.netlify.app",
        img:camara,
        icons:{html:1, css:0, react:1, node:0, bootstrap:0, mysql:0, firebase:1, sass:1, js:0, google:1 },
        color: "yellow",
        postion:1
    },
    {   
        title:"La Galera Market",
        type:"E-commerce",
        desc:"E-comerce armado para emprendimiento de productos deli. En la mismsa se trabajo en poder agregar productos facilmentne al carrito y poder visualizar las cantidad en la grilla de productos sin tener que acceder al carrito",
        link:"https://lagalera.netlify.app",
        img:lagalera,
        icons:{html:1, css:0, react:1, node:0, bootstrap:0, mysql:0, firebase:0, sass:1, js:0 , google:1 },
        color: "blue",
        postion:0
    },
    {   
        title:"Distribuidora Renova",
        type:"Comercial",
        desc:"Se armo una pagina del tipo comercial birndadno información de lista de precios. Se hizo la conexion a traves de Node.js al sistema de gestion utilizado en la empresa basado en SQL server. ",
        link:"https://www.distribuidorarenova.com.ar",
        img:renova,
        icons:{html:1, css:1, react:0, node:1, bootstrap:1, mysql:1, firebase:0, sass:0, js:1 },
        color: "orange",
        postion:1
    },

    {   
        title:"Libreria 770",
        type:"Comercial",
        desc:"Pagina comercial de libreria. se armaron secciones de ofertas de prodcutos puntuales para diferentes tipos de clientes",
        link:"https://www.libreria770.com",
        img:libreria,
        icons:{html:1, css:1, react:0, node:0, bootstrap:1, mysql:0, firebase:0, sass:0, js:1 },
        color: "grey",
        postion:0
    },
    {   
        title:"Polo Sales",
        type:"Rapid prototyping",
        desc:"Prototipo funcional para plataforma de remate de caballos. Se busco entregar un producto rapida, para corroborar demanda del mismo e iterar la verison",
        link:"https://polosales.netlify.app",
        img:polosales,
        icons:{html:1, css:1, react:0, node:0, bootstrap:1, mysql:0, firebase:0, sass:0, js:1 },
        color: "grey",
        postion:0
    },
    {   
        title:"Almacen de Productores",
        type:"Web design",
        desc:"Showroom virtual de productos directo de prodcutores. Se hizo foco en la estetica de la presentacion del producto, en la marca y branding",
        link:"https://www.behance.net/gallery/94639591/Almacen-de-Productores",
        img:almacen,
        icons:{html:1, css:1, react:0, node:0, bootstrap:0, mysql:0, firebase:0, sass:0, js:1 },
        color: "grey",
        postion:0
    },
    {   
        title:"Que Hacemos Hoy",
        type:"Prototyping",
        desc:"Prototipo funcional de apliacion de eventos culturales",
        link:"https://www.behance.net/gallery/96068307/QueHacemosHoy",
        img:quehacemoshoy,
        icons:{html:1, css:1, react:0, node:0, bootstrap:0, mysql:0, firebase:0, sass:0, js:1 },
        color: "grey",
        postion:0
    },

]