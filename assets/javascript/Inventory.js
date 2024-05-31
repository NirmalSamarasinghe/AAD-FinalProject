import {VarietyAPI} from "./api/VarietyAPI.js";
import {OccasionAPI} from "./api/OccasionAPI.js";
import {GenderAPI} from "./api/GenderAPI.js";
import {ModelVariety} from "./model/Model-Variety.js";
import {ModelOccasion} from "./model/Model-Occasion.js";
import {ModelGender} from "./model/Model-Gender.js";

const varietyAPI = new VarietyAPI();
const occasionAPI = new OccasionAPI();
const genderAPI = new GenderAPI();
const modelVariety = new ModelVariety();
const modelOccasion = new ModelOccasion();
const modelGender = new ModelGender();

const save_Gender_button = $('#saveGenderButton');
const update_Gender_button = $('#updateGenderButton');
const delete_Gender_button = $('#deleteGenderButton');

const save_Occasion_button = $('#saveOccasionButton');
const update_Occasion_button = $('#updateOccasionButton');
const delete_Occasion_button = $('#deleteOccasionButton');

const save_Variety_button = $('#saveVarietyButton');
const update_Variety_button = $('#updateVarietyButton');
const delete_Variety_button = $('#deleteVarietyButton');



save_Gender_button.on('click', (event) => {
    event.preventDefault()
    const gender_code = $('#genderCode').val();
    const gender_desc = $('#genderDesc').val();
    let  gen_model = new ModelGender();

    gen_model = {
        genderCode : gender_code,
        genderDesc : gender_desc
    }
    genderAPI.saveGender(gen_model).then(r =>{
        alert(`Success: ${r}`);
        loadGenders();
    });

})

update_Gender_button.on('click', () => {
    event.preventDefault();
    const gender_code = $('#genderCode').val();
    const gender_desc = $('#genderDesc').val();
    let  gen_model = new ModelGender();

    gen_model = {
        genderCode : gender_code,
        genderDesc : gender_desc
    }
    genderAPI.updateGender(gen_model).then(r =>{
        alert(`Success: ${r}`);
        loadGenders()
    }).catch(error => {
        alert(`Error: ${error}`);
    })
})

delete_Gender_button.on('click', () => {
    const gender_code = $('#genderCode').val();
    genderAPI.deleteGender(gender_code).then(r => {
        alert(`Success: ${r}`);
        loadGenders();
    });
})
function loadGenders(key) {
    genderAPI.getAllGender().then(data => {
            const genders = JSON.parse(data);
            const tableBody = $('#Gender-table tbody');
            tableBody.empty(); // Clear existing rows

            genders.forEach(gender => {
                const row = $('<tr></tr>');
                row.append(`<td>${gender.genderCode}</td>`);
                row.append(`<td>${gender.genderDesc}</td>`);
                tableBody.append(row);

                row.on('click', () => {
                    localStorage.setItem('selected_gender_code', gender.genderCode);
                    alert(`Selected Gender: ${gender.genderCode}`)
                    const code = localStorage.getItem('selected_gender_code', gender.genderCode);
                    searchByGenderID(code)
                });
            });
        })
        .catch(error => {
            console.error('Error loading genders:', error);
        });
}

function searchByGenderID(code) {
    genderAPI.getGenderById(code).then(r => {
        const search_gender_result = JSON.parse(r)
        const code = search_gender_result.genderCode;
        $('#genderCode').val(code);
        $('#genderDesc').val(search_gender_result.genderDesc);

        if ( $('#genderModal').modal('show')){
            $('#saveGenderButton').prop('disabled', true);
        }else {
            $('#saveGenderButton').prop('disabled', false);
        }

    })
}




save_Occasion_button.on('click', () => {
    event.preventDefault()
    const occasion_code = $('#OccasionCode').val();
    const occasion_desc = $('#OccasionDesc').val();
    let  occ_model = new ModelOccasion();

    occ_model = {
        occasionCode : occasion_code,
        occasionDesc : occasion_desc
    }
    occasionAPI.saveOccasion(occ_model).then(r =>{
        alert(`Success: ${r}`);
        loadOccasions();
    });
})

