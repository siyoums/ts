
// add drug
const addDrugBtn = document.querySelector('#addDrugBtn');
const drugImg = document.querySelector('#addDrugImage');
const drugName = document.querySelector('#drugName');
const api = document.querySelector('#api');
const drugCategory = document.querySelector('#drugCategory');
const drugMake = document.querySelector('#manufacturer');
const expiryDate = document.querySelector('#expiryDate');
const drugDescription = document.querySelector('#drugDescription');
const drugPrice = document.querySelector('#drugPrice');
const drugStock = document.querySelector('#drugQuantity');


// search drugs
const searchDrugInput = document.querySelector('#searchDrugInput');
const suggestions = document.querySelector('#drugSearchSuggestions');

let parentDiv = document.getElementById('drugSearchSuggestions');



let timeoutRef;  // A reference to store the timeout

searchDrugInput.addEventListener('input', (e) => {
  const inputValue = e.target.value;

  function sendFetchReq() {
    fetch('http://localhost:3000/admin/searchD', {
      method: 'POST',
      headers: {'Content-Type': 'text/plain'},
      body: inputValue,
    })
        .then(res => res.json())
        .then(data => {
          parentDiv.innerHTML = '';  // Clear previous suggestions
          parentDiv.classList.remove('invisible');

          for (let i = 0; i < data.len;
               i++) {  // loop based on the number of items from the server
            let newA = document.createElement('a');
            newA.href = '#';
            newA.classList.add(
                'dropdown-item',
                'py-1',
                'text-dark',
            );
            newA.setAttribute('data-toggle', 'modal');
            newA.setAttribute('data-target', '#drugInfoModal');

            let newSmall = document.createElement('small');
            newSmall.innerText = `${data.searchRes[i].ProductName} ( ${
                data.searchRes[i].API} )  -  ${data.searchRes[i].Manufacturer}`;
            // + (i + 1);  // Here, (i + 1) is used to have unique suggestions

            newA.appendChild(newSmall);
            parentDiv.appendChild(newA);

            newA.addEventListener('click', (e) => {
              drugOverviewModal(
                  data.searchRes[i].ProductID, data.searchRes[i].ProductName,
                  data.searchRes[i].API, data.searchRes[i].category,
                  data.searchRes[i].Manufacturer, data.searchRes[i].ProductType,
                  data.searchRes[i].Description, data.searchRes[i].ExpiryDate,
                  data.searchRes[i].Price, data.searchRes[i].StockQuantity);
            })
          }
        })
        .catch(error => console.error('Fetch Error:', error));
  }

  if (inputValue.length >= 3) {
    // If there's a previous timeout set, clear it
    if (timeoutRef) {
      clearTimeout(timeoutRef);
    }

    // Set a new timeout
    timeoutRef = setTimeout(() => {
      sendFetchReq();
    }, 300);
  } else {
    parentDiv.classList.add('invisible');
  }
});

// drug overview
function drugOverviewModal(
    drugID, name, api, category, manufacturer, productType, description,
    expiryDate, price, qInStock) {
  const drugOverview = document.querySelector('#drugOverview');

  drugOverview.innerHTML =
      `<div class="modal fade" id="drugInfoModal" tabindex="-1" role="dialog" aria-labelledby="drugInfoModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
      <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="drugInfoModalLabel">Drug Information</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">
              <!-- Single Drug Information -->
              <table class="table">
                  <tbody>
                      <tr>
                          <th>ID</th>
                          <td>${drugID}</td>
                      </tr>
                      <tr>
                          <th>Name</th>
                          <td>${name}</td>
                      </tr>
                      <tr>
                          <th>API</th>
                          <td>${api}</td>
                      </tr>
                      <tr>
                          <th>Category</th>
                          <td>${category}</td>
                      </tr>
                      <tr>
                          <th>Manufacturer</th>
                          <td>${manufacturer}</td>
                      </tr>
                  </tbody>
              </table>
          </div>
          <div class="modal-footer">
              <button class="border border-dark rounded btn-light" data-toggle="modal" data-target="#inspectDrugModal">Inspect</button>
              <button class="border border-dark rounded btn-light" data-toggle="modal" data-target="#editDrugModal">Edit</button>
              <button class="border border-dark btn-danger rounded " data-toggle="modal" data-target="#deleteDrugModal">Delete</button>
              <button type="button" class="border border-dark rounded btn-light" data-dismiss="modal">Close</button>
          </div>
      </div>
  </div>
</div>`;

  // 2. Select the buttons
  let inspectBtn =
      drugOverview.querySelector('[data-target="#inspectDrugModal"]');
  let editBtn = drugOverview.querySelector('[data-target="#editDrugModal"]');
  let deleteBtn =
      drugOverview.querySelector('[data-target="#deleteDrugModal"]');
  let closeBtn = drugOverview.querySelector('[data-dismiss="modal"]');

  inspectBtn.addEventListener('click', (e) => {
    drugInspect(
        drugID, name, api, category, manufacturer, formatDate(expiryDate),
        description, price, qInStock);
  })

  // edit
  editBtn.addEventListener('click', (e) => {
    editDrugOverview(name, api, manufacturer, description, price, qInStock);
  })
}



