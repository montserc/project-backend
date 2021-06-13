#!/bin/sh
docker exec -it event-site-db_mongo_1 \
  mongo -u admin -p fullstack --authenticationDatabase admin eventsite
