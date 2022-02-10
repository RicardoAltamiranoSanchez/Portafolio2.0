document.addEventListener('DOMContentLoaded',()=>{
//los pros de cadad lenguaje
const javascript=document.querySelector('.pro-1');
const C=document.querySelector('.pro-2');
const Cplus=document.querySelector('.pro-3');
const Csharp=document.querySelector('.pro-4');
const Java=document.querySelector('.pro-5');
const Python=document.querySelector('.pro-6');
const Sql=document.querySelector('.pro-7');
const Mysql=document.querySelector('.pro-8');
const Postgress=document.querySelector('.pro-9');
const Mongo=document.querySelector('.pro-10');
const Flask=document.querySelector('.pro-11');
const Node=document.querySelector('.pro-12');
const React=document.querySelector('.pro-13');
const Html=document.querySelector('.pro-14');
const Css=document.querySelector('.pro-15');
const Sass=document.querySelector('.pro-16');
const Wordpress=document.querySelector('.pro-17');


//los circulos de cada lenguaje
const circuloJavascript=document.querySelector('.circulo-javascript');
const circuloC=document.querySelector('.circulo-C');
const circuloCplus=document.querySelector('.circulo-Cplus');
const circuloCsharp=document.querySelector('.circulo-Csharp');
const circuloJava=document.querySelector('.circulo-Java');
const circuloPython=document.querySelector('.circulo-Python');
const circuloSql=document.querySelector('.circulo-Sql');
const circuloMysql=document.querySelector('.circulo-Mysql');
const circuloPostgress=document.querySelector('.circulo-Postgress');
const circuloMongo=document.querySelector('.circulo-Mongo');
const circuloFlask=document.querySelector('.circulo-Flask');
const circuloNode=document.querySelector('.circulo-Node');
const circuloReact=document.querySelector('.circulo-React');
const circuloHtml=document.querySelector('.circulo-Html');
const circuloCss=document.querySelector('.circulo-Css');
const circuloSass=document.querySelector('.circulo-Sass');
const circuloWordpress=document.querySelector('.circulo-Wordpress');


//los textos o porcentajes de cada lenguaje
const textJavascript=document.querySelector('#javascript');
const textC=document.querySelector('#C');
const textCplus=document.querySelector('#Cplus');
const textCsharp=document.querySelector('#Csharp');
const textJava=document.querySelector('#Java');
const textPython=document.querySelector('#Python');
const textSql=document.querySelector('#Sql');
const textMysql=document.querySelector('#Mysql');
const textPostgress=document.querySelector('#Postgress');
const textMongo=document.querySelector('#Mongo');
const textFlask=document.querySelector('#Flask');
const textNode=document.querySelector('#Node');
const textReact=document.querySelector('#React');
const textHtml=document.querySelector('#Html');
const textCss=document.querySelector('#Css');
const textSass=document.querySelector('#Sass');
const textWordpress=document.querySelector('#Wordpress');


//los eventos
javascript.addEventListener('mousemove',()=>{circuloJavascript.classList.add('circle1');textJavascript.textContent="80%";});
C.addEventListener('mousemove',()=>{circuloC.classList.add('circle2');textC.textContent="50%";});
Cplus.addEventListener('mousemove',()=>{circuloCplus.classList.add('circle3');textCplus.textContent="70%";});
Csharp.addEventListener('mousemove',()=>{circuloCsharp.classList.add('circle4');textCsharp.textContent="60%";});
Java.addEventListener('mousemove',()=>{circuloJava.classList.add('circle5');textJava.textContent="60%";});
Python.addEventListener('mousemove',()=>{circuloPython.classList.add('circle6');textPython.textContent="80%";});
Sql.addEventListener('mousemove',()=>{circuloSql.classList.add('circle7');textSql.textContent="50%";});
Mysql.addEventListener('mousemove',()=>{circuloMysql.classList.add('circle8');textMysql.textContent="70%";});
Postgress.addEventListener('mousemove',()=>{circuloPostgress.classList.add('circle9');textPostgress.textContent="50%";});
Mongo.addEventListener('mousemove',()=>{circuloMongo.classList.add('circle10');textMongo.textContent="70%";});
Flask.addEventListener('mousemove',()=>{circuloFlask.classList.add('circle11');textFlask.textContent="50%";});
Node.addEventListener('mousemove',()=>{circuloNode.classList.add('circle12');textNode.textContent="80%";});
React.addEventListener('mousemove',()=>{circuloReact.classList.add('circle13');textReact.textContent="50%";});
Html.addEventListener('mousemove',()=>{circuloHtml.classList.add('circle14');textHtml.textContent="85%";});
Css.addEventListener('mousemove',()=>{circuloCss.classList.add('circle15');textCss.textContent="85%";});
Sass.addEventListener('mousemove',()=>{circuloSass.classList.add('circle16');textSass.textContent="40%";});
Wordpress.addEventListener('mousemove',()=>{circuloWordpress.classList.add('circle17');textWordpress.textContent="60%";});
})

