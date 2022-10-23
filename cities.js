//import elements
 const searchBttn = document.querySelector("#searchButton");
const searchInput= document.querySelector("#searchInputBox");
const dropdownCont= document.querySelector("#dropdownContent");

//cities
idArr = [
 {
  "name": "US",
  "id": 200
 },
 {
  "name": "Abilene ",
  "id": 212
 },
 {
  "name": "Sweetwater",
  "id": 212
 },
 {
  "name": "Albany",
  "id": 213
 },
 {
  "name": "Schenectady",
  "id": 213
 },
 {
  "name": "Troy",
  "id": 213
 },
 {
  "name": "Albuquerque",
  "id": 215
 },
 {
  "name": "Santa Fe",
  "id": 215
 },
 {
  "name": "Alexandria",
  "id": 216
 },
 {
  "name": "Alpena",
  "id": 217
 },
 {
  "name": "Amarillo",
  "id": 218
 },
 {
  "name": "Anchorage",
  "id": 219
 },
 {
  "name": "Atlanta",
  "id": 220
 },
 {
  "name": "Augusta",
  "id": 221
 },
 {
  "name": "Austin",
  "id": 222
 },
 {
  "name": "Bakersfield",
  "id": 223
 },
 {
  "name": "Baltimore",
  "id": 224
 },
 {
  "name": "Bangor",
  "id": 225
 },
 {
  "name": "Baton Rouge",
  "id": 226
 },
 {
  "name": "Beaumont",
  "id": 227
 },
 {
  "name": "Port Arthur",
  "id": 227
 },
 {
  "name": "Bend",
  "id": 228
 },
 {
  "name": "Billings",
  "id": 229
 },
 {
  "name": "Biloxi",
  "id": 230
 },
 {
  "name": "Gulfport",
  "id": 230
 },
 {
  "name": "Binghamton",
  "id": 231
 },
 {
  "name": "Birmingham",
  "id": 232
 },
 {
  "name": "Boise",
  "id": 234
 },
 {
  "name": "Boston",
  "id": 235
 },
 {
  "name": "Bowling Green",
  "id": 236
 },
 {
  "name": "Buffalo",
  "id": 237
 },
 {
  "name": "Burlington ",
  "id": 238
 },
 {
  "name": "Plattsburgh",
  "id": 238
 },
 {
  "name": "Charleston",
  "id": 243
 },
 {
  "name": "Charlotte",
  "id": 245
 },
 {
  "name": "Charlottesville",
  "id": 246
 },
 {
  "name": "Chattanooga",
  "id": 247
 },
 {
  "name": "Cheyenne",
  "id": 248
 },
 {
  "name": "Chicago",
  "id": 249
 },
 {
  "name": "Chico",
  "id": 250
 },
 {
  "name": "Cincinnati",
  "id": 251
 },
 {
  "name": "Clarksburg",
  "id": 252
 },
 {
  "name": "Cleveland",
  "id": 253
 },
 {
  "name": "Colorado Springs",
  "id": 254
 },
 {
  "name": "Columbia",
  "id": 255
 },
 {
  "name": "Columbia",
  "id": 256
 },
 {
  "name": "Corpus Christi",
  "id": 260
 },
 {
  "name": "Dallas",
  "id": 261
 },
 {
  "name": "Davenport",
  "id": 262
 },
 {
  "name": "Dayton",
  "id": 263
 },
 {
  "name": "Denver",
  "id": 264
 },
 {
  "name": "Des Moines",
  "id": 265
 },
 {
  "name": "Detroit",
  "id": 266
 },
 {
  "name": "Dothan",
  "id": 267
 },
 {
  "name": "Duluth",
  "id": 268
 },
 {
  "name": "El Paso",
  "id": 269
 },
 {
  "name": "Elmira",
  "id": 270
 },
 {
  "name": "Erie",
  "id": 271
 },
 {
  "name": "Eugene",
  "id": 272
 },
 {
  "name": "Eureka",
  "id": 273
 },
 {
  "name": "Evansville",
  "id": 274
 },
 {
  "name": "Fairbanks",
  "id": 275
 },
 {
  "name": "Fargo",
  "id": 276
 },
 {
  "name": "Flint",
  "id": 277
 },
 {
  "name": "Florence",
  "id": 278
 },
 {
  "name": "Fort Myers",
  "id": 279
 },
 {
  "name": "Fort Smith",
  "id": 280
 },
 {
  "name": "Fort Wayne",
  "id": 281
 },
 {
  "name": "Fresno",
  "id": 282
 },
 {
  "name": "Gainesville",
  "id": 283
 },
 {
  "name": "Glendive",
  "id": 284
 },
 {
  "name": "Grand Rapids",
  "id": 286
 },
 {
  "name": "Great Falls",
  "id": 287
 },
 {
  "name": "Green Bay",
  "id": 288
 },
 {
  "name": "Harrisonburg",
  "id": 295
 },
 {
  "name": "New Haven",
  "id": 296
 },
 {
  "name": "Helena",
  "id": 298
 },
 {
  "name": "Honolulu",
  "id": 299
 },
 {
  "name": "Houston",
  "id": 300
 },
 {
  "name": "Indianapolis",
  "id": 303
 },
 {
  "name": "Jackson",
  "id": 304
 },
 {
  "name": "Jacksonville",
  "id": 306
 },
 {
  "name": "Jonesboro",
  "id": 308
 },
 {
  "name": "Juneau",
  "id": 310
 },
 {
  "name": "Kansas City",
  "id": 311
 },
 {
  "name": "Knoxville",
  "id": 312
 },
 {
  "name": "Lafayette",
  "id": 314
 },
 {
  "name": "Lake Charles",
  "id": 316
 },
 {
  "name": "Lansing",
  "id": 317
 },
 {
  "name": "Laredo",
  "id": 318
 },
 {
  "name": "Las Vegas",
  "id": 319
 },
 {
  "name": "Lexington",
  "id": 320
 },
 {
  "name": "Lima",
  "id": 321
 },
 {
  "name": "Los Angeles",
  "id": 324
 },
 {
  "name": "Louisville",
  "id": 325
 },
 {
  "name": "Lubbock",
  "id": 326
 },
 {
  "name": "Macon",
  "id": 327
 },
 {
  "name": "Madison",
  "id": 328
 },
 {
  "name": "Mankato",
  "id": 329
 },
 {
  "name": "Marquette",
  "id": 330
 },
 {
  "name": "Memphis",
  "id": 332
 },
 {
  "name": "Meridian",
  "id": 333
 },
 {
  "name": "Miami",
  "id": 334
 },
 {
  "name": "Milwaukee",
  "id": 335
 },
 {
  "name": "Minneapolis",
  "id": 336
 },
 {
  "name": "Missoula",
  "id": 338
 },
 {
  "name": "Monterey",
  "id": 341
 },
 {
  "name": "Montgomery",
  "id": 342
 },
 {
  "name": "Nashville",
  "id": 343
 },
 {
  "name": "New Orleans",
  "id": 344
 },
 {
  "name": "New York",
  "id": 345
 },
 {
  "name": "North Platte",
  "id": 347
 },
 {
  "name": "Oklahoma City",
  "id": 349
 },
 {
  "name": "Omaha",
  "id": 350
 },
 {
  "name": "Orlando",
  "id": 351
 },
 {
  "name": "Palm Springs",
  "id": 354
 },
 {
  "name": "Panama City",
  "id": 355
 },
 {
  "name": "Parkersburg",
  "id": 356
 },
 {
  "name": "Philadelphia",
  "id": 358
 },
 {
  "name": "Phoenix",
  "id": 359
 },
 {
  "name": "Pittsburgh",
  "id": 360
 },
 {
  "name": "Portland",
  "id": 362
 },
 {
  "name": "Presque Isle",
  "id": 363
 },
 {
  "name": "Providence",
  "id": 364
 },
 {
  "name": "Raleigh",
  "id": 366
 },
 {
  "name": "Rapid City",
  "id": 367
 },
 {
  "name": "Reno",
  "id": 368
 },
 {
  "name": "Rochester",
  "id": 372
 },
 {
  "name": "Rockford",
  "id": 373
 },
 {
  "name": "Sacramento",
  "id": 374
 },
 {
  "name": "Saint Joseph",
  "id": 375
 },
 {
  "name": "Saint Louis",
  "id": 376
 },
 {
  "name": "Salisbury",
  "id": 377
 },
 {
  "name": "Salt Lake City",
  "id": 378
 },
 {
  "name": "San Angelo",
  "id": 379
 },
 {
  "name": "San Antonio",
  "id": 380
 },
 {
  "name": "San Diego",
  "id": 381
 },
 {
  "name": "San Francisco",
  "id": 382
 },
 {
  "name": "Santa Barbara",
  "id": 383
 },
 {
  "name": "Savannah",
  "id": 384
 },
 {
  "name": "Seattle",
  "id": 385
 },
 {
  "name": "Shreveport",
  "id": 387
 },
 {
  "name": "Sioux City",
  "id": 388
 },
 {
  "name": "Sioux Falls",
  "id": 389
 },
 {
  "name": "Spokane",
  "id": 391
 },
 {
  "name": "Springfield",
  "id": 393
 },
 {
  "name": "Syracuse",
  "id": 394
 },
 {
  "name": "Tampa",
  "id": 396
 },
 {
  "name": "Terre Haute",
  "id": 397
 },
 {
  "name": "Toledo",
  "id": 398
 },
 {
  "name": "Topeka",
  "id": 399
 },
 {
  "name": "Tucson",
  "id": 402
 },
 {
  "name": "Tulsa",
  "id": 403
 },
 {
  "name": "Twin Falls",
  "id": 404
 },
 {
  "name": "Utica",
  "id": 406
 },
 {
  "name": "Victoria",
  "id": 407
 },
 {
  "name": "Waco",
  "id": 408
 },
 {
  "name": "Washington DC",
  "id": 409
 },
 {
  "name": "Watertown",
  "id": 410
 },
 {
  "name": "West Palm Beach",
  "id": 412
 },
 {
  "name": "Wichita",
  "id": 414
 },
 {
  "name": "Wichita Falls",
  "id": 415
 },
 {
  "name": "Scranton",
  "id": 416
 },
 {
  "name": "Wilmington",
  "id": 417
 },
 {
  "name": "Youngstown",
  "id": 419
 },
 {
  "name": "El Centro",
  "id": 420
 },
 {
  "name": "Zanesville",
  "id": 421
 },
 {
  "name": "Northern New Jersey",
  "id": 422
 }
];


//create map
let idMap = new Map();
idArr.forEach(ident => {
idMap.set(ident.name.toLowerCase(), ident.id);
dropdownCont.innerHTML += `<a>${ident.name}</a>`
});

const dropdownItems=document.querySelectorAll("#dropdownContent a");

//add event listener for each click
dropdownItems.forEach(item =>{
item.addEventListener("click", (e)=>{
searchInput.value = item.innerHTML;
dropdownCont.classList.add("hidden");
searchBttn.click();
})           
});

//display the dropdown
searchInput.addEventListener("keypress", e=>{
    dropdownCont.classList.remove("hidden");
  });

//update the boxes
function filterFunction() {
 //display results
let input, filter, ul, li, a, i;
input = document.getElementById("searchInputBox");
filter = input.value.toUpperCase();
div = document.getElementById("myDropdown");
a = div.getElementsByTagName("a");
let count = 0;
for (i = 0; i < a.length; i++) {
 txtValue = a[i].textContent || a[i].innerText;
if (txtValue.toUpperCase().indexOf(filter) > -1 && count<=5) {
  a[i].style.display = "";
  count++;
 } else {
    a[i].style.display = "none";
    }
   }
 }