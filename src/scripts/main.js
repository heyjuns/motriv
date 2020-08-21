import './highlight.js'
function Main() {

    const getConfiguration = async () => {
        const baseUrlConf = "https://api.themoviedb.org/3"
        const api_key = "337955e45e4d6a0ef3cc3614254edff3"
        const request = await fetch(`${baseUrlConf}/configuration?api_key=${api_key}`);
        const response = await request.json();
        return response;
    }
    const getMovie = async () => {
        const baseUrl = "https://api.themoviedb.org/4";
        const options = {
            headers: {
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMzc5NTVlNDVlNGQ2YTBlZjNjYzM2MTQyNTRlZGZmMyIsInN1YiI6IjVmM2JmNTYxYmU0YjM2MDAzNmI2NDk5NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.WUZ452ga4VIIujPWB7VOIEqhwkmcfqPMvvQllbMY9qY",
                "Content-Type": "application/json;charset=utf-8"
            }
        }
        const request = await fetch(`${baseUrl}/list/1`, options);
        const response = await request.json();
        return response;
    }
    const renderCategories = (resolvedValue) => {
        const basePathImg = `${resolvedValue[0].images.secure_base_url}/${resolvedValue[0].images.logo_sizes[2]}`
        const listBookElement = document.querySelector("#listMovie");
        listBookElement.innerHTML = "";
        const categories = resolvedValue[1].results;
        categories.forEach(category => {
            const filePath = `${basePathImg}/${category.poster_path}`
            listBookElement.innerHTML += `
                <div class="col-xl-3 col-md-4 text-center justify-content-center">
                    <img class="poster-button img-fluid" src="${filePath}"></img>
                </div>
            `;
        });
        const highlightElement = document.querySelector("high-light");
        highlightElement.selectedMovie = categories[0];
        const buttonEle = document.querySelectorAll(".poster-button");
        for (let i = 0; i < buttonEle.length; i++) {
            buttonEle[i].addEventListener("click", () => {
                highlightElement.selectedMovie = categories[i];
                scrollToTop();
            })
        }

    };
    const scrollToTop = () => {
        const c = document.documentElement.scrollTop;
        if (c > 0) {
            window.requestAnimationFrame(scrollToTop);
            window.scrollTo(0, c - c / 8);
        }
    };


    const promises = [getConfiguration(),getMovie()];
    Promise.all(promises).then(resolvedValue =>{
        console.log([resolvedValue]);
        renderCategories(resolvedValue);

    })
}

export default Main;