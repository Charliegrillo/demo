// --------------------- Created By InCoder ---------------------
let customInput = document.querySelector('.customInput')
selectedData = document.querySelector('.selectedData')
searchInput = document.querySelector('.searchInput input')
ul = document.querySelector('.options ul')
customInputContainer = document.querySelector('.customInputContainer')

window.addEventListener('click', (e) => {
    if (document.querySelector('.searchInput').contains(e.target)) {
        document.querySelector('.searchInput').classList.add('focus')
    } else {
        document.querySelector('.searchInput').classList.remove('focus')
    }
})


async function getCompanies(){
    return await fetch('/json')
    .then(res => res.json())
    .then((data) => data.maincompanies);    
}
getCompanies().then(function(companies){
    let countriesLength = companies.length

    for (let i = 0; i < countriesLength; i++) {
        let country = companies[i]["name"]
        const input = document.createElement("input");
        input.name="radioInput";
        input.type="radio";
        const li = document.createElement("li");
        const countryName = document.createTextNode(country);
        li.appendChild(input);
        li.appendChild(countryName);
        ul.appendChild(li);
    }

    customInput.addEventListener('click', () => {
        customInputContainer.classList.toggle('show')
    })
    
    document.querySelectorAll("li input").forEach(input => {
        input.addEventListener('click', (e) => {
            liSeleted = e.target.parentNode;
            liSeleted.click();
        })            
    });

    ul.querySelectorAll('li').forEach(li => {
        li.addEventListener('click', (e) => {
            let selectdItem = e.target.innerText
            selectedData.innerText = selectdItem
            
            for (const li of document.querySelectorAll("li.selected")) {
                li.classList.remove("selected");
            }
            e.target.classList.add('selected')
            customInputContainer.classList.toggle('show')
        })
    });
    
    searchInput.addEventListener('keyup', (e) => {
        let searchedVal = searchInput.value.toLowerCase()
        let searched_country = []
    
        searched_country = companies.filter(data => {
            return data["name"].toLocaleLowerCase().startsWith(searchedVal)
        }).map(data => {
            return `<li onClick="updateData(this)">${data["name"]}</li>`
        }).join('')

        ul.innerHTML = searched_country ? searched_country : "<div class='results'><span style='margin-top: 1rem;font-size: 1rem;'>Ningún dato encontrado.</span><button type='button' class='btn btn-primary' onClick='addCompanie()'><i class='fa fa-plus' aria-hidden='true'></i> Añadir</button></div>"
    })    
});

function updateData(data) {
    let selectedCountry = data.innerText
    selectedData.innerText = selectedCountry

    for (const li of document.querySelectorAll("li.selected")) {
        li.classList.remove("selected");
    }
    data.classList.add('selected')
    customInputContainer.classList.toggle('show')
    console.log(selectedCountry);
}

var simulateClick = function (elem) {
	// Create our event (with options)
	var evt = new MouseEvent('click', {
		bubbles: true,
		cancelable: true,
		view: window
	});
	// If cancelled, don't dispatch our event
	var canceled = !elem.dispatchEvent(evt);
};