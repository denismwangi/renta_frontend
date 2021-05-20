# pull official base image
FROM node:10-alpine as build-step
# set working directory

# set the working dir for container
WORKDIR /renta_frontend

# copy the json file first
COPY ./package.json /renta_frontend

# install npm dependencies
RUN npm install

# copy other project files
COPY . .



# start app
CMD ["npm", "start"]