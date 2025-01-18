import {connectToDatabase, disconnectToDatabase, databaseType} from './utils/database.mjs';
import {getDataFromApi} from './utils/api.js';

connectToDatabase("my-database");
disconnectToDatabase("my-database");
getDataFromApi();
console.log(databaseType.userType);