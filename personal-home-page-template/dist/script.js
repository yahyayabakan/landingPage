var chapters;


chapters = ['ONCE UPON A TIME a girl named Cinderella lived with her stepmother and two stepsisters.', 'Poor Cinderella had to work hard all day long so the others could rest.', 'It was she who had to wake up each morning when it was still dark and cold to start the fire.', 'It was she who cooked the meals. It was she who kept the fire going. ', 'The poor girl could not stay clean, from all the ashes and cinders by the fire.'];


document.getElementById('start_reading').addEventListener('click', (event) => {
    let element_pages = document.getElementById('pages');
    let new_ul = document.createElement('ul');
    if (!!chapters.length) {
        let new_li = document.createElement('li');
        new_li.innerText = chapters.shift();

        new_ul.appendChild(new_li);
    }

    element_pages.appendChild(new_ul);

});
