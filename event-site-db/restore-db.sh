#!/bin/sh

for collection in members events; do
  docker exec -it event-site-db_mongo_1 mongoimport --type json --file /json/$collection.json --jsonArray -u admin -p fullstack --db eventsite --collection $collection --drop --authenticationDatabase admin
done		  