// drug inspect
function drugInspect(
    drugID, name, api, category, manufacturer, expiryDate, description, price,
    qInStock) {
  const overviewDrugInspect = document.querySelector('#overviewDrugInspect');

  overviewDrugInspect.innerHTML =
      `<div class="modal fade" id="inspectDrugModal" tabindex="-1" role="dialog" aria-labelledby="inspectModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="inspectModalLabel">Drug Details</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">
              <div class="container-fluid">
                  <div class="row">
                      <!-- Image Section -->
                      <div class="col-md-4 mb-4">
                          <img id="inspectDrugImage" src="./node_assets/actilyse.jpg" alt="Drug Image" class="img-fluid rounded" style="max-height: 300px;">
                      </div>
                      <!-- Details Section -->
                      <div class="col-md-8">
                          <div class="row mb-2">
                              <div class="col-5 font-weight-bold">Drug ID:</div>
                              <div class="col-7" id="inspectDrugName">${
          drugID}</div>
                          </div>
                          <div class="row mb-2">
                              <div class="col-5 font-weight-bold">Drug Name:</div>
                              <div class="col-7" id="inspectDrugName">${
          name}</div>
                          </div>
                          <div class="row mb-2">
                              <div class="col-5 font-weight-bold">API:</div>
                              <div class="col-7" id="inspectApi">${api}</div>
                          </div>
                          <div class="row mb-2">
                              <div class="col-5 font-weight-bold">Category:</div>
                              <div class="col-7" id="inspectDrugCategory">${
          category}</div>
                          </div>
                          <div class="row mb-2">
                              <div class="col-5 font-weight-bold">Manufacturer:</div>
                              <div class="col-7" id="inspectManufacturer">${
          manufacturer}</div>
                          </div>
                          <div class="row mb-2">
                              <div class="col-5 font-weight-bold">Expiry Date:</div>
                              <div class="col-7" id="inspectExpiryDate">${
          expiryDate}</div>
                          </div>
                          <div class="row mb-2">
                              <div class="col-5 font-weight-bold">Description:</div>
                              <div class="col-7" id="inspectDescription">${
          description}</div>
                          </div>
                          <div class="row mb-2">
                              <div class="col-5 font-weight-bold">Price:</div>
                              <div class="col-7" id="inspectPrice">ETB ${
          price}</div>
                          </div>
                          <div class="row mb-2">
                              <div class="col-5 font-weight-bold">Quantity in Stock:</div>
                              <div class="col-7" id="inspectQuantity">${
          qInStock}</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div class="modal-footer">
              <button type="button" class="border border-dark rounded btn-light" data-dismiss="modal">Close</button>
          </div>
      </div>
  </div>
  
</div>`;
}

// Adding Drug
addDrugBtn.addEventListener('click', (e) => {
  const formData = {
    img: drugImg.value,
    ProductName: drugName.value,
    API: api.value,
    category: drugCategory.value,
    Manufacturer: drugMake.value,
    ExpiryDate: expiryDate.value,
    Description: drugDescription.value,
    Price: drugPrice.value,
    StockQuantity: drugStock.value,
    ProductType: 'Drug'
  }


                   fetch('https://ConflictNotify.com/admin/addD', {
                     method: 'POST',
                     headers: {'Content-Type': 'application/json'},
                     body: JSON.stringify(formData)
                   })
                       .then(res => res.json())
                       .then(data => {
                         function displayMsg(color, resp) {
                           const drugMsgContainer =
                               document.querySelector('#drugMsgContainer');
                           drugMsgContainer.innerText = `${resp}`;
                           drugMsgContainer.classList.add(`${color}`);
                           drugMsgContainer.classList.remove(`invisible`);

                           setTimeout(
                               () => {
                                 drugMsgContainer.classList.add('invisible');
                                 drugMsgContainer.classList.remove(`${color}`);
                               },

                               3000);
                         }

                         if (data.msg) {
                           displayMsg('text-success', data.msg);
                         }

                         if (data.err) {
                           displayMsg('text-danger', data.err);
                         }
                       })
                       .catch(error => {
                         console.error(error);
                       });
})