update_Occasion_button.on('click',() => {
    event.preventDefault();
    const occasion_code = $('#OccasionCode').val();
    const occasion_desc = $('#OccasionDesc').val();
    let  occ_model = new ModelOccasion();

    occ_model = {
        occasionCode : occasion_code,
        occasionDesc : occasion_desc
    }
    occasionAPI.updateOccasion(occ_model).then(r =>{
        alert(`Success: ${r}`);
    }).catch(error => {
        alert(`Error: ${error}`);
    })
})

delete_Occasion_button.on('click',() => {
    const occasion_code = $('#OccasionCode').val();
    occasionAPI.deleteOccasion(occasion_code).then(r => {
        alert(`Success: ${r}`);
        loadOccasions();
    });
})
function searchByOccasionID(code) {
    occasionAPI.getOccasionById(code).then(r => {
        const search_occasion_result = JSON.parse(r)
        console.log(r)
        const code = search_occasion_result.occasionCode;
        $('#OccasionCode').val(code);
        $('#OccasionDesc').val(search_occasion_result.occasionDesc);

        if ( $('#OccasionModal').modal('show')){
            $('#saveOccasionButton').prop('disabled', true);
        }else {
            $('#saveOccasionButton').prop('disabled', false);
        }

    })

}

function loadOccasions() {
    occasionAPI.getAllOccasions().then(response =>{
        const occasions = JSON.parse(response)
        const tableBody = $('#Occasion-table tbody');

        console.log(occasions);
        occasions.forEach(occasions => {
            const row = $('<tr></tr>');
            row.append(`<td>${occasions.occasionCode}</td>`);
            row.append(`<td>${occasions.occasionDesc}</td>`);
            tableBody.append(row);

            row.on('click', () => {
                localStorage.setItem('selected_occasion_code', occasions.occasionCode);
                alert(`Selected Gender: ${occasions.occasionCode}`)
                const code = localStorage.getItem('selected_occasion_code', occasions.occasionCode);
                // searchByGenderID(code)
                searchByOccasionID(code)
            });
        });

    })
}




save_Variety_button.on('click', () => {
    event.preventDefault()
    const Variety_code = $('#VarietyCode').val();
    const Variety_desc = $('#VarietyDesc').val();
    let  vrr_model = new ModelVariety();

    vrr_model = {
        varietyCode : Variety_code,
        varietyDesc : Variety_desc
    }
    varietyAPI.saveVariety(vrr_model).then(r =>{
        alert(`Success: ${r}`);
        loadVarietys();
    });
})

update_Variety_button.on('click',()=>{
    event.preventDefault();
    const Variety_code = $('#VarietyCode').val();
    const Variety_desc = $('#VarietyDesc').val();
    let  vrr_model = new ModelVariety();

    vrr_model = {
        varietyCode : Variety_code,
        varietyDesc : Variety_desc
    }
    varietyAPI.updateVariety(vrr_model).then(r =>{
        alert(`Success: ${r}`);
    }).catch(error => {
        alert(`Error: ${error}`);
    })
})

delete_Variety_button.on('click', () =>{
    const Variety_code = $('#VarietyCode').val();
    varietyAPI.deleteVariety(Variety_code).then(r => {
        alert(`Success: ${r}`);
        loadVarietys();
    });
})

function loadVarietys() {
    varietyAPI.getVarieties().then(response => {
        const varieties = JSON.parse(response)
        const tableBody = $('#Variety-table tbody');

        // console.log(varieties);
        varieties.forEach(varieties => {
            const row = $('<tr></tr>');
            row.append(`<td>${varieties.varietyCode}</td>`);
            row.append(`<td>${varieties.varietyDesc}</td>`);
            tableBody.append(row);

            row.on('click', (key) => {
                localStorage.setItem('selected_variety_code', varieties.varietyCode);
                alert(`Selected Gender: ${varieties.varietyCode}`)
                const code = localStorage.getItem('selected_variety_code', varieties.varietyCode);
                searchByVarietyCode(code)
            });
        });
    })
}

function searchByVarietyCode(code) {
    varietyAPI.getVarietyById(code).then(r => {
        const search_variety_result = JSON.parse(r)
        console.log(r)
        const code = search_variety_result.varietyCode;
        $('#VarietyCode').val(code);
        $('#VarietyDesc').val(search_variety_result.varietyDesc);

        if ( $('#VarietyModal').modal('show')){
            $('#saveVarietyButton').prop('disabled', true);
        }else {
            $('#saveVarietyButton').prop('disabled', false);
        }

    })
}

$(document).ready(() => {
    loadGenders();
    loadOccasions();
    loadVarietys();
});