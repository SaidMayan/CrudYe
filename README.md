# CRUDYe

## Motivation/Application

Love 'Ye or hate 'Ye, you can't deny his hardwork and passion. In my humble opinion, he is a one of the most dynamic character-types of our generation... And so, for my CRUD app, I thought it would be a fun idea to document the many 'Kanyes types' that we've witnessed over the years. 

My database (crudye) will consist of two tables: one table (named 'kanye_types') will consist of four types: 'Old Kanye,' 'Straight from-the-Go Kanye,' 'So Kanye,' 'New kanye.' The keys to this table are id (SERIAL PRIMARY KEY), kanye_type (TEXT NOT NULL) and img_url(TEXT). 

The second table will hold instances of various Kanye types (aptly titled kanye_instances) and will have the following keys: id (SERIAL PRIMARY KEY), context (TEXT NOT NULL), img_url(TEXT) and kanye_types_id (INT REFERENCES kanye_types(id)), the last being the foreign key which links the two tables.

## User Story

The way the USER will be able to CRUD Kanye is as follows.

CREATE: The user will have the ability to create as many kanye_instances he/she can recall or imagine and will have the option the add them to one of the four Kanye_types: Old Kanye, Straight from-the-Go Kanye, So Kanye, New Kanye. For example, Kanye West famously interrupting TS's speech at the VMAs. I would write out the context of that instance as 'Kanye and Taylor Swift VMA incident' and assign that a kanye_type_id value of 3, because to me that instance was So Kanye (which will have id of 3 being the third insert).

READ/UPDATE/DELETE: For types, the user will have the ability to getAllKanyeTypes,  getOneKanyeType, or get getKanyeInstancesByType. Instances are where the user can flex their full CRUD muscles: getAllInstances, getOneInstance, createInstance, updateInstance and deleteInstance.

Sounds wacky? To our befuddlement, Kanye is Kanye. And mostly, we mostly all miss the Old Kanye.

# Applications used

- [x] HTML
- [x] CSS
- [x] JS
- [x] Express
- [x] PSQL

## WireFrame:

Wireframes will walk you through the 'views' set up:<br />
[Wireframes](images/CRUDYe-wireframe.jpg?raw=true "Wireframes")

Priority-Matrix:<br />
[Priority-Matrix](CRUDYe-Priority-Matrix.jpg?raw=true "Priority-Matrix")

## Time Management:

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |<br />
| Server | H |  >1hr | 1hr | 1hr |<br />
| Data | H | 2-3hrs | 2hrs | 2hrs |<br />
| Model | H |  2hrs | 2hrs | 2hrs |<br />
| Routes | H |  2hrs | 2hrs | 2hrs |<br />
| CSS | M |  3hrs+ | 2hrs | 2hrs |<br />

## MVP
- Get full CRUD set-up.
- CSS to make app look presentable.

## Post-MVP
- Implement newsApi to give you latest Kanye Headlines with images, so you'd be able to
add instances.
- Add more to the database to get a complete Kanye West Timeline.
- Get Auth register/login, which is currently a WIP.