function editDrugOverview(
    drugName, api, manufacturer, description, price, qInStock) {
  const editDrugContainer = document.querySelector('#editDrugContainer');

  editDrugContainer.innerHTML =
      `<div class="modal fade" id="editDrugModal" tabindex="-1" role="dialog" aria-labelledby="editModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg" role="document">
      <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title" id="editModalLabel">Edit Item</h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">
              <form id="editDrugForm">
                  <!-- Image Section -->
                  <div class="form-group">
                      <label for="editDrugImage">Drug Image</label>
                      <input type="file" class="form-control-file" id="editDrugImage">
                  </div>
                  <!-- Details Section -->
                  <div class="form-group">
                      <label for="editDrugName">Drug Name</label>
                      <input type="text" class="form-control" id="editDrugName" placeholder="${
          drugName}" required>
                  </div>
                  <div class="form-group">
                      <label for="editApi">Acive Ingredient</label>
                      <input type="text" class="form-control" id="editApi" placeholder="${
          api}" required>
                  </div>
                  <div class="form-group">
                      <label for="editDrugCategory">Category</label>
                      <select class="form-control" id="editDrugCategory">
                          <!-- Categories can be dynamically populated here -->
                          <option value=""  selected>Select a category</option>
                            <option value="cns"  >Central Nervous System (CNS) Agents</option>
                            <option value="cardio"  >Cardiovascular Agents</option>
                            <option value="gi"  >Gastrointestinal (GI) Agents</option>
                            <option value="onco"  >Oncology (Onco) Agents</option>
                            <option value="antibio"  >Antibiotics/Antimicrobials</option>
                            <option value="endocrine"  >Endocrine Agents</option>
                            <option value="musculo"  >Musculoskeletal Agents</option>
                            <option value="respiratory"  >Respiratory Agents</option>
                            <option value="genito"  >Genitourinary Agents</option>
                            <option value="derma"  >Dermatologic Agents</option>
                            <option value="immuno"  >Immunological Agents</option>
                            <option value="hemato"  >Hematologic Agents</option>
                            <option value="ophthal"  >Ophthalmic Agents</option>
                            <option value="otic"  >Otic Agents</option>
                      </select>
                  </div>
                  <div class="form-group">
                      <label for="editManufacturer">Manufacturer</label>
                      <input type="text" class="form-control" id="editDrugManufacturer" placeholder="${
          manufacturer}" required>
                  </div>
                  <div class="form-group">
                      <label for="editExpiryDate">Expiry Date</label>
                      <input type="date" class="form-control" id="editExpiryDate" required>
                  </div>
                  <div class="form-group">
                      <label for="editDescription">Description</label>
                      <textarea class="form-control" id="editDrugDescription" rows="3" placeholder="${
          description}"></textarea>
                  </div>
                  <div class="form-group">
                      <label for="editPrice">Price</label>
                      <input type="number" class="form-control" id="editDrugPrice" placeholder="${
          price}" required>
                  </div>
                  <div class="form-group">
                      <label for="editQuantity">Quantity in Stock</label>
                      <input type="number" class="form-control" id="editDrugQuantity" placeholder="${
          qInStock}" required>
                  </div>
              </form>
          </div>
          <div class="modal-footer">
              <button type="button" class="border border-dark rounded btn-light" data-dismiss="modal">Close</button>
              <button type="button" class="border border-dark rounded btn-light" id="updateDrugBtn">Update Item</button>
          </div>
      </div>
  </div>
</div>`;

  // update btn
  let updateBtn = editDrugContainer.querySelector('#updateDrugBtn');

  updateBtn.addEventListener('click', (e) => {
    const drugImg = editDrugContainer.querySelector('#editDrugImage');
    const drugName = editDrugContainer.querySelector('#editDrugName');
    const api = editDrugContainer.querySelector('#editApi');
    const drugCategory = editDrugContainer.querySelector('#editDrugCategory');
    const drugMake = editDrugContainer.querySelector('#editDrugManufacturer');
    const expiryDate = editDrugContainer.querySelector('#editExpiryDate');
    const drugDescription =
        editDrugContainer.querySelector('#editDrugDescription');
    const drugPrice = editDrugContainer.querySelector('#editDrugPrice');
    const drugStock = editDrugContainer.querySelector('#editDrugQuantity');


    const formData = {
      img: drugImg.value,
      ProductName: drugName.value,
      API: api.value,
      category: drugCategory.value,
      Manufacturer: drugMake.value,
      ExpiryDate: expiryDate.value,
      Description: drugDescription.value,
      Price: drugPrice.value,
      StockQuantity: drugStock.value,
      ProductType: 'Drug'
    }

                     console.log(formData);
  })
}



function formatDate(isoString) {
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];

  const dateObj = new Date(isoString);
  const day = dateObj.getUTCDate();
  const month = months[dateObj.getUTCMonth()];
  const year = dateObj.getUTCFullYear();

  return `${month} ${day}, ${year}`;
}
