let currentLanguage = 'es';

const translations = {
    es: {
        nameTitle: "Gastón Rodriguez Consoli",
        navFormation: "Formación",
        navProjects: "Proyectos",
        navContact: "Contacto",
        btnDownload: "Descargar CV",
        introText: "Formación en programación en JavaScript, utilizando React y Next que me han proporcionado las habilidades necesarias para trabajar de manera efectiva.",
        titleProfession: "Desarrollador Web",
        education: [
            {
                title: "HENRY",
                description: "Desarrollé habilidades en JavaScript, React, Node.js y PostgreSQL durante el bootcamp de HENRY. Además, adquirí experiencia en el desarrollo de aplicaciones web completas y trabajo colaborativo en equipo.",
                linkText: "Ver Certificado",
            },
            {
                title: "EF Standard English Test",
                description: "Certifiqué mi dominio del idioma inglés con un nivel C2 en el EF Standard English Test, demostrando habilidades avanzadas en comprensión oral y escrita, así como en expresión fluida y efectiva.",
                linkText: "Ver Certificado",
            },
            {
                title: "Universidad Angular (Global Mentoring)",
                description: "Obtuve un dominio de Angular, incluyendo TypeScript, componentes, servicios, enrutamiento y HTTP. Además, adquirí habilidades avanzadas en la creación de aplicaciones web dinámicas.",
                linkText: "Ver Certificado",
            },
            {
                title: "Universidad CSS (Global Mentoring)",
                description: "Amplié mis habilidades en diseño web y maquetación utilizando CSS a través del curso de Global Mentoring. Adquirí conocimientos detallados en la creación de diseños responsivos y atractivos.",
                linkText: "Ver Certificado",
            },
            {
                title: "Universidad HTML (Global Mentoring)",
                description: "Sumé fundamentos de la estructura web con HTML. Adquirí conocimientos esenciales en la creación y organización de contenido web, sentando las bases para el desarrollo de sitios web modernos y funcionales.",
                linkText: "Ver Certificado",
            },
            {
                title: "CSS (EdYoda Digital University)",
                description: "Desarrollé mis habilidades de diseño web con CSS a través del curso de EdYoda Digital University. Aprendí técnicas avanzadas de estilizado y diseño para crear interfaces web.",
                linkText: "Ver Certificado",
            },
            {
                title: "Universidad HTML (EdYoda Digital University)",
                description: "Adquirí una comprensión sólida de HTML a través del curso de EdYoda Digital University, aprendiendo a crear estructuras de página claras y semánticas para construir sitios web eficaces y accesibles.",
                linkText: "Ver Certificado",
            },
            {
                title: "Tecnicatura Universitaria en Programación",
                description: "Actualmente estudiando en la Universidad Técnica Nacional de Mar del Plata para conseguir mi título de técnico en programación.",
                linkText: null, // No tiene certificado
            },
        
        ],
        projectsTitle: "Mis Proyectos",
        categories: {
            all: "Todos",
            next: "Next",
            react: "React",
            wix: "Wix",
            wordpress: "WordPress"
        },
        projects: [
            {
                title: "Diamant Car Detailing",
                tags: ["React", "App Web", "Firebase"],
                linkText: "Ver Trabajo"
            },
            {
                title: "Petshop Boutique",
                tags: ["Next", "MongoDB", "Firebase"],
                linkText: "Ver Trabajo"
            },
            {
                title: "Brasil Te Espera",
                tags: ["WordPress", "Diseño Web", "UX/UI"],
                linkText: "Ver Trabajo"
            },
            {
                title: "Language Hero LLC",
                tags: ["JavaScript", "React", "Firebase"],
                linkText: "Ver Trabajo"
            },
            {
                title: "Astur Group",
                tags: ["Wix", "UX/UI", "Diseño Web"],
                linkText: "Ver Trabajo"
            },
            {
                title: "Hotel Praiamar",
                tags: ["Wix", "UX/UI", "Diseño Web"],
                linkText: "Ver Trabajo"
            }
        ],
        contactTitle: "Contacto",
        contactInfo: {
            email: "Correo Electrónico",
            phone: "Teléfono",
            country: "País",
            city: "Ciudad",
        },
        formLabels: {
            name: "Nombre",
            email: "Correo",
            message: "Mensaje",
            submit: "Enviar",
        },
    },
    en: {
        nameTitle: "Gastón Rodriguez Consoli",
        navFormation: "Education",
        navProjects: "Projects",
        navContact: "Contact",
        btnDownload: "Download CV",
        introText: "Training in JavaScript programming, using React and Next.js, which have given me the necessary skills, knowledge, and hands-on experience to work effectively and confidently.",
        titleProfession: "Web Developer",
        education: [
            {
                title: "HENRY",
                description: "Developed skills in JavaScript, React, Node.js, and PostgreSQL during the HENRY bootcamp. Also gained experience in full-stack web development and collaborative teamwork.",
                linkText: "View Certificate",
            },
            {
                title: "EF Standard English Test",
                description: "Certified English proficiency with a C2 level in the EF Standard English Test, demonstrating advanced skills in listening, reading, and fluent expression.",
                linkText: "View Certificate",
            },
            {
                title: "Angular University (Global Mentoring)",
                description: "Mastered Angular, including TypeScript, components, services, routing, and HTTP. Acquired advanced skills in building dynamic web applications.",
                linkText: "View Certificate",
            },
            {
                title: "CSS University (Global Mentoring)",
                description: "Expanded web design and layout skills using CSS through the Global Mentoring course. Acquired detailed knowledge of responsive and attractive design creation.",
                linkText: "View Certificate",
            },
            {
                title: "HTML University (Global Mentoring)",
                description: "Gained foundational knowledge of web structure with HTML. Acquired essential skills for creating and organizing web content, laying the foundation for modern and functional websites.",
                linkText: "View Certificate",
            },
            {
                title: "CSS (EdYoda Digital University)",
                description: "Enhanced web design skills with CSS through EdYoda Digital University. Learned advanced styling and design techniques to create web interfaces.",
                linkText: "View Certificate",
            },
            {
                title: "HTML University (EdYoda Digital University)",
                description: "Gained solid understanding of HTML through EdYoda Digital University, learning to create clear and semantic page structures for effective and accessible websites.",
                linkText: "View Certificate",
            },
            {
                title: "Programming Technician Degree",
                description: "Currently studying at the National Technical University of Mar del Plata to obtain my programming technician degree.",
                linkText: null, // No certificate
            },
        ],
        projectsTitle: "My Projects",
        categories: {
            all: "All",
            next: "Next",
            react: "React",
            wix: "Wix",
            wordpress: "WordPress"
        },
        projects: [
            {
                title: "Diamant Car Detailing",
                tags: ["React", "Web App", "Firebase"],
                linkText: "View Work"
            },
            {
                title: "Petshop Boutique",
                tags: ["Next", "MongoDB", "Firebase"],
                linkText: "View Work"
            },
            {
                title: "Brasil Te Espera",
                tags: ["WordPress", "Web Design", "UX/UI"],
                linkText: "View Work"
            },
            {
                title: "Language Hero LLC",
                tags: ["JavaScript", "React", "Firebase"],
                linkText: "View Work"
            },
            {
                title: "Astur Group",
                tags: ["Wix", "UX/UI", "Web Design"],
                linkText: "View Work"
            },
            {
                title: "Hotel Praiamar",
                tags: ["Wix", "UX/UI", "Web Design"],
                linkText: "View Work"
            }
        ],
        contactTitle: "Contact",
        contactInfo: {
            email: "Email",
            phone: "Phone",
            country: "Country",
            city: "City",
        },
        formLabels: {
            name: "Name",
            email: "Email",
            message: "Message",
            submit: "Send",
        },
    },
};

