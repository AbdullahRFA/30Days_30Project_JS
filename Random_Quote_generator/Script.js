const api_url= "https://api.quotable.io/random";

async function get_quote(url){
    const response = await fetch(url);
    const data =await response.json();
    console.log(data);
}

get_quote(api_url);