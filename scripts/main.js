const settings = {
    mainButton: Array.from(document.querySelectorAll('.project__button')),
    popup: document.querySelector('.popup'),
    popupBlock: document.querySelector('.popup__block'),
    popupName: document.querySelector('.popup__name'),
    popupDescription: document.querySelector('.popup__description'),
    popupGallery: document.querySelector('.popup__gallery'),
    popupButton: document.querySelector('.popup__button'),
    virage: {
        name: 'VIRAGE (terra democratia)',
        year: '[2020]',
        description: ['2121 year', 'As a result of climatic changes, an exotic piece of land with suitable living conditions for permanent residence was formed in the Arctic. Specialists and scientists are coming from all over the world to study this phenomenon. International expeditions quickly discover vast deposits of resources and even previously unseen and unique flora and fauna. News about this land captures the imagination of people around the world.', 'At the initiative of the UN, this territory is entrusted under international jurisdiction, where pioneers from all over the globe are rushing. The settlers — strong-minded dreamers and creators — want to transform this still uninhabited and harsh land into a blooming garden. A new country is named — VIRAGE.', 'Rejecting past contradictions, the inhabitants of the newly formed state unite in a unanimous desire to create an exemplary society. The number of settlements is growing rapidly: industrial complexes, modern residential neighborhoods, domed greenhouse parks, research and business centers, healthcare and educational infrastructure are being built. The construction of a thermonuclear power plant is being launched. Investment and support comes from everywhere. To decide how to dispose of these funds and to work out a course of development is entrusted to the newly formed government. For this purpose, the Parliament of the Turn announces the holding of the first presidential elections.'],
        images: ['./images/__virage_1.jpg', './images/__virage_2.jpg', './images/__virage_3.jpg', './images/__virage_4.jpg', './images/__virage_5.jpg']
    },
    gasOdyssey: {
        name: 'GAS ODYSSEY',
        year: '[2022]',
        description: ['The Aurora Starship travels through the vast expanse of space to replenish its fuel supplies and return home. Players take on the role of engineers in the reactor compartment and must ensure its safe operation. Their duties include monitoring the purity of the air in the compartment and the strength of the engine flame, as well as its timely extinction during braking and refueling. The job of an engineer requires a broad knowledge of safety, fuel properties, and equipment handling. Handling a gas stove - also known as a reactor engine - imposes a huge responsibility on the lives of the entire crew of the ship, so only the best engineers are allowed to work in the field. This game will allow young professionals to prove their readiness.'],
        images: ['./images/__go_1.jpg', './images/__go_2.jpg', './images/__go_3.jpg', './images/__go_4.jpg']
    },
    avangard: {
        name: 'AVANGARD',
        year: '[2022]',
        description: ['A rebus is presented to your view, in which it is necessary to assume the obligations of the administrator of occult events in the otherworld of the Black Square. To achieve exceptional heights, in this adventure it will be necessary to ensure the work of your troupe and maintain the fragile life of your experimental workshop. You will test your creativity and materialize the dimension according to your own will. A voyage into the unknown awaits.'],
        images: ['./images/__avangard0.JPG', './images/__avangard1.jpg', './images/__avangard2.JPG', './images/__avangard3.JPG', './images/__avangard4.JPG', './images/__avangard5.JPG']
    }
}

const openPopup = (settings) => {
    settings.mainButton.forEach((button) => {
        button.addEventListener('click', (event) => {
            settings.popup.classList.add('popup_opened')
            if (event.target.id === 'virage') {
                settings.popupName.textContent = settings.virage.name + ' ' + settings.virage.year;
                settings.virage.description.forEach((item) => {
                    const paragraph = document.createElement('p');
                    paragraph.classList.add('text');
                    paragraph.classList.add('popup__description');
                    paragraph.textContent = item;
                    settings.popupBlock.append(paragraph);
                })
                settings.virage.images.forEach((item) => {
                    const image = document.createElement('img');
                    image.classList.add('popup__image');
                    image.setAttribute('src', item);
                    settings.popupGallery.append(image);
                })
            } else if (event.target.id === 'gasOdyssey') {
                settings.popupName.textContent = settings.gasOdyssey.name + ' ' + settings.gasOdyssey.year;
                settings.gasOdyssey.description.forEach((text) => {
                    const paragraph = document.createElement('p');
                    paragraph.classList.add('text');
                    paragraph.classList.add('popup__description');
                    paragraph.textContent = text;
                    settings.popupBlock.append(paragraph);
                })
                settings.gasOdyssey.images.forEach((item) => {
                    const image = document.createElement('img');
                    image.classList.add('popup__image');
                    image.setAttribute('src', item);
                    settings.popupGallery.append(image);
                })
            } else if (event.target.id === 'avangard') {
                settings.popupName.textContent = settings.avangard.name + ' ' + settings.avangard.year;
                settings.avangard.description.forEach((text) => {
                    const paragraph = document.createElement('p');
                    paragraph.classList.add('text');
                    paragraph.classList.add('popup__description');
                    paragraph.textContent = text;
                    settings.popupBlock.append(paragraph);
                })
                settings.avangard.images.forEach((item) => {
                    const image = document.createElement('img');
                    image.classList.add('popup__image');
                    image.setAttribute('src', item);
                    settings.popupGallery.append(image);
                })
            }      
        })
    })
    scrollPopup(settings);
    closePopup(settings);
}

const closePopupFunction = () => {
    settings.popup.classList.remove('popup_opened')
    const paragraphs = Array.from(document.querySelectorAll('.popup__description'));
    paragraphs.forEach((item) => {
        item.remove();
    })
    const images = Array.from(document.querySelectorAll('.popup__image'));
    images.forEach((item) => {
        item.remove();
    })
}

const scrollPopup = (settings) => {
    document.addEventListener('keydown', (event) => {
        if (event.keyCode === 40) {
            settings.popupBlock.scrollTop += 30;
        } else if (event.keyCode === 38) {
            settings.popupBlock.scrollTop -= 30;            
        };
    })
}

const closePopup = (settings) => {
    settings.popupButton.addEventListener('click', closePopupFunction)
    document.addEventListener('keydown', (event) => {
        if (event.keyCode === 81) {
            closePopupFunction();
        }
    })
}

openPopup(settings);