function changeLanguage(lang) {
    currentLanguage = lang; // Actualiza el idioma actual

    // Traducción de elementos existentes
    document.getElementById("name-title").textContent = translations[lang].nameTitle;
    document.getElementById("nav-formation").textContent = translations[lang].navFormation;
    document.getElementById("nav-projects").textContent = translations[lang].navProjects;
    document.getElementById("nav-contact").textContent = translations[lang].navContact;
    document.querySelector(".intro-text").textContent = translations[lang].introText;
    document.querySelector(".title-profession").textContent = translations[lang].titleProfession;

    // Traducción de "Trabajos"
    const projectsTitle = document.querySelector(".trabajos h2");
    if (projectsTitle) projectsTitle.textContent = translations[lang].projectsTitle;

    const categoryLinks = document.querySelectorAll(".trabajos nav a");
    const categories = Object.values(translations[lang].categories);
    categoryLinks.forEach((link, index) => {
        if (link) link.textContent = categories[index];
    });

    // Actualiza los textos de la sección "Trabajos"
    const projectItems = document.querySelectorAll(".trabajos .galeria .item");
    translations[lang].projects.forEach((project, index) => {
        const item = projectItems[index];
        if (item) {
            item.querySelector("h3").textContent = project.title;
            const tags = item.querySelectorAll("span");
            project.tags.forEach((tag, tagIndex) => {
                if (tags[tagIndex]) tags[tagIndex].textContent = tag;
            });
            const link = item.querySelector("a");
            if (link) link.textContent = project.linkText;
        }
    });

    // Actualiza los textos de la sección "Educación"
    const educationCards = document.querySelectorAll(".servicios .card");
    translations[lang].education.forEach((edu, index) => {
        const card = educationCards[index];
        if (card) {
            card.querySelector("h3").textContent = edu.title;
            card.querySelector("p").textContent = edu.description;
            const link = card.querySelector("a");
            if (link) {
                if (edu.linkText) {
                    link.textContent = edu.linkText;
                    link.style.display = "block";
                } else {
                    link.style.display = "none";
                }
            }
        }
    });

    // Traducción de "Contacto"
    const contactTitle = document.querySelector(".contacto h2");
    if (contactTitle) contactTitle.textContent = translations[lang].contactTitle;

    const contactInfo = document.querySelectorAll(".contacto .info");
    const contactLabels = Object.values(translations[lang].contactInfo);
    contactInfo.forEach((info, index) => {
        const label = info.querySelector("h3");
        if (label) label.textContent = contactLabels[index];
    });

    // Traducción de las etiquetas del formulario
    const formLabels = translations[lang].formLabels;

    const nameLabel = document.querySelector("label[for='from_name']");
    if (nameLabel) nameLabel.textContent = formLabels.name;

    const emailLabel = document.querySelector("label[for='reply_to']");
    if (emailLabel) emailLabel.textContent = formLabels.email;

    const messageLabel = document.querySelector("label[for='message']");
    if (messageLabel) messageLabel.textContent = formLabels.message;

    // Traducción del botón de envío
    const submitButton = document.querySelector(".form-submit-btn");
    if (submitButton) submitButton.textContent = formLabels.submit;

    // Actualiza el botón "Descargar CV"
    const downloadBtn = document.querySelector(".inicio .col button");
    if (downloadBtn) downloadBtn.textContent = translations[lang].btnDownload;
};

