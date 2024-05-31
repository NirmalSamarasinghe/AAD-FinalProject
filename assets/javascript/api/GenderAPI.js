export class GenderAPI{

    saveGender(gen_model) {
        return new Promise((resolve, reject) => {
            const http = new XMLHttpRequest();
            http.onreadystatechange = () => {
                if (http.readyState === 4) {
                    if (http.status === 200) {
                        resolve(http.responseText);
                    } else {
                        reject(new Error(`HTTP request failed with status ${http.status}`));
                    }
                }
            }
            http.open("POST", "http://localhost:9090/ShoeShop/api/v1/inset/saveGender", true);
            http.setRequestHeader("Content-Type","application/json");
            http.send(JSON.stringify(gen_model));
        });
    }

    getAllGender() {
        return new Promise((resolve,reject)=>{
            const http = new XMLHttpRequest();
            http.onreadystatechange = () => {
                if (http.readyState === 4) {
                    if (http.status === 200) {
                        resolve(http.responseText);
                    } else {
                        reject(new Error(`HTTP request failed with status ${http.status}`));
                    }
                }
            }
            http.open("GET", "http://localhost:9090/ShoeShop/api/v1/inset/getAllGenders", true);
            http.send();
        });
    }

    getGenderById(code) {
        return new Promise(function(resolve, reject) {
            const http = new XMLHttpRequest();
            const url = `http://localhost:9090/ShoeShop/api/v1/inset/Getgender/${code}`;

            http.onreadystatechange = () => {
                if (http.readyState === 4) {
                    if (http.status === 200) {
                        resolve(http.responseText);
                    } else {
                        reject(new Error(`HTTP request failed with status ${http.status}`));
                    }
                }
            };

            http.open("GET", url, true);
            http.send();
        });
    }

    updateGender(gen_model) {
        return new Promise((resolve, reject) => {
            const http = new XMLHttpRequest();
            http.onreadystatechange = () => {
                if (http.readyState === 4) {
                    if (http.status === 200) {
                        resolve(http.responseText);
                    } else {
                        reject(new Error(`HTTP request failed with status ${http.status}`));
                    }
                }
            }
            http.open("PATCH", "http://localhost:9090/ShoeShop/api/v1/inset/updateGender", true);
            http.setRequestHeader("Content-Type","application/json");
            http.send(JSON.stringify(gen_model));
        });
    }

    deleteGender(gender_code) {

    }
}