//Descarga CV
function descargarCV() {
    let url, nombreArchivo;

    if (currentLanguage === 'es') {
        // Ruta del archivo en español
        url = './CV Gastón Rodriguez Consoli.pdf';
        nombreArchivo = 'CV Gastón Rodriguez Consoli';
    } else if (currentLanguage === 'en') {
        // Ruta del archivo en inglés
        url = './CV Gastón Rodriguez Consoli English.pdf';
        nombreArchivo = 'CV Gastón Rodriguez Consoli English';
    } else {
        console.error('Idioma no válido');
        return;
    }

    const link = document.createElement('a');
    link.href = url;
    link.download = nombreArchivo;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

//Función para filtrar las categorías de los trabajos
function verCategoria(cat){
    const items = document.getElementsByClassName("item");
    for(let i=0; i < items.length;i++){
        items[i].style.display = "none";
    }

    const itemCat = document.getElementsByClassName(cat);
    for(let i = 0; i<itemCat.length;i++){
        itemCat[i].style.display = "block";
    }

    const links = document.querySelectorAll(".trabajos nav a");
    links[0].className = "";
    links[1].className = "";
    links[2].className = "";
    links[3].className = "";
    links[4].className = "";

    const itemSeleccionado = document.getElementById(cat);
    itemSeleccionado.className = "borde";
}

//función que muestra el menu responsive{
function responsiveMenu(){
    let x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";

        //creamos el elemento que cierra el menu
        let span = document.createElement("span");
        span.innerHTML = "X";
        span.className = "cerrar-menu";
        document.getElementById("nav").appendChild(span);

        //quitamos el boton eliminar cuando se hace click sobre este
        span.onclick = function(){
            x.className = "";
            span.remove();
        }
    }else{
        x.className="";
    }
}

//Este codigo es para agregar una función a cada links del menu
//cuando se presione en cualquier de los links del menu debe desaparecer el menu
const links = document.querySelectorAll("#nav a");
for(i=0; i < links.length;i++){
    links[i].onclick = function(){
        var x = document.getElementById("nav");
        x.className = "";

        //removemos el boton eliminar
        btnEliminar = document.querySelector("#nav span");
        btnEliminar.remove();
    }
}

// Agregar función de envío de correo
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();
    const btn = document.querySelector('input[type="submit"]');
    btn.value = 'Enviando...';

    const serviceID = 'GJRC23'; // Reemplaza con tu ID de servicio
    const templateID = '123456'; // Reemplaza con tu ID de plantilla

    const form = this;
    const formData = new FormData(form);

    emailjs.sendForm(serviceID, templateID, form)
        .then((response) => {
            btn.value = 'Enviar';
            alert('¡Enviado!');
            console.log('SUCCESS!', response.status, response.text);
        }, (error) => {
            btn.value = 'Enviar';
            alert('Error al enviar el correo: ' + error);
            console.log('FAILED...', error);
        });
});
